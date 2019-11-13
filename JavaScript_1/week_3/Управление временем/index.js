/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {

const date = ((str) => {
  var dateTime = new Date(str);

  var method = {
    hours: 'Hours',
    months: 'Month',
    days: 'Date',
    minutes: 'Minutes'
  }

  function calculate(num, str, operand = '+') {
    if (num < 0 || !method[str]) throw new TypeError('Указанное значение даты или метода не верны!')
    this.dateTime = dateTime['set' + method[str]](eval(dateTime['get' + method[str]]() + operand + num))
    return this
  }

  var initObj = {
    add: function(num, str) {
      calculate(num, str)
      return this
    },
    subtract: function(num, str) {
      calculate(num, str, '-')
      return this
    },
    value: dateTime
  }

  return initObj
})

};
