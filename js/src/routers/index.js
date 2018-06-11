/**
 * Created by Administrator on 2018/6/10.
 */
import Router from 'koa-router'
import activity from './activity.js'

const router = Router()

router.use('/activity', activity.routes(), activity.allowedMethods())

export default router
