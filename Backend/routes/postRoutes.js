const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// Ajouter un nouveau post
router.post("/", auth, multer, postController.addPost);

// Récupérer tous les posts
router.get("/", auth, postController.getAllPosts);

// Modifier un post
router.put("/:id", auth, multer, postController.modifyPost);

// Supprimer un posta
router.delete("/:id", auth, postController.deletePost);

// Liker ou disliker un post
router.post("/like", auth, postController.like);

// Récupérer les likes d'un post
router.get("/:id/like", auth, postController.getLikesFromPost);

module.exports = router;
