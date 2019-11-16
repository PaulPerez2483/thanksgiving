const { app } = require('./app');
const PORT = 3000;
const { db, Person, Dish } = require('../db');

async function syncAndSeedDatabase() {
  try {
    await db.sync({ force: true });

    const persons = [
      { name: 'Scottie Pippen', attendee: true },
      { name: 'Steve Kerr', attendee: true },
      { name: 'Dennis Rodman', attendee: true },
      { name: 'Toni Kukoc', attendee: true },
      { name: 'Horace Grant', attendee: true }
    ];

    const [player1, player2, player3, player4, player5] = await Promise.all(persons.map(person => Person.create(person)))

    const dishes = [
      { name: 'rice', description: 'blah ', personId: player1.id },
      { name: 'turkey', description: 'blah ', personId: player2.id },
      { name: 'bacon', description: 'blah ', personId: player3.id },
      { name: 'potato', description: 'blah ', personId: player4.id },
      { name: 'cake', description: 'blah ', personId: player5.id },
    ]

    const [dish1, dish2, dish3, dish4, dish5] = await Promise.all(dishes.map(dish => Dish.create(dish)))
    //  Create some rows in your Person and Dish tables here
    //  to interact with your API using the `npm run start:watch`
    //  or `npm run start` commands.

  } catch (e) {
    console.log(e);
  }

  console.log('done seeding and associating!');
}

syncAndSeedDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});