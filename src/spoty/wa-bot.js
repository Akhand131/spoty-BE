const { Router } = require('express');
const whatsappService = require('./service/whatsappService');

class WaSpotyController {
  constructor() {
    this.router = Router();

    this.configureRoutes();
  }

  configureRoutes() {
    this.router.get('/register',this.testWAmessage);
    this.router.post('/whatsapp/webhook', this.webhookController); 
  }

  testWAmessage = async (req, res) => {
    try {
        // Send WhatsApp confirmation
        const tournamentDetails = {
            name: "Tournament Name",
            date: "2023-10-01",
            time: "10:00 AM",
            venue: "Stadium Name"
        };

        console.log("Sending WhatsApp message...");

        const whatsappResult = await whatsappService.sendRegistrationConfirmation(
            '+918178986672',
            "Ankush Mehra baddy",
            tournamentDetails
        );

        return res.status(201).json({
            success: true,
            message: 'Registration successful',
            whatsappDelivered: whatsappResult.success,
        });
    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({
            success: false,
            message: 'Registration failed',
            error: error.message
        });
    }
  }

  webhookController = async (req, res) => {
    try {
        const { Body, From, MediaUrl0, MediaContentType0, NumMedia } = req.body;

        console.log('Incoming message:', {
            body: Body,
            from: From,
            hasMedia: NumMedia > 0,
            mediaType: MediaContentType0,
            MediaUrl0:MediaUrl0
        });

        const isAudio = NumMedia > 0 && 
        MediaContentType0 && 
        MediaContentType0.startsWith('audio/');


        let mediaUrl = null;
        if (isAudio) {
            mediaUrl = MediaUrl0;
        }
        
        // Handle the incoming message`
        const result = await whatsappService.handleIncomingMessage(
            Body, 
            From, 
            mediaUrl
        );
        
        if (result.success) {
            console.log('Response sent successfully');
        } else {
            console.error('Failed to send response:', result.error);
        }

        return res.status(200).json({
            success: true,
            message: 'Response sent successfully'
        })
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  
}

module.exports = { WaSpotyController };
