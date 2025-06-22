const mongoose = require('../config/db');
const Auction = require('../models/Auction');

const seedAuction = async () => {
  const auction = new Auction({
    itemName: 'Vintage Painting',
    currentBid: 1000,
    highestBidder: 'user123',
    timeRemaining: 3600, // 1 hour
    bidHistory: [
      { bidder: 'user123', bidAmount: 1000 },
      { bidder: 'user456', bidAmount: 900 },
    ],
  });

  await auction.save();
  console.log('Auction seeded:', auction);
  mongoose.disconnect();
};

seedAuction();
