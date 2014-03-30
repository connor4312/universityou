/**
 * Routes
 *
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */



/**
 * (1) Core middleware
 *
 * Middleware included with `app.use` is run first, before the router
 */


/**
 * (2) Static routes
 *
 * This object routes static URLs to handler functions--
 * In most cases, these functions are actions inside of your controllers.
 * For convenience, you can also connect routes directly to views or external URLs.
 *
 */

module.exports.routes = {

  'get /api/user': {
    controller: 'UserController',
    action: 'current'
  },
  
  'post /api/user': {
    controller: 'UserController',
    action: 'validate'
  },
  
  'post /api/user/watched': {
    controller: 'UserController',
    action: 'watched'
  },
  
  'post /api/user/create': {
    controller: 'UserController',
    action: 'create'
  },

  'get /api/classes': {
    controller: 'ClassesController',
    action: 'all'
  },
  'get /api/classes/:id': {
    controller: 'ClassesController',
    action: 'find'
  },

  'get /api/courses': {
    controller: 'CoursesController',
    action: 'all'
  },
  'get /api/courses/:id': {
    controller: 'CoursesController',
    action: 'find'
  },

  'get /api/subjects': {
    controller: 'SubjectsController',
    action: 'all'
  },
  'get /api/subjects/:id': {
    controller: 'SubjectsController',
    action: 'find'
  },

  '/': {
    view: 'home/index'
  },
  '/:something': {
    view: 'home/index'
  }
};

