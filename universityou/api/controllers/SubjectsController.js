/**
 * SubjectsController
 *
 * @module      :: Controller
 * @description :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    GET `/subjects/all` Returns: 400 on a bizarre error, 200 + array of all subjects otherwise
   */
   all: function (req, res) {
    Subject.find().done(function (err, subjects) {
      if (err || !subjects) {
        return res.json({}, 400);
      }

      return res.json(subjects);
    });
  },


  /**
   * Action blueprints:
   *    GET `/subjects/:id` Returns: 400 on not found, 200 + object of course otherwise
   */
   find: function (req, res) {
    Subject.findOne(req.param('id')).done(function (err, subjects) {
      if (err || !subjects) {
        return res.json({}, 400);
      }

      return res.json(subjects);
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to subjectsController)
   */
  _config: {}

  
};
