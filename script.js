'use strict'

const form = $('.generator-form');

form.on('submit', function (e) {
	e.preventDefault();

	const stringLength = +form.find('input:first').val();
	const checked = form.find('input:checked');
	const result = form.find('input:last');
	let string = '';

	const parameters = checked
		.map(function () {
			return $(this).val();
		})
		.get()
		.join('');

	if (!stringLength || !parameters) {
		alert('Choose a length and a parameter');
		return;
	};

	for (let i = 0; i < stringLength; i++) {
		const num = Math.floor(Math.random() * parameters.length);
		string += parameters.substring(num, num + 1);
	}

	result.val(string);
});