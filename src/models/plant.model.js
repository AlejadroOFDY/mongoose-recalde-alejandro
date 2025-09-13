import { Schema, model, Types } from "mongoose";

const PlantSchema = new Schema({
  reino: {
    type: String,
    default: "Plantae",
  },
  division: {
    type: String,
    required: true,
  },
  clase: {
    type: String,
    required: true,
  },
  orden: {
    type: String,
    required: true,
  },
  familia: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
  nombreComun: {
    type: String,
    trim: true,
  },
});

export const PlantModel = model("Plant", PlantSchema);
