import { ListModel } from "../models/list.model.js";
import { UserModel } from "../models/user.model.js";

export const createList = async (req, res) => {
  try {
    const { list_name, description, author } = req.body;

    const newList = await ListModel.create({
      list_name,
      description,
      author,
    });
    await UserModel.updateMany(
      { _id: { $in: author } },
      { $push: { author: newList._id } }
    );
    return res.status(200).json(newList);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
      msg: "Error interno del Servidor",
    });
  }
};

// buscar todos
export const findAllLists = async (req, res) => {
  try {
    const lists = await ListModel.find().populate("author");
    return res.status(200).json(lists);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: "Error interno del Servidor",
    });
  }
};

// buscar por id
export const findListById = async (req, res) => {
  try {
    const { id } = req.params;

    const list = await ListModel.findById(id).populate("author");

    return res.status(200).json(list);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: "Error interno del Servidor",
    });
  }
};

// actualizar
export const updateList = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, duration } = req.body;

    const list = await ListModel.findByIdAndUpdate(
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
export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await ListModel.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Eliminación exitosa" });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      msg: "Error interno del Servidor",
    });
  }
};
