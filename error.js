class APIError extends Error {
    constructor(message) {
        super(message);
        this.message = message
        this.name = (new Error()).name;
        this.stack = (new Error()).stack;
    }
}

const handleError = (error, res) => {
    var thiserror = error.message

    if (!(thiserror instanceof Object) || typeof thiserror == String) {
        console.log(thiserror)
        let err_temp = err.SERVER_ERROR
        err_temp.msg = thiserror
        thiserror = err_temp
    }
    console.log('name :' + error.name);
    console.log('stack:' + error.stack);
    console.log(thiserror);

    res.status(thiserror.code || err.SERVER_ERROR.code).send({
        success: false,
        msg: thiserror.msg || err.SERVER_ERROR.msg,
        key: thiserror.key || (err.SERVER_ERROR.key)
    })
};

module.exports = {APIError, handleError}