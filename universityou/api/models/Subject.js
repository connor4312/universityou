module.exports = {
  tableName: 'subjects',
  attributes: {
    name: {
      type: 'STRING'
    },
    slug: {
      type: 'STRING'
    },
    children: {
      type: 'ARRAY'
    }
  }
};