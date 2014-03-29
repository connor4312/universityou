module.exports = {
  tableName: 'classes',
  attributes: {
    name: {
      type: 'STRING'
    },
    slug: {
      type: 'STRING'
    },
    duration: {
      type: 'INTEGER'
    },
    youtube: {
      type: 'STRING'
    },
    authors: {
      type: 'ARRAY'
    }
  }
};