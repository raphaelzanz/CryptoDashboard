const joi = require("joi");

const symbolValidator = joi.object({
    symbol: joi.string().required().alphanum().min(3).max(5).uppercase(),
})

const userValidator = joi.object({
    name: joi.string().required().alphanum().min(3).max(30).uppercase(),
    email: joi.string().email(),
    birthday: joi.date()
})

module.exports = {
    symbolValidator,
    userValidator
};