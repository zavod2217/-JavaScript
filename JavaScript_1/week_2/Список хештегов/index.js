function sort(value, key){
  if (String(value).startsWith('#')){
    return value
  }
}

module.exports = function (tweet) {
  var arr = tweet.split(' ');
  return arr.filter(sort)
}
