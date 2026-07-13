import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { getExpense } from "../services/expenseService";

function ViewExpense() {
  const { id } = useParams();
  console.log("id is:", id);

  const [expense, setExpense] = useState(null);

  const fetchExpense = async () => {
    try {
      const response = await getExpense(id);
      setExpense(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpense();
  }, []);

  if (!expense) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

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
        <h1 className="text-3xl font-bold mb-8">Expense Details</h1>

        <div className="space-y-8">
          <div>
            <p className="text-gray-500 mb-1">Amount</p>

            <h2 className="text-4xl font-bold text-indigo-600">
              ₹ {expense.amount}
            </h2>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Description</p>

            <p className="text-lg text-slate-700">{expense.description}</p>
          </div>

          <div>
            <p className="text-gray-500 mb-1">Date</p>

            <p className="text-lg">
              {new Date(expense.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewExpense;
