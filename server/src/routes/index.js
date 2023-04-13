const { Router } = require('express')

const router = Router();

router.get('/', (req, res) => {
    res.json({data: 'not yet'})
})

module.exports = router