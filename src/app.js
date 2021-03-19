const express = require('express')
const bodyParser = require('body-parser')
const routesV1 = require('./routes/v1/index')
const app = express()

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));

app.use(function(req, res, next) {
    if (!req.header('Origin')) return next()
    res.setHeader("Access-Control-Allow-Origin", req.header('Origin'));
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//Routes
app.use('/v1', routesV1)

//Catch 404
app.use((req, res, next) => {
    return res.status(404).json({message: 'Endpoint not found'})
})

module.exports = app



