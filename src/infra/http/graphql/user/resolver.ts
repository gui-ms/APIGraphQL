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

// Define queries

const resolver = {
    Query: {
        user: (_, { id }) => {
            return usersMock.find((user) => user.id == Number(id));
        },
        users: () => {
            return usersMock;
        },
    },
    
    Mutation: {
        createUser: async(_, {name, email}) => {
            console.log(name, email)
            return {
                id: 1,
                name: 'John',
                email: ''
            }
        }
    },
}
// Define mutations

export default resolver


