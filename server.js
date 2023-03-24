const express = require('express');
const app = express();
const port = 4000
const budget = require('./models/budget');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:false }));
app.use(express.static('public'));

app.get('/budgets', (req, res) => {
    res.render('index.ejs', {budget})
})

app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
})

app.get('/budgets/:index', (req, res) => {
    const budgetItem = budget[req.params.index]
    res.render('show.ejs', {budgetItem})
})

app.post('/budgets', (req, res) => {
    budget.unshift(req.body);
    res.redirect('/budgets')
})











app.listen(4000, () => {
    console.log('Server listening on PORT 4000')
})



