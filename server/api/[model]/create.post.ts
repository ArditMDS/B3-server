export default defineEventHandler ( async (event) => {
        const {id, title} = await readBody(event)
        return {created: 'posts', title, id}
    }
)