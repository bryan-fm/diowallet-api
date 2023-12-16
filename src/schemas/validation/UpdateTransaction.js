import Joi from "joi";

export const UpdateTransaction = Joi.object({
    value: Joi.number().min(1),
    description: Joi.string().min(3),
    type: Joi.string().valid("output", "input"),
})