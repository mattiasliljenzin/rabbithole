const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const config = require('./config');
const statsRouter = require("./routes/statsRouter.js");
const rabbitRouter = require("./routes/rabbitRouter.js");
const defaultRouter = require("./routes/defaultRouter.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/', defaultRouter);
app.use('/stats', statsRouter);
app.use('/rabbit', rabbitRouter);

var server = app.listen(3000, function() {
	console.log("Listening on port %s...", server.address().port);
});
