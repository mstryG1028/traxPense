import { useEffect, useState } from "react";

import ExpenseCard from "../components/ExpenseCard";
import { getExpenses } from "../services/expenseService";

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = (expense) => {
    console.log("Delete:", expense);
  };

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">All Expenses</h1>

      {expenses.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Expenses Added Yet
          </h2>

          <p className="text-gray-500 mt-2">
            Click "Add Expense" to create your first expense.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expenses.map((expense) => (
            <ExpenseCard
              key={expense._id}
              expense={expense}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
