/*goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.object');
goog.require('goog.ui.Component.EventType');
goog.require('goog.ui.RoundedTabRenderer');
goog.require('goog.ui.Tab');
goog.require('goog.ui.TabBar');*/

goog.require('googstrap');

function initialize() {
	
	goog.dom.appendChild(
		document.body,
		goog.dom.createDom('div',  {'id': googstrap_['dom']['main']} , null)
	)

   // Beam me up, Scotty ...
   new googstrap.Widget(null, googstrap_).render(goog.dom.getElement(googstrap_['dom']['main']));


}








