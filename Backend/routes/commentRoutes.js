const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const auth = require("../middleware/auth");

// Ajout d'un nouveau commentaire
router.post("/", auth, commentController.addComment);

// Récupérer les commentaires d'un post
router.get("/from/:id", auth, commentController.getCommentsFromPost);

// Modifier un commentaire
router.put("/:id", auth, commentController.modifyComment);

// Supprimer un commentaire
router.delete("/:id", auth, commentController.deleteComment);

// Liker ou disliker un commentaire
router.post("/like", auth, commentController.like);

// Récupérer les likes d'un commentaire
router.get("/:id/like", auth, commentController.getLikesFromComment);

module.exports = router;
