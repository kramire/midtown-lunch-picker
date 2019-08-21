const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const router = require('./router');
require('dotenv').config()

const app = new Koa();

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes());

app.listen(4000, () => {console.log(`Listening on port 4000`)});