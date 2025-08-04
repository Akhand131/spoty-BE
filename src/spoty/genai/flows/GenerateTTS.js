
const wav = require('wav');
const { z } = require('genkit');
const { ai } = require('../aiInstance');
const { googleAI } = require('@genkit-ai/googleai');

const GenerateTtsInputSchema = z.object({
  text: z.string().describe("The text to convert to speech..."),
  voice: z.string().optional().describe("The selected voice profile..."),
});


const GenerateTtsOutputSchema = z.object({
  audioDataUri: z.string().describe("The generated audio as a base64-encoded WAV data URI."),
});

 async function generateTts(input) {
  return generateTtsFlow(input);
}

// PCM to WAV conversion
async function toWav(pcmData, channels = 1, rate = 16000, sampleWidth = 2) {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });
    const bufs = [];
    writer.on('error', reject);
    writer.on('data', (d) => {
      bufs.push(d);
    });
    writer.on('end', () => {
      resolve(Buffer.concat(bufs).toString('base64'));
    });
    writer.write(pcmData);
    writer.end();
  });
}

// Genkit flow for TTS
const generateTtsFlow = ai.defineFlow(
  {
    name: 'generateTtsFlow',
    inputSchema: GenerateTtsInputSchema,
    outputSchema: GenerateTtsOutputSchema,
  },
  async ({ text, voice }) => {

    const speechConfig = {
      responseModalities: ['AUDIO'],
      speechConfig : {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: voice || 'Algenib' },
        },
      }
    };

    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: speechConfig,
      prompt: text,
    });

    if (!media) {
      throw new Error('No audio media returned from TTS model.');
    }

    console.log('TTS FLOW media', media);
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    const wavBase64 = await toWav(audioBuffer);
    console.log("AUDIO FLOW audioUrl", wavBase64);

    return {
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);


module.exports = {
  generateTts
};