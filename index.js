require("dotenv").config();
const app = require("./app")

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${process.env.PORT}/api/v1`)
  })