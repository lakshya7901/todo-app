import { CalendarCheck2, UserRound, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ onCreateClick }) => {
  return (
    <nav className="bg-amber-500 p-5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <CalendarCheck2 className="text-white w-6 h-6" />
        <h1 className="text-2xl font-bold text-white">To Do</h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onCreateClick}
          className="flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded hover:bg-amber-200 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Task</span>
        </button>

        <Link to="/profile">
          <UserRound className="w-6 h-6 text-white" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;