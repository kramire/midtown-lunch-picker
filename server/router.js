const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('/locationDetails/:id', ctrl.getLocation);

router.get('/reviews/:id', ctrl.getReviews);

module.exports = router;