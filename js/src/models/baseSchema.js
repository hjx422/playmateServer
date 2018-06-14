/**
 * Created by Administrator on 2018/6/14.
 */
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BaseSchema = new Schema({
  createTime: {
    type: Date,
    dafault: Date.now()
  },
  updateTime: {
    type: Date,
    dafault: Date.now()
  }
})

BaseSchema.pre('save', function(next) {
  if (this.isNew) {
    this.createTime = this.updateTime = Date.now()
  } else {
    this.updateTime = Date.now()
  }
  next()
})

export default BaseSchema
