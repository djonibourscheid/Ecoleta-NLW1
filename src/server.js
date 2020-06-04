const express = require("express")
const server = express()



// Configurando pasta public
server.use(express.static("public"))



// Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})



// Configurando as rotas da aplicação
// Página Inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})

// Página create-point
server.get("/criar-ponto", (req, res) => {
    return res.render("create-point.html")
})

// Página search-results
server.get("/resultados", (req, res) => {
    return res.render("search-results.html")
})



// start
server.listen(3000)
