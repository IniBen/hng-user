const express = require('express');
const userRouter = express.Router();

const { createNewUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userscontroller');

userRouter.post('/', createNewUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:user_id', getUserById);
userRouter.put('/:user_id', updateUserById);
userRouter.delete('/:user_id', deleteUserById);

module.exports = userRouter;