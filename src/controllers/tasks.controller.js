import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    // Utiliza populate para cargar los documentos de usuario relacionados
    const tasks = await Task.find({ user: req.decoded.id })

    // Devuelve las tareas populadas con información de usuario
    res.json(tasks);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    res.status(500).json({ message: "Error al obtener las tareas" });
  }

  // const tasks = await Task.find({
  //   user: req.decoded.id,
  // }).populate(("user"))
  // res.json(tasks);
};

export const createTasks = async (req, res) => {
  const { title, description, date, user } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    // user: req.user.id,
    user: req.decoded.id,
  });
  const savedTask = await newTask.save();
  res.json(savedTask);
};
export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "task no found" });
  res.json(task);
};
export const deleteTasks = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "task no found" });
  res.json(task);
};
export const updateTasks = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "task no found" });
  res.json(task);
};
