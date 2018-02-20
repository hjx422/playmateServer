/**
 * Created by hjx on 2/14/2018.
 */
import Koa from 'koa'
import Router from 'koa-router'
import { helloworld } from './controllers/helloworld.js'

const app = new Koa()
const router = new Router()

const PORT = 3000

router.get('/', helloworld)

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT)
console.log(`Koa started on port ${PORT}`)
