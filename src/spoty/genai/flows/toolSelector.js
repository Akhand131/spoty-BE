const { contractTools } = require('../../toolManager/contractTool.js');
const { ai } = require('../aiInstance.js');
const { 
  ToolSelectorInputSchema,
  ToolSelectorOutputSchema
} = require('../schema/toolManager.js');

const toolSelectorFlow = ai.defineFlow(
  {
    name: 'toolSelectorFlow',
    inputSchema: ToolSelectorInputSchema,
    outputSchema: ToolSelectorOutputSchema,
  },
  async () => {
    const prompt = `You are an intelligent tool selector for a contract management system. 
      Analyze the user's query and determine which tool to use and what parameters to provide.

      Available tools:
      Tools: ${JSON.stringify(contractTools, null, 2)}

      Instructions:
      - If the query can be answered directly without contract data (like explaining legal terms), set requiresTool to false and provide directAnswer
      - If a tool is needed, select the most appropriate one and provide the correct parameters
      - Extract contract IDs from the query or context when available
      - Use reasonable defaults for optional parameters
      - Be precise with parameter values (use exact enum values)
      - Provide clear reasoning for your tool selection

      Analyze the query and respond with the appropriate tool selection.`;

    const { output } = await ai.generate({
      prompt,
      output: { schema: ToolSelectorOutputSchema },
    });

    if (!output) throw new Error('Failed to generate tool selection');

    return output;
  }
);

module.exports = { toolSelectorFlow };