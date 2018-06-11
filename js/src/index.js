/**
 * Created by hjx on 2/14/2018.
 */
import Koa from 'koa'
import router from './routers'
import { helloworld } from './controllers/helloworld.js'
import './db/db.js'

const app = new Koa()

const PORT = 3000

router.get('/', helloworld)

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT)
console.log(`Koa started on port ${PORT}`)
