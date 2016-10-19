$(document).ready(function() {
	$.getJSON('./json/one.json', {}, function(data) {
		$('#example').html('<h2> Name: ' + data.titl + '</h2>');
		$('#example').append('<p> ' + data.desc + '</h2>');
		$('#example').append('<ul></i> ' + data.exam + '</li></ul>');
	});
});

console.log("Test");



