module.exports = (function(){
	var CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var CHARACTER_SET = CHARACTERS.split("");

	var Base62 = {};

	Base62.encode = function(integer){
		if(integer === 0){
			return '0';
		}
		var result = '';

		while(integer > 0){
			result = CHARACTER_SET[integer % 62] + result;

			integer = Math.floor(integer / 62);
		}

		return result;
	};

	Base62.decode = function(base62string){
		if(!base62string){
			return null;
		}

		//check if there is illegal char

		var decodedNum = 0;

		for(var i = 0; i < base62string.length; i++){
			var char = base62string.charAt(i);
			decodedNum = decodedNum * 62 + CHARACTERS.indexOf(char);
		}

		return decodedNum;

	};

	return Base62;
}());