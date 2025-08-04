const { generateTts } = require('../genai/flows/GenerateTTS');
const { saveAudioFile } = require('./saveAudio');

async function generateAudioResponse(text) {
    try {
        console.log('generateAudioResponse : text', JSON.stringify(text));

        // Generate audio using TTS
        const result = await generateTts({ text: text });

        const publicUrl = saveAudioFile(result.audioDataUri);

        console.log('Audio saved and available at:', publicUrl);
        return publicUrl;

    } catch (error) {
        console.error('Error generating audio response:', error);
        return null;
    }
}

module.exports = {
    generateAudioResponse
};
