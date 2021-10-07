var express = require('express');
var router = express.Router();
var postController = require("../Controllers/PostController");
var validator = require("express-joi-validation").createValidator({  passError: true });
var {postSchema, paramSchema } = require("../Models/Validation/Post");



const joiErrors = function(err,req, res, next){
  if (err && err.error && err.error.isJoi) {

    // console.log(err.error)
    const errors = [];

    err.error.details.forEach(err => {
      const error = {}
      error.field = err.message.split("\"")[1];
      error.message = err.message.split("\" ")[1]
      errors.push(error)
    });


    // we had a joi error, let's return a custom 400 json response
    res.status(400).json(errors);
  } else {
    // pass on to another error handler
    next(err);
  }
}



/* GET users listing. */
router.get('/posts', postController.getAllPosts );

/* POST to create user. */
router.post('/posts', validator.body(postSchema), joiErrors, postController.createPost );

/* PUT/PATCH to update user. */
// router.put('/posts/:id', validator.params(postSchema), postController.updatePost );
// router.patch('/posts/:id', validator.params(postSchema), postController.updatePost );


/* DELELTE to delete user. */
// router.delete('/posts/:id', postController.deletePost );



module.exports = router;
