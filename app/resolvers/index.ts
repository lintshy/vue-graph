import { readdirSync } from 'fs'

const targets = readdirSync('./app/resolvers').filter((name) => name.includes('resolver.ts'))

let resolvers: any = {
    Query: {},
    Mutation: {}
}
targets.forEach(target => {
    resolvers = {
        Query: { ...resolvers.Query, ...require('./' + target)?.default?.Query },
        Mutation: { ...resolvers.Mutation, ...require('./' + target)?.default?.Mutation }
    }
})

export default resolvers

