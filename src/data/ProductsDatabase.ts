import { Products } from "../entities/Products"
import BaseDatabase from "./BaseDatabase"

export class ProductsDatabase extends BaseDatabase {
  private static tableName = "amaro_challenge_products"

  async getAllProducts():Promise<object[] | boolean> {
    try {
      const result = await BaseDatabase.connection(ProductsDatabase.tableName)
      return result
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async getProductById(id:string | object):Promise<object | boolean> {
    try {
      const result = await BaseDatabase.connection(ProductsDatabase.tableName)
      .where({id})
    return result
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async getProductByNameAndTags(name:string | object, tags:string | object):Promise<object[] | boolean> {
    try {
      const result = await BaseDatabase.connection(ProductsDatabase.tableName)
      .where("name", "LIKE", `%${name}%`)
      .andWhere("tags", "LIKE", `%${tags}%`)
    return result
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async getProductByName(name: string | object){
    const result = await BaseDatabase.connection(ProductsDatabase.tableName)
      .where("name", "LIKE", `%${name}%`)
    return result
  }

  async getProductByTags(tags:string | object):Promise<object[] | boolean> {
    try {
      const result = await BaseDatabase.connection(ProductsDatabase.tableName)
      .where("tags", "LIKE", `%${tags}%`)
    return result
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async createProduct(name: string, tags:string):Promise<void> {
    try {
      await BaseDatabase.connection.raw(`
      INSERT INTO amaro_challenge_products (name, tags)
      VALUES (
        "${new Products(name, tags).getName()}",
        "${new Products(name, tags).getTags()}"
      )
    `)
    } catch (error) {
      console.log(error)
    }
  }

}