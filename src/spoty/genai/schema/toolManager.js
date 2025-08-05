const { z } = require('genkit');

const ToolSelectorInputSchema = z.object({
  userQuery: z.string().describe('The user\'s natural language query'),
});

const ToolSelectorOutputSchema = z.object({
  toolName: z.string().optional().describe('Name of the tool to execute'),
  reasoning: z.string().describe('Brief explanation of why this tool was selected'),
  requiresTool: z.boolean().describe('Whether a tool is needed or can be answered directly'),
  directAnswer: z.string().optional().describe('Direct answer if no tool is needed')
});

module.exports = {
  ToolSelectorInputSchema,
  ToolSelectorOutputSchema
};