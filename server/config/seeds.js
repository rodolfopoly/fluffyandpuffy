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
          name: 'Strawberry Short Cake',
          description:
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          image: 'Straberry-short-cake.jpg',
          category: categories[0]._id,
          price: 29.99,

        },
        {
          name: 'Triple Chocolate Cake',
          description:
            'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
          image: 'Triple-chocolate-cake.jpg',
          category: categories[0]._id,
          price: 39.99,
        },
        {
          name: 'Moroccan Cake',
          category: categories[0]._id,
          description:
            'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
          image: 'Moroccan-Cake.jpg',
          price: 69.99,
        },
        {
          name: 'Sprinkles Cakes',
          category: categories[0]._id,
          description:
            'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
          image: 'Sprinkles-cake.jpg',
          price: 59.99,
        },
        {
          name: 'Super Fudgy Chocolate Cupcake',
          category: categories[2]._id,
          description:
            'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
          image: 'Super-fudgy-chocolate-cupcake.jpg',
          price: 14.99,
        },
        {
          name: 'Mixed Cupcakes',
          category: categories[2]._id,
          description:
            'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
          image: 'Mixed-Cupcakes.jpg',
          price: 24.99,
        },
        {
          name: 'Mini Pavlova',
          category: categories[3]._id,
          description:
            'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
          image: 'Mini-pavlova.jpg',
          price: 19.99,
        },
        {
          name: 'Strawberry Box',
          category: categories[3]._id,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
          image: 'Strawberry-box.jpg',
          price: 9.99,
        },
        {
          name: 'Baby Shower Cupcakes',
          category: categories[2]._id,
          description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
          image: 'Baby-shower-cupcakes.jpg',
          price: 19.99,
          quantity: 1000
        },
        {
          name: 'Cookie K-Letter',
          category: categories[1]._id,
          description:
            'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
          image: 'cookie-letter.jpg',
          price: 7.99,
        },
        {
          name: 'Snowflake Cookie',
          category: categories[1]._id,
          description:
            'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
          image: 'Snowflake-cookie.jpg',
          price: 9.99,
        },
        {
          name: 'Baby Shower Cookie',
          category: categories[1]._id,
          description:
            'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
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