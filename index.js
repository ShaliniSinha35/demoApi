const express=require("express")
const app =express()
const cors=require("cors")
app.use(cors())
const port=process.env.PORT || 3000;
const data=require("./data.json")

app.get("/demo/api",(req,res)=>{
    res.send(data)
})

app.listen(port,()=>{
    console.log("Run Perfectly")
})
