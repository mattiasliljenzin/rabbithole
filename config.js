var config = {};
config.rabbit = {}
config.rabbit.username = 'guest'
config.rabbit.password = 'guest'
config.rabbit.hostname = 'localhost';
config.rabbit.port = 5672;
config.rabbit.connectionString =
  `amqp://${config.rabbit.hostname}:${config.rabbit.port}`;
config.rabbit.httpTransport = 'http';
config.rabbit.httpPort = 15672;

module.exports = config.rabbit;
