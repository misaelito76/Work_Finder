const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');
const cors = require('cors');
const app = express();
//settings
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//routes
app.use('/api/jobs', require('./routes/jobs.routes'));
app.use('/users', require('./routes/users.routes'));
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});