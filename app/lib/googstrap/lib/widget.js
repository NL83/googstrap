goog.provide('googstrap.Widget');

/**
 * googstrap widget.
 *
 * @param {number|string} width The width in pixels or percent.
 * @param {number|string} height The height in pixels or percent.
 * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
 *     document we want to render in.
 * @constructor
 * @extends {goog.ui.Component}
 */
googstrap.Widget = function(opt_domHelper, googstrap) {
	goog.base(this, opt_domHelper);

	// initialize member variables
	this.googstrap_ = googstrap;

};
goog.inherits(googstrap.Widget, goog.ui.Component);


/** @inheritDoc */
googstrap.Widget.prototype.createDom = function() {
  this.decorateInternal(this.dom_.createElement('div'));

};

/** @inheritDoc */
googstrap.Widget.prototype.decorateInternal = function(element) {
	goog.base(this, 'decorateInternal', element);

	// DOM =ID attribute
	this.getElement().id = 'googstrap-widget';
	
	// DOM =TABINDEX attribute
	this.getElement().tabIndex = 0;
  
};

/** @inheritDoc */
googstrap.Widget.prototype.enterDocument = function() {

	goog.base(this, 'enterDocument');
	
	// create controller
	this.controller_ = new googstrap.Controller();

	// create the complete DOM
	this.createDOM();
		
	// create a menubar
	this.menubar_ = new googstrap.Menubar(null, null, null, this, 'myMenubar');
	this.menubar_.render(goog.dom.getElement(googstrap_['dom']['menubar']));
	
	// create a tabbar
	this.tabbar_ = new googstrap.Tabbar(null, null, null, this, 'myTabbar');
	this.tabbar_.render(goog.dom.getElement(googstrap_['dom']['tabbar']));

};

/** @inheritDoc */
googstrap.Widget.prototype.exitDocument = function() {
  if(this.controller_) {
	this.controller_.dispose();
	this.controller_ = null;
  }
  goog.base(this, 'exitDocument');
};

/** @inheritDoc */
googstrap.Widget.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  this.toolbar_ = null;
  this.canvas_  = null;
};

/** create complet DOM-structur of widget. */
googstrap.Widget.prototype.createDOM = function() {

	goog.dom.appendChild(this.getElement() ,goog.dom.createDom('div',  {'id': this.googstrap_['dom']['menubar']+''},null))
	goog.dom.appendChild(this.getElement() ,goog.dom.createDom('div',  {'id': this.googstrap_['dom']['tabbar']+''},null))
	
};

