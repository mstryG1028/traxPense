import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import ViewExpense from "./pages/ViewExpense";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add-expense" element={<AddExpense />} />

        <Route path="/expense/:id" element={<ViewExpense />} />
      </Routes>
    </div>
  );
}

export default App;
