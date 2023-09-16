const User = require('../models/users');

async function createNewUser(req, res, next) {
    try {
        const userInfo = req.body;
        const user = await User.create(userInfo);

        if (user) {
            return res.status(201).json({
                success: true,
                message: "user successfully created",
                user
            });
        }
    } catch(err) {
        next(err);
    }
}

async function getAllUsers(req, res, next) {
    try {
        const users = await User.find({});
        if (users) {
            return res.status(200).json({
                success: true,
                users
            })
        }
    } catch(err) {
        next(err);
    }
}

async function getUserById(req, res, next) {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        
        if (!user) return res.status(404).json({success: false, message: "user with such id does not exist"});

        return res.status(200).json({
            success: true,
            user
        });
        
    } catch(err) {
        next(err);
    }
}


async function updateUserById(req, res, next) {
    try {
        const { id } = req.params;
        const userInfo = req.body;

        const user = await User.findByIdAndUpdate(id, userInfo, {new: true});
        
        if (!user) return res.status(404).json({success: false, message: "user with such id does not exist"});

        return res.status(200).json({
            success: true,
            message: "user info successfully updated",
            user
        });
        
    } catch(err) {
        next(err);
    }
}

async function deleteUserById(req, res, next) {
    try {
        const { id } = req.params;
        const userInfo = req.body;

        const user = await User.findByIdAndDelete(id, userInfo, {new: true});
        
        if (!user) return res.status(404).json({success: false, message: "user with such id does not exist"});

        return res.status(200).json({
            success: true,
            message: "user successfully deleted"
        });
        
    } catch(err) {
        next(err);
    }
}

module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}