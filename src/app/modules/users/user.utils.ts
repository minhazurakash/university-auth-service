import { User } from './user.model'

const getLastUserId = async (): Promise<string> => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}

export const generatedId = async () => {
  const firstId = (0)?.toString()?.padStart(5, '0')
  const currentId = (await getLastUserId()) || firstId
  const incrementalId = (Number(currentId) + 1)?.toString()?.padStart(5, '0')
  return incrementalId
}
