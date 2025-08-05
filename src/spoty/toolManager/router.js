const express = require('express');
const router = express.Router();

const GeminiContractBot = require('./contractBot');
const whatsappService = require('../service/whatsappService');


router.post('/query', async (req, res) => {
  try {
    console.log('req.body', req.body);

    const { query, contractContext } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    const result = await whatsappService.processQuery(query, contractContext);
    res.json(result);
  } catch (error) {
    console.error('Router error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});


module.exports = router;