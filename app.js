const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();


/*var
app.use('/',(req,res,next) => {  //we can see the middleware function hre
    console.log("this always run");  
    next();
});
*/
app.use('/add-products',(req,res,next) => { //routing to different are written first so that if it is reverse than all dirb is on same homepage
    res.send('<body><form action="/product" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
});

app.post('/product',urlencodedParser,(req,res,next) =>{
    console.log(req.body)
    res.redirect('/'); // here all req will redirect ie get and post so for filtering instead of use app.use use app.post
});

app.use('/',(req,res,next) => {  //use is the middleware that handles and next travels to another function
    console.log("i am the second middleware");
    res.send('<h1>this is home page</h1>'); // exp uses send method instead of sethader or write and set default as txt/plain 
});


app.listen(3000); //shortcut for below 2 line code
//const server = http.createServer(app);
//server.listen(3000);
