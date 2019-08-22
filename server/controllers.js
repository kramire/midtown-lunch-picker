const models = require('./models');

const getLocation = async (ctx, next) => {
  ctx.body = await models.getLocationDetails(ctx.params.id);
  ctx.status = 200;
  next();
};

const getReviews = async (ctx, next) => {
  ctx.body = await models.getReviews(ctx.params.id);
  ctx.status = 200;
  next();
};

module.exports = {
  getLocation,
  getReviews,
};