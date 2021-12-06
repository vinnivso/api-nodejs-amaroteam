import { app } from "./app"
import { EndpointGetProduct } from "./endpoints/EndpointGetProduct"
import { EndpointCreateProduct } from "./endpoints/EndpointCreateProduct"

app.get("/products", new EndpointGetProduct().getProducts)
app.post("/products", new EndpointCreateProduct().createProduct)