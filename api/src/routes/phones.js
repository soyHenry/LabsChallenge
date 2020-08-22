const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/phones', async (req, res) => {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone');
    const phones = await response.json();
    res.json(phones)
})

module.exports = router;