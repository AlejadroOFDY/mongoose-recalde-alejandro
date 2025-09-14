import { Schema, model, Types } from "mongoose";

const PlantSchema = new Schema(
  {
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
    subclase: {
      type: String,
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
    tribu: {
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
    nombreComun: [
      {
        nombre: { type: String, trim: true },
        region: { type: String, trim: true },
        idioma: { type: String, trim: true },
      },
    ],
  },
  { versionKey: false }
);

export const PlantModel = model("Plant", PlantSchema);
