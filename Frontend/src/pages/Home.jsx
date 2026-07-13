function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Expenses</h1>

      <div className="bg-white rounded-xl shadow p-12 text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          No Expenses Added Yet
        </h2>

        <p className="text-gray-500 mt-2">
          Click "Add Expense" to add your first expense.
        </p>
      </div>
    </div>
  );
}

export default Home;
