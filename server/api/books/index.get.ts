export default defineEventHandler((event) => {

    const { count } = getQuery(event)

    // @ts-ignore
    const countAsNumber = parseInt(count) || 1
    const books = []

    for (let i = 0; i < countAsNumber; i++) {
        books.push(
            {
                thumbnail: $faker.image.urlPicsumPhotos(),
                id: $faker.number.int({ min: 1, max: 1000 }),
                title: $faker.lorem.lines(1),
                body: $faker.lorem.paragraphs(3),
                price: $faker.number.int({ min: 10, max: 30 }),
                rating: $faker.number.int({ min: 1, max: 5 }),
                author: $faker.person.fullName(),
                publishDate: $faker.date.past(),
            }
        )
    }

    return { countAsNumber, books }

});