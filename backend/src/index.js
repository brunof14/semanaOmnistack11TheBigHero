const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

/**
 * Métodos HTTP:
 *
 * GET: Busca/Lista uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params(query): Parâmetros nomeados enviados na rota após "?" (Filtros, Páginação) -> ?variavel=valor
 * Route Params(params): Parâmetros utilizados para indetificar recursos -> route/:id
 * Request Body(body): Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
