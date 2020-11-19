const express = require('express');
const bodyParser = require('body-parser');
const register = require('./registerService');
const login = require('./loginService');
const getProfile = require('./profileService.js')
const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require('constants');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post('/register', function(req, res){
    try
    {
        let error = false;
        if(req.body.email.isEmpty)
        {
            error = true;
            res.append('email not entered');
        }
        if(req.body.username.isEmpty)
        {
            error = true;
            res.append('username not entered');
        }
        if(req.body.password.isEmpty)
        {
            error = true;
            res.append('password not entered');
        }
        if(req.body.firstname.isEmpty)
        {
            error = true;
            res.append('firstname not entered');
        }
        if(req.body.lastname.isEmpty)
        {
            error = true;
            res.append('lastname not entered');
        }
        if(error)
        {
            throw new Error("error");
        }
        if(!register.register(req.body.email, req.body.username, req.body.password, req.body.firstname, req.body.lastname))
        {
            res.append('usename already used');
            throw new Error("error");
        }
    } catch(e)
    {
        console.log(e.stack);
        res.status(400).send("registration error ...");
    }
})

app.post('/login', function(req, res){
    try
    {
        if(login.login(req.body.username, req.body.password) == 1)
        {
            console.log("LOGIN SUCCESS");
        }
        else
        {
            //res.append('login failed');
            throw new Error("error");
        }
    } catch(e)
    {
        console.log(e.stack);
        res.status(400).send("login failed ...");
    }
})

app.post('/profile', async (req, res) => {
    console.log("getting profile content");
    res.setHeader('Content-Type', 'application/json');
    var profile = JSON.stringify(getProfile.getProfile('erjiang'));
    console.log(profile);
    res.end(JSON.stringify(getProfile.getProfile('erjiang')));
})

app.get('/getDaily', function(req, res){
    //establishes network connection with java server
    let net = require('net');
    function getDaily() {
        return new Promise(function (resolve, reject) {
            let client = net.connect(8000, 'localhost');
            client.setEncoding('utf8');
            client.on('data', function (data) {
                client.end();
                resolve(data);
            });
            client.on('error', function (err) {
                reject(err);
            });
        });
    }
    getDaily();
});

app.listen('5500', function(){
    console.log("server is running on port 5500");
})