var amqp = require('amqplib/callback_api');

var Rabbithole = function(config) {

  this.connect = (cb) => {

    console.log(`connecting to ${config.connectionString}...`);
    amqp.connect(config.connectionString, (err, conn) => {

      console.log(`connected! creating channel..`);
      conn.createChannel((err, ch) => {
        cb(err, ch);
      });
    })
  };

  this.send = (queue, payload, cb) => {
    this.connect((err, ch) => {

      var content = new Buffer(JSON.stringify(payload));

      ch.assertQueue(queue, {}).sendToQueue(queue, content);

      console.log('Send payload to queue!');
      cb('Send payload to queue!');
    });
  };

}

function create(config) {
  return new Rabbithole(config);
}

module.exports.create = create;
