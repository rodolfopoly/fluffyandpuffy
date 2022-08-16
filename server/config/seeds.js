const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
  
    const categories = await Category.insertMany([
      { name: 'Cake' },
      { name: 'Cookies' },
      { name: 'Cupcakes' },
      { name: 'Mini Desserts' }
    ]);

    console.log('categories seeded');

    const products = await Product.insertMany([
        {
          name: 'Triple Chocolate Cake',
          image: 'Triple-chocolate-cake.jpg',
          category: categories[0]._id,
          price: 39.99,
        },
        {
          name: 'Moroccan Cake',
          category: categories[0]._id,
          image: 'Moroccan-Cake.jpg',
          price: 69.99,
        },
        {
          name: 'Sprinkles Cakes',
          category: categories[0]._id,
          image: 'Sprinkles-cake.jpg',
          price: 59.99,
        },
        {
          name: 'Super Fudgy Chocolate Cupcake',
          category: categories[2]._id,
          image: 'Super-fudgy-chocolate-cupcake.jpg',
          price: 14.99,
        },
        {
          name: 'Mixed Cupcakes',
          category: categories[2]._id,
          image: 'Mixed-Cupcakes.jpg',
          price: 24.99,
        },
        {
          name: 'Mini Pavlova',
          category: categories[3]._id,
          image: 'Mini-pavlova.jpg',
          price: 19.99,
        },
        {
          name: 'Strawberry Box',
          category: categories[3]._id,
          image: 'Strawberry-box.jpg',
          price: 9.99,
        },
        {
          name: 'Baby Shower Cupcakes',
          category: categories[2]._id,
          image: 'Baby-shower-cupcakes.jpg',
          price: 19.99,
          quantity: 1000
        },
        {
          name: 'Cookie K-Letter',
          category: categories[1]._id,
          image: 'cookie-letter.jpg',
          price: 7.99,
        },
        {
          name: 'Snowflake Cookie',
          category: categories[1]._id,
          image: 'Snowflake-cookie.jpg',
          price: 9.99,
        },
        {
          name: 'Baby Shower Cookie',
          category: categories[1]._id,
          image: 'Baby-shower-cookie.jpg',
          price: 14.99,
        }
      ]);

      console.log('products seeded');

      await User.deleteMany();

      await User.create({
        username: 'RodolfoPoly',
        email: 'rodolfo@testmail.com',
        password: '12345',
        orders: [
          {
            products: [products[0]._id, products[1]._id, products[4]._id, products[8]._id]
          }
        ]
      });
    
      await User.create({
        username: 'megansilva',
        email: 'megan@testmail.com',
        password: '12345'
      });
    
      console.log('users seeded');
    
      process.exit();
    });