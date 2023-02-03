const express = require('express');
const customerLogCtrl = require("./controller/customer-log") 

const router = express.Router();

router.get("/health", (req, res) => {
    res.send("OK")
})

router.get("/v1/customerLogs", customerLogCtrl.getCustomerLogsV1)

module.exports = router