const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes/index')

// settings
app.set('port', process.env.PORT || 4000)
app.set('json spaces', 2)

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
     res.header('Access-Control-Allow-Credentials', 'true');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Methods');
     res.header('Access-Control-Allow-Methods', 'PUT, DELETE');
     next();
});
// routes
app.use('/api', routes);

// starting the server
app.listen(app.get('port'), () => {
     console.log(`Server on port ${app.get('port')}`);
});