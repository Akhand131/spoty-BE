const { ai } = require('../aiInstance');
const { 
  ContractQAInputSchema,
  ContractQAOutputSchema
} = require('../schema/contract');


const contractQAFlow = ai.defineFlow(
  {
    name: 'contractQAFlow',
    inputSchema: ContractQAInputSchema,
    outputSchema: ContractQAOutputSchema,
  },
  async (input) => {
    const prompt = `You are a legal assistant. Answer briefly and concisely.
    
    Contract: ${JSON.stringify(input.contractData, null, 2)}
    
    Question: ${input.userQuestion}
    
    Instructions:
    - Give short, direct answers (max 200 words)
    - Mention clearly if info is missing
    - Format the output clearly and neatly, so it's easy to understand at first glance
    - Phrase each line professionally and concisely.`;

    const { output } = await ai.generate({
      prompt,
      output: { schema: ContractQAOutputSchema },
    });

    if (!output) throw new Error('Failed to generate answer');

    return output;
  }
)

module.exports = {
  contractQAFlow
};

