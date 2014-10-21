'use strict';

module.exports = function (date) {
  date = date || new Date();

  var year = date.getUTCFullYear(),
      day, x;

  // see if date is before the 1am on the last sunday in march
  x = new Date(year + '-03-31 01:00Z');
  day = x.getUTCDay();
  if (day !== 0) x = new Date(year + '-03-' + (31 - day) + ' 01:00Z');

  if (date < x) return false;

  // see if date is after the last sunday in october
  x = new Date(year + '-10-31 01:00Z');
  day = x.getUTCDay();
  if (day !== 0) x = new Date(year + '-10-' + (31 - day) + ' 01:00Z');

  if (date >= x) return false;

  // it's summer
  return true;
};
