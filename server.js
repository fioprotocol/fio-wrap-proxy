const express = require('express')
const cors = require('cors');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = express.Router();

app.use(cors({ origin: '*' }));


router.use(
  '/v1/chain/:url',
  createProxyMiddleware({
    target: 'http://35.81.84.194:8889/v1/chain/',
    changeOrigin: true,
    pathRewrite: {
      [`^/fio-backend/v1/chain`]: '',
    },
  }),
);

router.use(
  '/:url',
  createProxyMiddleware({
    target: 'https://api-staging-wrap-status-backend.fioprotocol.io/',
    changeOrigin: true,
    pathRewrite: {
      [`^/fio-backend`]: '',
    },
  }),
);

app.use('/fio-backend', router);

app.listen('8008');
