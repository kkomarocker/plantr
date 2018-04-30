const db = require("./models");
db.sync({force: true})
.then(() => {
  console.log("DB is synced!")
});
.catch((error) => {
  console.log(error);
})
.finally(() => {
  db.close();
})
