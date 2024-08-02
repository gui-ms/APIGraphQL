import { resolve } from "path";

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

const resolver = {
    Query: {
        product: (_, { id }) => {
            return productsMock.find((product) => product.id == Number(id));
        },
        products: () => {
            return productsMock;
        },
    },
    
    Mutation: {
        createProduct: async (_ ,{name, price, quantity}) => {
            console.log(name, price, quantity);
            return {
                id: 1,
                name: name,
                price: price,
                quantity: quantity,
            }
        }
    },
}

export default resolver;