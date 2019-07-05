const http = require('http'); //To create server with node (default server)

const express = require('express');     //To import the express package

const app = express();              //To create the express appliction reference

// First middleware
// req=> for request
// res => for response
// next => to execute the next middleware function
app.use((req, res, next) => {
    console.log("calling first middleware function");
    next()              // TO call the next middleware 
});

// Next middleware
app.use((req, res, next) => {
    console.log("calling second middleware function");
    next();         //If your not sending response the middleware function use the next() to go to next middleware fuction.
});

app.use('/contact', (req, res, next) => {
    console.log("Calling contact url request");
    res.send(`
        <h1>Hello this is contact url</h1>
    `);
})


// To send the response for the url of '/'
app.use('/', (req, res, next) => {
    console.log("Calling root url request");
    res.send(`
        <h1>Hello this is root url</h1>
    `);
})


app.listen(3000, () => {
    console.log("Server listening at port 3000");
});

/* To create server using express app object */
// const server = http.createServer(app);
// server.listen(3000);