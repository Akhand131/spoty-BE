const { ai } = require("../aiInstance");
const { executeContractTool } = require("../../toolManager/executeContractTool");
const { ContractExecutorInputSchema, ContractExecutorOutputSchema } = require("../schema/contractExecutor");
const { z } = require('genkit');

const contractExecutorFlow = ai.defineFlow(
    {
      name: 'contractExecutorFlow', 
      inputSchema: ContractExecutorInputSchema,
      outputSchema: ContractExecutorOutputSchema,
    },
    async (input) => {
      try {

        const toolResult = await executeContractTool(input.toolName, input.parameters);
        
        // Generate user-friendly response
        const prompt = `Based on the following tool execution result, provide a clear, professional response to the user's query.
  
            User Query: "${input.userQuery}"
            Tool Used: ${input.toolName}
            Tool Parameters: ${JSON.stringify(input.parameters, null, 2)}
            Tool Result: ${JSON.stringify(toolResult, null, 2)}
            
            Instructions:
            - Provide a clear, concise, and professional response
            - Format the information in an easy-to-read way
            - If there's an error in the result, explain it clearly
            - Keep the response conversational but informative
            - Highlight key information that answers the user's question`;
  
        const { output } = await ai.generate({
          prompt,
          output: { 
            schema: z.object({
              response: z.string().describe('User-friendly response based on the tool result')
            })
          },
        });
  
        return {
          result: toolResult,
          userFriendlyResponse: output.response,
          success: !toolResult.error,
          error: toolResult.error || undefined
        };
  
      } catch (error) {
        return {
          result: null,
          userFriendlyResponse: `I encountered an error while processing your request: ${error.message}`,
          success: false,
          error: error.message
        };
      }
    }
);
  
module.exports = {
    contractExecutorFlow,
    ContractExecutorInputSchema,
    ContractExecutorOutputSchema
};