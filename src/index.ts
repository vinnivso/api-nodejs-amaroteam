import { app } from "./app"
import { createProducts } from "./endpoints/createProducts"
import { getProducts } from "./endpoints/getProducts"

app.get("/products", getProducts)
app.post("/products", createProducts)