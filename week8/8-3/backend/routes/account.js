// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});

// router.post("/transfer", authMiddleware, async (req, res) => {
//     const session = await mongoose.startSession();

//     try {
//         session.startTransaction();
//         const { amount, to } = req.body;
    

//     // Fetch the accounts within the transaction
//     const account = await Account.findOne({ userId: req.userId }).session(session);

//     if (!account || account.balance < amount) {
//         await session.abortTransaction();
//         return res.status(400).json({
//             message: "Insufficient balance"
//         });
//     }

//     const toAccount = await Account.findOne({ userId: to }).session(session);

//     if (!toAccount) {
//         await session.abortTransaction();
//         return res.status(400).json({
//             message: "Invalid account"
//         });
//     }

//     // Perform the transfer
//     await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }, { session });
//     await Account.updateOne({ userId: to }, { $inc: { balance: amount } }, { session });

//     // Commit the transaction
//     await session.commitTransaction();
//     res.json({ message: "Transfer successful"});
// } catch (e) {
//     console.error(e);
//     await session.abortTransaction();
//     res.status(500).json({message: "Transfer Failed"});
// } finally {
//     session.endSession();
// } 
// });

router.post("/transfer", authMiddleware, async (req, res) => {
  try {
    const { amount, to } = req.body;

    const account = await Account.findOne({ userId: req.userId });
    if (!account || account.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const toAccount = await Account.findOne({ userId: to });
    if (!toAccount) {
      return res.status(400).json({ message: "Invalid account" });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } });
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } });

    return res.json({ message: "Transfer successful" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Transfer Failed" });
  }
});



module.exports = router;