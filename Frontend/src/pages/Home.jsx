import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

import SummaryCard from "../components/SummaryCard";
import ExpenseCard from "../components/ExpenseCard";
import DeleteModal from "../components/DeleteModal";

import { getExpenses, deleteExpense } from "../services/expenseService";

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await getExpenses();
      setExpenses(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (expense) => {
    setSelectedExpense(expense);
    setShowModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedExpense(null);
    setShowModal(false);
  };

  const handleDelete = async () => {
    try {
      await deleteExpense(selectedExpense._id);

      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense._id !== selectedExpense._id),
      );

      closeDeleteModal();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-xl font-semibold text-gray-600">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      

      <SummaryCard expenses={expenses} />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mt-10">Recent Expenses</h2>
      </div>

      {expenses.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-md p-12 text-center">
          <div className="text-7xl mb-5">💸</div>

          <h2 className="text-2xl font-bold text-slate-700">No Expenses Yet</h2>

          <p className="text-gray-500 mt-3">
            Start tracking your spending by adding your first expense.
          </p>

          <Link
            to="/add-expense"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl mt-8 transition"
          >
            <FaPlusCircle />
            Add Expense
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 mt-10">
          {expenses.map((expense) => (
            <ExpenseCard
              key={expense._id}
              expense={expense}
              onDelete={openDeleteModal}
            />
          ))}
        </div>
      )}

      <DeleteModal
        isOpen={showModal}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Home;
