var passport = require("passport");
var settings = require("../config/settings");
require("../config/passport")(passport);
var jwt = require("jsonwebtoken");
var db = require("../models");
var validators = require("../utilities/validator");

exports.login = function(req, res) {
  db.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        res.status(401).send({ success: false, msg: "User not found." });
      } else {
        // check if password matches
        let verifiedPassword = user.comparePassword(req.body.password);
        if (verifiedPassword) {
          var token = jwt.sign(user.toJSON(), settings.secret);
          res.json({ success: true, token: "JWT " + token, user });
        } else {
          res.status(401).send({uccess: false,msg: "Authentication failed. Wrong password."});
        }
      }
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

exports.register = function(req, res) {
  if (validators.user(req.body, "create")) {
    db.User.findAndCountAll({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user.count) {
          db.User.create(req.body)
            .then(dbUser => res.status(201).send(dbUser))
            .catch(error => res.status(400).send(error));
        }
        else{
          res.status(503).send({ msg: 'User Already exists, please edit this user instead' });
        }
      })
      .catch(err => {
        res.status(503).send({msg:"Could not create the user at this time. Please try again later"});
      });
  } else {
    res.status(406).send({ msg: "Your input is invalid" });
  }
};

exports.verifyUser = function(req, res) {
  let user = jwt.decode(req.body.token, settings.secret);
  res.json({ user });
};
