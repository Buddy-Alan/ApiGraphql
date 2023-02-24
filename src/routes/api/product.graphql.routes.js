import { Router } from "express";
import { productGraphqlController } from "../../controllers/product.controllers.graphql.js";
const graphRouter = Router()

graphRouter.use("/", productGraphqlController())

export default graphRouter