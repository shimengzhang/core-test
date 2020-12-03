const Koa = require('koa')
const Router = require('koa-router')
const boderparser = require('koa-bodyparser')

const app = new Koa()

const router = new Router()

router.get('/api/list', async (ctx, next)=>{
  const requestOrigin = ctx.request.header.origin
  ctx.set('Access-Control-Allow-Origin', requestOrigin)
  ctx.set('Access-Control-Allow-Credentials', 'true')
  ctx.body = {
    list: [1,2,3]
  }
})

app.use(boderparser())
app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is listening on port 3000 ...')
})