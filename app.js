const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');


app.get("/",(req,res)=>{
    const days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    const date=new Date();
    const today=date.getDay();
    res.render("list",{day:days[today]});
})





app.listen(3000,()=>{
    console.log("server started at port 3000");
})