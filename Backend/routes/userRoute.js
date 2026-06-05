const express = require("express");
const usercontroller = require("../controllers/userController");
const userAuth = require("../middleware/userAuth");
const isAdmin = require("../middleware/isAdmin");

const userRoutes = express.Router();

userRoutes.post("/signup", usercontroller.signup);
userRoutes.post("/signin", usercontroller.signin);
userRoutes.put("/update/:id",userAuth,usercontroller.updateUser);
userRoutes.get("/viewprofile/:id",userAuth,usercontroller.viewProfile);
userRoutes.get("/viewprofileall",userAuth,isAdmin,usercontroller.viewProfileAll);
userRoutes.delete("/deleteuser/:id",userAuth,usercontroller.deleteUser);
userRoutes.get("/profile", userAuth, usercontroller.profile);
module.exports = userRoutes;