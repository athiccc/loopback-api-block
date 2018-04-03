let loopback = require('loopback');
let app = loopback();

app.listen(3000);

app.get('/', (req, res) => {
    res.send('Hi')
})