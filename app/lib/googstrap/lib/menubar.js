goog.provide('googstrap.Menubar');

/**
 * A menubar class for googstrap widget.
 *
 * @param {goog.ui.MenubarRenderer=} opt_renderer Renderer used to render or
 *     decorate the menbar; defaults to {@link goog.ui.ToolbarRenderer}.
 * @param {?goog.ui.Container.Orientation=} opt_orientation Menubar orientation;
 *     defaults to {@code HORIZONTAL}.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @param {googstrap.Widget} owner application-wrapper.
 * @param {String} uiName UI-Name.
 * @constructor
 * @extends {goog.ui.Component}
 */
googstrap.Menubar = function(opt_renderer, opt_orientation, opt_domHelper, owner, uiName) {
    goog.base(this, opt_renderer, opt_orientation, opt_domHelper);

	// save the global scope
	that = this;
	
	// owner
    this.owner_ = owner;
	
	// load config-data
    this.googstrap_ = this.owner_.googstrap_;
	
	// Global Event-Handler
	this.googstrapEvent = this.owner_.controller_.eh_;
	
};
goog.inherits(googstrap.Menubar,goog.ui.Component);


/** @inheritDoc */
googstrap.Menubar.prototype.enterDocument = function() {

	// super class
    googstrap.Menubar.superClass_.enterDocument.call(this);

	// create menubar
    var menubar = goog.ui.menuBar.create();
		
	// Menu-Array
    var menuNames = ['File','Edit'];
    var menuOptions = [];
    menuOptions[0] = ['New', 'Open', null, 'Save' ,null, 'Print'];
    menuOptions[1] = ['Cut', null, 'Copy', 'Paste'];
					
	// loop MenuNames
    for (i in menuNames) {
	
		// create Menu
        var menu = new goog.ui.Menu();	

		// loop Menu-Array
        goog.array.forEach(menuOptions[i],
            function(label) {
                var item;
                if (label) {
                    if (label == 'Save') {
                        item = new goog.ui.MenuItem(label);
                        goog.events.listen(item, goog.ui.Component.EventType.ACTION,
							function(e) {
								that.googstrapEvent.dispatchEvent(googstrap.Event.EventType.SAMPLE_EVENT);
							});

                    }  else {
                        item = new goog.ui.MenuItem(label);
                    }
                    item.addClassName('menubar-icon');
                    item.addClassName('format-icon-' + label.toLowerCase());
                    item.setId(label);

                } else {
                    item = new goog.ui.MenuSeparator();
                }
                menu.addItem(item);
            });

        // Create a button inside menubar.
        var btn = new goog.ui.MenuButton(menuNames[i], menu);
        menubar.addChild(btn, true);
    }
	
	// add to DOM
    menubar.render(goog.dom.getElement(this.googstrap_['dom']['menubar']));


};

/** @inheritDoc */
googstrap.Menubar.prototype.disposeInternal = function() {
    goog.base(this, 'disposeInternal');
};


