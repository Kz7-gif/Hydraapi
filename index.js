const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const brainrots = [];
const logs = [];

app.get("/", (req, res) => {
    res.json({
        api: "HydraAPI",
        status: "Online",
        version: "1.0.0"
    });
});

app.post("/api/brainrots", (req, res) => {
    const dados = {
        id: brainrots.length + 1,
        ...req.body,
        recebidoEm: new Date().toISOString()
    };

    brainrots.push(dados);

    res.json({
        sucesso: true,
        mensagem: "Brainrot recebido!",
        dados
    });
});

app.get("/api/brainrots", (req, res) => {
    res.json(brainrots);
});

app.post("/api/logs", (req, res) => {
    const log = {
        id: logs.length + 1,
        ...req.body,
        data: new Date().toISOString()
    };

    logs.push(log);

    res.json({
        sucesso: true,
        mensagem: "Log salvo!"
    });
});

app.get("/api/logs", (req, res) => {
    res.json(logs);
});

app.listen(PORT, () => {
    console.log(`HydraAPI rodando na porta ${PORT}`);
});
