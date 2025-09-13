import { Schema, model, Types } from "mongoose";

const InsectSchema = new Schema({
  reino: {
    type: String,
    default: "Animalia",
  },
  phylum: {
    type: String,
    default: "Arthropoda",
  },
  clase: {
    type: String,
    default: "Insecta",
  },
  orden: {
    type: String,
    required: true,
  },
  familia: {
    type: String,
    required: true,
  },
  subfamilia: {
    type: String,
  },
  genero: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
  subespecie: {
    type: String,
  },
  nombreComun: {
    type: String,
    trim: true,
  },
});

export const InsectModel = model("Insect", InsectSchema);
