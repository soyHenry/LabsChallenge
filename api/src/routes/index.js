const { Router } = require('express');
// Import routes
const searchRouter = require('./search.js');

const router = Router();
router.use('/search', searchRouter)

module.exports = router;