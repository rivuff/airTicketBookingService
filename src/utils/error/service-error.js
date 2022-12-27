const { StatusCodes } = require('http-status-codes')

class ServiceError extends Error{
    constructor(
        message,
        explanation,
        statusCodes=StatusCodes.INTERNAL_SERVER_ERROR
    ){
        super();
        this.name = "ServiceError"
        this.message=message,
        this.explanation=explanation,
        this.statusCodes=statusCodes
    }
}