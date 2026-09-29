const transactions = [
  { id: 1, type: "credit", amount: 50000, date: "2026-01-05" },
  { id: 2, type: "debit", amount: 12000, date: "2026-01-08" },
  { id: 3, type: "credit", amount: 30000, date: "2026-01-15" },
  { id: 4, type: "debit", amount: 8000, date: "2026-02-02" },
  { id: 5, type: "credit", amount: 25000, date: "2026-02-10" },
  { id: 6, type: "debit", amount: 5000, date: "2026-02-18" },
  { id: 7, type: "credit", amount: 40000, date: "2026-03-03" },
  { id: 8, type: "debit", amount: 15000, date: "2026-03-12" },
  { id: 9, type: "credit", amount: 10000, date: "2026-03-20" },
  { id: 10, type: "debit", amount: 7000, date: "2026-03-25" },
];

function getBalance(transactions) {
  return transactions.reduce((balance, transaction) => {
    if (transaction.type === "credit") {
      return balance + transaction.amount;
    }
    return balance - transaction.amount;
  }, 0);
}

function getTransactionsByType(transactions, type) {
  return transactions.filter((transaction) => transaction.type === type);
}

function getLargestTransaction(transactions) {
  return transactions.reduce((largest, transaction) =>
    transaction.amount > largest.amount ? transaction : largest,
  );
}

function getMonthlyTotals(transactions) {
  return transactions.reduce((totals, transaction) => {
    const month = transaction.date.slice(0, 7);

    if (!totals[month]) {
      totals[month] = 0;
    }

    totals[month] += transaction.amount;
    return totals;
  }, {});
}

console.log("Balance:", getBalance(transactions));
console.log("Credits:", getTransactionsByType(transactions, "credit"));
console.log("Debits:", getTransactionsByType(transactions, "debit"));
console.log("Largest transaction:", getLargestTransaction(transactions));
console.log("Monthly totals:", getMonthlyTotals(transactions));
