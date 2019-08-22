const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./router');
require('dotenv').config()

const app = new Koa();

const errorHandler = async (ctx, next) => {
  try {
    await next();
  }
  catch (e) {
    ctx.status = 404;
    ctx.body = `Error: ${e}`; 
  }
};

app
  .use(errorHandler)
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .listen(4000, () => {console.log(`Listening on port 4000`)});
