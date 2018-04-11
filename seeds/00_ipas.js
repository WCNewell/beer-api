exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ipas')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ipas').insert([
        { name: 'ODell 90 Shilling', abv: 6 },
        { name: 'Grapfruit Sculpin', abv: 9 },
        { name: 'New Belgium Ranger', abv: 7 }
      ]);
    });
};
