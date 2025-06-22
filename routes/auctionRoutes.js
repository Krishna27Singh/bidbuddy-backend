const express = require('express');
const { getCurrentAuction } = require('../controllers/auctionController');
const router = express.Router();

router.get('/:id', getCurrentAuction); // Fetch auction details by ID

module.exports = router;
