module.exports = function(a, b) {
	if (!a) {
		return b;
	}
	if (!b) {
		return a;
	}
	return a + b;
};