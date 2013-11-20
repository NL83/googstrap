goog.provide('googstrap.Controller');

/**
 * UI controller of googstrap.
 * @constructor
 */
googstrap.Controller = function() {
  
	goog.base(this);
	
	this.businessLogic_ = new googstrap.Logic();
	this.eh_         = new goog.events.EventTarget();
	
	goog.events.listen(this.eh_ , googstrap.Event.EventType.SAMPLE_EVENT, this.businessLogic_.menuSampleAction);

};

goog.inherits(googstrap.Controller, goog.Disposable);

/**
 * Event handler for EDITOR_SAVE event.
 * @param {goog.events.Event} e Event object.
 * @private
 */
googstrap.Controller.prototype.onEditorSaveDocument_ = function(e) {
	alert(1);
};

/** @inheritDoc */
googstrap.Controller.prototype.disposeInternal = function() {
  if(this.eh_) {
	this.eh_.removeAll();
	this.eh_.dispose();
  }
  this.eh_         = null;
  goog.base(this, 'disposeInternal');
};
