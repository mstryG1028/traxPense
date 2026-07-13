import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <FaWallet size={20} />
          </div>

          <span className="text-xl font-bold text-slate-800">
            Expense Tracker
          </span>
        </Link>

        <Link
          to="/add-expense"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl transition"
        >
          Add Expense
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
