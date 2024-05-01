import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, successLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    successLogger.info('DB connected!')
    app.listen(config.port, () => {
      successLogger.info(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('DB not connected!', error)
  }
}

main()
