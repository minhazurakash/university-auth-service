import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generatedId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // generating user id
  const userId = await generatedId()
  user.id = userId

  // set default pass
  if (!user.password) {
    user.password = config.default_user_pass
  }

  // creating user
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('User create failed')
  }
  return createdUser
}

const getUsers = async () => {
  const users = await User.find()
  return users
}

export default {
  createUser,
  getUsers,
}
