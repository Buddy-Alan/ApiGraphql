import { buildSchema } from "graphql"
import { graphqlHTTP } from "express-graphql"
import { root } from "../services/products.service.graphql.js"
const grapSchema = buildSchema(`

        type Product {
        _id: String,
        timestamp:String,
        title:String,
        price:Int,
        thumbnail: String,
        descripcion: String,
        stock: Int,
        codigo:String
    }
    type Message {
        Message: String
        Producto: [Product]
    }
    input ProductInput {
        title:String,
        price:Int,
        thumbnail: String,
        descripcion: String,
        stock: Int,
        codigo:String
    }
    type Query {
        getProducts: [Product],
        getProductsById(_id:String): Message
    }
    type Mutation {
        addProduct(product:ProductInput): Message,
        deleteProductById(_id:String): String
    }
`)

export const productGraphqlController = () => {
    return graphqlHTTP({
        schema: grapSchema,
        rootValue: root,
        graphiql: true
    })
}