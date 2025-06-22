const express = require('express');
const mongoose = require('./config/db');
const auctionRoutes = require('./routes/auctionRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/auctions', auctionRoutes);

const PORT = process.env.PORT || 8010;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
