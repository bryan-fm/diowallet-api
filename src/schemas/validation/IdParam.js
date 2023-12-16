import Joi from "joi";

export const IdParam = Joi.object({
    id: Joi.string().hex().length(24),
})