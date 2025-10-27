import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NoteCard from "../Components/NoteCard";
import CreateTaskModal from "../Components/CreateTaskModal";
import EditTaskModal from "../Components/EditTaskModal";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/task");
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCreateClick={() => setShowCreateModal(true)} />

      <main className="flex-1 p-6 bg-amber-50">
        {loading ? (
          <div className="text-center text-amber-500 py-10">Loading Tasks...</div>
        ) : tasks.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No tasks found. Create a new task!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <NoteCard
                key={task._id}
                task={task}
                setTasks={setTasks}
                onEditClick={(task) => setEditTask(task)}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {showCreateModal && (
        <CreateTaskModal
          setTasks={setTasks}
          onClose={() => setShowCreateModal(false)}
        />
      )}

      {editTask && (
        <EditTaskModal
          task={editTask}
          setTasks={setTasks}
          onClose={() => setEditTask(null)}
        />
      )}
    </div>
  );
};

export default HomePage;