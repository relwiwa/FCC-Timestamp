var moment = require('moment');

// TimestampDate object with unix timestamp and natural date
function TimestampDate() {
  this.unix = null;
  this.natural = null;
}

module.exports = function(input) {
  var output = new TimestampDate();
  var natFormat = 'MMMM D, YYYY';

  //  Check, whether input is recognized as unix timestamp
  if (moment(input, 'X', true).isValid()) {
    output.unix = moment(input, 'X').format('X');
    output.natural = moment(output.unix, 'X').format(natFormat);
  }
  /*  Check, whether input is recognized as a natural date by
      Moment.js (it throws an error when falling back to Date as
      strict mode is not used */
  else if (moment(input).isValid()) {
    output.natural = moment(input).format(natFormat);
    output.unix = moment(input).format('X');
  }

  return output;
}