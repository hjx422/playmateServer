/**
 * Created by Administrator on 2018/6/10.
 */
import ActivityModel from '../models/activity.js'

const activityService = {}

activityService.create = async (activity) => {
  const activityModel = new ActivityModel(activity)
  return await activityModel.save()
}

export default activityService
