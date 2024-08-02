import { createSchema, createYoga} from "graphql-yoga";
import resolvers from "./resolvers";
import typeDefs from "./schema";



const schema = createSchema({
    typeDefs,
    resolvers
})



export const serverGraphQL = createYoga({
    schema,
})