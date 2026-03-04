import app from "./app.js"

const PORT = 4000

app.listen(PORT, () => {
    console.log(`servidor rodando e ouvindo na porta ${PORT}`);
    console.log(`Acesse http://localhost:${PORT} no seu navegador`)
});

