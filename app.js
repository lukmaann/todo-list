const express=require("express");
const bodyParser=require('body-parser');
const date=require(__dirname+'/date.js');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));

let todolist=["eat","sleep","code"];
let workList=[];

let today=date.getDay();
app.get("/",(req,res)=>{
    res.render("list",{list:todolist,title:today});
})

app.post("/",(req,res)=>{
    const newItem=req.body.additem;
    const listname=req.body.list;

    if(listname=="work"){
        workList.push(newItem);
        res.redirect('/work');
    }else{
        todolist.push(newItem);
        res.redirect("/");
    }


   
})

app.get("/work",(req,res)=>{
    res.render('list',{list:workList,title:"work"});
    
    

})



app.listen(3000,()=>{
    console.log("server started at port 3000");
})