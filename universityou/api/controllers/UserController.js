/**
 * UserController
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

var bcrypt = require('bcrypt'),
    _      = require('lodash');

module.exports = {
    
  
  /**
   * Action blueprints:
   *    POST `/user/create` Wants: name, email, password
   *                        Returns: 400 + err on fail validation, 200 + user json on success
   */
   create: function (req, res) {
    User.create({
      name: req.param('name'),
      email: req.param('email'),
      password: req.param('password'),
      courses: []
    }).done(function(err, user) {
      if (err) {
        return res.json(err, 400);
      } else {
        req.session.user = user.id;
        return res.json(user);
      }
    });
  },
  
  /**
   * Action blueprints:
   *    POST `/user` Wants: email, password
   *                        Returns: 400 + empty object on fail validation, 200 + user json on success
   */
  validate: function (req, res) {
    User.findOneByEmail(req.param('email')).done(function (err, user) {
      if (err) {
        console.log(err);
        return res.json({}, 500);
      }
      if (!user) {
        return res.json({}, 400);
      }

      bcrypt.compare(req.param('password'), user.password, function (err, match) {
        if (err) {
          console.log(err);
          return res.json({}, 500);
        }

        if (match) {
          req.session.user = user.id;
          res.json(user);
        } else {
          res.json({}, 400);
        }
      });
    });
  },

  /**
   * Action blueprints:
   *    GET `/user` Returns: 400 + empty object on no current user, 200 + user json on current user
   */
   current: function (req, res) {
    if (!req.session.user) {
      return res.json({}, 400);
    }
    User.findOne(req.session.user).done(function (err, user) {
      if (err) {
        console.log(err);
        return res.json({}, 500);
      }
      if (!user) {
        return res.json({}, 400);
      }

      return res.json(user);
    });
  },


  /**
   * Action blueprints:
   *    POST `/user/watched` Wants: course_id, class_id, time
   *                        Returns: 400 + empty object on fail (no user logged in), 200 + user json on success
   */

   watched: function (req, res) {
    if (!req.session.user) {
      return res.json({}, 400);
    }
    User.findOne(req.session.user).done(function (err, user) {
      if (err) {
        console.log(err);
        return res.json({}, 500);
      }
      if (!user) {
        return res.json({}, 400);
      }

      index = _.findIndex(user.courses, {course_id: req.param('course_id')});

      insert = {
        course_id: req.param('course_id'),
        class_id: req.param('class_id'),
        time: req.param('time')
      };

      if (index >= 0) {
        user.courses[index] = insert;
      } else {
        user.courses.push(insert);
      }

      user.save(function (err) {
        if (err) {
          return res.json({}, 400);
        }

        return res.json(user);
      });
    });
  },



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

  
};