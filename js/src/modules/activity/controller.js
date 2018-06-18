/**
 * Created by Administrator on 2018/6/10.
 */
import activityService from './service.js'

const activityController = {}

activityController.create = (ctx, next) => {
  const activity = ctx.request.body || {}
  try {
    activityService.create(JSON.parse(activity))
    ctx.body = {
      sucess: true
    }
  } catch (e) {
    ctx.body = {
      sucess: false
    }
  }
}

activityController.getList = async (ctx, next) => {
  try {
    const params = ctx.request.query
    const list = await activityService.getList(params.maxId, parseInt(params.limit))
    ctx.body = list
  } catch (e) {
    ctx.body = e
  }
}


export default activityController
