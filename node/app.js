const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// config
app.use(bodyParser.json());
app.use(cors());

// routes
app.post('/api/user/login', (req, res) => {
    if(req.body.email === 'arber@gmail.com' && req.body.password === 'test123'){
        let token = jwt.sign({ id: Date.now(), email: req.body.email }, 'secret', { expiresIn: '36s' });
        res
            .status(200)
            .json({ message: 'Logged in successfully', token: token });
    }
    else
    {
        res
            .status(400)
            .json({ error: 'Invalid data' });
    }
});

const { TALENT, WORK, OFFER } = require('./data');

app.get('/api/home', (req, res) => {
    console.log(req.query);
    res.status(200).json({
        TALENT,
        WORK,
        OFFER
    })
});

const UserData = {
    name: "Arber Breznica",
    username: "abreznica",
    email: "arber@gmail.com",
    image: "https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png",
    hobbies: [
        "Football",
        "Coding",
        "Swimming",
        "Movies",
        "Hiking"
    ]
};

app.get('/api/user-data', (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'secret', (err) => {
        if(err){
            res.status(400).json({ error: 'Not authorized' });
        }
        else
        {            
            res.status(200).json({ data: UserData });
        }
    }); 
});


app.listen(8000, () => console.log(`App started in port: 8000`));