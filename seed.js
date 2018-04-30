const db = require("./models");

db.models.vegetables.create(
  {name: 'Carrot', color: 'Orange', planted_on: Date.now()}
);


db.sync()
  .then(() => {
    console.log("DB is synced!")
  }).catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

