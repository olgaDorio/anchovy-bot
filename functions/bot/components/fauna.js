const faunadb = require('faunadb')

const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET_KEY });
const q = faunadb.query;

exports.newUser = (id, name) => {
  return new Promise((res, rej) => {
    client.query(
      q.Create(
        q.Collection('user'),
        { data: { id, name } },
      )
    )
    .then(ret => { res(true) })
    .catch(err => { res(false) });
  })
}
