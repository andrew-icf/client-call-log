
exports.up = function(knex, Promise) {
  return knex.schema.createTable('data', function(table){
    table.increments();
    table.string('date');
    table.string('name');
    table.string('from');
    table.string('city');
    table.string('time');
    table.string('phone');
    table.string('notes');
    table.string('rep');
    table.string('scheduled');
    table.string('insIssue');
    table.string('followUp');
    table.string('followUpCall');
    table.string('repFromCall');
    table.string('notesFromFollowup');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('data');
};
