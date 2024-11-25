const express=require('express')
const app=express();
const jwt=require('jsonwebtoken')

app.use(express.json())
require('dotenv').config()

const posts=[
    {
        "name":"cbit"
    },
    {
        "name":"mgit"
    }
]

app.post('/',(req,res)=>{
    const username=req.body.name;
    const acesstoken = jwt.sign({name:username},process.env.ACCESS_TOKEN)
    res.json({"accesstoken":acesstoken});
})

app.get('/login',(req,res)=>{
    const ah=req.headers.auth;
    if (!ah){
        res.send("not found")
    }
    const token=ah.split(" ")[1]
    try{
        const verified=jwt.verify(token,process.env.ACCESS_TOKEN)
        const match=posts.filter(post=>post.name===verified.name)
        if (match){
            res.send(match)
        }
        else{
            res.send("not found")
        }
    }
    catch(error){
        res.send("invalid")
    }
})

app.listen(3000,()=>{
    console.log("server is ruuning ");
})

