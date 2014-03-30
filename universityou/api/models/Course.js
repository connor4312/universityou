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
    classes: {
      type: 'JSON'
    }
  }
};