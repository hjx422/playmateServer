/**
 * Created by Administrator on 2017/9/3.
 */
const Koa = require('koa')
const app = new Koa()
const PORT = 3001

app.use(ctx => {
    ctx.response.body = 'Hello, World!'
})

app.listen(PORT)
console.log(`Koa started on port ${PORT}`)
