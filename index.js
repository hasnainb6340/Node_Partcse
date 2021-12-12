const express=require('express');
const app=express();
var courses=[{
    id:1,
    name:"abc",
    book:"abc"
},{
    id:2,
    name:"abc",
    book:"abcd"
}
,{
    id:3,
    name:"abcd",
    book:"abc"
},
]
app.get("/", (req,res)=>{
res.send("Welcome to our Website");
});
app.get("/home",(req,res)=>{
    res.send(courses);
});
app.get("/home/:id",(req,res)=>{
    const course=courses.find(c=>c.id=parseInt(req.params.id))
    if(!course){ res.status(404).send("Error with id");}
    else{res.send(course);}
});
app.post("/home/",(req,res)=>{
const course={
    id:courses.length+1,
    name:req.params.name,
    book:req.params.book
}
courses.push(course);
res.send(course.book)
});
const port=process.env.port||3000
console.log(port)
app.listen(port,()=>console.log('Listening at ${port}-----------'));
