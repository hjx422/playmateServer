/**
 * Created by Administrator on 2017/9/3.
 */
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
    ctx.body = 'Hello, World!'
})

app.listen(3000)
console.log('Koa started on port 3000')
