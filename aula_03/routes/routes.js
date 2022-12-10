const express = require('express')
const ApiController = require('../controller/ApiController')
const routes = express.Router()




routes.get('/index',ApiController.index)
routes.post('/registe',ApiController.create)
routes.put('/update/:id',ApiController.update)
routes.delete('/delete/:id',ApiController.deleteUser)

module.exports = routes
