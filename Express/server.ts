import express from 'express';

const app = express();

app.use('get', (req, res) => {
    res.send('Hello World!');
})
app.listen(3000, (err)=>{
    console.log("Server started on port 3000");
});