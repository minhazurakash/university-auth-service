import path from 'path'
import winston from 'winston'

const successLogger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success'),
    }),
  ],
})

const errorLogger = winston.createLogger({
  level: 'error',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error'),
    }),
  ],
})

export { successLogger, errorLogger }
