import { getApiDato } from "../models/index.models.js"
import { config } from "../config/configDotenv.js"
const { productDaoContainer } = await getApiDato(config.DB)

export const root = {
    getProducts: async () => {
        const products = await productDaoContainer.getAll()
        return products
    },
    addProduct: async ({ product }) => {
        const producto = await productDaoContainer.save(product)
        if (producto == 2) return { Message: "El producto  ya existe en la base de datos" }

        const respuesta = {
            Message: "Se agrego el producto con exito:",
            Producto: [producto]
        }
        console.log(respuesta)
        return respuesta
    },
    deleteProductById: async ({ _id }) => {
        const productDelete = await productDaoContainer.deleteByID(_id)
        return productDelete
    },
    getProductsById: async ({ _id }) => {
        const producto = await productDaoContainer.getByID(_id)
        if (producto == null) return { Message: "El producto no existe" }
        const respuesta = {
            Message: "El producto solicitado es:",
            Producto: producto
        }
        return respuesta
    }

}