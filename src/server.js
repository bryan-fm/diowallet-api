import express from 'express';

const app = express();

app.get("/banheiro", (req,res) => {
    res.send("teste banheiro")
})

app.listen(5000, () => console.log('server listening in port 5000'));