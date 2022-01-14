const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Welcome to CORS server ')
})
app.get('/books', (req, res) => {
    var fs = require('fs');
    var tasks = JSON.parse(fs.readFileSync('books.json', 'utf8'));
    // tasks = ["Ford", "BMW", "Fiat"];
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "items": JSON.stringify(tasks)})
    })

app.listen(PORT, () => {
    console.log('listening on port 8081')
})