const pg      = require('pg');
const client  = new pg.Client();

// connect to our database
client.connect( (err) => {
  if (err) throw err;

  const sTable = 'incidents';

  const query = client.query(`drop table ${sTable}`, (err, result) => {
    if (err) throw err;
    else {
      console.log({ action: 'pg.drop.table.success', result:result })
    }
    client.end(); 
  });  

});