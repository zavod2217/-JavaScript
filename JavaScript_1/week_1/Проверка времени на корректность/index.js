/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
	function isValidTime(hours, minutes){
		var condition1 = hours > -1;
		var condition2 = hours < 24;
		var condition3 = minutes > -1;
		var condition4 = minutes < 60;
		if (condition1 && condition2 && condition3 && condition4) {
			return true
		} 
		return false
	};
};
