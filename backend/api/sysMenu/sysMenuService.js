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

SysMenu.route('summary', (req, res, next) => {
    SysMenu.aggregate({
        $project: {
            item: 1,
            numDeSubmenus: { $size: "$submens" }
        }
    }, (error, result) => {
            if (error) {
                res.status(500).json({ errors: [error] })
            } else {
                res.json(result || { numDeSubmenus: 0 })
            }
        })
})


module.exports = SysMenu