module.exports = (res, code, message) => {
    return res.status(code).send({
        status: false,
        message
    })
}