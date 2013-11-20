goog.provide('googstrap.Logic');

/**
 * The Logic component.
 *
 * @param {array} googstrap The configuration of DOM
 * @constructor
 * @extends {goog.ui.Component}
 */
 
googstrap.Logic = function(googstrap) {

	// initialize member variables
	this.googstrap_			= googstrap;	
		
};

/** Menubar Business Logic */
googstrap.Logic.prototype.menuSampleAction = function() {
	alert('Sample Action');
};




