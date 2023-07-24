// Create web server
var express = require('express');
var router = express.Router();

// Require controller modules
var comment_controller = require('../controllers/commentController');
var post_controller = require('../controllers/postController');

// GET request for creating a comment. This must come before routes that display comment (uses id).
router.get('/comment/create', comment_controller.comment_create_get);

// POST request for creating comment.
router.post('/comment/create', comment_controller.comment_create_post);

// GET request to delete comment.
router.get('/comment/:id/delete', comment_controller.comment_delete_get);

// POST request to delete comment.
router.post('/comment/:id/delete', comment_controller.comment_delete_post);

// GET request to update comment.
router.get('/comment/:id/update', comment_controller.comment_update_get);

// POST request to update comment.
router.post('/comment/:id/update', comment_controller.comment_update_post);

// GET request for one comment.
router.get('/comment/:id', comment_controller.comment_detail);

// GET request for list of all comment items.
router.get('/comments', comment_controller.comment_list);

/// POST request to create a post
router.post('/post/create', post_controller.post_create_post);

/// POST request to delete post.
router.post('/post/:id/delete', post_controller.post_delete_post);

/// POST request to update post.
router.post('/post/:id/update', post_controller.post_update_post);

// GET request for one post.
router.get('/post/:id', post_controller.post_detail);

// GET request for list of all post items.
router.get('/posts', post_controller.post_list);

module.exports = router;