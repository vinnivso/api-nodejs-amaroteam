import express from "express"
import { ProductsDatabase } from "../data/ProductsDatabase"

export class EndpointCreateProduct {
  async createProduct(request: express.Request, response: express.Response):Promise<void> {
    try {
      const {name, tags} = request.body

      if ((typeof name !== "string" || name === "") || (typeof tags !== "string" || tags === "")) {
        response.status(422).json({message:`Verifique se os campos de NAME e TAGS são do tipo STRING e não estejam NULL`})
      }

      //Criando variável para fazer consulta no DB com base em seu NAME
      const [product] = await new ProductsDatabase().getProductByName(name)

      if(product) {
        response.status(409).json({message:`NAME do produto já cadastrado no DB`})
      } else {
      await new ProductsDatabase().createProduct(name, tags)
      }

      response.status(201).json({message:`PRODUTO cadastrado com sucesso no DB`})
    } catch (error:any) {
      response.status(500).json({message: error.message})
    }
  }
}
