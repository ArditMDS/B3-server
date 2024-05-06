export default defineEventHandler ((event) => {
        const {id, model} = getRouterParams(event)
        return {model, id, deleted: true}
    }
)