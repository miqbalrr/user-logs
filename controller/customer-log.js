const moment = require('moment')
const mongoose = require("mongoose")
const Model = require("../models/models")

async function getCustomerLogsV1(req, res, next) {
    try {

    const errValidate = validateGetCustomerLogs(req)
    if (errValidate != null) {
        throw errValidate
    }

    return res.send( await Model.customer.aggregate([
            {
                $match: {
                    locationId: mongoose.Types.ObjectId(req.query.locationId)
                }
            }, 
            {
                $lookup: {
                    from: "customerLogs",
                    localField: "customerId",
                    foreignField: "customerId",
                    pipeline: [
                    {
                        $match: {
                        $expr: [
                            {
                              $gte: ["$date", new Date(req.query.startDate)],
                            },
                            {
                              $lte: ["$date", new Date(req.query.endDate)]
                            }
                        ],
                      },
                     },
                    ],
                    as : "customerLogs"
                }
            }
        ]))

    } catch (error) {
        next(error)
    }
}

function validateGetCustomerLogs(req) {
    const startDate = moment(req.query.startDate, 'YYYY-MM-DD',true)
    const endDate = moment(req.query.endDate, 'YYYY-MM-DD',true)

    if (!startDate.isValid() || !endDate.isValid()) {
        return new APIError(err.INVALID_DATE_FORMAT)
    }

    if (startDate.isAfter(endDate)) {
        return new APIError("startDate cannot be greater than endDate")
    }

    if (req.query.locationId == null || req.query.locationId == "" ) {
        return new APIError(err.MISSING_FIELD)
    }

    return null
}

module.exports = {
    getCustomerLogsV1
}