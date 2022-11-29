const data;
const Post;

const express = require('express');
const router = express.Router();

//creates a new post

//get a post by ID
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json("Error: " + err));
});

//delete a post by ID
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(() => res.json("Post deleted."))
        .catch(err => res.status(400).json("Error: " + err));
});

//updates a post by ID
router.post('/update/:id', (req, res) => (
    Post.findByID(req.params.id)
    .then(post => {
        post.name = req.body.name;
        post.content = req.body.content;
        post.save()
            .then(() => res.json("Post updated!"))
            .catch(err => res.status(400).json("Error" + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
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