import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { addExpense } from "../services/expenseService";

function AddExpense() {
  const navigate = useNavigate();

  const [expense, setExpense] = useState({
    amount: "",
    description: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!expense.amount || !expense.description || !expense.date) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await addExpense(expense);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Failed to add expense.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-6"
      >
        <FaArrowLeft />
        Back to Home
      </Link>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Add Expense</h1>

        <p className="text-gray-500 mb-8">
          Fill in the details below to save a new expense.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium mb-2">Amount</label>

            <input
              type="number"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Description</label>

            <textarea
              rows="4"
              name="description"
              value={expense.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Date</label>

            <input
              type="date"
              name="date"
              value={expense.date}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition"
          >
            {loading ? "Saving..." : "Add Expense"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
