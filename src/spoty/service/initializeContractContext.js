const { contractDataStored, getContractData } = require('./ContractData');
const { setContractContext } = require('../genai/flows/contract');

/**
 * Initialize the contract context with stored contract data
 * This should be called when your application starts
 */
async function initializeContractContext() {
  try {

    const defaultContract = contractDataStored

    setContractContext(defaultContract);
    
    return true;
  } catch (error) {
    console.error('Failed to initialize contract context:', error.message);
    return false;
  }
}

/**
 * Load a specific contract by index
 * @param {number} contractIndex - Index of contract to load (0-based)
 */
function loadSpecificContract(contractIndex = 0) {
  try {
    if (contractIndex < 0 || contractIndex >= contractDataStored.length) {
      throw new Error(`Contract index ${contractIndex} is out of range. Available: 0-${contractDataStored.length - 1}`);
    }
    
    const selectedContract = contractDataStored[contractIndex];
    setContractContext(selectedContract);
    
    console.log(`Contract context updated`);
    console.log(`Contract type: ${selectedContract.contractType}`);
    console.log(`Parties: ${selectedContract.parties.join(', ')}`);
    
    return selectedContract;
  } catch (error) {
    console.error('Failed to load specific contract:', error.message);
    throw error;
  }
}

/**
 * Get available contracts summary
 */

function getAvailableContracts() {
  return contractDataStored.map((contract, index) => ({
    index,
    contractType: contract.contractType,
    parties: contract.parties,
    effectiveDate: contract.effectiveDate,
    jurisdiction: contract.jurisdiction
  }));
}

module.exports = {
  initializeContractContext,
  loadSpecificContract,
  getAvailableContracts
};