import koa from 'koa'
import Router from 'koa-router'
import http from 'http'

//Setting up web server
const app = new koa()
const server = http.createServer(app.callback())
server.listen(8181)
console.log('Server running in http://localhost:' + (process.env.PORT || 8181))

// Routes
const carsRouter = new Router({ prefix: '/cars' })
import { Cars } from './cars'
Cars(carsRouter)
app.use(carsRouter.routes())