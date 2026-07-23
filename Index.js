const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    api: "HydraAPI",
    status: "Online",
    versao: "1.0.0",
    autor: "Seu Nome"
  });
});

app.get("/ping", (req, res) => {
  res.json({
    resposta: "pong"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`HydraAPI iniciada na porta ${PORT}`);
});
