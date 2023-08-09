const router = require('express').Router()
const {
    contactUs
} = require('../controllersv2/contactUs')
router.post('/contactUs', contactUs)
module.exports = router