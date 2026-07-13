import { FaWallet } from "react-icons/fa";

function SummaryCard({ expenses }) {
  const totalAmount = expenses.reduce((total, expense) => {
    return total + Number(expense.amount);
  }, 0);

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-indigo-100 text-sm">Total Expenses</p>

          <h2 className="text-4xl font-bold mt-2">₹ {totalAmount}</h2>

          <p className="mt-3 text-indigo-100">
            {expenses.length} {expenses.length === 1 ? "Expense" : "Expenses"}
          </p>
        </div>

        <div className="bg-white/20 p-4 rounded-full">
          <FaWallet size={30} />
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
