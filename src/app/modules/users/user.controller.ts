import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUser(req.body)
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User created failed',
      data: null,
    })
  }
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers()
    res.status(200).json({
      success: true,
      message: 'User fetch successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'User fetch failed',
      data: null,
    })
  }
}

export default {
  createUser,
  getUsers,
}
