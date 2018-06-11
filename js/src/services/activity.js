/**
 * Created by Administrator on 2018/6/10.
 */
import ActivityModel from '../models/activity.js'

const activityService = {}

activityService.create = async (activity) => {
  const Activity = new ActivityModel(activity)
  return await Activity.save()
}

export default activityService
