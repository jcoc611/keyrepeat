(function($){
	if(!$) throw new Error("Input Affix: no jQuery found. Make sure window.jQuery exists.");

	var repeatKeys = {};

	/**
	 * Registers an event handler for key repeats on a given DOM object.
	 * @param  {Function} callback function to be called on key repeat.
	 * @param  {Object}   options  a set of options defining the timing of the key repeats.
	 * @return {jQuery Object}            this jquery object
	 */
	$.fn.keyrepeat = function(callback, options){
		var $t = $(this);

		// Default values
		if(!options) options = {};
		if(!options.delay) options.delay = 1000;
		if(!options.interval) options.interval = 100;

		$t.keydown(function(e){
			// Prevent default keyrepeat
			if(repeatKeys[e.which]) return;

			repeatKeys[e.which] = {
				count: 0
			};

			var args = arguments, self = this,
				which = e.which;

			// Utility functions
			
			/**
			 * Calls the event handler for key repeat.
			 */
			var trigger = function(){
				callback.apply(self, args);
				repeatKeys[which].count++;
			/**
			 * Returns the time defined by a constant or function.
			 * @param  {int or int()} time  an integer time in milliseconds, or
			 *                 a function which returns such.
			 * @return {int}     the time value of the only argument.
			 */
			}, getTime = function(time){
				if(typeof(time) == "function"){
					return time.apply(
						self, [e, repeatKeys[which].count, options]);
				}else return time;
			};

			trigger();

			repeatKeys[which]._timeout = setTimeout(function(){
				trigger();

				repeatKeys[which]._timeout = setTimeout(function(){
					trigger();
					repeatKeys[which]._timeout = setTimeout(arguments.callee, getTime(options.interval));
				}, getTime(options.interval));
			}, getTime(options.delay));
		}).keyup(function(e){
			if(!repeatKeys[e.which]) return;
			if(repeatKeys[e.which]._timeout) clearTimeout(repeatKeys[e.which]._timeout);
			repeatKeys[e.which] = null;
		});

		return $t;
	}
})(window.jQuery);
// TFIN
