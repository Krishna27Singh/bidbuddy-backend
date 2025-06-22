const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  currentBid: { type: Number, required: true, default: 0 },
  highestBidder: { type: String, required: false, default: null },
  timeRemaining: { type: Number, required: true },
  bidHistory: [
    {
      bidder: { type: String, required: true },
      bidAmount: { type: Number, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Auction', auctionSchema);
