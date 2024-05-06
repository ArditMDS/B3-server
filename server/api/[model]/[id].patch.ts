export default defineEventHandler ( async (event) => {
        const {id, model} = getRouterParams(event)
        const body = await readBody(event)
        return {model, id, body, updated: true}
    }
)