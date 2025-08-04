const { z } = require('genkit');

const ContractQAInputSchema = z.object({
  contractData: z.string().describe('Raw contract data as plain text or JSON'),
});

const ContractQAOutputSchema = z.object({

  name: z.string().optional().describe('Name or title of the contract'),
  confidence: z.enum(['high', 'medium', 'low']).describe('Confidence level of the answer'),

  partiesInvolved: z.array(z.string()).optional().describe('Names of the parties involved in the contract'),
  effectiveDate: z.string().optional().describe('The effective start date of the contract'),
  terminationClause: z.string().optional().describe('Details of termination conditions'),
  renewalClause: z.string().optional().describe('Details of contract renewal terms'),
  paymentTerms: z.string().optional().describe('Payment conditions or terms'),
  amount: z.string().optional().describe('Amount of the contract'),
  obligations: z.array(z.string()).optional().describe('Key obligations from both parties'),
  confidentiality: z.string().optional().describe('Confidentiality clause summary'),
  liabilities: z.string().optional().describe('Liabilities of each party'),
  disputeResolution: z.string().optional().describe('Dispute resolution method (e.g., arbitration)'),
  currency: z.string().optional().describe('Currency of the contract'),
  duration: z.string().optional().describe('Duration of the contract'),
  type: z.string().optional().describe('Type of the contract'),
  status: z.string().optional().describe('Status of the contract'),
});

module.exports = {
  ContractQAInputSchema,
  ContractQAOutputSchema
};
