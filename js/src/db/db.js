/**
 * Created by Administrator on 2018/6/10.
 */
import mongoose from 'mongoose'
import Config from '../config/index.js'

mongoose.Promise = global.Promise

/**
 * 连接成功
 */
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection open to ${Config.db.url}`)
})

/**
 * 连接失败
 */
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`)
})

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose connection disconnected`)
})

mongoose.connect(Config.db.url)

export default mongoose
