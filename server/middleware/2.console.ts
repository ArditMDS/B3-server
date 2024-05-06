export default defineEventHandler((event) => {
    console.log('event', event.node.req.url)
})