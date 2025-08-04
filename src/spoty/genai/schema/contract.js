const { z } = require('genkit');

const ContractQAInputSchema = z.object({
  contractData: z.any().describe('Raw contract data in any format (JSON, plain text, etc.)'),
  userQuestion: z.string().describe('User question about the contract'),
});

const ContractQAOutputSchema = z.object({
  answer: z.string().describe('Answer to the user question based on the contract'),
  relevantClauses: z.array(z.string()).optional().describe('Relevant contract clauses that support the answer'),
  confidence: z.enum(['high', 'medium', 'low']).describe('Confidence level of the answer'),
});


module.exports = {
  ContractQAInputSchema,
  ContractQAOutputSchema
};