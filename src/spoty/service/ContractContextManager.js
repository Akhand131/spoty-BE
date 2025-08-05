class ContractContextManager {
  constructor() {
    this.contractContext = null;
  }

  /**
   * Set contract data
   * @param {Object} contractData - Contract data to store
   */
  setContractContext(contractData) {
    this.contractContext = {
      data: contractData,
      timestamp: Date.now()
    };
  }

  /**
   * Get stored contract data
   * @returns {Object|null} Contract data or null if not found
   */
  getContractContext() {
    return this.contractContext?.data || null;
  }

  /**
   * Clear the stored context
   */
  clearContext() {
    this.contractContext = null;
  }

  /**
   * Check if context is set
   * @returns {boolean} True if context exists
   */
  hasContext() {
    return this.contractContext !== null;
  }
}

// Create singleton instance
const contractContextManager = new ContractContextManager();

module.exports = {
  ContractContextManager,
  contractContextManager
};