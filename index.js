const express=require("express")
const app=express()
const port=4000;
const emp=[{id:1,name:"ravi",age:"28"},{id:2,name:"dhanu",age:"22"}]
const students=require("./data.js")
const cors=require("cors")
app.use(cors())

app.get("/",(req,res)=>{
	res.send("good morning hello")
})
app.get("/user",(req,res)=>{
	res.send("how are you")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/students",(req,res)=>{
	res.json(students)
})

app.listen(port,()=>console.log("server is in port 4000"))