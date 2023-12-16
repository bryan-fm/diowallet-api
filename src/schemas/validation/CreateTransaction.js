import Joi from "joi";

export const CreateTransaction = Joi.object({
    value: Joi.number().required().min(1),
    description: Joi.string().required().min(3),
    type: Joi.string().required().valid("output", "input"),
    userId: Joi.object(),
    createdAt: Joi.string(),
})