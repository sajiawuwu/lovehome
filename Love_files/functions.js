/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var now = new Date(); // 获取当前日期和时间
	var diff = Math.abs(now - date); // 计算日期差异的毫秒数

	var diffDays = Math.floor(diff / (1000 * 3600 * 24)); // 计算天数差异
	var diffHours = Math.floor((diff / (1000 * 3600)) % 24); // 计算小时数差异
	var diffMinutes = Math.floor((diff / (1000 * 60)) % 60); // 计算分钟数差异
	var diffSeconds = Math.floor((diff / 1000) % 60); // 计算秒数差异

	var result = "第 <span class=\"digit\">" + diffDays + "</span> 天 <span class=\"digit\">" + diffHours + "</span> 小时 <span class=\"digit\">" + diffMinutes + "</span> 分钟 <span class=\"digit\">" + diffSeconds + "</span> 秒"; 
	$("#clock").html(result);
}
