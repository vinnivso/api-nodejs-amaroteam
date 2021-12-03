import Products from "../entities/Products"
import BaseDatabase from "./BaseDatabase"

export class ProductsDatabase extends BaseDatabase {
  private static tableName = "amaro_challenge_products"

  getAllProducts = async() => {
    const result = await BaseDatabase.connection(ProductsDatabase.tableName)
    return result
  }

  getProductById = async(id:{}) => {
    const result = await BaseDatabase.connection(ProductsDatabase.tableName)
      .where({id})
    return result
  }

  getProductByNameAndTags = async(name: any, tags:any) => {
    const result = await BaseDatabase.connection(ProductsDatabase.tableName)
      .where("name", "LIKE", `%${name}%`)
      .andWhere("tags", "LIKE", `%${tags}%`)
    return result
  }

  getProductByName = async(name: any) => {
    const result = await BaseDatabase.connection(ProductsDatabase.tableName)
      .where("name", "LIKE", `%${name}%`)
    return result
  }

  getProductByTags = async(tags:any) => {
    const result = await BaseDatabase.connection(ProductsDatabase.tableName)
      .where("tags", "LIKE", `%${tags}%`)
    return result
  }

  createProduct = async(name: any, tags:any) => {
    const newProduct = new Products(name, tags)
    await BaseDatabase.connection.raw(`
    INSERT INTO amaro_challenge_products (name, tags)
    VALUES (
      "${newProduct.getName()}",
      "${newProduct.getTags()}"
    )
  `)
  }
}