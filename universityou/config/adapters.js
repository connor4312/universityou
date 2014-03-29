module.exports.adapters = {

  // If you leave the adapter config unspecified 
  // in a model definition, 'default' will be used.
  default: 'mongo',

  mongo: {
    module   : 'sails-mongo',
    port     : 27017
  }
};