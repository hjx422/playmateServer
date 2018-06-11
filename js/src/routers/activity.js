/**
 * Created by Administrator on 2018/6/11.
 */
import Router from 'koa-router'
import activityController from '../controllers/activity.js'
const router = Router()

router.post('/create', activityController.create)
router.get('/list', activityController.getList)

export default router