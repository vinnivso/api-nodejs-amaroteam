import express from "express"
import { ProductsDatabase } from "../data/ProductsDatabase"

export class EndpointGetProduct {
  async getProducts(request: express.Request, response: express.Response):Promise<void> {
    try {
      const {id, name, tags} = request.query

      let result
      if (id) {
        result = await new ProductsDatabase().getProductById(id)
      } else if (name && tags) {
        result = await new ProductsDatabase().getProductByNameAndTags(name, tags)
      } else if (name) {
        result = await new ProductsDatabase().getProductByName(name)
      } else if (tags) {
        result = await new ProductsDatabase().getProductByTags(tags)
      } else {
        result = await new ProductsDatabase().getAllProducts()
      }
      response.send(result)

    } catch (error:any) {
      response.status(500).json({message:`Algo deu errado. Para mais informações, veja: https://documenter.getpostman.com/view/16818323/UVJhBuHN`})
    }
  }
}
