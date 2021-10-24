const express = require('express');
const cors = require("cors");
const { json } = require('express');

const app = express();

app.use(cors());
app.use(express.json());


const port = 5000;
const users = [

    { id: 0, name: "rifat 1", email: "rifat1@gmail.com" },
    { id: 1, name: "rifat", email: "rifat@gmail.com" },
    { id: 2, name: "rupok", email: "rupok@gmail.com" },
    { id: 3, name: "rafi", email: "rafi@gmail.com" },
    { id: 4, name: "shihab", email: "shihab@gmail.com" },
    { id: 5, name: "abir", email: "abir@gmail.com" },
    { id: 6, name: "shaiful", email: "shaiful@gmail.com" }
]

app.get('/users', (req, res) => {

    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.post('/users', (req, res) => {
    const newuser = req.body;
    newuser.id = users.length;
    users.push(newuser);
    console.log("hitted", req.body);
    //res.send(JSON.stringify(newuser));
    res.json(newuser);

})

app.listen(port, () => {
    console.log('listening to port', port);
})