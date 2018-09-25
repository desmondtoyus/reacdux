const check = require('check-types');
const moment = require('moment');
const validator = require('validator');

exports.user = function(user, type) {
    if (type === "update") {
      if (!user.hasOwnProperty('id') || !check.integer(user.id) || check.lessOrEqual(user.id, 0)) {
        return false;
      }
    }
    else if (type === "create") {
      if (!user.hasOwnProperty('email') || !check.string(user.email) || !validator.isEmail(user.email)) {
        return false;
      }
    }
  
    if (!user.hasOwnProperty('password') || !check.string(user.password)) {
      return false;
    }

    // if (caps[i].startTime && caps[i].endTime && (!moment(caps[i].startTime).isValid() || !moment(caps[i].endTime).isValid())) {
    //     return false;
    //   }
    // if (!user.hasOwnProperty('first_name') || !check.string(user.first_name) || user.first_name.length < 3 || user.first_name.length > 100) {
    //   return false;
    // }
    // if (!user.hasOwnProperty('last_name') || !check.string(user.last_name) ||  user.last_name.length < 3 || user.last_name.length > 100) {
    //   return false;
    // }
    // if (!user.hasOwnProperty('phone_number') || !check.string(user.phone_number)) {
    //   return false;
    // }
    // if (!user.hasOwnProperty('role') || !check.integer(user.role) || check.lessOrEqual(user.role, 0)) {
    //   return false;
    // }
    return true;
  };