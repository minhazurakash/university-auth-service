import express from 'express'
import userController from './user.controller'

const userRouter = express.Router()

userRouter
  .get('/', userController.getUsers)
  .post('/create', userController.createUser)

export default userRouter
