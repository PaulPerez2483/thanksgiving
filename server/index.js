const { app } = require('./app');
const PORT = 3000;
const { db, Person, Dish } = require('../db');
const path = require('path');

async function syncAndSeedDatabase() {
  try {
    await db.sync({ force: true });

    const persons = [
      { name: 'Scottie Pippen', attendee: true },
      { name: 'Steve Kerr', attendee: true },
      { name: 'Dennis Rodman', attendee: true },
      { name: 'Toni Kukoc', attendee: true },
      { name: 'Horace Grant', attendee: true },
      { name: 'Isiah Thomas' }
    ];

    const [player1, player2, player3, player4, player5] = await Promise.all(persons.map(person => Person.create(person)))

    const dishes = [
      { name: 'Calamari', description: 'Tender calamari, lightly breaded and fried. Served with marinara sauce and NEW spicy ranch.', personId: player1.id },
      { name: 'Classic Shrimp Scampi Fritta', description: 'Lightly breaded and fried, tossed with garlic and white wine butter sauce.', personId: player2.id },
      { name: 'Seafood Stuffed Mushrooms', description: 'Shrimp, scallops, crab and white fish stuffing with herb breadcrumbs, parmesan, romano and mozzarella cheeses.', personId: player3.id },
      { name: 'Chicken Giardino', description: 'Grilled chicken and a medley of fresh vegetables tossed with ruffled pappardelle pasta in a light lemon herb sauce.', personId: player4.id },
      { name: 'Salmon Piccata', description: 'Grilled salmon topped with a lemon garlic butter sauce, sun-dried tomatoes and capers. Served with parmesan-crusted zucchini.', personId: player5.id }
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

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

syncAndSeedDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});