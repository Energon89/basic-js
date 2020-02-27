module.exports = function getSeason(date) {
  if (date) {
    if (date instanceof Date && !isNaN(date.valueOf())) {
      const month = date.getMonth();
      if (month <= 4 && month >= 2) {
        return 'spring';
      }

      if (month <= 7 && month >= 5) {
        return 'summer';
      }

      if (month <= 10 && month >= 8) {
        return 'autumn';
      }

      return 'winter';
    } else throw new Error();
  } else return 'Unable to determine the time of year!'
};
