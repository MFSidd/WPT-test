const express=require("express")

const router=express.Router()

const path=require("path")


router.get("/",(req,res)=>
{
    res.sendFile(path.join(process.cwd(),"/public/html.html"))
})


module.exports=router