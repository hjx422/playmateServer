/**
 * Created by Administrator on 2018/6/7.
 */
import mongoose from 'mongoose'
import 'mongoose-schema-extend'

import BaseSchema from '../../models/baseSchema.js'

const ActivitySchema = BaseSchema.extend({
  title: String,
  type: String,
  time: Date,
  location: String,
  personsLimit: Number,
  description: String
})

const ActivityModel = mongoose.model('Activity', ActivitySchema)

export default ActivityModel
