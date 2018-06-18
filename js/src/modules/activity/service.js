/**
 * Created by Administrator on 2018/6/10.
 */
import ActivityModel from './models.js'

const activityService = {}

activityService.create = async (activity) => {
  return new Promise((resolve, reject) => {
    ActivityModel.create(activity, (err, doc) => {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })   
  })
}

activityService.getList = async (maxId, limit = 10) => {
  return new Promise((resolve, reject) => {
    const query = ActivityModel.find()
    maxId && query.lt('_id', maxId)
    query.limit(limit).sort({'_id': -1}).exec((err, list) => {
      if (err) {
        reject(err)
      } else {
        resolve(list)
      }
    })
  })
}

export default activityService
