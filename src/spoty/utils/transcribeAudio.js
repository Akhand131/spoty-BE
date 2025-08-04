const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const { ai } = require('../genai/aiInstance');

dotenv.config();


const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN
} = process.env;

async function transcribeAudio(mediaUrl) {
    try {
        const audioBuffer = await downloadTwilioMedia(mediaUrl)

  
        const tempFilePath = path.join('/tmp', `audio_${Date.now()}.ogg`);
        
        fs.writeFileSync(tempFilePath, Buffer.from(audioBuffer));
        // Use Google Speech-to-Text API (you'll need to set this up)
        const { output } = await ai.generate({
            prompt: `Transcribe this audio to text. Return only the transcribed text.`,
            // media: [{
            //     data: base64Audio,
            //     contentType: 'audio/ogg'
            // }]
            files: [tempFilePath]
        });

        console.log('transcribeAudio output :', output);

        return output || 'Could not transcribe audio';
    } catch (error) {
        console.error('Error transcribing audio:', error);
        throw error;
    }
}


async function downloadTwilioMedia(mediaUrl) {
    try {
        console.log('mediaUrl', mediaUrl);
        const response = await fetch(mediaUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64')
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to download media: ${response.statusText}`);
        }
       // No need to parse JSON — it's binary media.
       const buffer = await response.arrayBuffer();

       console.log('Downloaded media size (bytes):', buffer.byteLength);
       return buffer;
    } catch (error) {
        console.error('Error downloading Twilio media:', error);
        throw error;
    }
}


module.exports = {
    transcribeAudio,
    downloadTwilioMedia
}