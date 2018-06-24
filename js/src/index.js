/**
 * Created by hjx on 2/14/2018.
 */
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from 'koa-cors'

import router from './routers'
import './db/db.js'

const app = new Koa()

const PORT = 3000

// 配置数据解析中间件
app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }))

app.use(cors())

// 配置路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('error', err)
})

app.listen(PORT)
console.log(`Koa started on port ${PORT}`)
