import express from "express";
import cors from "cors";
import pagesRoutes from "./routes/pages.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// este prefixo é o endereço-base do seu router
app.use("/api/pages", pagesRoutes);

app.listen(PORT, () => {
  console.log(`🔥 API rodando na porta ${PORT}`);
});