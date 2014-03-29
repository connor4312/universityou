module.exports = {
  tableName: 'subjects',
  attributes: {
    name: {
      type: 'STRING'
    },
    slug: {
      type: 'STRING'
    },
    parents: {
      type: 'ARRAY'
    }
  }
};