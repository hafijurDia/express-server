const express = require('express');
const jobs = require('./jobs.json');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(cors())

app.get('/jobs', (req, res) => {
    res.send(jobs);
})

app.get('/jobs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('i need data for id: ', id);
    const job = jobs.find(job => job.id === id) || {};
    res.send(job);
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});