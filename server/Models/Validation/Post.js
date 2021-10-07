const Joi = require("joi");

const postSchema = Joi.object({
  title: Joi
            .string()
            .alphanum()
            .min(2)
            .max(50)
            .required(),
  content: Joi
              .string()
              .required(),
});


const paramSchema = Joi.object({
    id: Joi.string().required(),
   
  });


module.exports = {
    postSchema,
    paramSchema
}