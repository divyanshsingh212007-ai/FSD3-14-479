import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send("<h1> Hello Express");
});

app.get('/about', (req,res)=> {
    res.send("We are FSD Developer")
})

app.post('/login',(req,res) => {
    res.send({msg:'User login'})
})

app.put('/user/update/1',(req,res) => {
    res.send({msg:'User Update'})
})

app.delete('/user/1',(req,res) => {
    res.send({msg:'remove user 1'})
})

app.use((req,res)=> {
    res.status(404).send("Not Found")
})


app.listen(3000, ()=> console.log("Server is running at 3000"));