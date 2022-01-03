const express = require("express");
const app = express();
const port = process.env.PORT || 3400;
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
var session = require('express-session');

app.set("view engine", "ejs");
app.use(session({
    secret: 'random string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))


app.get("/", (req, res) => {
    let user = "";
    let punctuation = '';
    if(req.session && req.session.username){
        user = req.session.username;
        punctuation = ',';
    }
    res.render("index", {user: user, punctuation: punctuation});
})

app.post("/signup", (req, res) => {
    const valid_user = [
        {"name": 'dillon', "password": '123'}
    ];
    const user = req.body.username;
    const password = req.body.password;

    const found_user = valid_user.find(usr =>{
        return usr.name == user && usr.password == password
    });

    if(found_user){
        req.session.username = user;
        res.render('start', {user: user});
    } else {
        req.session.destroy(()=>{
            console.log("Invalid Log In Try Again");
        })
        res.redirect('/')
    }
})

app.get("/start", (req, res) => {
    res.render('start')
})
app.get("/fantasy", (req, res) => {
    res.render('fantasy')
})

//dragon fantasy
app.get("/dragon", (req, res) => {
    res.render('dragon')
})
app.get("/dragon/friend", (req, res) => {
    res.render('dragonfriend')
})
app.get("/dragon/battle", (req, res) => {
    res.render('battledragon')
})

//troll fantasy
app.get("/trolls", (req, res) => {
    res.render('trolls')
})
app.get("/trolls/daytime", (req, res) => {
    res.render('daytime')
})
app.get("/trolls/nighttime", (req, res) => {
        res.render('nighttime')
})

//witches fantasy
app.get("/witches", (req, res) => {
    res.render('witches')
})
app.get("/witches/runaway", (req, res) => {
    res.render('runaway')
})
app.get("/witches/fight", (req, res) => {
    res.render('fight')
})


app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})