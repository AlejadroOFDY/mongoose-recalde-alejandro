import mongoose from "mongoose";

export const mongo_DB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/mi_base_datos");
    console.log("Conectado a MongoDB exitosamente");
  } catch (error) {
    console.error("Error de conexión:", err);
  }
};
