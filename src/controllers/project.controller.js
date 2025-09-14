import { ProjectModel } from "../models/project.model.js";
import { UserModel } from "../models/user.model.js";

// crear
export const createProject = async (req, res) => {
  try {
    const { name, description, duration, members } = req.body;

    const newProject = await ProjectModel.create({
      name,
      description,
      duration,
      members: members,
    });
    await UserModel.updateMany(
      { _id: { $in: members } },
      { $push: { projects: newProject._id } }
    );
    return res.status(200).json(newProject);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: "Error interno del Servidor",
    });
  }
};

// buscar todos
export const findAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find().populate("members");
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: "Error interno del Servidor",
    });
  }
};

// buscar por id
export const findProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await ProjectModel.findById(id).populate("members");

    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: "Error interno del Servidor",
    });
  }
};

// actualizar
export const UpdateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, duration } = req.body;

    const project = await ProjectModel.findByIdAndUpdate(
      id,
      { name, description, duration },
      { new: true }
    );
    return res.status(200).json({ msg: "Actualización exitosa" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: "Error interno del Servidor",
    });
  }
};

// eliminar
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await ProjectModel.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Eliminación exitosa" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: "Error interno del Servidor",
    });
  }
};
