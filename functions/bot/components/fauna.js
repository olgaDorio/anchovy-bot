const faunadb = require('faunadb');

const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET_KEY });
const q = faunadb.query;

const create = ({ id, name }) => (
  client.query(
    q.Create(
      q.Ref(q.Collection('users'), id),
      { data: { id, name, responses: {} } },
    ),
  )
);

const appendResponse = ({ id, text, timestamp }) => (
  client.query(
    q.Update(
      q.Ref(q.Collection('users'), id),
      {
        data: {
          responses: {
            [timestamp]: text,
          },
        },
      },
    ),
  )
);

const getAll = () => (
  client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('users'))),
      q.Lambda((show) => q.Get(show)),
    ),
  )
    .then((ret) => ret.data.map(({ data }) => data))
);

const getById = (id) => (
  client.query(
    q.Get(
      q.Ref(q.Collection('users'), id),
    ),
  )
);

module.exports = {
  create,
  appendResponse,
  getAll,
  getById,
};
