const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended : true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username : "apnacollege",
        content : "I love coding"
    },
    {
        username : "Ajay",
        content : "I love Money"
    },
    {
        username : "Rohit",
        content : "I get selected for my 1st enternship"
    },
];

app.get("/posts",(req,res) =>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res) =>{
    res.render("new.ejs");
});

app.post("/posts",(req,res) =>{
    let {username , content} = req.body;
    res.send("post request working");
    posts.push({username,content});
});

app.listen(port,() => {
    console.log(`listning to port ${port}`)
})