$(document).ready(
	function() {
		$("#project_list h2").toggle(
			function() {
				$(this).addClass("minus");
				$(this).next().show();
			},
			function() {
				$(this).removeClass("minus");
				$(this).next().hide();
			}
		);
	}
);
