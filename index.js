const express = require('express');
const port = 3000;
const app = express();
app.use(express.static('assets'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log("Website is live at http://localhost:"+port);
});