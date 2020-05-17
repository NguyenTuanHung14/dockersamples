const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('Hi Hung!');
})

const port = process.env.PORT || 8081;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
