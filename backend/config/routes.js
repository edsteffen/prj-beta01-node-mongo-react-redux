const express = require('express')

module.exports = function(server) {

    //Rotas da API
    const router = express.Router()
    server.use('/api', router)

    //Rota para Menus do Sistema
    const sysMenuService = require('../api/sysMenu/sysMenuService')
    sysMenuService.register(router,'/sysMenus')
}