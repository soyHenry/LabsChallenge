const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', (req, res) => {
    const {search} = req.query;

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
        .then(r => r.json())
        .then((productos) => {
            res.json(productos.results)
        })
})

module.exports = router;