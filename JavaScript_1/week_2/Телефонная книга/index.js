// Телефонная книга
var pBook = new Map();

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	function phoneBook(command){
	  var request = String(command).split(' ')
	  if (request[0] == 'ADD'){add(request[1], command)}
	  if (request[0] == 'REMOVE_PHONE'){remove(request[1])}
	  if (request[0] == 'SHOW'){show()}
	}

	function add(user, phone){
	  phone_list = validate(phone);
	  if (!pBook.get(user)){
		pBook.set(user, new Set());
	   }
	   for (phone of phone_list){
		pBook.get(user).add(phone)
	   }
	  }

	function validate(phone){
	  var re = /([\d-]+)/g;
	  return phone.match(re);
	}

	function remove(phone){
	  for ([user, values] of pBook.entries()){
		if (pBook.get(user).has(phone)){
		  pBook.get(user).delete(phone)
		}
	  }
	}

	function show(){
	  var result = Array();
	  for ([user, values] of pBook.entries()){
		if  (values.size){
		  result.push(user + ': ' + Array.from(values).join(', '))
		}
	  }
	  console.info(result.reverse());
	}
};
