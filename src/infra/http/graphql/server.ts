import { createSchema, createYoga} from "graphql-yoga";

const usersMock = [{
    id: 1,
    name: "user1",
    email: "user1@email.com"
},
{
    id: 2,
    name: "user2",
    email: "user2@email.com"
},
{
    id: 3,
    name: "user3",
    email: "user3@email.com"
},
{
    id: 4,
    name: "user4",
    email: "user4@email.com"
},
{
    id: 5,
    name: "user5",
    email: "user5@email.com"
},]
const productsMock = [{
        id: 1,
        name: "Product1",
        price: 10,
        quantity: 5
    },
    {
        id: 2,
        name: "Product2",
        price: 10,
        quantity: 5
    },
    {
        id: 3,
        name: "Product3",
        price: 10,
        quantity: 5
    },
]

const schema = createSchema({
    typeDefs: `
        type User {
            id: ID!
            name: String!
            email: String!
        }
        type Product {
            id: ID!
            name: String!
            price: Float!
            quantity: Int!
        }
        type Query {
            hello: String!
            users: [User!]!
            products: [Product!]!
            product(id:ID): Product!
            user(id:ID): User!
        }
        type Mutation {
            createUser(name: String!, email: String!): User
            createProduct(name: String!, price: Float!, quantity: Int!): Product
        }
            `,
    resolvers: {
        Query: {
            hello: () => 'world',
            users: () => {
                return usersMock;
            },
            products: () => {
                return productsMock
            },
            product: (_, { id }) => {
                return productsMock.find((product) => product.id == Number(id));
            },
            user: (_, { id }) => {
                return usersMock.find((user) => user.id == Number(id));
            }
        },

        Mutation: {
            createUser: async (_, { name, email }) => {
                //Same thing thats is being done on resolver.ts
                console.log(name, email)
                return {
                    id:1,
                    name: name,
                    email: email
                }
            },
            createProduct: async (_ ,{name, price, quantity}) => {
                console.log(name, price, quantity);
                return {
                    id: 1,
                    name: name,
                    price: price,
                    quantity: quantity,
                }
            }
        }
    },
});

export const serverGraphQL = createYoga({
    schema,
})