export default defineEventHandler ( async (event) => {
        const {id, title} = await readBody(event)
        return {deleted: 'posts', title, id}
    }
)