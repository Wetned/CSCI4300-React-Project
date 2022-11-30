// const data;
// const Post;
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/user");
const Post = require("../models/post")
const { db } = require("../models/user");
const { application } = require("express");
// const router = require('express').Router();

const express = require('express');
const router = express.Router();

//Adds new posts
router.post("/add", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description
  })
  newPost.save()
  .then(post => res.json(post))
  .catch(err => res.status(400).json("Error! " + err))
})

//Gets all posts
router.get('/', async (req, res) => {
  Post.find()
  .then(posts => res.json(posts))
  .catch(err => res.status(400).json('Err: ' + err));
  });


//delete a post by title
router.delete('/delete/:title', async (req, res) => {
    Post.findOneAndDelete({title:req.params.title})
        .then(() => res.json("Post deleted."))
        .catch(err => res.status(400).json("Error: " + err));
});

//updates a post by title
router.post('/update/:title', async (req, res) => (
    Post.findOne({title:req.params.title})
    .then(post => {
        post.title = req.body.title,
        post.description = req.body.description
        post.save()
            .then(() => res.json("Post updated!"))
            .catch(err => res.status(400).json("Error" + err));
    })
));


/*
const express = require('express');
const { check } = require('express-validator');

const postsControllers = require('../controllers/post-controller');

const router = express.Router();

router.get('/:pid', postsControllers.getPostById);

router.get('/user/:uid', postsControllers.getPostsByUserId);

router.post(
  '/',
  [
    check('title')
      .not()
      .isEmpty()
  ],
  postsControllers.createPost
);

router.patch(
  '/:pid',
  [
    check('title')
      .not()
      .isEmpty()
  ],
  postsControllers.updatePost
);

router.delete('/:pid', postsControllers.deletePost);

module.exports = router;
*/
module.exports = router;