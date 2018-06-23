/**
 * Created by Administrator on 2018/6/10.
 */
import activityService from './service.js'

const activityController = {}

activityController.create = async (ctx, next) => {
  const activity = ctx.request.body || {}
  await activityService.create(JSON.parse(activity))
  ctx.body = {
    sucess: true
  }
}

activityController.getList = async (ctx, next) => {
  const params = ctx.request.query
  const list = await activityService.getList(params.maxId, parseInt(params.limit))
  ctx.body = list
}

export default activityController
