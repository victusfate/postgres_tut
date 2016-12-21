const connectionString  = 'postgres://localhost:5432/messel';

// const pgp = require('pg-promise');
// const db  = pgp(connectionString)

const pg     = require('pg');
const client = new pg.Client(connectionString);

// connect to our database
client.connect( (err) => {
  if (err) throw err;

  const sTable = 'incidents';

  const query = client.query(
    `CREATE TABLE ${sTable}(`                     +
      'id serial primary key,'                    +  
      'incident_id varchar(20) unique not null,'  +
      'cityCode varchar(20),'                     +
      'ts bigint,'                                +
      'latitude decimal(18,14),'                  +
      'longitude decimal(18,14),'                 +
      'data JSON);', 
  (err, result) => {
    if (err) throw err;
    else {
      console.log({ action: 'pg.create.success', result:result })
    }
    client.end(); 
  });  

});