const cpfMask = (value) =>
	value
		.replace(/\D/g, '')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d)/, '$1.$2')
		.replace(/(\d{3})(\d{1,2})/, '$1-$2')
		.replace(/(-\d{2})\d+?$/, '$1');

const phoneMask = (v) => {
	var r = v.replace(/\D/g, '');
	r = r.replace(/^0/, '');
	if (r.length > 10) {
		r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
	} else if (r.length > 5) {
		r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
	} else if (r.length > 2) {
		r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
	} else {
		r = r.replace(/^(\d*)/, '($1');
	}
	return r;
};

export { cpfMask, phoneMask };
