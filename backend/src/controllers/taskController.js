import Task from '../models/Task.js'

export async function allTasks(req, res) {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    console.error('Error in allTasks Controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function taskById(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task); // ✅ fixed typo
  } catch (error) {
    console.error('Error in taskById Controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function createTask(req, res) {
  try {
    const { title, content } = req.body;
    const task = new Task({ title, content });
    const savedTask = await task.save();
    res.status(201).json(savedTask); // ✅ return saved task
  } catch (error) {
    console.error('Error in createTask Controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function updateTask(req, res) {
  try {
    const { title, content } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
    res.json(updatedTask); // ✅ return updated document
  } catch (error) {
    console.error('Error in updateTask Controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function deleteTask(req, res) {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully', _id: deletedTask._id });
  } catch (error) {
    console.error('Error in deleteTask Controller', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}