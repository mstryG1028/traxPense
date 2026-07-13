import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <FaWallet />
          Expense Tracker
        </Link>

        <Link
          to="/add-expense"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add Expense
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
