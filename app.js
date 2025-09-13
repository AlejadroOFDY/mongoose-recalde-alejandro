import express from "express";
import dotenv from "dotenv";
import { mongo_DB } from "./src/config/database.js";
import { UserModel } from "./src/models/user.model.js";
import { ListModel } from "./src/models/list.model.js";
import { ProjectModel } from "./src/models/project.model.js";
import { PlantModel } from "./src/models/plant.model.js";
import { InsectModel } from "./src/models/insect.model.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await mongo_DB(), console.log(`Servidor funcionando en localhost: ${PORT}`);
  console.log("LO VIEJO VA ACÁ ↑↑↑↑↑");
  console.log("---------------------------------------");
  console.log("LO NUEVO VA ACÁ ↓↓↓↓↓");
});
