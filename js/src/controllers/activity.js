/**
 * Created by Administrator on 2018/6/10.
 */
import activityService from '../services/activity.js'

const activityController = {}

activityController.create = (ctx, next) => {
  const activity = ctx.request.body || {}
  try {
    activityService.create(activity)
    ctx.body = {
      sucess: true
    }
  } catch (e) {
    ctx.body = {
      sucess: false
    }
    return next
  }
}

activityController.getList = (ctx, next) => {
  ctx.body = 'what the fuck'
}


export default activityController
