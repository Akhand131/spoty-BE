const twilio = require('twilio');
const dotenv = require('dotenv');
const {contractQAFlow} = require('../genai/flows/contract');
const {transcribeAudio} = require('../utils/transcribeAudio');
const generateAudioResponse = require('../utils/generateAudioResponse');

dotenv.config();


const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_WHATSAPP_NUMBER
} = process.env;

class WhatsAppService {
    constructor() {
        if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_WHATSAPP_NUMBER) {
            throw new Error('Missing Twilio credentials in environment variables');
        }
        this.accountSid = TWILIO_ACCOUNT_SID;
        this.authToken = TWILIO_AUTH_TOKEN;
        this.fromNumber = TWILIO_WHATSAPP_NUMBER; 
        this.client = twilio(this.accountSid, this.authToken);
        this.textResponseInCaseOfAudio = "Sorry, I could not process your audio message. Please try sending a text message.";
    }

    async sendRegistrationConfirmation(playerPhoneNumber, playerName, tournamentDetails) {
        try {
            // Format the phone number for WhatsApp API (must include "whatsapp:" prefix)
            const formattedPhoneNumber = `whatsapp:${playerPhoneNumber}`;

            // Create the message
            const message = await this.client.messages.create({
                body: `Hi ${playerName}! Your registration for ${tournamentDetails.name} has been confirmed. Tournament details:\n- Date: ${tournamentDetails.date}\n- Time: ${tournamentDetails.time}\n- Venue: ${tournamentDetails.venue}\n\nWe look forward to seeing you!`,
                from: this.fromNumber,
                to: formattedPhoneNumber
            });

            console.log(`WhatsApp message sent with SID: ${message.sid}`);
            return { success: true, messageSid: message.sid };
        } catch (error) {
            console.error('Error sending WhatsApp message:', error);
            return { success: false, error: error.message };
        }
    }
    
    async handleIncomingMessage(body, from, mediaUrl= null) {
        try {
            console.log('body', body);
            console.log('from', from);
            let messageBody = body.toLowerCase().trim();

            // Handle audio message
            if (mediaUrl) {
                const audioResult = await this._handleAudioMessage(mediaUrl, from);
                if (!audioResult.success) return audioResult;
                messageBody = audioResult.transcribedText;
                console.log('messageBody', messageBody);
                this.textResponseInCaseOfAudio =  messageBody;
            }

            let responseMessage = '';
            if (this._isContractRelatedQuestion(messageBody)) {

                const contractData = this._getDefaultContractData();
                const qaResult = await contractQAFlow({
                    contractData: contractData,
                    userQuestion: messageBody
                });
    
                responseMessage = qaResult.answer;
            
                // Truncate if too long(WhapsApp limit 1600 characters)
                if (responseMessage.length > 1400) {
                    responseMessage = responseMessage.substring(0, 1400) + '...';
                }
            } else {
                responseMessage = this._handleKeywordBasedResponse(messageBody);
            }

            // if (isAudioMessage) {
            //     const contractData = this._getDefaultContractData();
            //     const audioUrl = await generateAudioResponse(this.textResponseInCaseOfAudio + "\n " + JSON.stringify(contractData));
            //     const response = await this.client.messages.create({
            //         body:  this.textResponseInCaseOfAudio ||  responseMessage, // Also send text for backup
            //         mediaUrl: [audioUrl],
            //         from: this.fromNumber,
            //         to: from
            //     });
            //     return { success: true, messageSid: response.sid };
            // }

            const response = await this.client.messages.create({
                body: responseMessage,
                from: this.fromNumber,
                to: from
            });

            return { success: true, messageSid: response.sid };
        } catch (error) {
            console.error('Error handling incoming message:', error);
            return { success: false, error: error.message };
        }
    }

    async _handleAudioMessage(mediaUrl, from) {
        try {
          const transcribedText = await transcribeAudio(mediaUrl);
          console.log('Transcribed audio:', transcribedText);
          return { success: true, transcribedText };
        } catch (error) {
          console.error('Error transcribing audio:', error);
          await this.sendMessage(from, 'Sorry, I could not process your audio message. Please try sending a text message.');
          return { success: false };
        }
    }

    _isContractRelatedQuestion(message) {
        const keywords = [
          'contract', 'agreement', 'confidential', 'terminate',
          'dispute', 'party', 'jurisdiction', 'effective',
          'duration', 'nda', '?'
        ];
        return keywords.some(keyword => message.includes(keyword));
    }

    _getDefaultContractData() {
        return {
            contractType: 'Non-Disclosure Agreement (NDA)',
            parties: ['Spotdraft Technologies Pvt. Ltd.', 'Ankush Mehra'],
            jurisdiction: 'Bengaluru, Karnataka, India',
            effectiveDate: '2024-01-15',
            termDuration: '3 years',
            specialTerms: [
              'The NDA is effective for a period of 3 years from the effective date.',
              'All proprietary information disclosed during discussions shall remain confidential.',
              'Confidential information includes but is not limited to product designs, source code, business plans, customer data, and pricing strategies.',
              'No party shall disclose the information to third parties without written consent.',
              'The obligation to maintain confidentiality survives the termination of this agreement.',
              'Either party may terminate this agreement with 15 days written notice.',
              'The recipient party must return or destroy all confidential materials upon termination.',
              'Any disputes shall be resolved under the Arbitration and Conciliation Act, 1996.',
              'Upon expiration of the initial term, this agreement shall automatically renew for successive one-year terms unless either party provides written notice of non-renewal at least 30 days prior to the end of the then-current term.',
              'All obligations under this agreement shall be binding upon the successors and permitted assigns of the parties.'
            ],
            terminationClause: 'Either party may terminate with 15 days written notice.',
            disputeResolution: 'Arbitration and Conciliation Act, 1996',
            confidentialityPeriod: 'Survives termination of agreement',
            renewalClause: 'This agreement shall automatically renew for additional one-year periods unless either party notifies the other in writing of its intent not to renew at least 30 days before the end of the current term.'
          }           
    }

    _handleKeywordBasedResponse(message) {
        if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
          return "Hello! Welcome to SpotDraft’s contract assistant. How can I help you with your legal contracts today?";
        } else if (lowerMessage.includes('draft') || lowerMessage.includes('create')) {
          return 'To draft a new legal contract, please share the contract type and any key details. I’ll guide you through the process.';
        } else if (lowerMessage.includes('review')) {
          return 'To review a contract, please upload the document or paste the text here. I’ll help you analyze it.';
        } else if (lowerMessage.includes('help')) {
          return 'Available commands:\n- "draft" or "create" - Start a new contract draft\n- "review" - Get help analyzing a contract\n- "clauses" - View standard clause templates\n- "help" - Show this menu';
        } else if (lowerMessage.includes('clauses') || lowerMessage.includes('templates')) {
          return 'Popular clause templates:\n1. Confidentiality Clause\n2. Termination Clause\n3. Payment Terms\n4. Governing Law\nLet me know if you’d like to insert or modify one.';
        } else {
            return 'Thanks for your message! Reply with "help" to see what I can do with legal contracts.';
        }
    }

}

module.exports = new WhatsAppService();

