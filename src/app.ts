import cors from "cors"
import express from "express"

export const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3333
app.listen(port, () => console.log(`Server is running on port ${port}`))