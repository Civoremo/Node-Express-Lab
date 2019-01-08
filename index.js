// import your node modules
const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');

// add your server code starting here

const server = express();
server.use(cors());
server.use(express.json());

server.get('/api/posts', (req, res) => {
    db.find()
        .then(posts => {
            res.status(200).json({ posts });
        })
        .catch(err => {
            res.status(500).json({ error: 'The posts information could not be retrieved.' });
        });
});

server.get('/api/posts/:id', (req, res) => {
    const id = req.params.id;
    db.findById(id)
        .then(post => {
            if(post.length !== 0) {
                res.status(200).json( { post } );
            } else {
                res.status(404).json({ message: 'The post with the specified ID does not exist.' });
            }
        })
        .catch(err => {
            res.status(500).json({ error: "The post information could not be retrieved." });
        });
});

server.post('/api/posts', (req, res) => {
    const {title, contents} = req.body;
    
    if(title && contents) {
        db.insert(req.body)
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                res.status(500).json({ error: "There was an error while saving the post to the database" })
            });
    } else {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
    }
});

server.delete('/api/posts/:id', (req, res) => {
    const id = req.params.id;

    db.findById(id)
        .then(post => {
            if(post && post.length !== 0) {
                db.remove(id)
                    .then(result => {
                        res.status(200).json(post);
                    })
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." })
            }
        })
        .catch(err => {
            res.status(500).json({ error: "The post could not be removed" });
        });
});

server.put('/api/posts/:id', (req, res) => {
    const id = req.params.id;
    const {title, contents} = req.body;

    db.findById(id)
        .then(post => {
            if(post.length === 0) {
                res.status(404).json({ message: "The post with the specified ID does not exist." });
            }
            else if(title && contents) {
                db.update(id, req.body)
                    .then(result => {
                        res.status(200).json(result);
                    })
                    .catch(err => {
                        res.status(500).json({ error: "The post information could not be modified." });
                    });
            } else {
                res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
            }
        })    
})

server.listen(5000, () => console.log('server running'));