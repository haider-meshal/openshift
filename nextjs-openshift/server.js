const express = require('express');
const next = require('next');
const path = require('path');
const session = require("express-session");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const { parse } = require("url");

const routes = require('./server_routes');
const ws = require('./server_ws');

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, quiet:true });
const handler = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
   const server = express()
   const api_router = express.Router();
   ws(api_router);
   server.disable('x-powered-by')
    .use(express.static('public', express.static(path.join(__dirname, 'public'))))
    .use(bodyParser.json())
    .use(bodyParser.text({type:'text/plain'}))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(session({
      secret: uuid.v1(),
      name: "sessionId",
      resave: true,
      saveUninitialized: true
    }))
    .use('/api', api_router)
    .use(handler)
    .listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port} - ${process.env.NODE_ENV}`)
    })
  })
