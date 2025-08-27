const Joi = require('joi');

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.details.map(detail => ({
          field: detail.path[0],
          message: detail.message
        }))
      });
    }
    next();
  };
};

// Validation schemas
const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().min(2).max(50).optional(),
  lastName: Joi.string().min(2).max(50).optional()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const orderSchema = Joi.object({
  serviceId: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
  targetUrl: Joi.string().uri().required(),
  notes: Joi.string().max(500).optional()
});

const paymentSchema = Joi.object({
  amount: Joi.number().min(1).max(10000).required(),
  currency: Joi.string().valid('usd', 'aed', 'eur').default('usd'),
  paymentMethod: Joi.string().valid('stripe', 'paypal', 'nomod').default('stripe')
});

module.exports = {
  validate,
  registerSchema,
  loginSchema,
  orderSchema,
  paymentSchema
};
