import Joi from "joi";

const usersSchema = Joi.object({
    firstUser: Joi.string().required(),
    secondUser: Joi.string().required(),
})

export default usersSchema;