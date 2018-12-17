
const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sample_data').del()
    .then(function () {
      // Inserts seed entries
      let data = [];
      for (let i=0; i<100; ++i) {
        data.push({
          name: faker.name.firstName(),
          age: faker.date.recent(),
          description: faker.lorem.words(4)
        });
      }
      return knex('sample_data').insert(data);
    });
};
