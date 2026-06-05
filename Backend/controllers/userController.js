const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const usercontroller = {
   signup: async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: role || "user"
        });

        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        });
    }
   },
    signin: async (req, res) => {
        const { email, password } = req.body;
        try {
            if (!email || !password) {
                return res.status(400).json({
                    message: "All fields are required"
                })
            }
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({
                    message: "User not found"
                })
            }
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({
                    message: "incorrect password"
                })
            }
            const payload = {
                userId: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
           res.status(200).json({
                message: "login successful",
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });

        } catch (error) {
            return res.status(500).json({
                message: "internal server error"
            })

        }
    },
    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedData = req.body;

            // If password is being updated, hash it first
            if (updatedData.password) {
                updatedData.password = await bcrypt.hash(updatedData.password, 10);
            }

            const user = await User.findByIdAndUpdate(
                id,
                updatedData,
                { new: true }
            );

            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            res.status(200).json({
                message: "User updated successfully",
                user
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Server error"
            });
        }
    },
    viewProfile: async (req, res) => {
        try {
            const { id } = req.params;

            const user = await User.findById(id).select("-password");

            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({
                message: "Server error"
            });
        }
    },
    viewProfileAll: async (req, res) => {
        try {
            const allUsers = await User.find().select("-password");

            res.status(200).json({
                count: allUsers.length,
                users: allUsers
            });

        } catch (error) {
            res.status(500).json({
                message: "Error fetching users"
            });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;

            const user = await User.findByIdAndDelete(id);

            if (!user) {
                return res.status(404).json({
                    message: "User not found"
                });
            }

            res.status(200).json({
                message: "User deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                message: "Server error"
            });
        }
    },
    profile: async (req, res) => {
    try {
        // userId comes from your JWT middleware (userAuth)
        const user = await User.findById(req.user.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        });
    }
},
};


module.exports = usercontroller;