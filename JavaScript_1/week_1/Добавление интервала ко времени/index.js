/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	function addTime(hours, minutes, interval){
	  var date = new Date('1.1.1990 ' + hours + ':' + minutes);
	  date = new Date(date.getTime() + interval*60000);
	  hours = date.getHours() < 1 ? '0'+ date.getHours() : date.getHours();
	  minutes_ = date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes();
	  return hours + ':' + minutes_
	};
};
