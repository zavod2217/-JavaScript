/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	function normalizeHashTags(hashtags) {
	  var result = hashtags.map(v => String(v).toLowerCase())
	  result = result.filter(function(item, pos, self) {
		return self.indexOf(item) == pos;
	})
	  return result.join('-');
	};
};
