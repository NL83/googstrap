goog.provide('googstrap.Tabbar');

/**
 * A tabbar class for googstrap widget.
 *
 * @param {goog.ui.MenubarRenderer=} opt_renderer Renderer used to render or
 *     decorate the menbar; defaults to {@link goog.ui.ToolbarRenderer}.
 * @param {?goog.ui.Container.Orientation=} opt_orientation Tabbar orientation;
 *     defaults to {@code HORIZONTAL}.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @param {googstrap.Widget} owner application-wrapper.
 * @param {String} uiName UI-Name.
 * @constructor
 * @extends {goog.ui.Component}
 */
googstrap.Tabbar = function(opt_renderer, opt_orientation, opt_domHelper, owner, uiName) {
    goog.base(this, opt_renderer, opt_orientation, opt_domHelper);

	// save the global scope
	that = this;
	
	// owner
    this.owner_ = owner;
	
	// UI-Name
    this.uiName_ = uiName;
	
	// load config-data
    this.googstrap_ = this.owner_.googstrap_;
	
	// Global Event-Handler
	this.googstrapEvent = this.owner_.controller_.eh_;
	
	// Tabbar
	this.tabbar_ = new goog.ui.TabBar();
	
};
goog.inherits(googstrap.Tabbar, goog.ui.Component);


/** @inheritDoc */
googstrap.Tabbar.prototype.createDom = function() {
	
	this.decorateInternal(this.dom_.createElement('div'));

};

/** @inheritDoc */
googstrap.Tabbar.prototype.decorateInternal = function(element) {
	
	goog.base(this, 'decorateInternal', element);

	// DOM =ID attribute
	this.getElement().id = 'googstrap-Tabbar';
	
	// DOM =TABINDEX attribute
	this.getElement().tabIndex = 0;
  
};

/** @inheritDoc */
googstrap.Tabbar.prototype.enterDocument = function() {
	
	// super class
    googstrap.Tabbar.superClass_.enterDocument.call(this);

	// create the tabbar
	
	var tb_ = 	goog.dom.createDom('div', {'id': 'googstrap-tabbar'+this.uiName, 'class':'goog-tab-bar goog-tab-bar-start'} 
		,goog.dom.createDom('div',  {'class': 'goog-tab goog-tab-selected'} , 'Explorer')
		,goog.dom.createDom('div',  {'class': 'goog-tab'} , 'Settings')
		);
		
	goog.dom.appendChild(
		this.getElement(), 
		tb_
	)
	
	// create the tab-content	  
	goog.dom.appendChild(this.getElement(), 
		goog.dom.createDom('div', {'id': 'googstrap-tabbar'+this.uiName+'-content', 'class':'goog-tab-content'}, 'Tabbar-Content')
	);


	// decorate tabbar itself
    this.tabbar_.decorate(tb_);
	
	
	goog.events.listen(this.tabbar_, goog.ui.Component.EventType.SELECT,
		function(e) {
			var tabSelected = e.target;
			goog.dom.setTextContent(goog.dom.getElement(that.tabbar_.getId() + '-content'),'selected "' + tabSelected.getCaption() + '" tab.');
		}
	);

};

/** @inheritDoc */
googstrap.Tabbar.prototype.exitDocument = function() {
  goog.base(this, 'exitDocument');
};

/** @inheritDoc */
googstrap.Tabbar.prototype.disposeInternal = function() {

};


