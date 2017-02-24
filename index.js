/**
 * Created by johnokeeffe on 24/02/2017.
 */
'use strict'

//const pg = require('pg')
const pgp = require('pg-promise')()
//const conString = 'postgres://postgres:rG6RdDHW@localhost:5432/pg_testdb' // make sure to match your own database's credentials

const cn = {
  host: 'localhost', // 'localhost' is the default;
  port: 5432, // 5432 is the default;
  database: 'testdb',
  user: 'postgres',
  password: 'rG6RdDHW'
}
const db = pgp(cn)

/*pg.connect(conString, function (err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err)
  }
  client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
    done()

    if (err) {
      return console.error('error happened during query', err)
    }
    console.log(result.rows[0])
    process.exit(0)
  })
})*/

db.none("insert into metrics(id, year, month, numtickets, avgreply, avgres) values($1, $2, $3, $4, $5, $6)", [10003, 2017, 10, 12, 6459, 61337])
    .then(function () {
      console.log('success!!!!')
    })
    .catch(function (error) {
      console.log('failure :(')
      console.log(error)
    })

db.any("select * from metrics where year=2016", [true])
    .then(function (data) {
      console.log(data)
    })
    .catch(function (error) {
      console.log(error)
    });