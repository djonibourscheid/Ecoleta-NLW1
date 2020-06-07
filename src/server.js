const express = require("express")
const server = express()


// Pegar o banco de dados
const db = require("./database/db.js")


// Habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }))


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


// Página Ponto Cadastrado
server.post("/savepoint", (req, res) => {
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log(`
|- Nova Entidade Cadastrada - |
| Nome: ${req.body.name}
| Endereço: ${req.body.address}, ${req.body.address2}
| Cidade: ${req.body.city}
| Estado: ${req.body.state}
| Itens: ${req.body.items}
|----------------------------|
`)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
    
})


// Página search-results
server.get("/resultados", (req, res) => {
    return res.render("search-results.html")
})



// start
server.listen(3000)