/**
 * Created by Administrator on 2018/6/11.
 */
import Router from 'koa-router'
import activityController from '../modules/activity/controller.js'
const router = Router()

router.post('/create', activityController.create)
router.get('/list', activityController.getList)

export default router