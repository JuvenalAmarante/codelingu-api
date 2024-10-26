const { Pool } = require('pg');

async function connect() {
  if (global.connection) return global.connection.connect();

  const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING,
  });

  console.log('Criou pool de conexões no PostgreSQL!');

  global.connection = pool;

  return pool.connect();
}

module.exports = {
  connect,
};
