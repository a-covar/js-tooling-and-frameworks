const express = require('express');
const app = express();
const data = require('./data.json');
const logger = require('morgan');

if(process.env.NODE_ENV !== 'test'){
  app.use(logger('combined'));
}

app.get('/api/items', function (req, res) {
  if(req.query.q === 'five'){
    let shortList = data.items.slice(0, 5);
    res.json({ items: shortList });
  } else {
    res.json(data);
  }
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.status(404).json(err);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

process.on('unhandledRejection', (reason, p) => {
  logger.error(`Possibly Unhandled Rejection at: Promise ${p} reason: ${reason}`);
});

module.exports = app;
