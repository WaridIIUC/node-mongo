const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

const name = [{name: "karim"}, {name: "karim mia"}];
app.get('/', function (req, res) {
    // res.send('hello world Nodemon')

    const fruit = {
        product: 'ada',
        price: 50
    }

    res.send(fruit);
  })


  app.get('/users/:id', function (req, res) {
    const id = req.params.id;
    const nameU = name[id];
    res.send(nameU);
  })



app.listen(5000, () => console.log('Listening to port 5000'));