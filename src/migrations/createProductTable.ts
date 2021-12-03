import BaseDatabase from "../data/BaseDatabase"
import products from "./products.json"

async function createProductTable() {
  try {
    await BaseDatabase.connection.raw(`
      CREATE TABLE IF NOT EXISTS amaro_challenge_products (
        id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          tags VARCHAR(255)
      );
    `)
    console.log(`Tabela criada com sucesso!`)
    products.forEach((element:any) => {
      element.tags = element.tags[0]
    })
    await BaseDatabase.connection("amaro_challenge_products")
      .insert(products)
  } catch (error) {
    console.log(error)
  } finally {
    BaseDatabase.connection.destroy()
  }
}
createProductTable()
