const express = require('express');
const path = require("path");
const hbs=require("hbs");
const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname , "../public");
const TemplatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",TemplatePath);
hbs.registerPartials(partialPath);

app.get("/" , (req,res) => {
    res.render("index")

})
app.get("/about" , (req,res) => {
    res.render("about")

})
app.get("/weather" , (req,res) => {
    res.render("weather")

})
app.get("*" , (req,res) => {
    res.render("error" , {
        errorMsg:"Oops Page Not Found"

    })

})
app.listen(port ,()=> {
    console.log(`listening at port ${port}`)
});