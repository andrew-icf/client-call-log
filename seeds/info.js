
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('data').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('data').insert({
          date: '7/1/2016',
          name: 'Lavern Backman',
          from: 'Tuscon Pt',
          city: 'Tuscon',
          time: '9:45am',
          phone: '520-883-9385',
          notes: 'Patient called to schedule appointments for Tuscon location',
          rep: 'MP',
          scheduled: 'N/A',
          insIssue: 'N/A',
          followUp: 'N/A',
          followUpCall: 'N/A',
          repFromCall: 'N/A',
          notesFromFollowup: 'N/A'
        }),
        knex('data').insert({
          date: '7/1/2016',
          name: 'Barbara',
          from: 'Glendle Star',
          city: 'unknown',
          time: '9:53am',
          phone: '623-847-4600',
          notes: 'Called to speak to Amy, took a message',
          rep: 'CC',
          scheduled: 'N/A',
          insIssue: 'N/A',
          followUp: 'N/A',
          followUpCall: 'N/A',
          repFromCall: 'N/A',
          notesFromFollowup: 'N/A'
        })
      ]);
    });
};
