export function validationSchemaMiddleWare(schema) {
    return (req, res, next) => {
        const {error} = schema.validate(req.body, {abortEarly: false})

        if (error) {
            const errors = error.details.map((detail) => {
                return detail.message;
            })
            return res.status(422).send(errors);
        }

        next();
    }
}