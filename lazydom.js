/*global jQuery*/

(function ($) {
	$.fn.lazydom = function (options) {
		var o = $.extend({event: 'mouseenter'}, options);

		function load() {
			var $s = $(this).find("script[type='text/html']");
			$s.each(function () {
				$(this).replaceWith($(this).html());
			});
		}
	
		return this.each(function () {
			$(this).one(o.event, load);
		});
	};
}(jQuery));