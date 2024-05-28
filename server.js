import app from "./index.js";
import prisma from "./config/db.config.js";

const port = process.env.PORT || 3000;

//Connection to mongodb
prisma
  .$connect()
  .then(() => {
    console.log("Db connection sucessfull!");
  })
  .catch((err) => {
    console.log("Db connection error", err);
  });

//Start the server--------
const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
