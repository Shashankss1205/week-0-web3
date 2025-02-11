const { writeTransactions, getTransactions } = require("./blockchain-helpers");

const addTransaction = () => {
	const fromAddress = process.argv[2];
	const toAddress = process.argv[3];
	const amount = parseInt(process.argv[4]);

	// Create new transactions and push them into transactions.json containing the above properties
	// Refer blockchain-helpers.js for writeTransactions and getTransactions

	const newTransaction ={
		fromAddress: "123",
		toAddress: "456",
		amount: 789,
	};


	const transactions = getTransactions();
	transactions.push(newTransaction);
	writeTransactions(transactions);
};

module.exports = { addTransaction };