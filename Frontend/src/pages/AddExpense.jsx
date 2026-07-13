import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await addExpense(expense);

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Add Expense</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">Amount</label>

          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={expense.amount}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Description</label>

          <textarea
            rows="4"
            name="description"
            placeholder="Enter description"
            value={expense.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Date</label>

          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          {loading ? "Saving..." : "Add Expense"}
        </button>
      </form>
    </div>
  );
}

export default AddExpense;
