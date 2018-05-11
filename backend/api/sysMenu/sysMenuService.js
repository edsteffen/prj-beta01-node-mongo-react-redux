const SysMenu = require('./sysMenu')

SysMenu.methods(['get', 'post', 'put', 'delete'])
SysMenu.updateOptions({ new: true, runValidators: true })


SysMenu.route('count', (req, res, next) => {
    SysMenu.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = SysMenu
