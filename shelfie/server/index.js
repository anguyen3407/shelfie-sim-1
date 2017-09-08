const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const ctrl = require('./controller');

require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => console.log(err));





const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));