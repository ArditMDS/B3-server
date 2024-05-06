export default defineEventHandler ((event) =>
    {
        const {count} = getQuery(event)
        const users = []
        // @ts-ignore
        const countAsNumber = parseInt(count) || 1

        for (let i = 0; i < countAsNumber; i++) {
            users.push({
                name: $faker.person.fullName(),
                gender: $faker.person.gender(),
                job: $faker.person.jobTitle(),
                email: $faker.internet.email(),
                phone: $faker.phone.number(),
                zodiac: $faker.person.zodiacSign(),
            })
        }
        return {countAsNumber, users}
    }
)