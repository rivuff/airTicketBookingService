const {StatusCodes} = require('http-status-codes')

class ValidationError extends Error{
    
    constructor(error){
        super();
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        this.name= "validationError",
        this.message ="not able to validate the data send in request",
        this.explanation=explanation,
        this.statusCode = statusCode
    }
}

module.exports=ValidationError