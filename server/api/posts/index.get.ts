export default defineEventHandler((event) => {

    const { count } = getQuery(event)

    // @ts-ignore
    const countAsNumber = parseInt(count) || 1
    const posts = []

    for (let i = 0; i < countAsNumber; i++) {
        posts.push(
            {
                id: $faker.number.int({ min: 1, max: 1000 }),
                title: $faker.lorem.lines(1),
                content: $faker.lorem.paragraphs(3),
                rating: $faker.number.int({ min: 1, max: 5 }),
                author: $faker.person.fullName(),
                category: $faker.lorem.word(6)
            }
        )
    }

    return { countAsNumber, posts }

});