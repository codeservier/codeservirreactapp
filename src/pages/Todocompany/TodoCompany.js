import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { firebase, db } from "../../config/config";


const TodoCompany = () => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("expense"); 
  const [selectedDate, setSelectedDate] = useState(""); // State for selected date

  useEffect(() => {
    const unsubscribe = db.collection("transactions").onSnapshot((snapshot) => {
      const transactions = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const incomeTransactions = transactions.filter(
        (transaction) => transaction.type === "income"
      );
      const expenseTransactions = transactions.filter(
        (transaction) => transaction.type === "expense"
      );
      setIncome(incomeTransactions);
      setExpenses(expenseTransactions);
    });

    return () => unsubscribe();
  }, []);

  const filteredTransactions = expenses.concat(income).filter((transaction) => {
    if (!selectedDate) return true; 
    const transactionDate = transaction.timestamp
      .toDate()
      .toISOString()
      .split("T")[0];
    return transactionDate === selectedDate;
  });

  const totalIncome = filteredTransactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = filteredTransactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const remainingBalance = totalIncome - totalExpenses;

  const [chartData, setChartData] = useState({
    labels: ["Total"],
    datasets: [
      {
        label: "Income",
        data: [totalIncome],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses",
        data: [totalExpenses],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate amount input
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid positive amount.");
      return;
    }

    // Confirmation box before adding transaction
    if (
      !window.confirm(
        `Are you sure you want to add ${
          transactionType === "income" ? "income" : "expense"
        }?`
      )
    ) {
      return;
    }

    // Check if selected date is in the future
    const currentDate = new Date().toISOString().split("T")[0];
    if (selectedDate > currentDate) {
      alert("Cannot add transactions for future dates.");
      return;
    }

    // Create a new transaction object
    const newTransaction = {
      companyName,
      amount: parsedAmount,
      type: transactionType,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()), // Use Firestore Timestamp for consistency
    };

    try {
      // Add transaction to Firestore
      await db.collection("transactions").add(newTransaction);
      alert("Transaction added successfully!");
    } catch (error) {
      alert("Error adding transaction: ", error);
    }

    // Reset form inputs
    setCompanyName("");
    setAmount("");
  };

  // Update chart data whenever income or expenses change
  useEffect(() => {
    setChartData({
      labels: ["Total"],
      datasets: [
        {
          label: "Income",
          data: [totalIncome],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: [totalExpenses],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, [totalIncome, totalExpenses]);

  return (
    <>
  
      <div className="container mx-auto pt-[10rem] px-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Company Financials
        </h1>

        {/* Form to add expenses/income */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
        >
          <input
            type="text"
            placeholder="Label"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="col-span-1 md:col-span-1 px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="col-span-1 md:col-span-1 px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          />
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            className="col-span-1 md:col-span-1 px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <button
            type="submit"
            className="col-span-1 md:col-span-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Add Transaction
          </button>
        </form>

        {/* Date input to filter transactions */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Date:
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500"
          />
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-green-200 p-4 rounded-md text-center">
            <h2 className="text-xl font-bold mb-2">Total Income</h2>
            <p className="text-2xl">₹{totalIncome.toFixed(2)}</p>
          </div>
          <div className="bg-yellow-200 p-4 rounded-md text-center">
            <h2 className="text-xl font-bold mb-2">Total Expenses</h2>
            <p className="text-2xl">₹{totalExpenses.toFixed(2)}</p>
          </div>
          <div className="bg-blue-200 p-4 rounded-md text-center">
            <h2 className="text-xl font-bold mb-2">Remaining Balance</h2>
            <p className="text-2xl">₹{remainingBalance.toFixed(2)}</p>
          </div>
        </div>

        {/* Display transactions from Firebase */}
        <div className="max-w-full overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Label
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount (₹)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {transaction.companyName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{transaction.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.timestamp &&
                      transaction.timestamp.toDate().toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bar chart */}
        <div className="max-w-full mt-8">
          <Bar
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Financial Overview",
                  font: {
                    size: 20,
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Transaction Type",
                    font: {
                      size: 16,
                    },
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Amount (₹)",
                    font: {
                      size: 16,
                    },
                  },
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TodoCompany;
