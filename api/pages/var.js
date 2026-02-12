import fs from "node:fs";
import path from "node:path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "data", "var.json");
    const data = fs.readFileSync(filePath, "utf-8");
    res.status(200).json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}