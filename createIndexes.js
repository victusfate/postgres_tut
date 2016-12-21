const pg      = require('pg');
const client  = new pg.Client();

// connect to our database
client.connect( (err) => {
  if (err) throw err;

  const sTable = 'incidents';

  const aIndexes = [
    `create index ts_idx on ${sTable} (ts);`,
    `create index latitude_idx on ${sTable} (latitude);`,
    `create index longitude_idx on ${sTable} (longitude);`
  ];

  client.query(aIndexes.join('\n'), (err, result) => {
    if (err) throw err;
    else {
      console.log({ action: 'indexCreate ts, latitude, longitude', result:result })
    }
    client.end();
  });  

});