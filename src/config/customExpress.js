const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require("swagger-ui-express")
const swaggerDocs = require("../swagger.json")

module.exports = () => {
    const app = express()

    app.use(cors())

    app.use(bodyParser.json())

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

    consign()
        .include('src/controllers')
        .into(app)

    return app
}