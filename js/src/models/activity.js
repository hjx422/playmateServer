/**
 * Created by Administrator on 2018/6/7.
 */
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ActivitySchema = new Schema({
  title: String,
  type: String,
  time: Date,
  location: String,
  personsLimit: Number,
  description: String
})

const Activity = mongoose.model('Activity', ActivitySchema)

export default Activity
