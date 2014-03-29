module.exports = {
  tableName: 'courses',
  attributes: {
    name: {
      type: 'STRING'
    },
    slug: {
      type: 'STRING'
    },
    difficulty: {
      type: 'INTEGER'
    },
    subject: {
      type: 'ARRAY'
    },
    classes: {
      type: 'ARRAY'
    }
  }
};