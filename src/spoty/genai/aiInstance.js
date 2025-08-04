const { genkit } = require('genkit');
const { googleAI } = require('@genkit-ai/googleai');

const ai = genkit({
  plugins: [googleAI()],
  model: googleAI.model('gemini-2.5-flash', {
    temperature: 0.3
  }),
});

module.exports = {
  ai
};
