const express = require(`express`);
const postsController = require(`../controllers/postsController`);
const checkPostExists = require(`../middlewares/checkPostExists`);
const router = express.Router();

// Index
router.get(`/`, postsController.index);

// Show
router.get(`/:id`, checkPostExists, postsController.show);

// Create
// router.post("", postsController.create);

// Update 
// router.put(`/:id`, checkPostExists, postsController.update );

// Modify
// router.patch(`/:id`, checkPostExists, postsController.modify)

// Delete
router.delete(`/:id`, checkPostExists, postsController.destroy);

module.exports = router;