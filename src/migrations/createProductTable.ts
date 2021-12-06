import BaseDatabase from "../data/BaseDatabase"
import products from "./products.json"

async function createProductTable():Promise<boolean> {
  try {
    await BaseDatabase.connection.raw(`
      CREATE TABLE IF NOT EXISTS amaro_challenge_products (
        id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          tags VARCHAR(255)
      );
    `)
    console.log(`Tabela criada com sucesso`)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

async function insertProductsOnTable():Promise<boolean> {
  try {
    products.forEach((element:any) => {
      element.tags = element.tags[0]
    })
    await BaseDatabase.connection("amaro_challenge_products")
      .insert(products)
    console.log(`Produtos inseridos na tabela com sucesso`)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
createProductTable()
  .then(insertProductsOnTable)
  .finally(() => BaseDatabase.connection.destroy())
