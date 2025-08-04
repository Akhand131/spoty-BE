const { ai } = require('../aiInstance');
const { 
  ContractQAInputSchema,
  ContractQAOutputSchema
} = require('../schema/meta-data');

const metaDataExtractionFlow = ai.defineFlow(
  {
    name: 'metaDataExtractionFlow',
    inputSchema: ContractQAInputSchema,
    outputSchema: ContractQAOutputSchema,
  },
  async (input) => {
    const prompt = `You are a legal assistant. Extract key metadata from the contract text provided below.

        Contract:
        ${JSON.stringify(input.contractData, null, 2)}

        Instructions:
        - Use clear, concise language.
        - If any information is missing, leave the field empty or null.
        - Ensure the output is clean, well-formatted JSON matching the output schema.
        - Confidence must be one of: "high", "medium", or "low", based on how well the info could be extracted.
        - Also add other necessary fields that are not present in the output schema and are importent.
        `;

    const { output } = await ai.generate({
      prompt,
      output: { schema: ContractQAOutputSchema },
    });

    if (!output) throw new Error('Failed to generate metadata');

    return output;
  }
);

module.exports = {
    metaDataExtractionFlow
};
