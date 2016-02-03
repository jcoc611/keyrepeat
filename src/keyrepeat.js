(function($){
	if(!$) throw new Error("Input Affix: no jQuery found. Make sure window.jQuery exists.");

	var repeatKeys = {};

	$.fn.keyrepeat = function(callback, options){
		var $t = $(this), _interval = null, _timeout = null;

		// Default values
		if(!options) options = {};
		if(!options.delay) options.delay = 1000;
		if(!options.interval) options.interval = 100;

		$t.keydown(function(e){
			// Prevent default keyrepeat
			if(repeatKeys[e.which]) return;
			repeatKeys[e.which] = {};

			var args = arguments, self = this,
				which = e.which;

			callback.apply(self, args);

			repeatKeys[which]._timeout = setTimeout(function(){
				repeatKeys[which]._timeout = null;
				callback.apply(self, args);

				repeatKeys[which]._interval = setInterval(function(){
					callback.apply(self, args);
				}, options.interval);
			}, options.delay);
		}).keyup(function(e){
			if(!repeatKeys[e.which]) return;
			if(repeatKeys[e.which]._timeout) clearTimeout(repeatKeys[e.which]._timeout);
			if(repeatKeys[e.which]._interval) clearInterval(repeatKeys[e.which]._interval);
			repeatKeys[e.which] = null;
		});
	}
})(window.jQuery);
// TFIN
