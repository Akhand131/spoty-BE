const { contractTools } = require('./contractTool.js');

async function executeContractTool(toolName, parameters = {}) {

  const tool = contractTools.find(t => t.name === toolName);
  if (!tool) {
    throw new Error(`Tool ${toolName} not found`);
  }

  try {
    const result = await tool.execute(parameters);
    return result;
  } catch (error) {
    return { error: `Error executing tool ${toolName}: ${error.message}` };
  }
}

  
module.exports = {
    contractTools,
    executeContractTool
};