/**
 * Created by Administrator on 2017/9/3.
 */
const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

const PORT = 3000

router.get('/', (ctx, next) => {
    ctx.body = 'Hello World!'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT)
console.log(`Koa started on port ${PORT}`)
