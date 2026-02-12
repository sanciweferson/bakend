import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const router = express.Router();

// Configuração para pegar o diretório atual no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lendo os arquivos JSON
const varPage = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/var.json"), "utf-8")
);



// Definindo as rotas
router.get("/var", (req, res) => {
  res.json(varPage);
});



// ESTA É A LINHA QUE ESTAVA FALTANDO:
export default router;