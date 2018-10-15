//Request json file
let carsList = require('./cars.json')

//Receives koa-router as parameter
export const Cars = (router) => {
    //Using router, you can create any type of request you want
    //get, post, patch, delete and so on...
    router.get('/', (ctx) => {
        ctx.body = carsList
    })
}