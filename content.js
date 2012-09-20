$(document).keydown(function(e) {
	// If backspace is pressed
	if (e.which === 8) {
		var active = $(document.activeElement);
		
		notEditable = function(element) {
			var edit = element.attr('contenteditable');
			
			// Ensure backspace still works on any element with contenteditable="true"
			if (typeof edit !== 'undefined' && edit !== false) {
				return true;
			} else if (element.is('input, textarea')) {
				return true;
			}
			
			return false;
		}
		
		return notEditable(active);
	}
});
