







import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function handler(req, res) {
  try {
    const filePath = path.join(__dirname, "../../data/var.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(data);

    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({
      error: "Erro ao ler o arquivo var.json",
      details: err.message
    });
  }
}