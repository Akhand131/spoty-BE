const { PdfController } = require("../../controllers/PdfController");


const contractTools = [
  {
    name: "getAllContracts",
    description: "Fetch a list of all available contracts from the system",
    parameters: {
      type: "object",
      properties: {
        status: {
          type: "string",
          enum: ["active", "expired", "all"],
          description: "Filter contracts by their status",
          default: "all"
        },
        limit: {
          type: "number",
          description: "Maximum number of contracts to return",
          default: 50
        },
        offset: {
          type: "number",
          description: "Number of contracts to skip for pagination",
          default: 0
        }
      },
      required: []
    },
    execute: async ({ status = "all", limit = 50, offset = 0 }) => {
      try {
        const query = new URLSearchParams({ status, limit, offset }).toString();
        const counterpartyController= new PdfController();
        const response = await counterpartyController.getPdf();

        if (!response.ok) {
          throw new Error(`Failed to fetch contracts: ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        return { error: `Failed to fetch contracts: ${error.message}` };
      }
    }
  }
];


module.exports = { contractTools }; 