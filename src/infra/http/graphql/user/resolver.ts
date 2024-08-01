// Define queries

const resolver = {
    Query: {
        user: async (_, {id}) => {
            console.log(id)
            return {
                id: 1,
                name: 'John',
                email: 'john@email.com'
            }
        }
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


