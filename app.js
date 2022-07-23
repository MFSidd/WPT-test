const express = require('express')
const app = express() // create  instance of express js where app is a object of express
const port = process.env.PORT || 3000
// const emp=require("./routes/employee")
// const per=require("./routes/person")
 const ind=require("./routes/index")
const path=require("path")


app.use(express.static(path.join(__dirname,"/public")))
app.use("/",ind)
// app.use("/emp",emp)
// app.use("/per",per)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})