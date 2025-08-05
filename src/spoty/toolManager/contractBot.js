const { contractDataStored } = require('../service/ContractData');
const { contractQAFlow } = require('../genai/flows/contract');

class GeminiContractBot {
  
  constructor() {
    this.contractData = contractDataStored;
  }

  async processQuery(userQuery, contractContext = {}) {
    try {
      console.log('Processing contract query:', userQuery);

      const qaResult = await contractQAFlow({
        // contractData: contractData,
        userQuestion: userQuery
    });
    let responseMessage = '';

    responseMessage = qaResult.answer;
        
    if (responseMessage.length > 1400) {
        responseMessage = responseMessage.substring(0, 1400) + '...';
    }

    const response = await this.client.messages.create({
        body: responseMessage,
        from: this.fromNumber,
        to: from
    });

    return { success: true, messageSid: response.sid };

    } catch (error) {
      console.error('Error processing contract query:', error);
      return {
        query: userQuery,
        error: 'Internal server error',
        requiresTools: false
      };
    }
  }
}

module.exports = new GeminiContractBot();