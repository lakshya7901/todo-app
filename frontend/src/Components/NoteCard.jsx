import { Trash2Icon, PenSquareIcon } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ task, setTasks, onEditClick }) => {
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await api.delete(`/task/${id}`);
      setTasks((prev) => prev.filter((t) => t._id !== id));
      toast.success("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task");
    }
  };

  return (
    <div className="bg-white border border-amber-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden p-4 flex flex-col justify-between">
      <h3 className="text-lg font-semibold text-amber-800 mb-2">{task.title}</h3>

      <p className="text-sm text-amber-700 line-clamp-3 mb-4">{task.content}</p>

      <div className="flex items-center justify-between text-sm text-amber-600 mt-auto">
        <span>{formatDate(new Date(task.createdAt))}</span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onEditClick(task)}
            className="text-amber-700 hover:text-amber-900 transition-colors"
          >
            <PenSquareIcon className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => handleDelete(e, task._id)}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2Icon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;