const { ai } = require('../aiInstance');
const { 
  ContractQAInputSchema,
  ContractQAOutputSchema
} = require('../schema/contract');
const { contractContextManager } = require('../../service/ContractContextManager.js');


const contractQAFlow = ai.defineFlow(
  {
    name: 'contractQAFlow',
    inputSchema: ContractQAInputSchema,
    outputSchema: ContractQAOutputSchema,
  },
  async (input) => {
    let contractData = input.contractData;
    
    if (!contractData) {
      contractData = contractContextManager.getContractContext();
      
      if (!contractData) {
        throw new Error('No contract data provided and no stored context found. Please provide contract data or set up context first.');
      }
    }

    const prompt = `You are a legal assistant. Answer briefly and concisely.
    your name is Dr. LexAi. don't answer anything out of the contract 
    
    Contract: ${JSON.stringify(contractData, null, 2)}
    
    Question: ${input.userQuestion}
    
    Instructions:
    - Give short, direct answers (max 200 words)
    - Mention clearly if info is missing
    - Format the output clearly and neatly, so it's easy to understand at first glance
    - Phrase each line professionally and concisely.;
    - if these type of questions asked "How does this quarter's cycle time compare to last quarter?"  assume some similar type of data 
    `

    const { output } = await ai.generate({
      prompt,
      output: { schema: ContractQAOutputSchema },
    });

    if (!output) throw new Error('Failed to generate answer');

    return output;
  }
)

// Helper functions for contract context management
const setContractContext = (contractData) => {
  contractContextManager.setContractContext(contractData);
};

const clearContractContext = () => {
  contractContextManager.clearContext();
};

const getContractContext = () => {
  return contractContextManager.getContractContext();
};

const hasContractContext = () => {
  return contractContextManager.hasContext();
};

module.exports = {
  contractQAFlow,
  setContractContext,
  clearContractContext,
  getContractContext,
  hasContractContext
};

