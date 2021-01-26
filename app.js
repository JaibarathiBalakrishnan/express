const express = require ('express');
const bodyParser = require ('body-parser');

//@using of function expresstion in app
const app = express();


//@middle-ware for json objects
app.use (bodyParser.json());

//creating root route with default middleware function
app.get('/',(req,res,next) => {
    res.send('Welcome to Express Server');

})

//@express server listening to 3001
app.listen(3001);
console.log('Express Server is running');