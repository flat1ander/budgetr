const express = require('express');
const app = express();
const port = 4000

app.set('view engine', 'ejs');

app.get('/budgets', (req, res) => {
    res.send("Hello World")
})















app.listen(4000, () => {
    console.log('Server listening on PORT 4000')
})



