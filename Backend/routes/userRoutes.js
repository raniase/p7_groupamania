const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController.js");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// S'inscrire
router.post("/signup", userController.signup);

// Se connecter
router.post("/login", userController.login);

// Route d'authentification
router.post("/currentUser", userController.currentUser);

// Récupérer tous les utilisateurs
router.get("/", auth, userController.getAllUsers);

// Récupérer un utilisateur
router.get("/:id", auth, userController.getOneUser);

// Modifier un utilisateur
router.put("/:id", auth, userController.updateUser);

// Modifier une photo de profil
router.put("/:id/updatePicture", auth, multer, userController.updateProfilPicture);

// Supprimer un photo de profil
router.put("/:id/deletePicture", auth, userController.deleteProfilPicture);

// Modifier un mot de passe
router.put("/:id/password", auth, userController.updatePassword);

// Supprimer un utilisateur
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;