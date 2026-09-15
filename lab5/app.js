import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send("<h1> Hello Express");
});

app.use("*",(req,res) => {
    res.send("Route not found");
});

app.listen(3000, ()=> console.log("Server is running at 3000"));