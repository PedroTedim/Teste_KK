import express from "express";
import bodyParser from "body-parser";

import connect from "./connect";
import * as ProductController from "./controllers/product_controller";


const db = "mongodb://127.0.0.1:27017/example_db"
const app = express();
const port = 8080 || process.env.PORT;

connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", ProductController.allProducts);

app.post("/products", ProductController.addProduct);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});