import { Link } from "react-router-dom";
import { FaEye, FaTrash, FaCalendarAlt } from "react-icons/fa";

function ExpenseCard({ expense, onDelete }) {
  const formattedDate = new Date(expense.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-3xl font-bold text-indigo-600">
            ₹ {expense.amount}
          </h2>

          <div className="bg-indigo-100 text-indigo-600 rounded-full h-12 w-12 flex items-center justify-center font-bold">
            ₹
          </div>
        </div>

        <p className="text-gray-700 text-lg min-h-[60px]">
          {expense.description}
        </p>

        <div className="flex items-center gap-2 mt-5 text-gray-500">
          <FaCalendarAlt />

          <span>{formattedDate}</span>
        </div>
      </div>

      <div className="border-t px-6 py-4 flex justify-between">
        <Link
          to={`/expense/${expense._id}`}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
        >
          <FaEye />
          View
        </Link>

        <button
          onClick={() => onDelete(expense)}
          className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
        >
          <FaTrash />
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseCard;
