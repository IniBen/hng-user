const handleValidationError = (err, res) => {
    let errors = Object.values(err.errors).map(el => el.message);
    let fields = Object.values(err.errors).map(el => el.path);
    let code = 400;

    let formattedErrors;
    let formattedFields;

    if (errors.length == 1) {
        formattedErrors = errors.join(' ');
        formattedFields = fields.join(', ');
        return res.status(code).json({success: false, message: formattedErrors, field: formattedFields});
    }

    return res.status(code).json({success: false, messages: errors, fields: fields});
}

async function errorHandler(err, req, res, next) {
    console.log(err);
    console.log("An error has occured")
    console.log(err.name);
    try {
        if(err.name === 'CastError') return res.status(404).json({success: false, message: "user with such id does not exist"});
        if(err.name === 'ValidationError') return handleValidationError(err, res);
    } catch(err) {
        res.status(500).json({success: false, message: 'An unknown error occurred.'});
    }
}

module.exports = errorHandler;