const http = require("http");
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/sobre': 'Sobre'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});