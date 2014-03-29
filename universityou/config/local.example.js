module.exports = {
  port: 80,
  environment: 'production',

  adapters: {
    mongo: {
      user     : 'username',
      password : 'password',
      database : 'database',
      host     : 'host'
    }
  },
  
  session: {
    secret: 'souperseekrit'
  }
};