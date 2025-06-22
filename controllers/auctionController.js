const Auction = require('../models/Auction');

// Get Current Auction Details
exports.getCurrentAuction = async (req, res) => {
  const { id } = req.params;

  try {
    const auction = await Auction.findById(id);
    if (!auction) {
      return res.status(404).json({ message: 'Auction not found' });
    }

    res.json({
      itemName: auction.itemName,
      currentBid: auction.currentBid,
      highestBidder: auction.highestBidder,
      timeRemaining: auction.timeRemaining,
      bidHistory: auction.bidHistory,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
