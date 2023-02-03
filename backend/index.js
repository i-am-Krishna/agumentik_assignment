const express = require("express");
const {connection} = require('./db/db');
const cors = require("cors")
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
 

app.use('/api/auth',authRouter);
app.use('/api/admin',adminRouter);
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.listen(port,async()=>{
    try {
        await connection;
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
    console.log(`backend runs at port no ${port}`)
})


//  wOZrHICaI6Qv9vxT

// mongodb+srv://iamkrishna:wOZrHICaI6Qv9vxT@cluster0.y7z7ajt.mongodb.net/agumentik?retryWrites=true&w=majority