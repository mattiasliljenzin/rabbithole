const AMQPStats = require('amqp-stats'); // https://github.com/timisbusy/node-amqp-stats/blob/master/index.js

var Stats = function(config) {

  const url = `${config.hostname}:${config.httpPort}`;
  const stats = new AMQPStats({
    username: config.username || 'guest', // default: guest
    password: config.password || 'guest', // default: guest
    hostname: url || 'localhost:5672', // default: localhost:5672
    protocol: config.httpTransport || 'http' // default: http
  });

  this.overview = (cb) => {
    send(cb, 'overview');
  };

  this.queues = (cb) => {
    send(cb, 'queues');
  };

  this.whoami = (cb) => {
    send(cb, 'whoami');
  };

  this.test = (cb) => {
    stats.getQueue("/", "demo.queue.dead.one", (err, res, data) => {
      console.log(err);
      console.log();
      cb(data);
    });
  };

  var send = (cb, arg) => {
    stats[arg]((err, res, data) => {
      if (err) {
        throw err;
      }
      cb(data);
    });
  };

}

function create(config) {
  return new Stats(config);
}

module.exports.create = create;
