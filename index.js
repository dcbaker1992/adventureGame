const express = require("express");
const app = express();
const port = process.env.PORT || 3400;
app.use(express.static(__dirname + '/public'));





app.set("view engine", "ejs");

app.get("/", (req, res) => {
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