/* eslint-disable */

const express = require('express');

const db = require('../db');

const app = express();

const PORT = process.env.PORT || 1122;

app.use(express.static('dist'));

// create table Users:
GET('/users/create', () => db.users.create());

// add a new user, if it doesn't exist yet, and return the object:
GET('/users/add/:name', req => {
    return db.task('add-user', t => {
        return t.users.findByName(req.params.name)
            .then(user => {
                return user || t.users.add(req.params.name);
            });
    });
});

// get all users:
GET('/users/all', () => db.users.all());

// Generic GET handler;
function GET(url, handler) {
    app.get(url, (req, res) => {
        handler(req)
            .then(data => {
                res.json({
                    success: true,
                    data
                });
            })
            .catch(error => {
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    });
}

app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello World!!" });
});

app.listen(PORT, () => console.log('Server OK'));
