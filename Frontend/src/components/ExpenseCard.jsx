import { Link } from "react-router-dom";

function ExpenseCard({ expense, onDelete }) {
  const formattedDate = new Date(expense.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            ₹ {expense.amount}
          </h2>

          <p className="text-gray-600 mt-2">{expense.description}</p>

          <p className="text-sm text-gray-400 mt-3">{formattedDate}</p>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <Link
          to={`/expense/${expense._id}`}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          View
        </Link>

        <button
          onClick={() => onDelete(expense)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseCard;
