import { Router } from "express";
export const router = Router();
import { logger } from "../../../logger.js";
import * as controllers from "../../controllers/product.controllers.js";

router.get("/", controllers.getAllProductsControllers)
router.get("/:id", controllers.getProductByIDController)
router.post("/", controllers.postSaveProductControllers)

// router.put("/:id", async (req, res) => {
//     const { id } = req.params;
//     const datoActualizado = req.body;
//     try {
//         const productoAActualizar = await productos.updateById(id, datoActualizado);
//         if (productoAActualizar == 1) {
//             res.json({
//                 message: "Complete los datos correctamente"
//             })
//         } else if (productoAActualizar != undefined) {
//             res.json({
//                 message: `El producto id:${id} Fue actualizado con exito`,
//                 response: productoAActualizar
//             })
//         } else {
//             res.json({
//                 message: `El id ${id}, no es un dato valido para actualizar`
//             })
//         }
//     } catch (error) {
//         res.status(500).send("Hubo un error en el Servidor")
//     }
// })


router.delete("/:id", controllers.deleteProductControlleres)






export const productRout = router