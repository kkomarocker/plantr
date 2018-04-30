const db = require("./models");

const carrot = db.models.vegetables.create(
  {name: 'Carrot', color: 'Orange', planted_on: Date.now()}
)

const jay = carrot.then((vegetable) => {
  console.log(db.models.vegetables.id)
  return db.models.gardeners.create(
    {name: 'Jay',
    age: 34,
    favoriteVegetableId: db.models.vegetables.id}
  );
});



db.sync()
  .then(() => {
    console.log("DB is synced!")
  }).catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

