const { z } = require('genkit');

const ContractExecutorInputSchema = z.object({
    toolName: z.string(),
    parameters: z.object({}),
    userQuery: z.string()
  });
  
  const ContractExecutorOutputSchema = z.object({
    result: z.any().describe('The result from executing the tool'),
    userFriendlyResponse: z.string().describe('Human-readable response based on the tool result'),
    success: z.boolean().describe('Whether the tool execution was successful'),
    error: z.string().optional().describe('Error message if execution failed')
  });
  
  
module.exports = {
    ContractExecutorInputSchema,
    ContractExecutorOutputSchema
};