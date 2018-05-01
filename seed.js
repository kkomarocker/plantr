const db = require("./models");


db.models.vegetables.create({
  name: 'Carrot',
  color: 'Orange',
  planted_on: Date.now()
})
  .then((vegetables) => {
    return db.models.gardeners.create(
      { name: 'Jay',
        age: 34,
        favoriteVegetableId: vegetables.id
      }
    );
  })
  .then((gardeners) => {
    return db.models.plots.create(
      { size: 2,
        shaded: true,
        gardenerId: gardeners.id
      }
    )
  })
  // .then((vegetable_plot) => {
  //   db.models.vegetable_plot.create(
  //     {
        // How can I access to return values of previous promises that was passed on above .then((vegetables)) & .then((gardeners))?
  //     }
  //   );
  // });

db.sync()
  .then(() => {
    console.log("DB is synced!");
  }).catch((error) => {
    console.log(error);
  })
  .finally(() => {
    db.close();
  });

