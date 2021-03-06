require('dotenv').config({ path: './.env' })
var express = require('express');
const cors = require('cors');

var app = express();

const port = process.env.PORT || 3000;
app.use(cors()); 


app.use(express.json({limit: '50mb'}));

const conversationRoute = require('./routes/conversationRoute');
const webhookRoute = require('./routes/webhookRoute');
const speechRoute = require('./routes/speechRoute');
const sessionIDRoute = require('./routes/sessionIDRoute');
app.use('/api', conversationRoute);
app.use('/', speechRoute);
app.use('/', webhookRoute);
app.use('/', sessionIDRoute);

app.listen(port, () =>  { console.log(`App listening on port ${port}!`); });