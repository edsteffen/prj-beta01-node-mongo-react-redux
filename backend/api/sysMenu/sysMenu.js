const restful = require('node-restful')
const mongoose = restful.mongoose

const submenuSchema = new mongoose.Schema({
    description: { type: String, required: false },
    icon: { type: String, required: false },
    route: { type: String, required: false }
})

const menuSchema = new mongoose.Schema({
    description: { type: String, required: [true,'A descrição do Menu é obrigatório...'] },
    icon: { type: String, required: false },
    route: { type: String, required: false },
    submenus: [submenuSchema]
})

module.exports = restful.model('SysMenu', menuSchema)
