export default defineEventHandler((event) => {
    const token = getHeader(event, 'Authorization')
    const {url} = event.node.req

    if (url?.includes('/api')) {
        if (token !== 'secret') {
            setResponseStatus(event, 401)
            return { error: 'No auth' }
        }
    }

})