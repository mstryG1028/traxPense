import { FaTrash } from "react-icons/fa";

function DeleteModal({ isOpen, onClose, onDelete }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        <div className="flex justify-center">
          <div className="bg-red-100 text-red-600 p-4 rounded-full">
            <FaTrash size={24} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mt-5">Delete Expense</h2>

        <p className="text-gray-500 text-center mt-3">
          Are you sure you want to delete this expense?
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={onClose}
            className="flex-1 border rounded-xl py-3 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="flex-1 bg-red-600 text-white rounded-xl py-3 hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
