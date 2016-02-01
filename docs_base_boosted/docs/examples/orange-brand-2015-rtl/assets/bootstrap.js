/*!
 * Bootstrap v4.0.0-alpha.2 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 3)) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v3.0.0')
  }
}(jQuery);


+function ($) {

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */'use strict';var _get=function get(_x,_x2,_x3){var _again=true;_function: while(_again) {var object=_x,property=_x2,receiver=_x3;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;}}else if('value' in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if('value' in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();function _inherits(subClass,superClass){if(typeof superClass !== 'function' && superClass !== null){throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var Util=(function($){ /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */var transition=false;var TransitionEndEvent={WebkitTransition:'webkitTransitionEnd',MozTransition:'transitionend',OTransition:'oTransitionEnd otransitionend',transition:'transitionend'}; // shoutout AngusCroll (https://goo.gl/pxwQGp)
function toType(obj){return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();}function isElement(obj){return (obj[0] || obj).nodeType;}function getSpecialTransitionEndEvent(){return {bindType:transition.end,delegateType:transition.end,handle:function handle(event){if($(event.target).is(this)){return event.handleObj.handler.apply(this,arguments);}}};}function transitionEndTest(){if(window.QUnit){return false;}var el=document.createElement('bootstrap');for(var _name in TransitionEndEvent) {if(el.style[_name] !== undefined){return {end:TransitionEndEvent[_name]};}}return false;}function transitionEndEmulator(duration){var _this=this;var called=false;$(this).one(Util.TRANSITION_END,function(){called = true;});setTimeout(function(){if(!called){Util.triggerTransitionEnd(_this);}},duration);return this;}function setTransitionEndSupport(){transition = transitionEndTest();$.fn.emulateTransitionEnd = transitionEndEmulator;if(Util.supportsTransitionEnd()){$.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();}} /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */var Util={TRANSITION_END:'bsTransitionEnd',getUID:function getUID(prefix){do { /* eslint-disable no-bitwise */prefix += ~ ~(Math.random() * 1000000); // "~~" acts like a faster Math.floor() here
/* eslint-enable no-bitwise */}while(document.getElementById(prefix));return prefix;},getSelectorFromElement:function getSelectorFromElement(element){var selector=element.getAttribute('data-target');if(!selector){selector = element.getAttribute('href') || '';selector = /^#[a-z]/i.test(selector)?selector:null;}return selector;},reflow:function reflow(element){new Function('bs','return bs')(element.offsetHeight);},triggerTransitionEnd:function triggerTransitionEnd(element){$(element).trigger(transition.end);},supportsTransitionEnd:function supportsTransitionEnd(){return Boolean(transition);},typeCheckConfig:function typeCheckConfig(componentName,config,configTypes){for(var property in configTypes) {if(configTypes.hasOwnProperty(property)){var expectedTypes=configTypes[property];var value=config[property];var valueType=undefined;if(value && isElement(value)){valueType = 'element';}else {valueType = toType(value);}if(!new RegExp(expectedTypes).test(valueType)){throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));}}}}};setTransitionEndSupport();return Util;})(jQuery); /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Alert=(function($){ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='alert';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.alert';var EVENT_KEY='.' + DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=150;var Selector={DISMISS:'[data-dismiss="alert"]'};var Event={CLOSE:'close' + EVENT_KEY,CLOSED:'closed' + EVENT_KEY,CLICK_DATA_API:'click' + EVENT_KEY + DATA_API_KEY};var ClassName={ALERT:'alert',FADE:'fade',IN:'in'}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Alert=(function(){function Alert(element){_classCallCheck(this,Alert);this._element = element;} /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ // getters
_createClass(Alert,[{key:'close', // public
value:function close(element){element = element || this._element;var rootElement=this._getRootElement(element);var customEvent=this._triggerCloseEvent(rootElement);if(customEvent.isDefaultPrevented()){return;}this._removeElement(rootElement);}},{key:'dispose',value:function dispose(){$.removeData(this._element,DATA_KEY);this._element = null;} // private
},{key:'_getRootElement',value:function _getRootElement(element){var selector=Util.getSelectorFromElement(element);var parent=false;if(selector){parent = $(selector)[0];}if(!parent){parent = $(element).closest('.' + ClassName.ALERT)[0];}return parent;}},{key:'_triggerCloseEvent',value:function _triggerCloseEvent(element){var closeEvent=$.Event(Event.CLOSE);$(element).trigger(closeEvent);return closeEvent;}},{key:'_removeElement',value:function _removeElement(element){$(element).removeClass(ClassName.IN);if(!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)){this._destroyElement(element);return;}$(element).one(Util.TRANSITION_END,$.proxy(this._destroyElement,this,element)).emulateTransitionEnd(TRANSITION_DURATION);}},{key:'_destroyElement',value:function _destroyElement(element){$(element).detach().trigger(Event.CLOSED).remove();} // static
}],[{key:'_jQueryInterface',value:function _jQueryInterface(config){return this.each(function(){var $element=$(this);var data=$element.data(DATA_KEY);if(!data){data = new Alert(this);$element.data(DATA_KEY,data);}if(config === 'close'){data[config](this);}});}},{key:'_handleDismiss',value:function _handleDismiss(alertInstance){return function(event){if(event){event.preventDefault();}alertInstance.close(this);};}},{key:'VERSION',get:function get(){return VERSION;}}]);return Alert;})();$(document).on(Event.CLICK_DATA_API,Selector.DISMISS,Alert._handleDismiss(new Alert())); /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME] = Alert._jQueryInterface;$.fn[NAME].Constructor = Alert;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return Alert._jQueryInterface;};return Alert;})(jQuery); /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Button=(function($){ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='button';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.button';var EVENT_KEY='.' + DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var ClassName={ACTIVE:'active',BUTTON:'btn',FOCUS:'focus'};var Selector={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:'input',ACTIVE:'.active',BUTTON:'.btn'};var Event={CLICK_DATA_API:'click' + EVENT_KEY + DATA_API_KEY,FOCUS_BLUR_DATA_API:'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Button=(function(){function Button(element){_classCallCheck(this,Button);this._element = element;} /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ // getters
_createClass(Button,[{key:'toggle', // public
value:function toggle(){var triggerChangeEvent=true;var rootElement=$(this._element).closest(Selector.DATA_TOGGLE)[0];if(rootElement){var input=$(this._element).find(Selector.INPUT)[0];if(input){if(input.type === 'radio'){if(input.checked && $(this._element).hasClass(ClassName.ACTIVE)){triggerChangeEvent = false;}else {var activeElement=$(rootElement).find(Selector.ACTIVE)[0];if(activeElement){$(activeElement).removeClass(ClassName.ACTIVE);}}}if(triggerChangeEvent){input.checked = !$(this._element).hasClass(ClassName.ACTIVE);$(this._element).trigger('change');}}}else {this._element.setAttribute('aria-pressed',!$(this._element).hasClass(ClassName.ACTIVE));}if(triggerChangeEvent){$(this._element).toggleClass(ClassName.ACTIVE);}}},{key:'dispose',value:function dispose(){$.removeData(this._element,DATA_KEY);this._element = null;} // static
}],[{key:'_jQueryInterface',value:function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);if(!data){data = new Button(this);$(this).data(DATA_KEY,data);}if(config === 'toggle'){data[config]();}});}},{key:'VERSION',get:function get(){return VERSION;}}]);return Button;})();$(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE_CARROT,function(event){event.preventDefault();var button=event.target;if(!$(button).hasClass(ClassName.BUTTON)){button = $(button).closest(Selector.BUTTON);}Button._jQueryInterface.call($(button),'toggle');}).on(Event.FOCUS_BLUR_DATA_API,Selector.DATA_TOGGLE_CARROT,function(event){var button=$(event.target).closest(Selector.BUTTON)[0];$(button).toggleClass(ClassName.FOCUS,/^focus(in)?$/.test(event.type));}); /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME] = Button._jQueryInterface;$.fn[NAME].Constructor = Button;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return Button._jQueryInterface;};return Button;})(jQuery); /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Carousel=(function($){ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='carousel';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.carousel';var EVENT_KEY='.' + DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=600;var Default={interval:5000,keyboard:true,slide:false,pause:'hover',wrap:true};var DefaultType={interval:'(number|boolean)',keyboard:'boolean',slide:'(boolean|string)',pause:'(string|boolean)',wrap:'boolean'};var Direction={NEXT:'next',PREVIOUS:'prev'};var Event={SLIDE:'slide' + EVENT_KEY,SLID:'slid' + EVENT_KEY,KEYDOWN:'keydown' + EVENT_KEY,MOUSEENTER:'mouseenter' + EVENT_KEY,MOUSELEAVE:'mouseleave' + EVENT_KEY,LOAD_DATA_API:'load' + EVENT_KEY + DATA_API_KEY,CLICK_DATA_API:'click' + EVENT_KEY + DATA_API_KEY};var ClassName={CAROUSEL:'carousel',ACTIVE:'active',SLIDE:'slide',RIGHT:'right',LEFT:'left',ITEM:'carousel-item'};var Selector={ACTIVE:'.active',ACTIVE_ITEM:'.active.carousel-item',ITEM:'.carousel-item',NEXT_PREV:'.next, .prev',INDICATORS:'.carousel-indicators',DATA_SLIDE:'[data-slide], [data-slide-to]',DATA_RIDE:'[data-ride="carousel"]'}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Carousel=(function(){function Carousel(element,config){_classCallCheck(this,Carousel);this._items = null;this._interval = null;this._activeElement = null;this._isPaused = false;this._isSliding = false;this._config = this._getConfig(config);this._element = $(element)[0];this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];this._addEventListeners();} /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ // getters
_createClass(Carousel,[{key:'next', // public
value:function next(){if(!this._isSliding){this._slide(Direction.NEXT);}}},{key:'nextWhenVisible',value:function nextWhenVisible(){ // Don't call next when the page isn't visible
if(!document.hidden){this.next();}}},{key:'prev',value:function prev(){if(!this._isSliding){this._slide(Direction.PREVIOUS);}}},{key:'pause',value:function pause(event){if(!event){this._isPaused = true;}if($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()){Util.triggerTransitionEnd(this._element);this.cycle(true);}clearInterval(this._interval);this._interval = null;}},{key:'cycle',value:function cycle(event){if(!event){this._isPaused = false;}if(this._interval){clearInterval(this._interval);this._interval = null;}if(this._config.interval && !this._isPaused){this._interval = setInterval($.proxy(document.visibilityState?this.nextWhenVisible:this.next,this),this._config.interval);}}},{key:'to',value:function to(index){var _this2=this;this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];var activeIndex=this._getItemIndex(this._activeElement);if(index > this._items.length - 1 || index < 0){return;}if(this._isSliding){$(this._element).one(Event.SLID,function(){return _this2.to(index);});return;}if(activeIndex === index){this.pause();this.cycle();return;}var direction=index > activeIndex?Direction.NEXT:Direction.PREVIOUS;this._slide(direction,this._items[index]);}},{key:'dispose',value:function dispose(){$(this._element).off(EVENT_KEY);$.removeData(this._element,DATA_KEY);this._items = null;this._config = null;this._element = null;this._interval = null;this._isPaused = null;this._isSliding = null;this._activeElement = null;this._indicatorsElement = null;} // private
},{key:'_getConfig',value:function _getConfig(config){config = $.extend({},Default,config);Util.typeCheckConfig(NAME,config,DefaultType);return config;}},{key:'_addEventListeners',value:function _addEventListeners(){if(this._config.keyboard){$(this._element).on(Event.KEYDOWN,$.proxy(this._keydown,this));}if(this._config.pause === 'hover' && !('ontouchstart' in document.documentElement)){$(this._element).on(Event.MOUSEENTER,$.proxy(this.pause,this)).on(Event.MOUSELEAVE,$.proxy(this.cycle,this));}}},{key:'_keydown',value:function _keydown(event){event.preventDefault();if(/input|textarea/i.test(event.target.tagName)){return;}switch(event.which){case 37:this.prev();break;case 39:this.next();break;default:return;}}},{key:'_getItemIndex',value:function _getItemIndex(element){this._items = $.makeArray($(element).parent().find(Selector.ITEM));return this._items.indexOf(element);}},{key:'_getItemByDirection',value:function _getItemByDirection(direction,activeElement){var isNextDirection=direction === Direction.NEXT;var isPrevDirection=direction === Direction.PREVIOUS;var activeIndex=this._getItemIndex(activeElement);var lastItemIndex=this._items.length - 1;var isGoingToWrap=isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;if(isGoingToWrap && !this._config.wrap){return activeElement;}var delta=direction === Direction.PREVIOUS?-1:1;var itemIndex=(activeIndex + delta) % this._items.length;return itemIndex === -1?this._items[this._items.length - 1]:this._items[itemIndex];}},{key:'_triggerSlideEvent',value:function _triggerSlideEvent(relatedTarget,directionalClassname){var slideEvent=$.Event(Event.SLIDE,{relatedTarget:relatedTarget,direction:directionalClassname});$(this._element).trigger(slideEvent);return slideEvent;}},{key:'_setActiveIndicatorElement',value:function _setActiveIndicatorElement(element){if(this._indicatorsElement){$(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);var nextIndicator=this._indicatorsElement.children[this._getItemIndex(element)];if(nextIndicator){$(nextIndicator).addClass(ClassName.ACTIVE);}}}},{key:'_slide',value:function _slide(direction,element){var _this3=this;var activeElement=$(this._element).find(Selector.ACTIVE_ITEM)[0];var nextElement=element || activeElement && this._getItemByDirection(direction,activeElement);var isCycling=Boolean(this._interval);var directionalClassName=direction === Direction.NEXT?ClassName.LEFT:ClassName.RIGHT;if(nextElement && $(nextElement).hasClass(ClassName.ACTIVE)){this._isSliding = false;return;}var slideEvent=this._triggerSlideEvent(nextElement,directionalClassName);if(slideEvent.isDefaultPrevented()){return;}if(!activeElement || !nextElement){ // some weirdness is happening, so we bail
return;}this._isSliding = true;if(isCycling){this.pause();}this._setActiveIndicatorElement(nextElement);var slidEvent=$.Event(Event.SLID,{relatedTarget:nextElement,direction:directionalClassName});if(Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)){$(nextElement).addClass(direction);Util.reflow(nextElement);$(activeElement).addClass(directionalClassName);$(nextElement).addClass(directionalClassName);$(activeElement).one(Util.TRANSITION_END,function(){$(nextElement).removeClass(directionalClassName).removeClass(direction);$(nextElement).addClass(ClassName.ACTIVE);$(activeElement).removeClass(ClassName.ACTIVE).removeClass(direction).removeClass(directionalClassName);_this3._isSliding = false;setTimeout(function(){return $(_this3._element).trigger(slidEvent);},0);}).emulateTransitionEnd(TRANSITION_DURATION);}else {$(activeElement).removeClass(ClassName.ACTIVE);$(nextElement).addClass(ClassName.ACTIVE);this._isSliding = false;$(this._element).trigger(slidEvent);}if(isCycling){this.cycle();}} // static
}],[{key:'_jQueryInterface',value:function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=$.extend({},Default,$(this).data());if(typeof config === 'object'){$.extend(_config,config);}var action=typeof config === 'string'?config:_config.slide;if(!data){data = new Carousel(this,_config);$(this).data(DATA_KEY,data);}if(typeof config === 'number'){data.to(config);}else if(typeof action === 'string'){if(data[action] === undefined){throw new Error('No method named "' + action + '"');}data[action]();}else if(_config.interval){data.pause();data.cycle();}});}},{key:'_dataApiClickHandler',value:function _dataApiClickHandler(event){var selector=Util.getSelectorFromElement(this);if(!selector){return;}var target=$(selector)[0];if(!target || !$(target).hasClass(ClassName.CAROUSEL)){return;}var config=$.extend({},$(target).data(),$(this).data());var slideIndex=this.getAttribute('data-slide-to');if(slideIndex){config.interval = false;}Carousel._jQueryInterface.call($(target),config);if(slideIndex){$(target).data(DATA_KEY).to(slideIndex);}event.preventDefault();}},{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}}]);return Carousel;})();$(document).on(Event.CLICK_DATA_API,Selector.DATA_SLIDE,Carousel._dataApiClickHandler);$(window).on(Event.LOAD_DATA_API,function(){$(Selector.DATA_RIDE).each(function(){var $carousel=$(this);Carousel._jQueryInterface.call($carousel,$carousel.data());});}); /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME] = Carousel._jQueryInterface;$.fn[NAME].Constructor = Carousel;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return Carousel._jQueryInterface;};return Carousel;})(jQuery); /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Collapse=(function($){ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='collapse';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.collapse';var EVENT_KEY='.' + DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=600;var Default={toggle:true,parent:''};var DefaultType={toggle:'boolean',parent:'string'};var Event={SHOW:'show' + EVENT_KEY,SHOWN:'shown' + EVENT_KEY,HIDE:'hide' + EVENT_KEY,HIDDEN:'hidden' + EVENT_KEY,CLICK_DATA_API:'click' + EVENT_KEY + DATA_API_KEY};var ClassName={IN:'in',COLLAPSE:'collapse',COLLAPSING:'collapsing',COLLAPSED:'collapsed'};var Dimension={WIDTH:'width',HEIGHT:'height'};var Selector={ACTIVES:'.panel > .in, .panel > .collapsing',DATA_TOGGLE:'[data-toggle="collapse"]'}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Collapse=(function(){function Collapse(element,config){_classCallCheck(this,Collapse);this._isTransitioning = false;this._element = element;this._config = this._getConfig(config);this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));this._parent = this._config.parent?this._getParent():null;if(!this._config.parent){this._addAriaAndCollapsedClass(this._element,this._triggerArray);}if(this._config.toggle){this.toggle();}} /**
   * ------------------------------------------------------------------------
   * Adding accessibility
   * ------------------------------------------------------------------------
   */ // getters
_createClass(Collapse,[{key:'toggle', // public
value:function toggle(){if($(this._element).hasClass(ClassName.IN)){this.hide();}else {this.show();}}},{key:'show',value:function show(){var _this4=this;if(this._isTransitioning || $(this._element).hasClass(ClassName.IN)){return;}var actives=undefined;var activesData=undefined;if(this._parent){actives = $.makeArray($(this._parent).find(Selector.ACTIVES));if(!actives.length){actives = null;}}if(actives){activesData = $(actives).data(DATA_KEY);if(activesData && activesData._isTransitioning){return;}}var startEvent=$.Event(Event.SHOW);$(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}if(actives){Collapse._jQueryInterface.call($(actives),'hide');if(!activesData){$(actives).data(DATA_KEY,null);}}var dimension=this._getDimension();$(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);this._element.style[dimension] = 0;this._element.setAttribute('aria-expanded',true);if(this._triggerArray.length){$(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded',true);}this.setTransitioning(true);$(this._element).parent().find('h4.panel-title').removeClass('panel-chevron-closed').addClass('panel-chevron-open');var complete=function complete(){$(_this4._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);_this4._element.style[dimension] = '';_this4.setTransitioning(false);$(_this4._element).trigger(Event.SHOWN);};if(!Util.supportsTransitionEnd()){complete();return;}var capitalizedDimension=dimension[0].toUpperCase() + dimension.slice(1);var scrollSize='scroll' + capitalizedDimension;$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(TRANSITION_DURATION);this._element.style[dimension] = this._element[scrollSize] + 'px';}},{key:'hide',value:function hide(){var _this5=this;if(this._isTransitioning || !$(this._element).hasClass(ClassName.IN)){return;}var startEvent=$.Event(Event.HIDE);$(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}var dimension=this._getDimension();var offsetDimension=dimension === Dimension.WIDTH?'offsetWidth':'offsetHeight';this._element.style[dimension] = this._element[offsetDimension] + 'px';Util.reflow(this._element);$(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN);this._element.setAttribute('aria-expanded',false);if(this._triggerArray.length){$(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded',false);}this.setTransitioning(true);var complete=function complete(){_this5.setTransitioning(false);$(_this5._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);};this._element.style[dimension] = 0;$(this._element).parent().find('h4.panel-title').addClass('panel-chevron-closed').removeClass('panel-chevron-open');if(!Util.supportsTransitionEnd()){complete();return;}$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(TRANSITION_DURATION);}},{key:'setTransitioning',value:function setTransitioning(isTransitioning){this._isTransitioning = isTransitioning;}},{key:'dispose',value:function dispose(){$.removeData(this._element,DATA_KEY);this._config = null;this._parent = null;this._element = null;this._triggerArray = null;this._isTransitioning = null;} // private
},{key:'_getConfig',value:function _getConfig(config){config = $.extend({},Default,config);config.toggle = Boolean(config.toggle); // coerce string values
Util.typeCheckConfig(NAME,config,DefaultType);return config;}},{key:'_getDimension',value:function _getDimension(){var hasWidth=$(this._element).hasClass(Dimension.WIDTH);return hasWidth?Dimension.WIDTH:Dimension.HEIGHT;}},{key:'_getParent',value:function _getParent(){var _this6=this;var parent=$(this._config.parent)[0];var selector='[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';$(parent).find(selector).each(function(i,element){_this6._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element),[element]);});return parent;}},{key:'_addAriaAndCollapsedClass',value:function _addAriaAndCollapsedClass(element,triggerArray){if(element){var isOpen=$(element).hasClass(ClassName.IN);element.setAttribute('aria-expanded',isOpen);if(triggerArray.length){$(triggerArray).toggleClass(ClassName.COLLAPSED,!isOpen).attr('aria-expanded',isOpen);}}} // static
}],[{key:'_keydown',value:function _keydown(e,that){var $items=undefined,$tablist=$this.closest('div.panel-group '),$this=$(that),index=undefined,k=e.which || e.keyCode;if(k === 32){ // space
$this.click();}$items = $tablist.find('[role=tab]');index = $items.index($items.filter(':focus'));if(k === 38 || k === 37){index--; // up & left
}if(k === 39 || k === 40){index++; // down & right
}if(index < 0){index = $items.length - 1;}if(index === $items.length){index = 0;}$items.eq(index).focus();e.preventDefault();e.stopPropagation();}},{key:'_getTargetFromElement',value:function _getTargetFromElement(element){var selector=Util.getSelectorFromElement(element);return selector?$(selector)[0]:null;}},{key:'_jQueryInterface',value:function _jQueryInterface(config){return this.each(function(){var $this=$(this);var data=$this.data(DATA_KEY);var _config=$.extend({},Default,$this.data(),typeof config === 'object' && config);if(!data && _config.toggle && /show|hide/.test(config)){_config.toggle = false;}if(!data){data = new Collapse(this,_config);$this.data(DATA_KEY,data);}if(typeof config === 'string'){if(data[config] === undefined){throw new Error('No method named "' + config + '"');}data[config]();}});}},{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}}]);return Collapse;})();var uniqueId=function uniqueId(prefix){return (prefix || 'ui-id') + '-' + Math.floor(Math.random() * 1000 + 1);};var $colltabs=$('[data-toggle="collapse"]:not(.navbar-toggle)');$colltabs.attr({role:'tab','aria-selected':'false','aria-expanded':'false'});$colltabs.each(function(){var colltab=$(this),collid=colltab.attr('id') || uniqueId('ui-collapse'),collpanel=colltab.attr('data-target')?$(colltab.attr('data-target')):$(colltab.attr('href')),collparent=parent && $(parent),heading='',parent=colltab.attr('data-parent');colltab.attr('id',collid);if(collparent){$(collparent).find('div:not(.collapse,.panel-body), h4').attr('role','presentation');collparent.attr({role:'tablist','aria-multiselectable':'true'});heading = collpanel.parent().children().first(); // On sélectionne le heading (panel-heading)
if(collpanel.hasClass('in')){colltab.attr({'aria-controls':collpanel.attr('id'),'aria-selected':'true','aria-expanded':'true',tabindex:'0'}); // don't change the attribute for menu panel specific case
if(!colltab.hasClass('navbar-toggle')){collpanel.attr({role:'tabpanel',tabindex:'0','aria-labelledby':collid,'aria-hidden':'false'});} // Si on a bien le heading, on lui ajoute la classe panel-selected qui indique que panel est ouvert.
// Enfin, on ajoute une classe sur le premier enfant du header pour ajouter le chevron bas (ouvert)
if(heading.hasClass('panel-heading')){heading.addClass('panel-selected');heading.children().first().addClass('panel-chevron-open');}}else {colltab.attr({'aria-controls':collpanel.attr('id'),tabindex:'-1'}); // don't change the attribute for menu panel specific case
if(!colltab.hasClass('navbar-toggle')){collpanel.attr({role:'tabpanel',tabindex:'-1','aria-labelledby':collid,'aria-hidden':'true'});} // Si on a bien le heading, on ajoute une classe sur le premier enfant du header pour ajouter le chevron droite (à ouvrir)
if(heading.hasClass('panel-heading')){heading.children().first().addClass('panel-chevron-closed');}}}else {heading = collpanel.parent().children().first(); // On sélectionne le heading (panel-heading)
if(collpanel.hasClass('in')){colltab.attr({'aria-controls':collpanel.attr('id'),'aria-selected':'true','aria-expanded':'true'}); // don't change the attribute for menu panel specific case
if(!colltab.hasClass('navbar-toggle')){collpanel.attr({role:'tabpanel','aria-labelledby':collid,'aria-hidden':'false'});} // Si on a bien le heading, on lui ajoute la classe panel-selected qui indique que panel est ouvert.
// Enfin, on ajoute une classe sur le premier enfant du header pour ajouter le chevron bas (ouvert)
if(heading.hasClass('panel-heading')){heading.addClass('panel-selected');heading.children().first().addClass('panel-chevron-open');}}else {colltab.attr({'aria-controls':collpanel.attr('id'),'aria-selected':'false','aria-expanded':'false'}); // don't change the attribute for menu panel specific case
if(!colltab.hasClass('navbar-toggle')){collpanel.attr({role:'tabpanel','aria-labelledby':collid,'aria-hidden':'true'});} // Si on a bien le heading, on ajoute une classe sur le premier enfant du header pour ajouter le chevron droite (à ouvrir)
if(heading.hasClass('panel-heading')){heading.children().first().addClass('panel-chevron-closed');}}}}); /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on('keydown.collapse.data-api','[data-toggle="collapse"]',function(event){var target=Collapse._getTargetFromElement(this);var k=event.which || event.keyCode;if(!/(32|37|38|39|40)/.test(k)){return true;}Collapse._keydown.call($(target),event,this);event.preventDefault();event.stopPropagation();return false;});$(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){event.preventDefault();var target=Collapse._getTargetFromElement(this);var data=$(target).data(DATA_KEY);var config=data?'toggle':$(this).data();Collapse._jQueryInterface.call($(target),config);});$(function(){$('.o-accordion .panel-heading h4 a ').prepend('<div class=arrow></div>');}); /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME] = Collapse._jQueryInterface;$.fn[NAME].Constructor = Collapse;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return Collapse._jQueryInterface;};return Collapse;})(jQuery); /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Dropdown=(function($){ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='dropdown';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.dropdown';var EVENT_KEY='.' + DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var Event={HIDE:'hide' + EVENT_KEY,HIDDEN:'hidden' + EVENT_KEY,SHOW:'show' + EVENT_KEY,SHOWN:'shown' + EVENT_KEY,CLICK:'click' + EVENT_KEY,CLICK_DATA_API:'click' + EVENT_KEY + DATA_API_KEY,KEYDOWN_DATA_API:'keydown' + EVENT_KEY + DATA_API_KEY};var ClassName={BACKDROP:'dropdown-backdrop',DISABLED:'disabled',OPEN:'open'};var Selector={BACKDROP:'.dropdown-backdrop',DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:'.dropdown form',ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:'.navbar-nav',VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Dropdown=(function(){function Dropdown(element){_classCallCheck(this,Dropdown);this._element = element;this._addEventListeners();} // set default acessibility Attributes
// getters
_createClass(Dropdown,[{key:'toggle', // public
value:function toggle(){if(this.disabled || $(this).hasClass(ClassName.DISABLED)){return false;}var parent=Dropdown._getParentFromElement(this);var isActive=$(parent).hasClass(ClassName.OPEN);Dropdown._clearMenus();if(isActive){return false;}if('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length){ // if mobile we use a backdrop because click events don't delegate
var dropdown=document.createElement('div');dropdown.className = ClassName.BACKDROP;$(dropdown).insertBefore(this);$(dropdown).on('click',Dropdown._clearMenus);}var relatedTarget={relatedTarget:this};var showEvent=$.Event(Event.SHOW,relatedTarget);$(parent).trigger(showEvent);if(showEvent.isDefaultPrevented()){return false;} //this.focus()
this.setAttribute('aria-expanded','true'); // patch to select  by default first item
$(parent).toggleClass(ClassName.OPEN);$(parent).trigger($.Event(Event.SHOWN,relatedTarget));$(this).parent().find('.dropdown-menu a').first().focus();return false;}},{key:'dispose',value:function dispose(){$.removeData(this._element,DATA_KEY);$(this._element).off(EVENT_KEY);this._element = null;} // private
},{key:'_addEventListeners',value:function _addEventListeners(){$(this._element).on(Event.CLICK,this.toggle);} // static
}],[{key:'_jQueryInterface',value:function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);if(!data){$(this).data(DATA_KEY,data = new Dropdown(this));}if(typeof config === 'string'){if(data[config] === undefined){throw new Error('No method named "' + config + '"');}data[config].call(this);}});}},{key:'_clearMenus',value:function _clearMenus(event){if(event && event.which === 3){return;}var backdrop=$(Selector.BACKDROP)[0];if(backdrop){backdrop.parentNode.removeChild(backdrop);}var toggles=$.makeArray($(Selector.DATA_TOGGLE));for(var i=0;i < toggles.length;i++) {var _parent=Dropdown._getParentFromElement(toggles[i]);var relatedTarget={relatedTarget:toggles[i]};if(!$(_parent).hasClass(ClassName.OPEN)){continue;}if(event && event.type === 'click' && /input|textarea/i.test(event.target.tagName) && $.contains(_parent,event.target)){continue;}var hideEvent=$.Event(Event.HIDE,relatedTarget);$(_parent).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){continue;}toggles[i].setAttribute('aria-expanded','false');$(_parent).removeClass(ClassName.OPEN).trigger($.Event(Event.HIDDEN,relatedTarget));}}},{key:'_getParentFromElement',value:function _getParentFromElement(element){var parent=undefined;var selector=Util.getSelectorFromElement(element);if(selector){parent = $(selector)[0];}return parent || element.parentNode;}},{key:'_dataApiKeydownHandler',value:function _dataApiKeydownHandler(event){console.log('_dataApiKeydownHandler');if(!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)){return;}event.preventDefault();event.stopPropagation();if(this.disabled || $(this).hasClass(ClassName.DISABLED)){return;}var parent=Dropdown._getParentFromElement(this);var isActive=$(parent).hasClass(ClassName.OPEN);if(!isActive && event.which !== 27 || isActive && event.which === 27){if(event.which === 27){var toggle=$(parent).find(Selector.DATA_TOGGLE)[0];$(toggle).trigger('focus');}$(this).trigger('click');return;}var items=$.makeArray($(Selector.VISIBLE_ITEMS));items = items.filter(function(item){return item.offsetWidth || item.offsetHeight;});if(!items.length){return;}var index=items.indexOf(event.target);if(event.which === 38 && index > 0){ // up
index--;}if(event.which === 40 && index < items.length - 1){ // down
index++;}if(index < 0){index = 0;}items[index].focus();}},{key:'VERSION',get:function get(){return VERSION;}}]);return Dropdown;})();$(document).ready(function(){$('.dropdown-menu').attr('role','menu');$('.dropdown-menu a.dropdown-item').attr('role','menuitem');}); /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */$(document).on(Event.KEYDOWN_DATA_API,Selector.DATA_TOGGLE,Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API,Selector.ROLE_MENU,Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API,Selector.ROLE_LISTBOX,Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API,Dropdown._clearMenus).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,Dropdown.prototype.toggle).on(Event.CLICK_DATA_API,Selector.FORM_CHILD,function(e){e.stopPropagation();}); /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME] = Dropdown._jQueryInterface;$.fn[NAME].Constructor = Dropdown;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return Dropdown._jQueryInterface;};return Dropdown;})(jQuery); /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Modal=(function($){ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='modal';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.modal';var EVENT_KEY='.' + DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=300;var BACKDROP_TRANSITION_DURATION=150;var Default={backdrop:true,keyboard:true,focus:true,show:true};var DefaultType={backdrop:'(boolean|string)',keyboard:'boolean',focus:'boolean',show:'boolean'};var Event={HIDE:'hide' + EVENT_KEY,HIDDEN:'hidden' + EVENT_KEY,SHOW:'show' + EVENT_KEY,SHOWN:'shown' + EVENT_KEY,FOCUSIN:'focusin' + EVENT_KEY,RESIZE:'resize' + EVENT_KEY,CLICK_DISMISS:'click.dismiss' + EVENT_KEY,KEYDOWN_DISMISS:'keydown.dismiss' + EVENT_KEY,MOUSEUP_DISMISS:'mouseup.dismiss' + EVENT_KEY,MOUSEDOWN_DISMISS:'mousedown.dismiss' + EVENT_KEY,CLICK_DATA_API:'click' + EVENT_KEY + DATA_API_KEY};var ClassName={SCROLLBAR_MEASURER:'modal-scrollbar-measure',BACKDROP:'modal-backdrop',OPEN:'modal-open',FADE:'fade',IN:'in'};var Selector={DIALOG:'.modal-dialog',DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:'.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Modal=(function(){function Modal(element,config){_classCallCheck(this,Modal);this._config = this._getConfig(config);this._element = element;this._dialog = $(element).find(Selector.DIALOG)[0];this._backdrop = null;this._isShown = false;this._isBodyOverflowing = false;this._ignoreBackdropClick = false;this._originalBodyPadding = 0;this._scrollbarWidth = 0;} /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ // getters
_createClass(Modal,[{key:'toggle', // public
value:function toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget);}},{key:'show',value:function show(relatedTarget){var _this7=this;var showEvent=$.Event(Event.SHOW,{relatedTarget:relatedTarget});$(this._element).trigger(showEvent);if(this._isShown || showEvent.isDefaultPrevented()){return;}this._isShown = true;this._checkScrollbar();this._setScrollbar();$(document.body).addClass(ClassName.OPEN);this._setEscapeEvent();this._setResizeEvent();$(this._element).on(Event.CLICK_DISMISS,Selector.DATA_DISMISS,$.proxy(this.hide,this));$(this._dialog).on(Event.MOUSEDOWN_DISMISS,function(){$(_this7._element).one(Event.MOUSEUP_DISMISS,function(event){if($(event.target).is(_this7._element)){_this7._ignoreBackdropClick = true;}});});this._showBackdrop($.proxy(this._showElement,this,relatedTarget));}},{key:'hide',value:function hide(event){if(event){event.preventDefault();}var hideEvent=$.Event(Event.HIDE);$(this._element).trigger(hideEvent);if(!this._isShown || hideEvent.isDefaultPrevented()){return;}this._isShown = false;this._setEscapeEvent();this._setResizeEvent();$(document).off(Event.FOCUSIN);$(this._element).removeClass(ClassName.IN);$(this._element).off(Event.CLICK_DISMISS);$(this._dialog).off(Event.MOUSEDOWN_DISMISS);if(Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)){$(this._element).one(Util.TRANSITION_END,$.proxy(this._hideModal,this)).emulateTransitionEnd(TRANSITION_DURATION);}else {this._hideModal();}}},{key:'dispose',value:function dispose(){$.removeData(this._element,DATA_KEY);$(window).off(EVENT_KEY);$(document).off(EVENT_KEY);$(this._element).off(EVENT_KEY);$(this._backdrop).off(EVENT_KEY);this._config = null;this._element = null;this._dialog = null;this._backdrop = null;this._isShown = null;this._isBodyOverflowing = null;this._ignoreBackdropClick = null;this._originalBodyPadding = null;this._scrollbarWidth = null;} // private
},{key:'_getConfig',value:function _getConfig(config){config = $.extend({},Default,config);Util.typeCheckConfig(NAME,config,DefaultType);return config;}},{key:'_showElement',value:function _showElement(relatedTarget){var _this8=this;var transition=Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);if(!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE){ // don't move modals dom position
document.body.appendChild(this._element);}this._element.style.display = 'block';this._element.scrollTop = 0;if(transition){Util.reflow(this._element);}$(this._element).addClass(ClassName.IN);if(this._config.focus){this._enforceFocus();}var shownEvent=$.Event(Event.SHOWN,{relatedTarget:relatedTarget});var transitionComplete=function transitionComplete(){if(_this8._config.focus){_this8._element.focus();}$(_this8._element).trigger(shownEvent);};if(transition){$(this._dialog).one(Util.TRANSITION_END,transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);}else {transitionComplete();}}},{key:'_enforceFocus',value:function _enforceFocus(){var _this9=this;$(document).off(Event.FOCUSIN) // guard against infinite focus loop
.on(Event.FOCUSIN,function(event){if(document !== event.target && _this9._element !== event.target && !$(_this9._element).has(event.target).length){_this9._element.focus();}});}},{key:'_setEscapeEvent',value:function _setEscapeEvent(){var _this10=this;if(this._isShown && this._config.keyboard){$(this._element).on(Event.KEYDOWN_DISMISS,function(event){if(event.which === 27){_this10.hide();}});}else if(!this._isShown){$(this._element).off(Event.KEYDOWN_DISMISS);}}},{key:'_setResizeEvent',value:function _setResizeEvent(){if(this._isShown){$(window).on(Event.RESIZE,$.proxy(this._handleUpdate,this));}else {$(window).off(Event.RESIZE);}}},{key:'_hideModal',value:function _hideModal(){var _this11=this;this._element.style.display = 'none';this._showBackdrop(function(){$(document.body).removeClass(ClassName.OPEN);_this11._resetAdjustments();_this11._resetScrollbar();$(_this11._element).trigger(Event.HIDDEN);});}},{key:'_removeBackdrop',value:function _removeBackdrop(){if(this._backdrop){$(this._backdrop).remove();this._backdrop = null;}}},{key:'_showBackdrop',value:function _showBackdrop(callback){var _this12=this;var animate=$(this._element).hasClass(ClassName.FADE)?ClassName.FADE:'';if(this._isShown && this._config.backdrop){var doAnimate=Util.supportsTransitionEnd() && animate;this._backdrop = document.createElement('div');this._backdrop.className = ClassName.BACKDROP;if(animate){$(this._backdrop).addClass(animate);}$(this._backdrop).appendTo(document.body);$(this._element).on(Event.CLICK_DISMISS,function(event){if(_this12._ignoreBackdropClick){_this12._ignoreBackdropClick = false;return;}if(event.target !== event.currentTarget){return;}if(_this12._config.backdrop === 'static'){_this12._element.focus();}else {_this12.hide();}});if(doAnimate){Util.reflow(this._backdrop);}$(this._backdrop).addClass(ClassName.IN);if(!callback){return;}if(!doAnimate){callback();return;}$(this._backdrop).one(Util.TRANSITION_END,callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);}else if(!this._isShown && this._backdrop){$(this._backdrop).removeClass(ClassName.IN);var callbackRemove=function callbackRemove(){_this12._removeBackdrop();if(callback){callback();}};if(Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)){$(this._backdrop).one(Util.TRANSITION_END,callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);}else {callbackRemove();}}else if(callback){callback();}} // ----------------------------------------------------------------------
// the following methods are used to handle overflowing modals
// todo (fat): these should probably be refactored out of modal.js
// ----------------------------------------------------------------------
},{key:'_handleUpdate',value:function _handleUpdate(){this._adjustDialog();}},{key:'_adjustDialog',value:function _adjustDialog(){var isModalOverflowing=this._element.scrollHeight > document.documentElement.clientHeight;if(!this._isBodyOverflowing && isModalOverflowing){this._element.style.paddingLeft = this._scrollbarWidth + 'px';}if(this._isBodyOverflowing && !isModalOverflowing){this._element.style.paddingRight = this._scrollbarWidth + 'px~';}}},{key:'_resetAdjustments',value:function _resetAdjustments(){this._element.style.paddingLeft = '';this._element.style.paddingRight = '';}},{key:'_checkScrollbar',value:function _checkScrollbar(){var fullWindowWidth=window.innerWidth;if(!fullWindowWidth){ // workaround for missing window.innerWidth in IE8
var documentElementRect=document.documentElement.getBoundingClientRect();fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);}this._isBodyOverflowing = document.body.clientWidth < fullWindowWidth;this._scrollbarWidth = this._getScrollbarWidth();}},{key:'_setScrollbar',value:function _setScrollbar(){var bodyPadding=parseInt($(Selector.FIXED_CONTENT).css('padding-right') || 0,10);this._originalBodyPadding = document.body.style.paddingRight || '';if(this._isBodyOverflowing){document.body.style.paddingRight = bodyPadding + this._scrollbarWidth + 'px';}}},{key:'_resetScrollbar',value:function _resetScrollbar(){document.body.style.paddingRight = this._originalBodyPadding;}},{key:'_getScrollbarWidth',value:function _getScrollbarWidth(){ // thx d.walsh
var scrollDiv=document.createElement('div');scrollDiv.className = ClassName.SCROLLBAR_MEASURER;document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth - scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth;} // static
}],[{key:'_jQueryInterface',value:function _jQueryInterface(config,relatedTarget){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=$.extend({},Modal.Default,$(this).data(),typeof config === 'object' && config);if(!data){data = new Modal(this,_config);$(this).data(DATA_KEY,data);}if(typeof config === 'string'){if(data[config] === undefined){throw new Error('No method named "' + config + '"');}data[config](relatedTarget);}else if(_config.show){data.show(relatedTarget);}});}},{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}}]);return Modal;})();$(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){var _this13=this;var target=undefined;var selector=Util.getSelectorFromElement(this);if(selector){target = $(selector)[0];}var config=$(target).data(DATA_KEY)?'toggle':$.extend({},$(target).data(),$(this).data());if(this.tagName === 'A'){event.preventDefault();}var $target=$(target).one(Event.SHOW,function(showEvent){if(showEvent.isDefaultPrevented()){ // only register focus restorer if modal will actually get shown
return;}$target.one(Event.HIDDEN,function(){if($(_this13).is(':visible')){_this13.focus();}});});Modal._jQueryInterface.call($(target),config,this);});$(document).ready(function(){ // Malgré les recommandation de Bootstrap, on fait en sorte d'ajouter les tags aria pour "être sur"
var $modals=$('[data-toggle="modal"]');$modals.each(function(){ // modal = l'élement déclencheur de l'aperçu de la popin
// modalPanel = la fenêtre modal à proprement parler
var modal=$(this),modalPanel=modal.attr('data-target')?$(modal.attr('data-target')):$(modal.attr('href')); // On ajoute les tags aria qui vont bien et on empeche le focus avec tabulation
modalPanel.attr({role:'dialog'}); // LLA removed with BS 3.3.5, 'aria-hidden' : 'true', 'tabIndex' : '-1' });
// On ajoute le tags aria-labelledby uniquement si la popin à un title et que celui-ci possède un id
var modalTitle=modalPanel.find('.modal-title');if(modalTitle){var modalTitleId=modalTitle.attr('id');if(modalTitleId){modalPanel.attr({'aria-labelledby':modalTitleId});}}});$('.modal-dialog').attr({role:'document'});}); /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME] = Modal._jQueryInterface;$.fn[NAME].Constructor = Modal;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return Modal._jQueryInterface;};return Modal;})(jQuery); /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var ScrollSpy=(function($){ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='scrollspy';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.scrollspy';var EVENT_KEY='.' + DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var Default={offset:10,method:'auto',target:''};var DefaultType={offset:'number',method:'string',target:'(string|element)'};var Event={ACTIVATE:'activate' + EVENT_KEY,SCROLL:'scroll' + EVENT_KEY,LOAD_DATA_API:'load' + EVENT_KEY + DATA_API_KEY};var ClassName={DROPDOWN_ITEM:'dropdown-item',DROPDOWN_MENU:'dropdown-menu',NAV_LINK:'nav-link',NAV:'nav',ACTIVE:'active'};var Selector={DATA_SPY:'[data-spy="scroll"]',ACTIVE:'.active',LIST_ITEM:'.list-item',LI:'li',LI_DROPDOWN:'li.dropdown',NAV_LINKS:'.nav-link',DROPDOWN:'.dropdown',DROPDOWN_ITEMS:'.dropdown-item',DROPDOWN_TOGGLE:'.dropdown-toggle'};var OffsetMethod={OFFSET:'offset',POSITION:'position'}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var ScrollSpy=(function(){function ScrollSpy(element,config){_classCallCheck(this,ScrollSpy);this._element = element;this._scrollElement = element.tagName === 'BODY'?window:element;this._config = this._getConfig(config);this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);this._offsets = [];this._targets = [];this._activeTarget = null;this._scrollHeight = 0;$(this._scrollElement).on(Event.SCROLL,$.proxy(this._process,this));this.refresh();this._process();} /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ // getters
_createClass(ScrollSpy,[{key:'refresh', // public
value:function refresh(){var _this14=this;var autoMethod=this._scrollElement !== this._scrollElement.window?OffsetMethod.POSITION:OffsetMethod.OFFSET;var offsetMethod=this._config.method === 'auto'?autoMethod:this._config.method;var offsetBase=offsetMethod === OffsetMethod.POSITION?this._getScrollTop():0;this._offsets = [];this._targets = [];this._scrollHeight = this._getScrollHeight();var targets=$.makeArray($(this._selector));targets.map(function(element){var target=undefined;var targetSelector=Util.getSelectorFromElement(element);if(targetSelector){target = $(targetSelector)[0];}if(target && (target.offsetWidth || target.offsetHeight)){ // todo (fat): remove sketch reliance on jQuery position/offset
return [$(target)[offsetMethod]().top + offsetBase,targetSelector];}}).filter(function(item){return item;}).sort(function(a,b){return a[0] - b[0];}).forEach(function(item){_this14._offsets.push(item[0]);_this14._targets.push(item[1]);});}},{key:'dispose',value:function dispose(){$.removeData(this._element,DATA_KEY);$(this._scrollElement).off(EVENT_KEY);this._element = null;this._scrollElement = null;this._config = null;this._selector = null;this._offsets = null;this._targets = null;this._activeTarget = null;this._scrollHeight = null;} // private
},{key:'_getConfig',value:function _getConfig(config){config = $.extend({},Default,config);if(typeof config.target !== 'string'){var id=$(config.target).attr('id');if(!id){id = Util.getUID(NAME);$(config.target).attr('id',id);}config.target = '#' + id;}Util.typeCheckConfig(NAME,config,DefaultType);return config;}},{key:'_getScrollTop',value:function _getScrollTop(){return this._scrollElement === window?this._scrollElement.scrollY:this._scrollElement.scrollTop;}},{key:'_getScrollHeight',value:function _getScrollHeight(){return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);}},{key:'_process',value:function _process(){var scrollTop=this._getScrollTop() + this._config.offset;var scrollHeight=this._getScrollHeight();var maxScroll=this._config.offset + scrollHeight - this._scrollElement.offsetHeight;if(this._scrollHeight !== scrollHeight){this.refresh();}if(scrollTop >= maxScroll){var target=this._targets[this._targets.length - 1];if(this._activeTarget !== target){this._activate(target);}}if(this._activeTarget && scrollTop < this._offsets[0]){this._activeTarget = null;this._clear();return;}for(var i=this._offsets.length;i--;) {var isActiveTarget=this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);if(isActiveTarget){this._activate(this._targets[i]);}}}},{key:'_activate',value:function _activate(target){this._activeTarget = target;this._clear();var queries=this._selector.split(',');queries = queries.map(function(selector){return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');});var $link=$(queries.join(','));if($link.hasClass(ClassName.DROPDOWN_ITEM)){$link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);$link.addClass(ClassName.ACTIVE);}else { // todo (fat) this is kinda sus…
// recursively add actives to tested nav-links
$link.parents(Selector.LI).find(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);}$(this._scrollElement).trigger(Event.ACTIVATE,{relatedTarget:target});}},{key:'_clear',value:function _clear(){$(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);} // static
}],[{key:'_jQueryInterface',value:function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=typeof config === 'object' && config || null;if(!data){data = new ScrollSpy(this,_config);$(this).data(DATA_KEY,data);}if(typeof config === 'string'){if(data[config] === undefined){throw new Error('No method named "' + config + '"');}data[config]();}});}},{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}}]);return ScrollSpy;})();$(window).on(Event.LOAD_DATA_API,function(){var scrollSpys=$.makeArray($(Selector.DATA_SPY));for(var i=scrollSpys.length;i--;) {var $spy=$(scrollSpys[i]);ScrollSpy._jQueryInterface.call($spy,$spy.data());}}); /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */$.fn[NAME] = ScrollSpy._jQueryInterface;$.fn[NAME].Constructor = ScrollSpy;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return ScrollSpy._jQueryInterface;};return ScrollSpy;})(jQuery); /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var test;var Tab=(function($){ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='tab';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.tab';var EVENT_KEY='.' + DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=150;var Event={HIDE:'hide' + EVENT_KEY,HIDDEN:'hidden' + EVENT_KEY,SHOW:'show' + EVENT_KEY,SHOWN:'shown' + EVENT_KEY,CLICK_DATA_API:'click' + EVENT_KEY + DATA_API_KEY};var ClassName={DROPDOWN_MENU:'dropdown-menu',ACTIVE:'active',FADE:'fade',IN:'in'};var Selector={A:'a',LI:'li',DROPDOWN:'.dropdown',UL:'ul:not(.dropdown-menu)',FADE_CHILD:'> .nav-item .fade, > .fade',ACTIVE:'.active',ACTIVE_CHILD:'> .nav-item > .active, > .active',DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"]',DROPDOWN_TOGGLE:'.dropdown-toggle',DROPDOWN_ACTIVE_CHILD:'> .dropdown-menu .active'}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Tab=(function(){function Tab(element){_classCallCheck(this,Tab);this._element = element;} /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */ // getters
_createClass(Tab,[{key:'show', // public
value:function show(){var _this15=this;if(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE)){return;}var target=undefined;var previous=undefined;var ulElement=$(this._element).closest(Selector.UL)[0];var selector=Util.getSelectorFromElement(this._element);if(ulElement){previous = $.makeArray($(ulElement).find(Selector.ACTIVE));previous = previous[previous.length - 1];}var hideEvent=$.Event(Event.HIDE,{relatedTarget:this._element});var showEvent=$.Event(Event.SHOW,{relatedTarget:previous});if(previous){$(previous).trigger(hideEvent);}$(this._element).trigger(showEvent);if(showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()){return;}if(selector){target = $(selector)[0];}this._activate(this._element,ulElement);var complete=function complete(){var hiddenEvent=$.Event(Event.HIDDEN,{relatedTarget:_this15._element});var shownEvent=$.Event(Event.SHOWN,{relatedTarget:previous});$(previous).trigger(hiddenEvent);$(_this15._element).trigger(shownEvent);};if(target){this._activate(target,target.parentNode,complete);}else {complete();}}},{key:'dispose',value:function dispose(){$.removeClass(this._element,DATA_KEY);this._element = null;}},{key:'_activate', // private
value:function _activate(element,container,callback){console.log('activate'); //--- rajout
var $active=$(container).find('> .active');$active.find('[data-toggle=tab], [data-toggle=pill]').attr({'tabIndex':'-1','aria-selected':false});$active.filter('.tab-pane').attr({'aria-hidden':true,'tabIndex':'-1'}); //---
var active=$(container).find(Selector.ACTIVE_CHILD)[0];var isTransitioning=callback && Util.supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));var complete=$.proxy(this._transitionComplete,this,element,active,isTransitioning,callback);if(active && isTransitioning){$(active).one(Util.TRANSITION_END,complete).emulateTransitionEnd(TRANSITION_DURATION);}else {complete();}if(active){$(active).removeClass(ClassName.IN);}if(element.tagName === 'A'){ // $(container).find('[data-toggle=tab], [data-toggle=pill]').attr({ 'tabIndex' : '0','aria-selected' : true }).focus() // (DOESN'T WORK ?)
$('#' + element.id).attr({'tabIndex':'0','aria-selected':true}).focus();}$(element).filter('.tab-pane.active').attr({'aria-hidden':false,'tabIndex':'0'});}},{key:'_transitionComplete',value:function _transitionComplete(element,active,isTransitioning,callback){if(active){$(active).removeClass(ClassName.ACTIVE);var dropdownChild=$(active).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];if(dropdownChild){$(dropdownChild).removeClass(ClassName.ACTIVE);}active.setAttribute('aria-expanded',false);}$(element).addClass(ClassName.ACTIVE);element.setAttribute('aria-expanded',true);if(isTransitioning){Util.reflow(element);$(element).addClass(ClassName.IN);}else {$(element).removeClass(ClassName.FADE);}if(element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)){var dropdownElement=$(element).closest(Selector.DROPDOWN)[0];if(dropdownElement){$(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);}element.setAttribute('aria-expanded',true);}if(callback){callback();}} // static
}],[{key:'_keydown',value:function _keydown(e){console.log('keydown!');var $this=$(this),$items,$ul=$this.closest('ul[role=tablist] '),index,k=e.which || e.keyCode;$this = $(this);if(!/(37|38|39|40)/.test(k))return;$items = $ul.find('[role=tab]:visible');index = $items.index($items.filter(':focus'));if(k === 38 || k === 37)index--; // up & left
if(k === 39 || k === 40)index++; // down & right
if(index < 0)index = $items.length - 1;if(index === $items.length)index = 0;var nextTab=$items.eq(index);if(nextTab.attr('role') === 'tab'){nextTab.tab('show') //Comment this line for dynamically loaded tabPabels, to save Ajax requests on arrow key navigation
.focus();} // nextTab.focus()
e.preventDefault();e.stopPropagation();}},{key:'_jQueryInterface',value:function _jQueryInterface(config){return this.each(function(){var $this=$(this);var data=$this.data(DATA_KEY);if(!data){data = data = new Tab(this);$this.data(DATA_KEY,data);}if(typeof config === 'string'){if(data[config] === undefined){throw new Error('No method named "' + config + '"');}data[config]();}});}},{key:'VERSION',get:function get(){return VERSION;}}]);return Tab;})();$(document).on(Event.CLICK_DATA_API,Selector.DATA_TOGGLE,function(event){event.preventDefault();Tab._jQueryInterface.call($(this),'show');});$(document).on('keydown.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(event){if(!/(38|40|39|37)/.test(event.which)){return;}event.preventDefault();Tab._keydown.call($(this),event);}); /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */ // ajout de l'accesibilité
// ===============================
var uniqueId=function uniqueId(prefix){return (prefix || 'ui-id') + '-' + Math.floor(Math.random() * 1000 + 1);};var $tablist=$('.nav-tabs, .nav-pills'),$lis=$tablist.children('li'),$tabs=$tablist.find('[data-toggle="tab"], [data-toggle="pill"]');$tablist.attr('role','tablist');$lis.attr('role','presentation');$tabs.attr('role','tab');$tabs.each(function(index){var tabpanel=$($(this).attr('href')),tab=$(this),tabid=tab.attr('id') || uniqueId('ui-tab');tab.attr('id',tabid);if(tab.hasClass('active')){tab.attr({'tabIndex':'0','aria-selected':'true','aria-controls':tab.attr('href').substr(1)});tabpanel.attr({'role':'tabpanel','tabIndex':'0','aria-hidden':'false','aria-labelledby':tabid});}else {tab.attr({'tabIndex':'-1','aria-selected':'false','aria-controls':tab.attr('href').substr(1)});tabpanel.attr({'role':'tabpanel','tabIndex':'-1','aria-hidden':'true','aria-labelledby':tabid});}});$.fn[NAME] = Tab._jQueryInterface;$.fn[NAME].Constructor = Tab;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return Tab._jQueryInterface;};return Tab;})(jQuery); /* global Tether */ /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Tooltip=(function($){ /**
   * Check for Tether dependency
   * Tether - http://github.hubspot.com/tether/
   */if(window.Tether === undefined){throw new Error('Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)');} /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='tooltip';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.tooltip';var EVENT_KEY='.' + DATA_KEY;var JQUERY_NO_CONFLICT=$.fn[NAME];var TRANSITION_DURATION=150;var CLASS_PREFIX='bs-tether';var Default={animation:true,template:'<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,selector:false,placement:'top',offset:'0 0',constraints:[]};var DefaultType={animation:'boolean',template:'string',title:'(string|element|function)',trigger:'string',delay:'(number|object)',html:'boolean',selector:'(string|boolean)',placement:'(string|function)',offset:'string',constraints:'array'};var AttachmentMap={TOP:'bottom center',RIGHT:'middle left',BOTTOM:'top center',LEFT:'middle right'};var HoverState={IN:'in',OUT:'out'};var Event={HIDE:'hide' + EVENT_KEY,HIDDEN:'hidden' + EVENT_KEY,SHOW:'show' + EVENT_KEY,SHOWN:'shown' + EVENT_KEY,INSERTED:'inserted' + EVENT_KEY,CLICK:'click' + EVENT_KEY,FOCUSIN:'focusin' + EVENT_KEY,FOCUSOUT:'focusout' + EVENT_KEY,MOUSEENTER:'mouseenter' + EVENT_KEY,MOUSELEAVE:'mouseleave' + EVENT_KEY};var ClassName={FADE:'fade',IN:'in'};var Selector={TOOLTIP:'.tooltip',TOOLTIP_INNER:'.tooltip-inner'};var TetherClass={element:false,enabled:false};var Trigger={HOVER:'hover',FOCUS:'focus',CLICK:'click',MANUAL:'manual'}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Tooltip=(function(){function Tooltip(element,config){_classCallCheck(this,Tooltip); // private
this._isEnabled = true;this._timeout = 0;this._hoverState = '';this._activeTrigger = {};this._tether = null; // protected
this.element = element;this.config = this._getConfig(config);this.tip = null;this._setListeners();} /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */ // getters
_createClass(Tooltip,[{key:'enable', // public
value:function enable(){this._isEnabled = true;}},{key:'disable',value:function disable(){this._isEnabled = false;}},{key:'toggleEnabled',value:function toggleEnabled(){this._isEnabled = !this._isEnabled;}},{key:'toggle',value:function toggle(event){if(event){var dataKey=this.constructor.DATA_KEY;var context=$(event.currentTarget).data(dataKey);if(!context){context = new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}context._activeTrigger.click = !context._activeTrigger.click;if(context._isWithActiveTrigger()){context._enter(null,context);}else {context._leave(null,context);}}else {if($(this.getTipElement()).hasClass(ClassName.IN)){this._leave(null,this);return;}this._enter(null,this);}}},{key:'dispose',value:function dispose(){clearTimeout(this._timeout);this.cleanupTether();$.removeData(this.element,this.constructor.DATA_KEY);$(this.element).off(this.constructor.EVENT_KEY);if(this.tip){$(this.tip).remove();}this._isEnabled = null;this._timeout = null;this._hoverState = null;this._activeTrigger = null;this._tether = null;this.element = null;this.config = null;this.tip = null;}},{key:'show',value:function show(){var _this16=this;var showEvent=$.Event(this.constructor.Event.SHOW);if(this.isWithContent() && this._isEnabled){$(this.element).trigger(showEvent);var isInTheDom=$.contains(this.element.ownerDocument.documentElement,this.element);if(showEvent.isDefaultPrevented() || !isInTheDom){return;}var tip=this.getTipElement();var tipId=Util.getUID(this.constructor.NAME);tip.setAttribute('id',tipId);this.element.setAttribute('aria-describedby',tipId);this.setContent();if(this.config.animation){$(tip).addClass(ClassName.FADE);}var placement=typeof this.config.placement === 'function'?this.config.placement.call(this,tip,this.element):this.config.placement;var attachment=this._getAttachment(placement);$(tip).data(this.constructor.DATA_KEY,this).appendTo(document.body);$(this.element).trigger(this.constructor.Event.INSERTED);this._tether = new Tether({attachment:attachment,element:tip,target:this.element,classes:TetherClass,classPrefix:CLASS_PREFIX,offset:this.config.offset,constraints:this.config.constraints,addTargetClasses:false});Util.reflow(tip);this._tether.position();$(tip).addClass(ClassName.IN);var complete=function complete(){var prevHoverState=_this16._hoverState;_this16._hoverState = null;$(_this16.element).trigger(_this16.constructor.Event.SHOWN);if(prevHoverState === HoverState.OUT){_this16._leave(null,_this16);}};if(Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)){$(this.tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);return;}complete();}}},{key:'hide',value:function hide(callback){var _this17=this;var tip=this.getTipElement();var hideEvent=$.Event(this.constructor.Event.HIDE);var complete=function complete(){if(_this17._hoverState !== HoverState.IN && tip.parentNode){tip.parentNode.removeChild(tip);}_this17.element.removeAttribute('aria-describedby');$(_this17.element).trigger(_this17.constructor.Event.HIDDEN);_this17.cleanupTether();if(callback){callback();}};$(this.element).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return;}$(tip).removeClass(ClassName.IN);if(Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)){$(tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(TRANSITION_DURATION);}else {complete();}this._hoverState = '';} // protected
},{key:'isWithContent',value:function isWithContent(){return Boolean(this.getTitle());}},{key:'getTipElement',value:function getTipElement(){return this.tip = this.tip || $(this.config.template)[0];}},{key:'setContent',value:function setContent(){var $tip=$(this.getTipElement());this.setElementContent($tip.find(Selector.TOOLTIP_INNER),this.getTitle());$tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);this.cleanupTether();}},{key:'setElementContent',value:function setElementContent($element,content){var html=this.config.html;if(typeof content === 'object' && (content.nodeType || content.jquery)){ // content is a DOM node or a jQuery
if(html){if(!$(content).parent().is($element)){$element.empty().append(content);}}else {$element.text($(content).text());}}else {$element[html?'html':'text'](content);}}},{key:'getTitle',value:function getTitle(){var title=this.element.getAttribute('data-original-title');if(!title){title = typeof this.config.title === 'function'?this.config.title.call(this.element):this.config.title;}return title;}},{key:'cleanupTether',value:function cleanupTether(){if(this._tether){this._tether.destroy();}} // private
},{key:'_getAttachment',value:function _getAttachment(placement){return AttachmentMap[placement.toUpperCase()];}},{key:'_setListeners',value:function _setListeners(){var _this18=this;var triggers=this.config.trigger.split(' ');triggers.forEach(function(trigger){if(trigger === 'click'){$(_this18.element).on(_this18.constructor.Event.CLICK,_this18.config.selector,$.proxy(_this18.toggle,_this18));}else if(trigger !== Trigger.MANUAL){var eventIn=trigger === Trigger.HOVER?_this18.constructor.Event.MOUSEENTER:_this18.constructor.Event.FOCUSIN;var eventOut=trigger === Trigger.HOVER?_this18.constructor.Event.MOUSELEAVE:_this18.constructor.Event.FOCUSOUT;$(_this18.element).on(eventIn,_this18.config.selector,$.proxy(_this18._enter,_this18)).on(eventOut,_this18.config.selector,$.proxy(_this18._leave,_this18));}});if(this.config.selector){this.config = $.extend({},this.config,{trigger:'manual',selector:''});}else {this._fixTitle();}}},{key:'_fixTitle',value:function _fixTitle(){var titleType=typeof this.element.getAttribute('data-original-title');if(this.element.getAttribute('title') || titleType !== 'string'){this.element.setAttribute('data-original-title',this.element.getAttribute('title') || '');this.element.setAttribute('title','');}}},{key:'_enter',value:function _enter(event,context){var dataKey=this.constructor.DATA_KEY;context = context || $(event.currentTarget).data(dataKey);if(!context){context = new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}if(event){context._activeTrigger[event.type === 'focusin'?Trigger.FOCUS:Trigger.HOVER] = true;}if($(context.getTipElement()).hasClass(ClassName.IN) || context._hoverState === HoverState.IN){context._hoverState = HoverState.IN;return;}clearTimeout(context._timeout);context._hoverState = HoverState.IN;if(!context.config.delay || !context.config.delay.show){context.show();return;}context._timeout = setTimeout(function(){if(context._hoverState === HoverState.IN){context.show();}},context.config.delay.show);}},{key:'_leave',value:function _leave(event,context){var dataKey=this.constructor.DATA_KEY;context = context || $(event.currentTarget).data(dataKey);if(!context){context = new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}if(event){context._activeTrigger[event.type === 'focusout'?Trigger.FOCUS:Trigger.HOVER] = false;}if(context._isWithActiveTrigger()){return;}clearTimeout(context._timeout);context._hoverState = HoverState.OUT;if(!context.config.delay || !context.config.delay.hide){context.hide();return;}context._timeout = setTimeout(function(){if(context._hoverState === HoverState.OUT){context.hide();}},context.config.delay.hide);}},{key:'_isWithActiveTrigger',value:function _isWithActiveTrigger(){for(var trigger in this._activeTrigger) {if(this._activeTrigger[trigger]){return true;}}return false;}},{key:'_getConfig',value:function _getConfig(config){config = $.extend({},this.constructor.Default,$(this.element).data(),config);if(config.delay && typeof config.delay === 'number'){config.delay = {show:config.delay,hide:config.delay};}Util.typeCheckConfig(NAME,config,this.constructor.DefaultType);return config;}},{key:'_getDelegateConfig',value:function _getDelegateConfig(){var config={};if(this.config){for(var key in this.config) {if(this.constructor.Default[key] !== this.config[key]){config[key] = this.config[key];}}}return config;} // static
}],[{key:'_jQueryInterface',value:function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=typeof config === 'object'?config:null;if(!data && /destroy|hide/.test(config)){return;}if(!data){data = new Tooltip(this,_config);$(this).data(DATA_KEY,data);}if(typeof config === 'string'){if(data[config] === undefined){throw new Error('No method named "' + config + '"');}data[config]();}});}},{key:'VERSION',get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}},{key:'NAME',get:function get(){return NAME;}},{key:'DATA_KEY',get:function get(){return DATA_KEY;}},{key:'Event',get:function get(){return Event;}},{key:'EVENT_KEY',get:function get(){return EVENT_KEY;}},{key:'DefaultType',get:function get(){return DefaultType;}}]);return Tooltip;})();$.fn[NAME] = Tooltip._jQueryInterface;$.fn[NAME].Constructor = Tooltip;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return Tooltip._jQueryInterface;};return Tooltip;})(jQuery); /**
 * --------------------------------------------------------------------------
 * Orange Boosted
 * Based on
 * Bootstrap (v4.0.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Megamenu=(function($){'use strict';var megamenuItems='.mega-menu ul.navbar-nav > li > a';function uuid(){return 'ui-' + (Math.random().toString(16) + "000000000").substr(2,8);} // arrow keys management
$(document).on('keydown',megamenuItems,function(e){if(!/(37|38|39|40)/.test(e.which)){return;}e.preventDefault();e.stopPropagation();var k=e.which || e.keyCode;var index=$(megamenuItems).index(e.target);if((k === 37 || k === 38) && index > 0){index--;} // up & left
if((k === 39 || k === 40) && index < $(megamenuItems).length - 1){index++;} // down & right
$(megamenuItems).eq(index).trigger('focus');}); // WAI-ARIA
$('.mega-menu .dropdown-toggle').each(function(){var dropdownToggleId=uuid();var dropdownMenu=$(this).next('ul.dropdown-menu');var dropdownMenuId=uuid();$(this).attr('id',dropdownToggleId);$(dropdownMenu).attr('id',dropdownMenuId);$(this).attr('aria-owns',dropdownMenuId);$(this).attr('aria-controls',dropdownMenuId);$(dropdownMenu).attr('aria-labelledby',dropdownToggleId);});})(jQuery); /**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */var Popover=(function($){ /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */var NAME='popover';var VERSION='4.0.0-alpha.2';var DATA_KEY='bs.popover';var EVENT_KEY='.' + DATA_KEY;var JQUERY_NO_CONFLICT=$.fn[NAME];var Default=$.extend({},Tooltip.Default,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-title"></h3>' + '<div class="popover-content"></div></div>'});var DefaultType=$.extend({},Tooltip.DefaultType,{content:'(string|element|function)'});var ClassName={FADE:'fade',IN:'in'};var Selector={TITLE:'.popover-title',CONTENT:'.popover-content',ARROW:'.popover-arrow'};var Event={HIDE:'hide' + EVENT_KEY,HIDDEN:'hidden' + EVENT_KEY,SHOW:'show' + EVENT_KEY,SHOWN:'shown' + EVENT_KEY,INSERTED:'inserted' + EVENT_KEY,CLICK:'click' + EVENT_KEY,FOCUSIN:'focusin' + EVENT_KEY,FOCUSOUT:'focusout' + EVENT_KEY,MOUSEENTER:'mouseenter' + EVENT_KEY,MOUSELEAVE:'mouseleave' + EVENT_KEY}; /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */var Popover=(function(_Tooltip){_inherits(Popover,_Tooltip);function Popover(){_classCallCheck(this,Popover);_get(Object.getPrototypeOf(Popover.prototype),'constructor',this).apply(this,arguments);} /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */_createClass(Popover,[{key:'isWithContent', // overrides
value:function isWithContent(){return this.getTitle() || this._getContent();}},{key:'getTipElement',value:function getTipElement(){return this.tip = this.tip || $(this.config.template)[0];}},{key:'setContent',value:function setContent(){var $tip=$(this.getTipElement()); // we use append for html objects to maintain js events
this.setElementContent($tip.find(Selector.TITLE),this.getTitle());this.setElementContent($tip.find(Selector.CONTENT),this._getContent());$tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);this.cleanupTether();} // private
},{key:'_getContent',value:function _getContent(){return this.element.getAttribute('data-content') || (typeof this.config.content === 'function'?this.config.content.call(this.element):this.config.content);} // static
}],[{key:'_jQueryInterface',value:function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY);var _config=typeof config === 'object'?config:null;if(!data && /destroy|hide/.test(config)){return;}if(!data){data = new Popover(this,_config);$(this).data(DATA_KEY,data);}if(typeof config === 'string'){if(data[config] === undefined){throw new Error('No method named "' + config + '"');}data[config]();}});}},{key:'VERSION', // getters
get:function get(){return VERSION;}},{key:'Default',get:function get(){return Default;}},{key:'NAME',get:function get(){return NAME;}},{key:'DATA_KEY',get:function get(){return DATA_KEY;}},{key:'Event',get:function get(){return Event;}},{key:'EVENT_KEY',get:function get(){return EVENT_KEY;}},{key:'DefaultType',get:function get(){return DefaultType;}}]);return Popover;})(Tooltip);$.fn[NAME] = Popover._jQueryInterface;$.fn[NAME].Constructor = Popover;$.fn[NAME].noConflict = function(){$.fn[NAME] = JQUERY_NO_CONFLICT;return Popover._jQueryInterface;};return Popover;})(jQuery);

}(jQuery);

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function($) {

/*! TableSorter (FORK) v2.25.0 *//*
* Client-side table sorting with ease!
* @requires jQuery v1.2.6+
*
* Copyright (c) 2007 Christian Bach
* fork maintained by Rob Garrison
*
* Examples and docs at: http://tablesorter.com
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* @type jQuery
* @name tablesorter (FORK)
* @cat Plugins/Tablesorter
* @author Christian Bach - christian.bach@polyester.se
* @contributor Rob Garrison - https://github.com/Mottie/tablesorter
*/
/*jshint browser:true, jquery:true, unused:false, expr: true */
;( function( $ ) {
	'use strict';
	var ts = $.tablesorter = {

		version : '2.25.0',

		parsers : [],
		widgets : [],
		defaults : {

			// *** appearance
			theme            : 'default',  // adds tablesorter-{theme} to the table for styling
			widthFixed       : false,      // adds colgroup to fix widths of columns
			showProcessing   : false,      // show an indeterminate timer icon in the header when the table is sorted or filtered.

			headerTemplate   : '{content}',// header layout template (HTML ok); {content} = innerHTML, {icon} = <i/> // class from cssIcon
			onRenderTemplate : null,       // function( index, template ){ return template; }, // template is a string
			onRenderHeader   : null,       // function( index ){}, // nothing to return

			// *** functionality
			cancelSelection  : true,       // prevent text selection in the header
			tabIndex         : true,       // add tabindex to header for keyboard accessibility
			dateFormat       : 'mmddyyyy', // other options: 'ddmmyyy' or 'yyyymmdd'
			sortMultiSortKey : 'shiftKey', // key used to select additional columns
			sortResetKey     : 'ctrlKey',  // key used to remove sorting on a column
			usNumberFormat   : true,       // false for German '1.234.567,89' or French '1 234 567,89'
			delayInit        : false,      // if false, the parsed table contents will not update until the first sort
			serverSideSorting: false,      // if true, server-side sorting should be performed because client-side sorting will be disabled, but the ui and events will still be used.
			resort           : true,       // default setting to trigger a resort after an 'update', 'addRows', 'updateCell', etc has completed

			// *** sort options
			headers          : {},         // set sorter, string, empty, locked order, sortInitialOrder, filter, etc.
			ignoreCase       : true,       // ignore case while sorting
			sortForce        : null,       // column(s) first sorted; always applied
			sortList         : [],         // Initial sort order; applied initially; updated when manually sorted
			sortAppend       : null,       // column(s) sorted last; always applied
			sortStable       : false,      // when sorting two rows with exactly the same content, the original sort order is maintained

			sortInitialOrder : 'asc',      // sort direction on first click
			sortLocaleCompare: false,      // replace equivalent character (accented characters)
			sortReset        : false,      // third click on the header will reset column to default - unsorted
			sortRestart      : false,      // restart sort to 'sortInitialOrder' when clicking on previously unsorted columns

			emptyTo          : 'bottom',   // sort empty cell to bottom, top, none, zero, emptyMax, emptyMin
			stringTo         : 'max',      // sort strings in numerical column as max, min, top, bottom, zero
			duplicateSpan    : true,       // colspan cells in the tbody will have duplicated content in the cache for each spanned column
			textExtraction   : 'basic',    // text extraction method/function - function( node, table, cellIndex ){}
			textAttribute    : 'data-text',// data-attribute that contains alternate cell text (used in default textExtraction function)
			textSorter       : null,       // choose overall or specific column sorter function( a, b, direction, table, columnIndex ) [alt: ts.sortText]
			numberSorter     : null,       // choose overall numeric sorter function( a, b, direction, maxColumnValue )

			// *** widget options
			widgets: [],                   // method to add widgets, e.g. widgets: ['zebra']
			widgetOptions    : {
				zebra : [ 'even', 'odd' ]    // zebra widget alternating row class names
			},
			initWidgets      : true,       // apply widgets on tablesorter initialization
			widgetClass      : 'widget-{name}', // table class name template to match to include a widget

			// *** callbacks
			initialized      : null,       // function( table ){},

			// *** extra css class names
			tableClass       : '',
			cssAsc           : '',
			cssDesc          : '',
			cssNone          : '',
			cssHeader        : '',
			cssHeaderRow     : '',
			cssProcessing    : '', // processing icon applied to header during sort/filter

			cssChildRow      : 'tablesorter-childRow', // class name indiciating that a row is to be attached to the its parent
			cssInfoBlock     : 'tablesorter-infoOnly', // don't sort tbody with this class name (only one class name allowed here!)
			cssNoSort        : 'tablesorter-noSort',      // class name added to element inside header; clicking on it won't cause a sort
			cssIgnoreRow     : 'tablesorter-ignoreRow',   // header row to ignore; cells within this row will not be added to c.$headers

			cssIcon          : 'tablesorter-icon', // if this class does not exist, the {icon} will not be added from the headerTemplate
			cssIconNone      : '', // class name added to the icon when there is no column sort
			cssIconAsc       : '', // class name added to the icon when the column has an ascending sort
			cssIconDesc      : '', // class name added to the icon when the column has a descending sort

			// *** events
			pointerClick     : 'click',
			pointerDown      : 'mousedown',
			pointerUp        : 'mouseup',

			// *** selectors
			selectorHeaders  : '> thead th, > thead td',
			selectorSort     : 'th, td',   // jQuery selector of content within selectorHeaders that is clickable to trigger a sort
			selectorRemove   : '.remove-me',

			// *** advanced
			debug            : false,

			// *** Internal variables
			headerList: [],
			empties: {},
			strings: {},
			parsers: []

			// removed: widgetZebra: { css: ['even', 'odd'] }

		},

		// internal css classes - these will ALWAYS be added to
		// the table and MUST only contain one class name - fixes #381
		css : {
			table      : 'tablesorter',
			cssHasChild: 'tablesorter-hasChildRow',
			childRow   : 'tablesorter-childRow',
			colgroup   : 'tablesorter-colgroup',
			header     : 'tablesorter-header',
			headerRow  : 'tablesorter-headerRow',
			headerIn   : 'tablesorter-header-inner',
			icon       : 'tablesorter-icon',
			processing : 'tablesorter-processing',
			sortAsc    : 'tablesorter-headerAsc',
			sortDesc   : 'tablesorter-headerDesc',
			sortNone   : 'tablesorter-headerUnSorted'
		},

		// labels applied to sortable headers for accessibility (aria) support
		language : {
			sortAsc      : 'Ascending sort applied, ',
			sortDesc     : 'Descending sort applied, ',
			sortNone     : 'No sort applied, ',
			sortDisabled : 'sorting is disabled',
			nextAsc      : 'activate to apply an ascending sort',
			nextDesc     : 'activate to apply a descending sort',
			nextNone     : 'activate to remove the sort'
		},

		regex : {
			templateContent : /\{content\}/g,
			templateIcon    : /\{icon\}/g,
			templateName    : /\{name\}/i,
			spaces          : /\s+/g,
			nonWord         : /\W/g,
			formElements    : /(input|select|button|textarea)/i,

			// *** sort functions ***
			// regex used in natural sort
			// chunk/tokenize numbers & letters
			chunk  : /(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
			// replace chunks @ ends
			chunks : /(^\\0|\\0$)/,
			hex    : /^0x[0-9a-f]+$/i,

			// *** formatFloat ***
			comma                : /,/g,
			digitNonUS           : /[\s|\.]/g,
			digitNegativeTest    : /^\s*\([.\d]+\)/,
			digitNegativeReplace : /^\s*\(([.\d]+)\)/,

			// *** isDigit ***
			digitTest    : /^[\-+(]?\d+[)]?$/,
			digitReplace : /[,.'"\s]/g

		},

		// digit sort text location; keeping max+/- for backwards compatibility
		string : {
			max      : 1,
			min      : -1,
			emptymin : 1,
			emptymax : -1,
			zero     : 0,
			none     : 0,
			'null'   : 0,
			top      : true,
			bottom   : false
		},

		// placeholder date parser data (globalize)
		dates : {},

		// These methods can be applied on table.config instance
		instanceMethods : {},

		/*
		▄█████ ██████ ██████ ██  ██ █████▄
		▀█▄    ██▄▄     ██   ██  ██ ██▄▄██
		   ▀█▄ ██▀▀     ██   ██  ██ ██▀▀▀
		█████▀ ██████   ██   ▀████▀ ██
		*/

		setup : function( table, c ) {
			// if no thead or tbody, or tablesorter is already present, quit
			if ( !table || !table.tHead || table.tBodies.length === 0 || table.hasInitialized === true ) {
				if ( c.debug ) {
					if ( table.hasInitialized ) {
						console.warn( 'Stopping initialization. Tablesorter has already been initialized' );
					} else {
						console.error( 'Stopping initialization! No table, thead or tbody', table );
					}
				}
				return;
			}

			var tmp = '',
				$table = $( table ),
				meta = $.metadata;
			// initialization flag
			table.hasInitialized = false;
			// table is being processed flag
			table.isProcessing = true;
			// make sure to store the config object
			table.config = c;
			// save the settings where they read
			$.data( table, 'tablesorter', c );
			if ( c.debug ) {
				console[ console.group ? 'group' : 'log' ]( 'Initializing tablesorter' );
				$.data( table, 'startoveralltimer', new Date() );
			}

			// removing this in version 3 (only supports jQuery 1.7+)
			c.supportsDataObject = ( function( version ) {
				version[ 0 ] = parseInt( version[ 0 ], 10 );
				return ( version[ 0 ] > 1 ) || ( version[ 0 ] === 1 && parseInt( version[ 1 ], 10 ) >= 4 );
			})( $.fn.jquery.split( '.' ) );
			// ensure case insensitivity
			c.emptyTo = c.emptyTo.toLowerCase();
			c.stringTo = c.stringTo.toLowerCase();
			c.last = { sortList : [], clickedIndex : -1 };
			// add table theme class only if there isn't already one there
			if ( !/tablesorter\-/.test( $table.attr( 'class' ) ) ) {
				tmp = ( c.theme !== '' ? ' tablesorter-' + c.theme : '' );
			}
			c.table = table;
			c.$table = $table
				.addClass( ts.css.table + ' ' + c.tableClass + tmp )
				.attr( 'role', 'grid' );
			c.$headers = $table.find( c.selectorHeaders );

			// give the table a unique id, which will be used in namespace binding
			if ( !c.namespace ) {
				c.namespace = '.tablesorter' + Math.random().toString( 16 ).slice( 2 );
			} else {
				// make sure namespace starts with a period & doesn't have weird characters
				c.namespace = '.' + c.namespace.replace( ts.regex.nonWord, '' );
			}

			c.$table.children().children( 'tr' ).attr( 'role', 'row' );
			c.$tbodies = $table.children( 'tbody:not(.' + c.cssInfoBlock + ')' ).attr({
				'aria-live' : 'polite',
				'aria-relevant' : 'all'
			});
			if ( c.$table.children( 'caption' ).length ) {
				tmp = c.$table.children( 'caption' )[ 0 ];
				if ( !tmp.id ) { tmp.id = c.namespace.slice( 1 ) + 'caption'; }
				c.$table.attr( 'aria-labelledby', tmp.id );
			}
			c.widgetInit = {}; // keep a list of initialized widgets
			// change textExtraction via data-attribute
			c.textExtraction = c.$table.attr( 'data-text-extraction' ) || c.textExtraction || 'basic';
			// build headers
			ts.buildHeaders( c );
			// fixate columns if the users supplies the fixedWidth option
			// do this after theme has been applied
			ts.fixColumnWidth( table );
			// add widgets from class name
			ts.addWidgetFromClass( table );
			// add widget options before parsing (e.g. grouping widget has parser settings)
			ts.applyWidgetOptions( table );
			// try to auto detect column type, and store in tables config
			ts.setupParsers( c );
			// start total row count at zero
			c.totalRows = 0;
			// build the cache for the tbody cells
			// delayInit will delay building the cache until the user starts a sort
			if ( !c.delayInit ) { ts.buildCache( c ); }
			// bind all header events and methods
			ts.bindEvents( table, c.$headers, true );
			ts.bindMethods( c );
			// get sort list from jQuery data or metadata
			// in jQuery < 1.4, an error occurs when calling $table.data()
			if ( c.supportsDataObject && typeof $table.data().sortlist !== 'undefined' ) {
				c.sortList = $table.data().sortlist;
			} else if ( meta && ( $table.metadata() && $table.metadata().sortlist ) ) {
				c.sortList = $table.metadata().sortlist;
			}
			// apply widget init code
			ts.applyWidget( table, true );
			// if user has supplied a sort list to constructor
			if ( c.sortList.length > 0 ) {
				ts.sortOn( c, c.sortList, {}, !c.initWidgets );
			} else {
				ts.setHeadersCss( c );
				if ( c.initWidgets ) {
					// apply widget format
					ts.applyWidget( table, false );
				}
			}

			// show processesing icon
			if ( c.showProcessing ) {
				$table
				.unbind( 'sortBegin' + c.namespace + ' sortEnd' + c.namespace )
				.bind( 'sortBegin' + c.namespace + ' sortEnd' + c.namespace, function( e ) {
					clearTimeout( c.timerProcessing );
					ts.isProcessing( table );
					if ( e.type === 'sortBegin' ) {
						c.timerProcessing = setTimeout( function() {
							ts.isProcessing( table, true );
						}, 500 );
					}
				});
			}

			// initialized
			table.hasInitialized = true;
			table.isProcessing = false;
			if ( c.debug ) {
				console.log( 'Overall initialization time: ' + ts.benchmark( $.data( table, 'startoveralltimer' ) ) );
				if ( c.debug && console.groupEnd ) { console.groupEnd(); }
			}
			$table.triggerHandler( 'tablesorter-initialized', table );
			if ( typeof c.initialized === 'function' ) {
				c.initialized( table );
			}
		},

		bindMethods : function( c ) {
			var $table = c.$table,
				namespace = c.namespace,
				events = ( 'sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete ' +
					'sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup ' +
					'mouseleave ' ).split( ' ' )
					.join( namespace + ' ' );
			// apply easy methods that trigger bound events
			$table
			.unbind( events.replace( ts.regex.spaces, ' ' ) )
			.bind( 'sortReset' + namespace, function( e, callback ) {
				e.stopPropagation();
				// using this.config to ensure functions are getting a non-cached version of the config
				ts.sortReset( this.config, callback );
			})
			.bind( 'updateAll' + namespace, function( e, resort, callback ) {
				e.stopPropagation();
				ts.updateAll( this.config, resort, callback );
			})
			.bind( 'update' + namespace + ' updateRows' + namespace, function( e, resort, callback ) {
				e.stopPropagation();
				ts.update( this.config, resort, callback );
			})
			.bind( 'updateHeaders' + namespace, function( e, callback ) {
				e.stopPropagation();
				ts.updateHeaders( this.config, callback );
			})
			.bind( 'updateCell' + namespace, function( e, cell, resort, callback ) {
				e.stopPropagation();
				ts.updateCell( this.config, cell, resort, callback );
			})
			.bind( 'addRows' + namespace, function( e, $row, resort, callback ) {
				e.stopPropagation();
				ts.addRows( this.config, $row, resort, callback );
			})
			.bind( 'updateComplete' + namespace, function() {
				this.isUpdating = false;
			})
			.bind( 'sorton' + namespace, function( e, list, callback, init ) {
				e.stopPropagation();
				ts.sortOn( this.config, list, callback, init );
			})
			.bind( 'appendCache' + namespace, function( e, callback, init ) {
				e.stopPropagation();
				ts.appendCache( this.config, init );
				if ( $.isFunction( callback ) ) {
					callback( this );
				}
			})
			// $tbodies variable is used by the tbody sorting widget
			.bind( 'updateCache' + namespace, function( e, callback, $tbodies ) {
				e.stopPropagation();
				ts.updateCache( this.config, callback, $tbodies );
			})
			.bind( 'applyWidgetId' + namespace, function( e, id ) {
				e.stopPropagation();
				ts.applyWidgetId( this, id );
			})
			.bind( 'applyWidgets' + namespace, function( e, init ) {
				e.stopPropagation();
				// apply widgets
				ts.applyWidget( this, init );
			})
			.bind( 'refreshWidgets' + namespace, function( e, all, dontapply ) {
				e.stopPropagation();
				ts.refreshWidgets( this, all, dontapply );
			})
			.bind( 'removeWidget' + namespace, function( e, name, refreshing ) {
				e.stopPropagation();
				ts.removeWidget( this, name, refreshing );
			})
			.bind( 'destroy' + namespace, function( e, removeClasses, callback ) {
				e.stopPropagation();
				ts.destroy( this, removeClasses, callback );
			})
			.bind( 'resetToLoadState' + namespace, function( e ) {
				e.stopPropagation();
				// remove all widgets
				ts.removeWidget( this, true, false );
				// restore original settings; this clears out current settings, but does not clear
				// values saved to storage.
				c = $.extend( true, ts.defaults, c.originalSettings );
				this.hasInitialized = false;
				// setup the entire table again
				ts.setup( this, c );
			});
		},

		bindEvents : function( table, $headers, core ) {
			table = $( table )[ 0 ];
			var tmp,
				c = table.config,
				namespace = c.namespace,
				downTarget = null;
			if ( core !== true ) {
				$headers.addClass( namespace.slice( 1 ) + '_extra_headers' );
				tmp = $.fn.closest ? $headers.closest( 'table' )[ 0 ] : $headers.parents( 'table' )[ 0 ];
				if ( tmp && tmp.nodeName === 'TABLE' && tmp !== table ) {
					$( tmp ).addClass( namespace.slice( 1 ) + '_extra_table' );
				}
			}
			tmp = ( c.pointerDown + ' ' + c.pointerUp + ' ' + c.pointerClick + ' sort keyup ' )
				.replace( ts.regex.spaces, ' ' )
				.split( ' ' )
				.join( namespace + ' ' );
			// apply event handling to headers and/or additional headers (stickyheaders, scroller, etc)
			$headers
			// http://stackoverflow.com/questions/5312849/jquery-find-self;
			.find( c.selectorSort )
			.add( $headers.filter( c.selectorSort ) )
			.unbind( tmp )
			.bind( tmp, function( e, external ) {
				var $cell, cell, temp,
					$target = $( e.target ),
					// wrap event type in spaces, so the match doesn't trigger on inner words
					type = ' ' + e.type + ' ';
				// only recognize left clicks
				if ( ( ( e.which || e.button ) !== 1 && !type.match( ' ' + c.pointerClick + ' | sort | keyup ' ) ) ||
					// allow pressing enter
					( type === ' keyup ' && e.which !== 13 ) ||
					// allow triggering a click event (e.which is undefined) & ignore physical clicks
					( type.match( ' ' + c.pointerClick + ' ' ) && typeof e.which !== 'undefined' ) ) {
					return;
				}
				// ignore mouseup if mousedown wasn't on the same target
				if ( type.match( ' ' + c.pointerUp + ' ' ) && downTarget !== e.target && external !== true ) {
					return;
				}
				// set target on mousedown
				if ( type.match( ' ' + c.pointerDown + ' ' ) ) {
					downTarget = e.target;
					// preventDefault needed or jQuery v1.3.2 and older throws an
					// "Uncaught TypeError: handler.apply is not a function" error
					temp = $target.jquery.split( '.' );
					if ( temp[ 0 ] === '1' && temp[ 1 ] < 4 ) { e.preventDefault(); }
					return;
				}
				downTarget = null;
				// prevent sort being triggered on form elements
				if ( ts.regex.formElements.test( e.target.nodeName ) ||
					// nosort class name, or elements within a nosort container
					$target.hasClass( c.cssNoSort ) || $target.parents( '.' + c.cssNoSort ).length > 0 ||
					// elements within a button
					$target.parents( 'button' ).length > 0 ) {
					return !c.cancelSelection;
				}
				if ( c.delayInit && ts.isEmptyObject( c.cache ) ) {
					ts.buildCache( c );
				}
				// jQuery v1.2.6 doesn't have closest()
				$cell = $.fn.closest ? $( this ).closest( 'th, td' ) :
					/TH|TD/.test( this.nodeName ) ? $( this ) : $( this ).parents( 'th, td' );
				// reference original table headers and find the same cell
				// don't use $headers or IE8 throws an error - see #987
				temp = $headers.index( $cell );
				c.last.clickedIndex = ( temp < 0 ) ? $cell.attr( 'data-column' ) : temp;
				// use column index if $headers is undefined
				cell = c.$headers[ c.last.clickedIndex ];
				if ( cell && !cell.sortDisabled ) {
					ts.initSort( c, cell, e );
				}
			});
			if ( c.cancelSelection ) {
				// cancel selection
				$headers
					.attr( 'unselectable', 'on' )
					.bind( 'selectstart', false )
					.css({
						'user-select' : 'none',
						'MozUserSelect' : 'none' // not needed for jQuery 1.8+
					});
			}
		},

		buildHeaders : function( c ) {
			var $temp, icon, timer, indx;
			c.headerList = [];
			c.headerContent = [];
			c.sortVars = [];
			if ( c.debug ) {
				timer = new Date();
			}
			// children tr in tfoot - see issue #196 & #547
			// don't pass table.config to computeColumnIndex here - widgets (math) pass it to "quickly" index tbody cells
			c.columns = ts.computeColumnIndex( c.$table.children( 'thead, tfoot' ).children( 'tr' ) );
			// add icon if cssIcon option exists
			icon = c.cssIcon ?
				'<i class="' + ( c.cssIcon === ts.css.icon ? ts.css.icon : c.cssIcon + ' ' + ts.css.icon ) + '"></i>' :
				'';
			// redefine c.$headers here in case of an updateAll that replaces or adds an entire header cell - see #683
			c.$headers = $( $.map( c.$table.find( c.selectorHeaders ), function( elem, index ) {
				var configHeaders, header, column, template, tmp,
					$elem = $( elem );
				// ignore cell (don't add it to c.$headers) if row has ignoreRow class
				if ( $elem.parent().hasClass( c.cssIgnoreRow ) ) { return; }
				// make sure to get header cell & not column indexed cell
				configHeaders = ts.getColumnData( c.table, c.headers, index, true );
				// save original header content
				c.headerContent[ index ] = $elem.html();
				// if headerTemplate is empty, don't reformat the header cell
				if ( c.headerTemplate !== '' && !$elem.find( '.' + ts.css.headerIn ).length ) {
					// set up header template
					template = c.headerTemplate
						.replace( ts.regex.templateContent, $elem.html() )
						.replace( ts.regex.templateIcon, $elem.find( '.' + ts.css.icon ).length ? '' : icon );
					if ( c.onRenderTemplate ) {
						header = c.onRenderTemplate.apply( $elem, [ index, template ] );
						// only change t if something is returned
						if ( header && typeof header === 'string' ) {
							template = header;
						}
					}
					$elem.html( '<div class="' + ts.css.headerIn + '">' + template + '</div>' ); // faster than wrapInner
				}
				if ( c.onRenderHeader ) {
					c.onRenderHeader.apply( $elem, [ index, c, c.$table ] );
				}
				column = parseInt( $elem.attr( 'data-column' ), 10 );
				elem.column = column;
				tmp = ts.getData( $elem, configHeaders, 'sortInitialOrder' ) || c.sortInitialOrder;
				// this may get updated numerous times if there are multiple rows
				c.sortVars[ column ] = {
					count : -1, // set to -1 because clicking on the header automatically adds one
					order: ts.getOrder( tmp ) ?
						[ 1, 0, 2 ] : // desc, asc, unsorted
						[ 0, 1, 2 ],  // asc, desc, unsorted
					lockedOrder : false
				};
				tmp = ts.getData( $elem, configHeaders, 'lockedOrder' ) || false;
				if ( typeof tmp !== 'undefined' && tmp !== false ) {
					c.sortVars[ column ].lockedOrder = true;
					c.sortVars[ column ].order = ts.getOrder( tmp ) ? [ 1, 1, 1 ] : [ 0, 0, 0 ];
				}
				// add cell to headerList
				c.headerList[ index ] = elem;
				// add to parent in case there are multiple rows
				$elem
					.addClass( ts.css.header + ' ' + c.cssHeader )
					.parent()
					.addClass( ts.css.headerRow + ' ' + c.cssHeaderRow )
					.attr( 'role', 'row' );
				// allow keyboard cursor to focus on element
				if ( c.tabIndex ) {
					$elem.attr( 'tabindex', 0 );
				}
				return elem;
			}) );
			// cache headers per column
			c.$headerIndexed = [];
			for ( indx = 0; indx < c.columns; indx++ ) {
				// colspan in header making a column undefined
				if ( ts.isEmptyObject( c.sortVars[ indx ] ) ) {
					c.sortVars[ indx ] = {};
				}
				$temp = c.$headers.filter( '[data-column="' + indx + '"]' );
				// target sortable column cells, unless there are none, then use non-sortable cells
				// .last() added in jQuery 1.4; use .filter(':last') to maintain compatibility with jQuery v1.2.6
				c.$headerIndexed[ indx ] = $temp.length ?
					$temp.not( '.sorter-false' ).length ?
						$temp.not( '.sorter-false' ).filter( ':last' ) :
						$temp.filter( ':last' ) :
					$();
			}
			c.$table.find( c.selectorHeaders ).attr({
				scope: 'col',
				role : 'columnheader'
			});
			// enable/disable sorting
			ts.updateHeader( c );
			if ( c.debug ) {
				console.log( 'Built headers:' + ts.benchmark( timer ) );
				console.log( c.$headers );
			}
		},

		// Use it to add a set of methods to table.config which will be available for all tables.
		// This should be done before table initialization
		addInstanceMethods : function( methods ) {
			$.extend( ts.instanceMethods, methods );
		},

		/*
		█████▄ ▄████▄ █████▄ ▄█████ ██████ █████▄ ▄█████
		██▄▄██ ██▄▄██ ██▄▄██ ▀█▄    ██▄▄   ██▄▄██ ▀█▄
		██▀▀▀  ██▀▀██ ██▀██     ▀█▄ ██▀▀   ██▀██     ▀█▄
		██     ██  ██ ██  ██ █████▀ ██████ ██  ██ █████▀
		*/
		setupParsers : function( c, $tbodies ) {
			var rows, list, span, max, colIndex, indx, header, configHeaders,
				noParser, parser, extractor, time, tbody, len,
				table = c.table,
				tbodyIndex = 0,
				debug = {};
			// update table bodies in case we start with an empty table
			c.$tbodies = c.$table.children( 'tbody:not(.' + c.cssInfoBlock + ')' );
			tbody = typeof $tbodies === 'undefined' ? c.$tbodies : $tbodies;
			len = tbody.length;
			if ( len === 0 ) {
				return c.debug ? console.warn( 'Warning: *Empty table!* Not building a parser cache' ) : '';
			} else if ( c.debug ) {
				time = new Date();
				console[ console.group ? 'group' : 'log' ]( 'Detecting parsers for each column' );
			}
			list = {
				extractors: [],
				parsers: []
			};
			while ( tbodyIndex < len ) {
				rows = tbody[ tbodyIndex ].rows;
				if ( rows.length ) {
					colIndex = 0;
					max = c.columns;
					for ( indx = 0; indx < max; indx++ ) {
						header = c.$headerIndexed[ colIndex ];
						if ( header && header.length ) {
							// get column indexed table cell
							configHeaders = ts.getColumnData( table, c.headers, colIndex );
							// get column parser/extractor
							extractor = ts.getParserById( ts.getData( header, configHeaders, 'extractor' ) );
							parser = ts.getParserById( ts.getData( header, configHeaders, 'sorter' ) );
							noParser = ts.getData( header, configHeaders, 'parser' ) === 'false';
							// empty cells behaviour - keeping emptyToBottom for backwards compatibility
							c.empties[colIndex] = (
								ts.getData( header, configHeaders, 'empty' ) ||
								c.emptyTo || ( c.emptyToBottom ? 'bottom' : 'top' ) ).toLowerCase();
							// text strings behaviour in numerical sorts
							c.strings[colIndex] = (
								ts.getData( header, configHeaders, 'string' ) ||
								c.stringTo ||
								'max' ).toLowerCase();
							if ( noParser ) {
								parser = ts.getParserById( 'no-parser' );
							}
							if ( !extractor ) {
								// For now, maybe detect someday
								extractor = false;
							}
							if ( !parser ) {
								parser = ts.detectParserForColumn( c, rows, -1, colIndex );
							}
							if ( c.debug ) {
								debug[ '(' + colIndex + ') ' + header.text() ] = {
									parser : parser.id,
									extractor : extractor ? extractor.id : 'none',
									string : c.strings[ colIndex ],
									empty  : c.empties[ colIndex ]
								};
							}
							list.parsers[ colIndex ] = parser;
							list.extractors[ colIndex ] = extractor;
							span = header[ 0 ].colSpan - 1;
							if ( span > 0 ) {
								colIndex += span;
								max += span;
								while ( span + 1 > 0 ) {
									// set colspan columns to use the same parsers & extractors
									list.parsers[ colIndex - span ] = parser;
									list.extractors[ colIndex - span ] = extractor;
									span--;
								}
							}
						}
						colIndex++;
					}
				}
				tbodyIndex += ( list.parsers.length ) ? len : 1;
			}
			if ( c.debug ) {
				if ( !ts.isEmptyObject( debug ) ) {
					console[ console.table ? 'table' : 'log' ]( debug );
				} else {
					console.warn( '  No parsers detected!' );
				}
				console.log( 'Completed detecting parsers' + ts.benchmark( time ) );
				if ( console.groupEnd ) { console.groupEnd(); }
			}
			c.parsers = list.parsers;
			c.extractors = list.extractors;
		},

		addParser : function( parser ) {
			var indx,
				len = ts.parsers.length,
				add = true;
			for ( indx = 0; indx < len; indx++ ) {
				if ( ts.parsers[ indx ].id.toLowerCase() === parser.id.toLowerCase() ) {
					add = false;
				}
			}
			if ( add ) {
				ts.parsers.push( parser );
			}
		},

		getParserById : function( name ) {
			/*jshint eqeqeq:false */
			if ( name == 'false' ) { return false; }
			var indx,
				len = ts.parsers.length;
			for ( indx = 0; indx < len; indx++ ) {
				if ( ts.parsers[ indx ].id.toLowerCase() === ( name.toString() ).toLowerCase() ) {
					return ts.parsers[ indx ];
				}
			}
			return false;
		},

		detectParserForColumn : function( c, rows, rowIndex, cellIndex ) {
			var cur, $node, row,
				indx = ts.parsers.length,
				node = false,
				nodeValue = '',
				keepLooking = true;
			while ( nodeValue === '' && keepLooking ) {
				rowIndex++;
				row = rows[ rowIndex ];
				// stop looking after 50 empty rows
				if ( row && rowIndex < 50 ) {
					if ( row.className.indexOf( ts.cssIgnoreRow ) < 0 ) {
						node = rows[ rowIndex ].cells[ cellIndex ];
						nodeValue = ts.getElementText( c, node, cellIndex );
						$node = $( node );
						if ( c.debug ) {
							console.log( 'Checking if value was empty on row ' + rowIndex + ', column: ' +
								cellIndex + ': "' + nodeValue + '"' );
						}
					}
				} else {
					keepLooking = false;
				}
			}
			while ( --indx >= 0 ) {
				cur = ts.parsers[ indx ];
				// ignore the default text parser because it will always be true
				if ( cur && cur.id !== 'text' && cur.is && cur.is( nodeValue, c.table, node, $node ) ) {
					return cur;
				}
			}
			// nothing found, return the generic parser (text)
			return ts.getParserById( 'text' );
		},

		getElementText : function( c, node, cellIndex ) {
			if ( !node ) { return ''; }
			var tmp,
				extract = c.textExtraction || '',
				// node could be a jquery object
				// http://jsperf.com/jquery-vs-instanceof-jquery/2
				$node = node.jquery ? node : $( node );
			if ( typeof extract === 'string' ) {
				// check data-attribute first when set to 'basic'; don't use node.innerText - it's really slow!
				// http://www.kellegous.com/j/2013/02/27/innertext-vs-textcontent/
				if ( extract === 'basic' && typeof ( tmp = $node.attr( c.textAttribute ) ) !== 'undefined' ) {
					return $.trim( tmp );
				}
				return $.trim( node.textContent || $node.text() );
			} else {
				if ( typeof extract === 'function' ) {
					return $.trim( extract( $node[ 0 ], c.table, cellIndex ) );
				} else if ( typeof ( tmp = ts.getColumnData( c.table, extract, cellIndex ) ) === 'function' ) {
					return $.trim( tmp( $node[ 0 ], c.table, cellIndex ) );
				}
			}
			// fallback
			return $.trim( $node[ 0 ].textContent || $node.text() );
		},

		// centralized function to extract/parse cell contents
		getParsedText : function( c, cell, colIndex, txt ) {
			if ( typeof txt === 'undefined' ) {
				txt = ts.getElementText( c, cell, colIndex );
			}
			// if no parser, make sure to return the txt
			var val = '' + txt,
				parser = c.parsers[ colIndex ],
				extractor = c.extractors[ colIndex ];
			if ( parser ) {
				// do extract before parsing, if there is one
				if ( extractor && typeof extractor.format === 'function' ) {
					txt = extractor.format( txt, c.table, cell, colIndex );
				}
				// allow parsing if the string is empty, previously parsing would change it to zero,
				// in case the parser needs to extract data from the table cell attributes
				val = parser.id === 'no-parser' ? '' :
					// make sure txt is a string (extractor may have converted it)
					parser.format( '' + txt, c.table, cell, colIndex );
				if ( c.ignoreCase && typeof val === 'string' ) {
					val = val.toLowerCase();
				}
			}
			return val;
		},

		/*
		▄████▄ ▄████▄ ▄████▄ ██  ██ ██████
		██  ▀▀ ██▄▄██ ██  ▀▀ ██▄▄██ ██▄▄
		██  ▄▄ ██▀▀██ ██  ▄▄ ██▀▀██ ██▀▀
		▀████▀ ██  ██ ▀████▀ ██  ██ ██████
		*/
		buildCache : function( c, callback, $tbodies ) {
			var cache, val, txt, rowIndex, colIndex, tbodyIndex, $tbody, $row,
				cols, $cells, cell, cacheTime, totalRows, rowData, prevRowData,
				colMax, span, cacheIndex, hasParser, max, len, index,
				table = c.table,
				parsers = c.parsers;
			// update tbody variable
			c.$tbodies = c.$table.children( 'tbody:not(.' + c.cssInfoBlock + ')' );
			$tbody = typeof $tbodies === 'undefined' ? c.$tbodies : $tbodies,
			c.cache = {};
			c.totalRows = 0;
			// if no parsers found, return - it's an empty table.
			if ( !parsers ) {
				return c.debug ? console.warn( 'Warning: *Empty table!* Not building a cache' ) : '';
			}
			if ( c.debug ) {
				cacheTime = new Date();
			}
			// processing icon
			if ( c.showProcessing ) {
				ts.isProcessing( table, true );
			}
			for ( tbodyIndex = 0; tbodyIndex < $tbody.length; tbodyIndex++ ) {
				colMax = []; // column max value per tbody
				cache = c.cache[ tbodyIndex ] = {
					normalized: [] // array of normalized row data; last entry contains 'rowData' above
					// colMax: #   // added at the end
				};

				totalRows = ( $tbody[ tbodyIndex ] && $tbody[ tbodyIndex ].rows.length ) || 0;
				for ( rowIndex = 0; rowIndex < totalRows; ++rowIndex ) {
					rowData = {
						// order: original row order #
						// $row : jQuery Object[]
						child: [], // child row text (filter widget)
						raw: []    // original row text
					};
					/** Add the table data to main data array */
					$row = $( $tbody[ tbodyIndex ].rows[ rowIndex ] );
					cols = [];
					// if this is a child row, add it to the last row's children and continue to the next row
					// ignore child row class, if it is the first row
					if ( $row.hasClass( c.cssChildRow ) && rowIndex !== 0 ) {
						len = cache.normalized.length - 1;
						prevRowData = cache.normalized[ len ][ c.columns ];
						prevRowData.$row = prevRowData.$row.add( $row );
						// add 'hasChild' class name to parent row
						if ( !$row.prev().hasClass( c.cssChildRow ) ) {
							$row.prev().addClass( ts.css.cssHasChild );
						}
						// save child row content (un-parsed!)
						$cells = $row.children( 'th, td' );
						len = prevRowData.child.length;
						prevRowData.child[ len ] = [];
						// child row content does not account for colspans/rowspans; so indexing may be off
						cacheIndex = 0;
						max = c.columns;
						for ( colIndex = 0; colIndex < max; colIndex++ ) {
							cell = $cells[ colIndex ];
							if ( cell ) {
								prevRowData.child[ len ][ colIndex ] = ts.getParsedText( c, cell, colIndex );
								span = $cells[ colIndex ].colSpan - 1;
								if ( span > 0 ) {
									cacheIndex += span;
									max += span;
								}
							}
							cacheIndex++;
						}
						// go to the next for loop
						continue;
					}
					rowData.$row = $row;
					rowData.order = rowIndex; // add original row position to rowCache
					cacheIndex = 0;
					max = c.columns;
					for ( colIndex = 0; colIndex < max; ++colIndex ) {
						cell = $row[ 0 ].cells[ colIndex ];
						if ( cell && cacheIndex < c.columns ) {
							hasParser = typeof parsers[ cacheIndex ] !== 'undefined';
							if ( !hasParser && c.debug ) {
								console.warn( 'No parser found for row: ' + rowIndex + ', column: ' + colIndex +
									'; cell containing: "' + $(cell).text() + '"; does it have a header?' );
							}
							val = ts.getElementText( c, cell, cacheIndex );
							rowData.raw[ cacheIndex ] = val; // save original row text
							// save raw column text even if there is no parser set
							txt = ts.getParsedText( c, cell, cacheIndex, val );
							cols[ cacheIndex ] = txt;
							if ( hasParser && ( parsers[ cacheIndex ].type || '' ).toLowerCase() === 'numeric' ) {
								// determine column max value (ignore sign)
								colMax[ cacheIndex ] = Math.max( Math.abs( txt ) || 0, colMax[ cacheIndex ] || 0 );
							}
							// allow colSpan in tbody
							span = cell.colSpan - 1;
							if ( span > 0 ) {
								index = 0;
								while ( index <= span ) {
									// duplicate text (or not) to spanned columns
									rowData.raw[ cacheIndex + index ] = c.duplicateSpan || index === 0 ? val : '';
									cols[ cacheIndex + index ] = c.duplicateSpan || index === 0 ? val : '';
									index++;
								}
								cacheIndex += span;
								max += span;
							}
						}
						cacheIndex++;
					}
					// ensure rowData is always in the same location (after the last column)
					cols[ c.columns ] = rowData;
					cache.normalized.push( cols );
				}
				cache.colMax = colMax;
				// total up rows, not including child rows
				c.totalRows += cache.normalized.length;

			}
			if ( c.showProcessing ) {
				ts.isProcessing( table ); // remove processing icon
			}
			if ( c.debug ) {
				len = Math.min( 5, c.cache[ 0 ].normalized.length );
				console[ console.group ? 'group' : 'log' ]( 'Building cache for ' + c.totalRows +
					' rows (showing ' + len + ' rows in log)' + ts.benchmark( cacheTime ) );
				val = {};
				for ( colIndex = 0; colIndex < c.columns; colIndex++ ) {
					for ( cacheIndex = 0; cacheIndex < len; cacheIndex++ ) {
						if ( !val[ 'row: ' + cacheIndex ] ) {
							val[ 'row: ' + cacheIndex ] = {};
						}
						val[ 'row: ' + cacheIndex ][ c.$headerIndexed[ colIndex ].text() ] =
							c.cache[ 0 ].normalized[ cacheIndex ][ colIndex ];
					}
				}
				console[ console.table ? 'table' : 'log' ]( val );
				if ( console.groupEnd ) { console.groupEnd(); }
			}
			if ( $.isFunction( callback ) ) {
				callback( table );
			}
		},

		getColumnText : function( table, column, callback, rowFilter ) {
			table = $( table )[0];
			var tbodyIndex, rowIndex, cache, row, tbodyLen, rowLen, raw, parsed, $cell, result,
				hasCallback = typeof callback === 'function',
				allColumns = column === 'all',
				data = { raw : [], parsed: [], $cell: [] },
				c = table.config;
			if ( ts.isEmptyObject( c ) ) {
				if ( c.debug ) {
					console.warn( 'No cache found - aborting getColumnText function!' );
				}
			} else {
				tbodyLen = c.$tbodies.length;
				for ( tbodyIndex = 0; tbodyIndex < tbodyLen; tbodyIndex++ ) {
					cache = c.cache[ tbodyIndex ].normalized;
					rowLen = cache.length;
					for ( rowIndex = 0; rowIndex < rowLen; rowIndex++ ) {
						row = cache[ rowIndex ];
						if ( rowFilter && !row[ c.columns ].$row.is( rowFilter ) ) {
							continue;
						}
						result = true;
						parsed = ( allColumns ) ? row.slice( 0, c.columns ) : row[ column ];
						row = row[ c.columns ];
						raw = ( allColumns ) ? row.raw : row.raw[ column ];
						$cell = ( allColumns ) ? row.$row.children() : row.$row.children().eq( column );
						if ( hasCallback ) {
							result = callback({
								tbodyIndex : tbodyIndex,
								rowIndex : rowIndex,
								parsed : parsed,
								raw : raw,
								$row : row.$row,
								$cell : $cell
							});
						}
						if ( result !== false ) {
							data.parsed.push( parsed );
							data.raw.push( raw );
							data.$cell.push( $cell );
						}
					}
				}
				// return everything
				return data;
			}
		},

		/*
		██  ██ █████▄ █████▄ ▄████▄ ██████ ██████
		██  ██ ██▄▄██ ██  ██ ██▄▄██   ██   ██▄▄
		██  ██ ██▀▀▀  ██  ██ ██▀▀██   ██   ██▀▀
		▀████▀ ██     █████▀ ██  ██   ██   ██████
		*/
		setHeadersCss : function( c ) {
			var $sorted, indx, column,
				list = c.sortList,
				len = list.length,
				none = ts.css.sortNone + ' ' + c.cssNone,
				css = [ ts.css.sortAsc + ' ' + c.cssAsc, ts.css.sortDesc + ' ' + c.cssDesc ],
				cssIcon = [ c.cssIconAsc, c.cssIconDesc, c.cssIconNone ],
				aria = [ 'ascending', 'descending' ],
				// find the footer
				$headers = c.$table
					.find( 'tfoot tr' )
					.children()
					.add( $( c.namespace + '_extra_headers' ) )
					.removeClass( css.join( ' ' ) );
			// remove all header information
			c.$headers
				.removeClass( css.join( ' ' ) )
				.addClass( none )
				.attr( 'aria-sort', 'none' )
				.find( '.' + ts.css.icon )
				.removeClass( cssIcon.join( ' ' ) )
				.addClass( cssIcon[ 2 ] );
			for ( indx = 0; indx < len; indx++ ) {
				// direction = 2 means reset!
				if ( list[ indx ][ 1 ] !== 2 ) {
					// multicolumn sorting updating - see #1005
					// .not(function(){}) needs jQuery 1.4
					// filter(function(i, el){}) <- el is undefined in jQuery v1.2.6
					$sorted = c.$headers.filter( function( i ) {
						// only include headers that are in the sortList (this includes colspans)
						var include = true,
							$el = c.$headers.eq( i ),
							col = parseInt( $el.attr( 'data-column' ), 10 ),
							end = col + c.$headers[ i ].colSpan;
						for ( ; col < end; col++ ) {
							include = include ? include || ts.isValueInArray( col, c.sortList ) > -1 : false;
						}
						return include;
					});

					// choose the :last in case there are nested columns
					$sorted = $sorted
						.not( '.sorter-false' )
						.filter( '[data-column="' + list[ indx ][ 0 ] + '"]' + ( len === 1 ? ':last' : '' ) );
					if ( $sorted.length ) {
						for ( column = 0; column < $sorted.length; column++ ) {
							if ( !$sorted[ column ].sortDisabled ) {
								$sorted
									.eq( column )
									.removeClass( none )
									.addClass( css[ list[ indx ][ 1 ] ] )
									.attr( 'aria-sort', aria[ list[ indx ][ 1 ] ] )
									.find( '.' + ts.css.icon )
									.removeClass( cssIcon[ 2 ] )
									.addClass( cssIcon[ list[ indx ][ 1 ] ] );
							}
						}
						// add sorted class to footer & extra headers, if they exist
						if ( $headers.length ) {
							$headers
								.filter( '[data-column="' + list[ indx ][ 0 ] + '"]' )
								.removeClass( none )
								.addClass( css[ list[ indx ][ 1 ] ] );
						}
					}
				}
			}
			// add verbose aria labels
			len = c.$headers.length;
			for ( indx = 0; indx < len; indx++ ) {
				ts.setColumnAriaLabel( c, c.$headers.eq( indx ) );
			}
		},

		// nextSort (optional), lets you disable next sort text
		setColumnAriaLabel : function( c, $header, nextSort ) {
			if ( $header.length ) {
				var column = parseInt( $header.attr( 'data-column' ), 10 ),
					tmp = $header.hasClass( ts.css.sortAsc ) ?
						'sortAsc' :
						$header.hasClass( ts.css.sortDesc ) ? 'sortDesc' : 'sortNone',
					txt = $.trim( $header.text() ) + ': ' + ts.language[ tmp ];
				if ( $header.hasClass( 'sorter-false' ) || nextSort === false ) {
					txt += ts.language.sortDisabled;
				} else {
					nextSort = c.sortVars[ column ].order[ ( c.sortVars[ column ].count + 1 ) % ( c.sortReset ? 3 : 2 ) ];
					// if nextSort
					txt += ts.language[ nextSort === 0 ? 'nextAsc' : nextSort === 1 ? 'nextDesc' : 'nextNone' ];
				}
				$header.attr( 'aria-label', txt );
			}
		},

		updateHeader : function( c ) {
			var index, isDisabled, $header, col,
				table = c.table,
				len = c.$headers.length;
			for ( index = 0; index < len; index++ ) {
				$header = c.$headers.eq( index );
				col = ts.getColumnData( table, c.headers, index, true );
				// add 'sorter-false' class if 'parser-false' is set
				isDisabled = ts.getData( $header, col, 'sorter' ) === 'false' || ts.getData( $header, col, 'parser' ) === 'false';
				ts.setColumnSort( c, $header, isDisabled );
			}
		},

		setColumnSort : function( c, $header, isDisabled ) {
			var id = c.table.id;
			$header[ 0 ].sortDisabled = isDisabled;
			$header[ isDisabled ? 'addClass' : 'removeClass' ]( 'sorter-false' )
				.attr( 'aria-disabled', '' + isDisabled );
			// disable tab index on disabled cells
			if ( c.tabIndex ) {
				if ( isDisabled ) {
					$header.removeAttr( 'tabindex' );
				} else {
					$header.attr( 'tabindex', '0' );
				}
			}
			// aria-controls - requires table ID
			if ( id ) {
				if ( isDisabled ) {
					$header.removeAttr( 'aria-controls' );
				} else {
					$header.attr( 'aria-controls', id );
				}
			}
		},

		updateHeaderSortCount : function( c, list ) {
			var col, dir, group, indx, primary, temp, val, order,
				sortList = list || c.sortList,
				len = sortList.length;
			c.sortList = [];
			for ( indx = 0; indx < len; indx++ ) {
				val = sortList[ indx ];
				// ensure all sortList values are numeric - fixes #127
				col = parseInt( val[ 0 ], 10 );
				// prevents error if sorton array is wrong
				if ( col < c.columns ) {

					// set order if not already defined - due to colspan header without associated header cell
					// adding this check prevents a javascript error
					if ( !c.sortVars[ col ].order ) {
						order = c.sortVars[ col ].order = ts.getOrder( c.sortInitialOrder ) ? [ 1, 0, 2 ] : [ 0, 1, 2 ];
						c.sortVars[ col ].count = 0;
					}

					order = c.sortVars[ col ].order;
					dir = ( '' + val[ 1 ] ).match( /^(1|d|s|o|n)/ );
					dir = dir ? dir[ 0 ] : '';
					// 0/(a)sc (default), 1/(d)esc, (s)ame, (o)pposite, (n)ext
					switch ( dir ) {
						case '1' : case 'd' : // descending
							dir = 1;
							break;
						case 's' : // same direction (as primary column)
							// if primary sort is set to 's', make it ascending
							dir = primary || 0;
							break;
						case 'o' :
							temp = order[ ( primary || 0 ) % ( c.sortReset ? 3 : 2 ) ];
							// opposite of primary column; but resets if primary resets
							dir = temp === 0 ? 1 : temp === 1 ? 0 : 2;
							break;
						case 'n' :
							dir = order[ ( ++c.sortVars[ col ].count ) % ( c.sortReset ? 3 : 2 ) ];
							break;
						default : // ascending
							dir = 0;
							break;
					}
					primary = indx === 0 ? dir : primary;
					group = [ col, parseInt( dir, 10 ) || 0 ];
					c.sortList.push( group );
					dir = $.inArray( group[ 1 ], order ); // fixes issue #167
					c.sortVars[ col ].count = dir >= 0 ? dir : group[ 1 ] % ( c.sortReset ? 3 : 2 );
				}
			}
		},

		updateAll : function( c, resort, callback ) {
			var table = c.table;
			table.isUpdating = true;
			ts.refreshWidgets( table, true, true );
			ts.buildHeaders( c );
			ts.bindEvents( table, c.$headers, true );
			ts.bindMethods( c );
			ts.commonUpdate( c, resort, callback );
		},

		update : function( c, resort, callback ) {
			var table = c.table;
			table.isUpdating = true;
			// update sorting (if enabled/disabled)
			ts.updateHeader( c );
			ts.commonUpdate( c, resort, callback );
		},

		// simple header update - see #989
		updateHeaders : function( c, callback ) {
			c.table.isUpdating = true;
			ts.buildHeaders( c );
			ts.bindEvents( c.table, c.$headers, true );
			ts.resortComplete( c, callback );
		},

		updateCell : function( c, cell, resort, callback ) {
			if ( ts.isEmptyObject( c.cache ) ) {
				// empty table, do an update instead - fixes #1099
				ts.updateHeader( c );
				ts.commonUpdate( c, resort, callback );
				return;
			}
			c.table.isUpdating = true;
			c.$table.find( c.selectorRemove ).remove();
			// get position from the dom
			var tmp, indx, row, icell, cache, len,
				$tbodies = c.$tbodies,
				$cell = $( cell ),
				// update cache - format: function( s, table, cell, cellIndex )
				// no closest in jQuery v1.2.6
				tbodyIndex = $tbodies
					.index( $.fn.closest ? $cell.closest( 'tbody' ) : $cell.parents( 'tbody' ).filter( ':first' ) ),
				tbcache = c.cache[ tbodyIndex ],
				$row = $.fn.closest ? $cell.closest( 'tr' ) : $cell.parents( 'tr' ).filter( ':first' );
			cell = $cell[ 0 ]; // in case cell is a jQuery object
			// tbody may not exist if update is initialized while tbody is removed for processing
			if ( $tbodies.length && tbodyIndex >= 0 ) {
				row = $tbodies.eq( tbodyIndex ).find( 'tr' ).index( $row );
				cache = tbcache.normalized[ row ];
				len = $row[ 0 ].cells.length;
				if ( len !== c.columns ) {
					// colspan in here somewhere!
					icell = 0;
					tmp = false;
					for ( indx = 0; indx < len; indx++ ) {
						if ( !tmp && $row[ 0 ].cells[ indx ] !== cell ) {
							icell += $row[ 0 ].cells[ indx ].colSpan;
						} else {
							tmp = true;
						}
					}
				} else {
					icell = $cell.index();
				}
				tmp = ts.getElementText( c, cell, icell ); // raw
				cache[ c.columns ].raw[ icell ] = tmp;
				tmp = ts.getParsedText( c, cell, icell, tmp );
				cache[ icell ] = tmp; // parsed
				cache[ c.columns ].$row = $row;
				if ( ( c.parsers[ icell ].type || '' ).toLowerCase() === 'numeric' ) {
					// update column max value (ignore sign)
					tbcache.colMax[ icell ] = Math.max( Math.abs( tmp ) || 0, tbcache.colMax[ icell ] || 0 );
				}
				tmp = resort !== 'undefined' ? resort : c.resort;
				if ( tmp !== false ) {
					// widgets will be reapplied
					ts.checkResort( c, tmp, callback );
				} else {
					// don't reapply widgets is resort is false, just in case it causes
					// problems with element focus
					ts.resortComplete( c, callback );
				}
			} else {
				if ( c.debug ) {
					console.error( 'updateCell aborted, tbody missing or not within the indicated table' );
				}
				c.table.isUpdating = false;
			}
		},

		addRows : function( c, $row, resort, callback ) {
			var txt, val, tbodyIndex, rowIndex, rows, cellIndex, len,
				cacheIndex, rowData, cells, cell, span,
				// allow passing a row string if only one non-info tbody exists in the table
				valid = typeof $row === 'string' && c.$tbodies.length === 1 && /<tr/.test( $row || '' ),
				table = c.table;
			if ( valid ) {
				$row = $( $row );
				c.$tbodies.append( $row );
			} else if ( !$row ||
				// row is a jQuery object?
				!( $row instanceof jQuery ) ||
				// row contained in the table?
				( $.fn.closest ? $row.closest( 'table' )[ 0 ] : $row.parents( 'table' )[ 0 ] ) !== c.table ) {
				if ( c.debug ) {
					console.error( 'addRows method requires (1) a jQuery selector reference to rows that have already ' +
						'been added to the table, or (2) row HTML string to be added to a table with only one tbody' );
				}
				return false;
			}
			table.isUpdating = true;
			if ( ts.isEmptyObject( c.cache ) ) {
				// empty table, do an update instead - fixes #450
				ts.updateHeader( c );
				ts.commonUpdate( c, resort, callback );
			} else {
				rows = $row.filter( 'tr' ).attr( 'role', 'row' ).length;
				tbodyIndex = c.$tbodies.index( $row.parents( 'tbody' ).filter( ':first' ) );
				// fixes adding rows to an empty table - see issue #179
				if ( !( c.parsers && c.parsers.length ) ) {
					ts.setupParsers( c );
				}
				// add each row
				for ( rowIndex = 0; rowIndex < rows; rowIndex++ ) {
					cacheIndex = 0;
					len = $row[ rowIndex ].cells.length;
					cells = [];
					rowData = {
						child : [],
						raw : [],
						$row : $row.eq( rowIndex ),
						order : c.cache[ tbodyIndex ].normalized.length
					};
					// add each cell
					for ( cellIndex = 0; cellIndex < len; cellIndex++ ) {
						cell = $row[ rowIndex ].cells[ cellIndex ];
						txt = ts.getElementText( c, cell, cacheIndex );
						rowData.raw[ cacheIndex ] = txt;
						val = ts.getParsedText( c, cell, cacheIndex, txt );
						cells[ cacheIndex ] = val;
						if ( ( c.parsers[ cacheIndex ].type || '' ).toLowerCase() === 'numeric' ) {
							// update column max value (ignore sign)
							c.cache[ tbodyIndex ].colMax[ cacheIndex ] =
								Math.max( Math.abs( val ) || 0, c.cache[ tbodyIndex ].colMax[ cacheIndex ] || 0 );
						}
						span = cell.colSpan - 1;
						if ( span > 0 ) {
							cacheIndex += span;
						}
						cacheIndex++;
					}
					// add the row data to the end
					cells[ c.columns ] = rowData;
					// update cache
					c.cache[ tbodyIndex ].normalized.push( cells );
				}
				// resort using current settings
				ts.checkResort( c, resort, callback );
			}
		},

		updateCache : function( c, callback, $tbodies ) {
			// rebuild parsers
			if ( !( c.parsers && c.parsers.length ) ) {
				ts.setupParsers( c, $tbodies );
			}
			// rebuild the cache map
			ts.buildCache( c, callback, $tbodies );
		},

		// init flag (true) used by pager plugin to prevent widget application
		// renamed from appendToTable
		appendCache : function( c, init ) {
			var parsed, totalRows, $tbody, $curTbody, rowIndex, tbodyIndex, appendTime,
				table = c.table,
				wo = c.widgetOptions,
				$tbodies = c.$tbodies,
				rows = [],
				cache = c.cache;
			// empty table - fixes #206/#346
			if ( ts.isEmptyObject( cache ) ) {
				// run pager appender in case the table was just emptied
				return c.appender ? c.appender( table, rows ) :
					table.isUpdating ? c.$table.triggerHandler( 'updateComplete', table ) : ''; // Fixes #532
			}
			if ( c.debug ) {
				appendTime = new Date();
			}
			for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = $tbodies.eq( tbodyIndex );
				if ( $tbody.length ) {
					// detach tbody for manipulation
					$curTbody = ts.processTbody( table, $tbody, true );
					parsed = cache[ tbodyIndex ].normalized;
					totalRows = parsed.length;
					for ( rowIndex = 0; rowIndex < totalRows; rowIndex++ ) {
						rows.push( parsed[ rowIndex ][ c.columns ].$row );
						// removeRows used by the pager plugin; don't render if using ajax - fixes #411
						if ( !c.appender || ( c.pager && ( !c.pager.removeRows || !wo.pager_removeRows ) && !c.pager.ajax ) ) {
							$curTbody.append( parsed[ rowIndex ][ c.columns ].$row );
						}
					}
					// restore tbody
					ts.processTbody( table, $curTbody, false );
				}
			}
			if ( c.appender ) {
				c.appender( table, rows );
			}
			if ( c.debug ) {
				console.log( 'Rebuilt table' + ts.benchmark( appendTime ) );
			}
			// apply table widgets; but not before ajax completes
			if ( !init && !c.appender ) {
				ts.applyWidget( table );
			}
			if ( table.isUpdating ) {
				c.$table.triggerHandler( 'updateComplete', table );
			}
		},

		commonUpdate : function( c, resort, callback ) {
			// remove rows/elements before update
			c.$table.find( c.selectorRemove ).remove();
			// rebuild parsers
			ts.setupParsers( c );
			// rebuild the cache map
			ts.buildCache( c );
			ts.checkResort( c, resort, callback );
		},

		/*
		▄█████ ▄████▄ █████▄ ██████ ██ █████▄ ▄████▄
		▀█▄    ██  ██ ██▄▄██   ██   ██ ██  ██ ██ ▄▄▄
		   ▀█▄ ██  ██ ██▀██    ██   ██ ██  ██ ██ ▀██
		█████▀ ▀████▀ ██  ██   ██   ██ ██  ██ ▀████▀
		*/
		initSort : function( c, cell, event ) {
			if ( c.table.isUpdating ) {
				// let any updates complete before initializing a sort
				return setTimeout( function(){
					ts.initSort( c, cell, event );
				}, 50 );
			}

			var arry, indx, headerIndx, dir, temp, tmp, $header,
				notMultiSort = !event[ c.sortMultiSortKey ],
				table = c.table,
				len = c.$headers.length,
				// get current column index
				col = parseInt( $( cell ).attr( 'data-column' ), 10 ),
				order = c.sortVars[ col ].order;

			// Only call sortStart if sorting is enabled
			c.$table.triggerHandler( 'sortStart', table );
			// get current column sort order
			c.sortVars[ col ].count =
				event[ c.sortResetKey ] ? 2 : ( c.sortVars[ col ].count + 1 ) % ( c.sortReset ? 3 : 2 );
			// reset all sorts on non-current column - issue #30
			if ( c.sortRestart ) {
				for ( headerIndx = 0; headerIndx < len; headerIndx++ ) {
					$header = c.$headers.eq( headerIndx );
					tmp = parseInt( $header.attr( 'data-column' ), 10 );
					// only reset counts on columns that weren't just clicked on and if not included in a multisort
					if ( col !== tmp && ( notMultiSort || $header.hasClass( ts.css.sortNone ) ) ) {
						c.sortVars[ tmp ].count = -1;
					}
				}
			}
			// user only wants to sort on one column
			if ( notMultiSort ) {
				// flush the sort list
				c.sortList = [];
				c.last.sortList = [];
				if ( c.sortForce !== null ) {
					arry = c.sortForce;
					for ( indx = 0; indx < arry.length; indx++ ) {
						if ( arry[ indx ][ 0 ] !== col ) {
							c.sortList.push( arry[ indx ] );
						}
					}
				}
				// add column to sort list
				dir = order[ c.sortVars[ col ].count ];
				if ( dir < 2 ) {
					c.sortList.push( [ col, dir ] );
					// add other columns if header spans across multiple
					if ( cell.colSpan > 1 ) {
						for ( indx = 1; indx < cell.colSpan; indx++ ) {
							c.sortList.push( [ col + indx, dir ] );
							// update count on columns in colSpan
							c.sortVars[ col + indx ].count = $.inArray( dir, order );
						}
					}
				}
				// multi column sorting
			} else {
				// get rid of the sortAppend before adding more - fixes issue #115 & #523
				c.sortList = $.extend( [], c.last.sortList );

				// the user has clicked on an already sorted column
				if ( ts.isValueInArray( col, c.sortList ) >= 0 ) {
					// reverse the sorting direction
					for ( indx = 0; indx < c.sortList.length; indx++ ) {
						tmp = c.sortList[ indx ];
						if ( tmp[ 0 ] === col ) {
							// order.count seems to be incorrect when compared to cell.count
							tmp[ 1 ] = order[ c.sortVars[ col ].count ];
							if ( tmp[1] === 2 ) {
								c.sortList.splice( indx, 1 );
								c.sortVars[ col ].count = -1;
							}
						}
					}
				} else {
					// add column to sort list array
					dir = order[ c.sortVars[ col ].count ];
					if ( dir < 2 ) {
						c.sortList.push( [ col, dir ] );
						// add other columns if header spans across multiple
						if ( cell.colSpan > 1 ) {
							for ( indx = 1; indx < cell.colSpan; indx++ ) {
								c.sortList.push( [ col + indx, dir ] );
								// update count on columns in colSpan
								c.sortVars[ col + indx ].count = $.inArray( dir, order );
							}
						}
					}
				}
			}
			// save sort before applying sortAppend
			c.last.sortList = $.extend( [], c.sortList );
			if ( c.sortList.length && c.sortAppend ) {
				arry = $.isArray( c.sortAppend ) ? c.sortAppend : c.sortAppend[ c.sortList[ 0 ][ 0 ] ];
				if ( !ts.isEmptyObject( arry ) ) {
					for ( indx = 0; indx < arry.length; indx++ ) {
						if ( arry[ indx ][ 0 ] !== col && ts.isValueInArray( arry[ indx ][ 0 ], c.sortList ) < 0 ) {
							dir = arry[ indx ][ 1 ];
							temp = ( '' + dir ).match( /^(a|d|s|o|n)/ );
							if ( temp ) {
								tmp = c.sortList[ 0 ][ 1 ];
								switch ( temp[ 0 ] ) {
									case 'd' :
										dir = 1;
										break;
									case 's' :
										dir = tmp;
										break;
									case 'o' :
										dir = tmp === 0 ? 1 : 0;
										break;
									case 'n' :
										dir = ( tmp + 1 ) % ( c.sortReset ? 3 : 2 );
										break;
									default:
										dir = 0;
										break;
								}
							}
							c.sortList.push( [ arry[ indx ][ 0 ], dir ] );
						}
					}
				}
			}
			// sortBegin event triggered immediately before the sort
			c.$table.triggerHandler( 'sortBegin', table );
			// setTimeout needed so the processing icon shows up
			setTimeout( function() {
				// set css for headers
				ts.setHeadersCss( c );
				ts.multisort( c );
				ts.appendCache( c );
				c.$table.triggerHandler( 'sortBeforeEnd', table );
				c.$table.triggerHandler( 'sortEnd', table );
			}, 1 );
		},

		// sort multiple columns
		multisort : function( c ) { /*jshint loopfunc:true */
			var tbodyIndex, sortTime, colMax, rows,
				table = c.table,
				dir = 0,
				textSorter = c.textSorter || '',
				sortList = c.sortList,
				sortLen = sortList.length,
				len = c.$tbodies.length;
			if ( c.serverSideSorting || ts.isEmptyObject( c.cache ) ) {
				// empty table - fixes #206/#346
				return;
			}
			if ( c.debug ) { sortTime = new Date(); }
			for ( tbodyIndex = 0; tbodyIndex < len; tbodyIndex++ ) {
				colMax = c.cache[ tbodyIndex ].colMax;
				rows = c.cache[ tbodyIndex ].normalized;

				rows.sort( function( a, b ) {
					var sortIndex, num, col, order, sort, x, y;
					// rows is undefined here in IE, so don't use it!
					for ( sortIndex = 0; sortIndex < sortLen; sortIndex++ ) {
						col = sortList[ sortIndex ][ 0 ];
						order = sortList[ sortIndex ][ 1 ];
						// sort direction, true = asc, false = desc
						dir = order === 0;

						if ( c.sortStable && a[ col ] === b[ col ] && sortLen === 1 ) {
							return a[ c.columns ].order - b[ c.columns ].order;
						}

						// fallback to natural sort since it is more robust
						num = /n/i.test( ts.getSortType( c.parsers, col ) );
						if ( num && c.strings[ col ] ) {
							// sort strings in numerical columns
							if ( typeof ( ts.string[ c.strings[ col ] ] ) === 'boolean' ) {
								num = ( dir ? 1 : -1 ) * ( ts.string[ c.strings[ col ] ] ? -1 : 1 );
							} else {
								num = ( c.strings[ col ] ) ? ts.string[ c.strings[ col ] ] || 0 : 0;
							}
							// fall back to built-in numeric sort
							// var sort = $.tablesorter['sort' + s]( a[col], b[col], dir, colMax[col], table );
							sort = c.numberSorter ? c.numberSorter( a[ col ], b[ col ], dir, colMax[ col ], table ) :
								ts[ 'sortNumeric' + ( dir ? 'Asc' : 'Desc' ) ]( a[ col ], b[ col ], num, colMax[ col ], col, c );
						} else {
							// set a & b depending on sort direction
							x = dir ? a : b;
							y = dir ? b : a;
							// text sort function
							if ( typeof textSorter === 'function' ) {
								// custom OVERALL text sorter
								sort = textSorter( x[ col ], y[ col ], dir, col, table );
							} else if ( typeof textSorter === 'object' && textSorter.hasOwnProperty( col ) ) {
								// custom text sorter for a SPECIFIC COLUMN
								sort = textSorter[ col ]( x[ col ], y[ col ], dir, col, table );
							} else {
								// fall back to natural sort
								sort = ts[ 'sortNatural' + ( dir ? 'Asc' : 'Desc' ) ]( a[ col ], b[ col ], col, c );
							}
						}
						if ( sort ) { return sort; }
					}
					return a[ c.columns ].order - b[ c.columns ].order;
				});
			}
			if ( c.debug ) {
				console.log( 'Applying sort ' + sortList.toString() + ts.benchmark( sortTime ) );
			}
		},

		resortComplete : function( c, callback ) {
			if ( c.table.isUpdating ) {
				c.$table.triggerHandler( 'updateComplete', c.table );
			}
			if ( $.isFunction( callback ) ) {
				callback( c.table );
			}
		},

		checkResort : function( c, resort, callback ) {
			var sortList = $.isArray( resort ) ? resort : c.sortList,
				// if no resort parameter is passed, fallback to config.resort (true by default)
				resrt = typeof resort === 'undefined' ? c.resort : resort;
			// don't try to resort if the table is still processing
			// this will catch spamming of the updateCell method
			if ( resrt !== false && !c.serverSideSorting && !c.table.isProcessing ) {
				if ( sortList.length ) {
					ts.sortOn( c, sortList, function() {
						ts.resortComplete( c, callback );
					}, true );
				} else {
					ts.sortReset( c, function() {
						ts.resortComplete( c, callback );
						ts.applyWidget( c.table, false );
					} );
				}
			} else {
				ts.resortComplete( c, callback );
				ts.applyWidget( c.table, false );
			}
		},

		sortOn : function( c, list, callback, init ) {
			var table = c.table;
			c.$table.triggerHandler( 'sortStart', table );
			// update header count index
			ts.updateHeaderSortCount( c, list );
			// set css for headers
			ts.setHeadersCss( c );
			// fixes #346
			if ( c.delayInit && ts.isEmptyObject( c.cache ) ) {
				ts.buildCache( c );
			}
			c.$table.triggerHandler( 'sortBegin', table );
			// sort the table and append it to the dom
			ts.multisort( c );
			ts.appendCache( c, init );
			c.$table.triggerHandler( 'sortBeforeEnd', table );
			c.$table.triggerHandler( 'sortEnd', table );
			ts.applyWidget( table );
			if ( $.isFunction( callback ) ) {
				callback( table );
			}
		},

		sortReset : function( c, callback ) {
			c.sortList = [];
			ts.setHeadersCss( c );
			ts.multisort( c );
			ts.appendCache( c );
			if ( $.isFunction( callback ) ) {
				callback( c.table );
			}
		},

		getSortType : function( parsers, column ) {
			return ( parsers && parsers[ column ] ) ? parsers[ column ].type || '' : '';
		},

		getOrder : function( val ) {
			// look for 'd' in 'desc' order; return true
			return ( /^d/i.test( val ) || val === 1 );
		},

		// Natural sort - https://github.com/overset/javascript-natural-sort (date sorting removed)
		// this function will only accept strings, or you'll see 'TypeError: undefined is not a function'
		// I could add a = a.toString(); b = b.toString(); but it'll slow down the sort overall
		sortNatural : function( a, b ) {
			if ( a === b ) { return 0; }
			var aNum, bNum, aFloat, bFloat, indx, max,
				regex = ts.regex;
			// first try and sort Hex codes
			if ( regex.hex.test( b ) ) {
				aNum = parseInt( a.match( regex.hex ), 16 );
				bNum = parseInt( b.match( regex.hex ), 16 );
				if ( aNum < bNum ) { return -1; }
				if ( aNum > bNum ) { return 1; }
			}
			// chunk/tokenize
			aNum = a.replace( regex.chunk, '\\0$1\\0' ).replace( regex.chunks, '' ).split( '\\0' );
			bNum = b.replace( regex.chunk, '\\0$1\\0' ).replace( regex.chunks, '' ).split( '\\0' );
			max = Math.max( aNum.length, bNum.length );
			// natural sorting through split numeric strings and default strings
			for ( indx = 0; indx < max; indx++ ) {
				// find floats not starting with '0', string or 0 if not defined
				aFloat = isNaN( aNum[ indx ] ) ? aNum[ indx ] || 0 : parseFloat( aNum[ indx ] ) || 0;
				bFloat = isNaN( bNum[ indx ] ) ? bNum[ indx ] || 0 : parseFloat( bNum[ indx ] ) || 0;
				// handle numeric vs string comparison - number < string - (Kyle Adams)
				if ( isNaN( aFloat ) !== isNaN( bFloat ) ) { return isNaN( aFloat ) ? 1 : -1; }
				// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
				if ( typeof aFloat !== typeof bFloat ) {
					aFloat += '';
					bFloat += '';
				}
				if ( aFloat < bFloat ) { return -1; }
				if ( aFloat > bFloat ) { return 1; }
			}
			return 0;
		},

		sortNaturalAsc : function( a, b, col, c ) {
			if ( a === b ) { return 0; }
			var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
			if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : -empty || -1; }
			if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : empty || 1; }
			return ts.sortNatural( a, b );
		},

		sortNaturalDesc : function( a, b, col, c ) {
			if ( a === b ) { return 0; }
			var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
			if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : empty || 1; }
			if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : -empty || -1; }
			return ts.sortNatural( b, a );
		},

		// basic alphabetical sort
		sortText : function( a, b ) {
			return a > b ? 1 : ( a < b ? -1 : 0 );
		},

		// return text string value by adding up ascii value
		// so the text is somewhat sorted when using a digital sort
		// this is NOT an alphanumeric sort
		getTextValue : function( val, num, max ) {
			if ( max ) {
				// make sure the text value is greater than the max numerical value (max)
				var indx,
					len = val ? val.length : 0,
					n = max + num;
				for ( indx = 0; indx < len; indx++ ) {
					n += val.charCodeAt( indx );
				}
				return num * n;
			}
			return 0;
		},

		sortNumericAsc : function( a, b, num, max, col, c ) {
			if ( a === b ) { return 0; }
			var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
			if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : -empty || -1; }
			if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : empty || 1; }
			if ( isNaN( a ) ) { a = ts.getTextValue( a, num, max ); }
			if ( isNaN( b ) ) { b = ts.getTextValue( b, num, max ); }
			return a - b;
		},

		sortNumericDesc : function( a, b, num, max, col, c ) {
			if ( a === b ) { return 0; }
			var empty = ts.string[ ( c.empties[ col ] || c.emptyTo ) ];
			if ( a === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? -1 : 1 ) : empty || 1; }
			if ( b === '' && empty !== 0 ) { return typeof empty === 'boolean' ? ( empty ? 1 : -1 ) : -empty || -1; }
			if ( isNaN( a ) ) { a = ts.getTextValue( a, num, max ); }
			if ( isNaN( b ) ) { b = ts.getTextValue( b, num, max ); }
			return b - a;
		},

		sortNumeric : function( a, b ) {
			return a - b;
		},

		/*
		██ ██ ██ ██ █████▄ ▄████▄ ██████ ██████ ▄█████
		██ ██ ██ ██ ██  ██ ██ ▄▄▄ ██▄▄     ██   ▀█▄
		██ ██ ██ ██ ██  ██ ██ ▀██ ██▀▀     ██      ▀█▄
		███████▀ ██ █████▀ ▀████▀ ██████   ██   █████▀
		*/
		addWidget : function( widget ) {
			ts.widgets.push( widget );
		},

		hasWidget : function( $table, name ) {
			$table = $( $table );
			return $table.length && $table[ 0 ].config && $table[ 0 ].config.widgetInit[ name ] || false;
		},

		getWidgetById : function( name ) {
			var indx, widget,
				len = ts.widgets.length;
			for ( indx = 0; indx < len; indx++ ) {
				widget = ts.widgets[ indx ];
				if ( widget && widget.id && widget.id.toLowerCase() === name.toLowerCase() ) {
					return widget;
				}
			}
		},

		applyWidgetOptions : function( table ) {
			var indx, widget,
				c = table.config,
				len = c.widgets.length;
			if ( len ) {
				for ( indx = 0; indx < len; indx++ ) {
					widget = ts.getWidgetById( c.widgets[ indx ] );
					if ( widget && widget.options ) {
						c.widgetOptions = $.extend( true, {}, widget.options, c.widgetOptions );
					}
				}
			}
		},

		addWidgetFromClass : function( table ) {
			var len, indx,
				c = table.config,
				// look for widgets to apply from table class
				// stop using \b otherwise this matches 'ui-widget-content' & adds 'content' widget
				regex = '\\s' + c.widgetClass.replace( ts.regex.templateName, '([\\w-]+)' ) + '\\s',
				widgetClass = new RegExp( regex, 'g' ),
				// extract out the widget id from the table class (widget id's can include dashes)
				widget = ( ' ' + c.table.className + ' ' ).match( widgetClass );
			if ( widget ) {
				len = widget.length;
				for ( indx = 0; indx < len; indx++ ) {
					c.widgets.push( widget[ indx ].replace( widgetClass, '$1' ) );
				}
			}
		},

		applyWidgetId : function( table, id, init ) {
			var applied, time, name,
				c = table.config,
				wo = c.widgetOptions,
				widget = ts.getWidgetById( id );
			if ( widget ) {
				name = widget.id;
				applied = false;
				// add widget name to option list so it gets reapplied after sorting, filtering, etc
				if ( $.inArray( name, c.widgets ) < 0 ) {
					c.widgets.push( name );
				}
				if ( c.debug ) { time = new Date(); }

				if ( init || !( c.widgetInit[ name ] ) ) {
					// set init flag first to prevent calling init more than once (e.g. pager)
					c.widgetInit[ name ] = true;
					if ( table.hasInitialized ) {
						// don't reapply widget options on tablesorter init
						ts.applyWidgetOptions( table );
					}
					if ( typeof widget.init === 'function' ) {
						applied = true;
						if ( c.debug ) {
							console[ console.group ? 'group' : 'log' ]( 'Initializing ' + name + ' widget' );
						}
						widget.init( table, widget, c, wo );
					}
				}
				if ( !init && typeof widget.format === 'function' ) {
					applied = true;
					if ( c.debug ) {
						console[ console.group ? 'group' : 'log' ]( 'Updating ' + name + ' widget' );
					}
					widget.format( table, c, wo, false );
				}
				if ( c.debug ) {
					if ( applied ) {
						console.log( 'Completed ' + ( init ? 'initializing ' : 'applying ' ) + name + ' widget' + ts.benchmark( time ) );
						if ( console.groupEnd ) { console.groupEnd(); }
					}
				}
			}
		},

		applyWidget : function( table, init, callback ) {
			table = $( table )[ 0 ]; // in case this is called externally
			var indx, len, names, widget, time,
				c = table.config,
				widgets = [];
			// prevent numerous consecutive widget applications
			if ( init !== false && table.hasInitialized && ( table.isApplyingWidgets || table.isUpdating ) ) {
				return;
			}
			if ( c.debug ) { time = new Date(); }
			ts.addWidgetFromClass( table );
			// prevent "tablesorter-ready" from firing multiple times in a row
			clearTimeout( c.timerReady );
			if ( c.widgets.length ) {
				table.isApplyingWidgets = true;
				// ensure unique widget ids
				c.widgets = $.grep( c.widgets, function( val, index ) {
					return $.inArray( val, c.widgets ) === index;
				});
				names = c.widgets || [];
				len = names.length;
				// build widget array & add priority as needed
				for ( indx = 0; indx < len; indx++ ) {
					widget = ts.getWidgetById( names[ indx ] );
					if ( widget && widget.id ) {
						// set priority to 10 if not defined
						if ( !widget.priority ) { widget.priority = 10; }
						widgets[ indx ] = widget;
					}
				}
				// sort widgets by priority
				widgets.sort( function( a, b ) {
					return a.priority < b.priority ? -1 : a.priority === b.priority ? 0 : 1;
				});
				// add/update selected widgets
				len = widgets.length;
				if ( c.debug ) {
					console[ console.group ? 'group' : 'log' ]( 'Start ' + ( init ? 'initializing' : 'applying' ) + ' widgets' );
				}
				for ( indx = 0; indx < len; indx++ ) {
					widget = widgets[ indx ];
					if ( widget && widget.id ) {
						ts.applyWidgetId( table, widget.id, init );
					}
				}
				if ( c.debug && console.groupEnd ) { console.groupEnd(); }
				// callback executed on init only
				if ( !init && typeof callback === 'function' ) {
					callback( table );
				}
			}
			c.timerReady = setTimeout( function() {
				table.isApplyingWidgets = false;
				$.data( table, 'lastWidgetApplication', new Date() );
				c.$table.triggerHandler( 'tablesorter-ready' );
			}, 10 );
			if ( c.debug ) {
				widget = c.widgets.length;
				console.log( 'Completed ' +
					( init === true ? 'initializing ' : 'applying ' ) + widget +
					' widget' + ( widget !== 1 ? 's' : '' ) + ts.benchmark( time ) );
			}
		},

		removeWidget : function( table, name, refreshing ) {
			table = $( table )[ 0 ];
			var index, widget, indx, len,
				c = table.config;
			// if name === true, add all widgets from $.tablesorter.widgets
			if ( name === true ) {
				name = [];
				len = ts.widgets.length;
				for ( indx = 0; indx < len; indx++ ) {
					widget = ts.widgets[ indx ];
					if ( widget && widget.id ) {
						name.push( widget.id );
					}
				}
			} else {
				// name can be either an array of widgets names,
				// or a space/comma separated list of widget names
				name = ( $.isArray( name ) ? name.join( ',' ) : name || '' ).toLowerCase().split( /[\s,]+/ );
			}
			len = name.length;
			for ( index = 0; index < len; index++ ) {
				widget = ts.getWidgetById( name[ index ] );
				indx = $.inArray( name[ index ], c.widgets );
				if ( widget && widget.remove ) {
					if ( c.debug ) {
						console.log( ( refreshing ? 'Refreshing' : 'Removing' ) + ' "' + name[ index ] + '" widget' );
					}
					widget.remove( table, c, c.widgetOptions, refreshing );
					c.widgetInit[ name[ index ] ] = false;
				}
				// don't remove the widget from config.widget if refreshing
				if ( indx >= 0 && refreshing !== true ) {
					c.widgets.splice( indx, 1 );
				}
			}
		},

		refreshWidgets : function( table, doAll, dontapply ) {
			table = $( table )[ 0 ]; // see issue #243
			var indx, widget,
				c = table.config,
				curWidgets = c.widgets,
				widgets = ts.widgets,
				len = widgets.length,
				list = [],
				callback = function( table ) {
					$( table ).triggerHandler( 'refreshComplete' );
				};
			// remove widgets not defined in config.widgets, unless doAll is true
			for ( indx = 0; indx < len; indx++ ) {
				widget = widgets[ indx ];
				if ( widget && widget.id && ( doAll || $.inArray( widget.id, curWidgets ) < 0 ) ) {
					list.push( widget.id );
				}
			}
			ts.removeWidget( table, list.join( ',' ), true );
			if ( dontapply !== true ) {
				// call widget init if
				ts.applyWidget( table, doAll || false, callback );
				if ( doAll ) {
					// apply widget format
					ts.applyWidget( table, false, callback );
				}
			} else {
				callback( table );
			}
		},

		/*
		██  ██ ██████ ██ ██     ██ ██████ ██ ██████ ▄█████
		██  ██   ██   ██ ██     ██   ██   ██ ██▄▄   ▀█▄
		██  ██   ██   ██ ██     ██   ██   ██ ██▀▀      ▀█▄
		▀████▀   ██   ██ ██████ ██   ██   ██ ██████ █████▀
		*/
		benchmark : function( diff ) {
			return ( ' ( ' + ( new Date().getTime() - diff.getTime() ) + 'ms )' );
		},
		// deprecated ts.log
		log : function() {
			console.log( arguments );
		},

		// $.isEmptyObject from jQuery v1.4
		isEmptyObject : function( obj ) {
			/*jshint forin: false */
			for ( var name in obj ) {
				return false;
			}
			return true;
		},

		isValueInArray : function( column, arry ) {
			var indx,
				len = arry && arry.length || 0;
			for ( indx = 0; indx < len; indx++ ) {
				if ( arry[ indx ][ 0 ] === column ) {
					return indx;
				}
			}
			return -1;
		},

		formatFloat : function( str, table ) {
			if ( typeof str !== 'string' || str === '' ) { return str; }
			// allow using formatFloat without a table; defaults to US number format
			var num,
				usFormat = table && table.config ? table.config.usNumberFormat !== false :
					typeof table !== 'undefined' ? table : true;
			if ( usFormat ) {
				// US Format - 1,234,567.89 -> 1234567.89
				str = str.replace( ts.regex.comma, '' );
			} else {
				// German Format = 1.234.567,89 -> 1234567.89
				// French Format = 1 234 567,89 -> 1234567.89
				str = str.replace( ts.regex.digitNonUS, '' ).replace( ts.regex.comma, '.' );
			}
			if ( ts.regex.digitNegativeTest.test( str ) ) {
				// make (#) into a negative number -> (10) = -10
				str = str.replace( ts.regex.digitNegativeReplace, '-$1' );
			}
			num = parseFloat( str );
			// return the text instead of zero
			return isNaN( num ) ? $.trim( str ) : num;
		},

		isDigit : function( str ) {
			// replace all unwanted chars and match
			return isNaN( str ) ?
				ts.regex.digitTest.test( str.toString().replace( ts.regex.digitReplace, '' ) ) :
				str !== '';
		},

		// computeTableHeaderCellIndexes from:
		// http://www.javascripttoolbox.com/lib/table/examples.php
		// http://www.javascripttoolbox.com/temp/table_cellindex.html
		computeColumnIndex : function( $rows, c ) {
			var i, j, k, l, cell, cells, rowIndex, rowSpan, colSpan, firstAvailCol,
				// total columns has been calculated, use it to set the matrixrow
				columns = c && c.columns || 0,
				matrix = [],
				matrixrow = new Array( columns );
			for ( i = 0; i < $rows.length; i++ ) {
				cells = $rows[ i ].cells;
				for ( j = 0; j < cells.length; j++ ) {
					cell = cells[ j ];
					rowIndex = cell.parentNode.rowIndex;
					rowSpan = cell.rowSpan || 1;
					colSpan = cell.colSpan || 1;
					if ( typeof matrix[ rowIndex ] === 'undefined' ) {
						matrix[ rowIndex ] = [];
					}
					// Find first available column in the first row
					for ( k = 0; k < matrix[ rowIndex ].length + 1; k++ ) {
						if ( typeof matrix[ rowIndex ][ k ] === 'undefined' ) {
							firstAvailCol = k;
							break;
						}
					}
					// jscs:disable disallowEmptyBlocks
					if ( columns && cell.cellIndex === firstAvailCol ) {
						// don't to anything
					} else if ( cell.setAttribute ) {
						// jscs:enable disallowEmptyBlocks
						// add data-column (setAttribute = IE8+)
						cell.setAttribute( 'data-column', firstAvailCol );
					} else {
						// remove once we drop support for IE7 - 1/12/2016
						$( cell ).attr( 'data-column', firstAvailCol );
					}
					for ( k = rowIndex; k < rowIndex + rowSpan; k++ ) {
						if ( typeof matrix[ k ] === 'undefined' ) {
							matrix[ k ] = [];
						}
						matrixrow = matrix[ k ];
						for ( l = firstAvailCol; l < firstAvailCol + colSpan; l++ ) {
							matrixrow[ l ] = 'x';
						}
					}
				}
			}
			return matrixrow.length;
		},

		// automatically add a colgroup with col elements set to a percentage width
		fixColumnWidth : function( table ) {
			table = $( table )[ 0 ];
			var overallWidth, percent, $tbodies, len, index,
				c = table.config,
				$colgroup = c.$table.children( 'colgroup' );
			// remove plugin-added colgroup, in case we need to refresh the widths
			if ( $colgroup.length && $colgroup.hasClass( ts.css.colgroup ) ) {
				$colgroup.remove();
			}
			if ( c.widthFixed && c.$table.children( 'colgroup' ).length === 0 ) {
				$colgroup = $( '<colgroup class="' + ts.css.colgroup + '">' );
				overallWidth = c.$table.width();
				// only add col for visible columns - fixes #371
				$tbodies = c.$tbodies.find( 'tr:first' ).children( ':visible' );
				len = $tbodies.length;
				for ( index = 0; index < len; index++ ) {
					percent = parseInt( ( $tbodies.eq( index ).width() / overallWidth ) * 1000, 10 ) / 10 + '%';
					$colgroup.append( $( '<col>' ).css( 'width', percent ) );
				}
				c.$table.prepend( $colgroup );
			}
		},

		// get sorter, string, empty, etc options for each column from
		// jQuery data, metadata, header option or header class name ('sorter-false')
		// priority = jQuery data > meta > headers option > header class name
		getData : function( header, configHeader, key ) {
			var meta, cl4ss,
				val = '',
				$header = $( header );
			if ( !$header.length ) { return ''; }
			meta = $.metadata ? $header.metadata() : false;
			cl4ss = ' ' + ( $header.attr( 'class' ) || '' );
			if ( typeof $header.data( key ) !== 'undefined' ||
				typeof $header.data( key.toLowerCase() ) !== 'undefined' ) {
				// 'data-lockedOrder' is assigned to 'lockedorder'; but 'data-locked-order' is assigned to 'lockedOrder'
				// 'data-sort-initial-order' is assigned to 'sortInitialOrder'
				val += $header.data( key ) || $header.data( key.toLowerCase() );
			} else if ( meta && typeof meta[ key ] !== 'undefined' ) {
				val += meta[ key ];
			} else if ( configHeader && typeof configHeader[ key ] !== 'undefined' ) {
				val += configHeader[ key ];
			} else if ( cl4ss !== ' ' && cl4ss.match( ' ' + key + '-' ) ) {
				// include sorter class name 'sorter-text', etc; now works with 'sorter-my-custom-parser'
				val = cl4ss.match( new RegExp( '\\s' + key + '-([\\w-]+)' ) )[ 1 ] || '';
			}
			return $.trim( val );
		},

		getColumnData : function( table, obj, indx, getCell, $headers ) {
			if ( typeof obj === 'undefined' || obj === null ) { return; }
			table = $( table )[ 0 ];
			var $header, key,
				c = table.config,
				$cells = ( $headers || c.$headers ),
				// c.$headerIndexed is not defined initially
				$cell = c.$headerIndexed && c.$headerIndexed[ indx ] ||
					$cells.filter( '[data-column="' + indx + '"]:last' );
			if ( obj[ indx ] ) {
				return getCell ? obj[ indx ] : obj[ $cells.index( $cell ) ];
			}
			for ( key in obj ) {
				if ( typeof key === 'string' ) {
					$header = $cell
						// header cell with class/id
						.filter( key )
						// find elements within the header cell with cell/id
						.add( $cell.find( key ) );
					if ( $header.length ) {
						return obj[ key ];
					}
				}
			}
			return;
		},

		// *** Process table ***
		// add processing indicator
		isProcessing : function( $table, toggle, $headers ) {
			$table = $( $table );
			var c = $table[ 0 ].config,
				// default to all headers
				$header = $headers || $table.find( '.' + ts.css.header );
			if ( toggle ) {
				// don't use sortList if custom $headers used
				if ( typeof $headers !== 'undefined' && c.sortList.length > 0 ) {
					// get headers from the sortList
					$header = $header.filter( function() {
						// get data-column from attr to keep compatibility with jQuery 1.2.6
						return this.sortDisabled ?
							false :
							ts.isValueInArray( parseFloat( $( this ).attr( 'data-column' ) ), c.sortList ) >= 0;
					});
				}
				$table.add( $header ).addClass( ts.css.processing + ' ' + c.cssProcessing );
			} else {
				$table.add( $header ).removeClass( ts.css.processing + ' ' + c.cssProcessing );
			}
		},

		// detach tbody but save the position
		// don't use tbody because there are portions that look for a tbody index (updateCell)
		processTbody : function( table, $tb, getIt ) {
			table = $( table )[ 0 ];
			if ( getIt ) {
				table.isProcessing = true;
				$tb.before( '<colgroup class="tablesorter-savemyplace"/>' );
				return $.fn.detach ? $tb.detach() : $tb.remove();
			}
			var holdr = $( table ).find( 'colgroup.tablesorter-savemyplace' );
			$tb.insertAfter( holdr );
			holdr.remove();
			table.isProcessing = false;
		},

		clearTableBody : function( table ) {
			$( table )[ 0 ].config.$tbodies.children().detach();
		},

		// used when replacing accented characters during sorting
		characterEquivalents : {
			'a' : '\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5', // áàâãäąå
			'A' : '\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5', // ÁÀÂÃÄĄÅ
			'c' : '\u00e7\u0107\u010d', // çćč
			'C' : '\u00c7\u0106\u010c', // ÇĆČ
			'e' : '\u00e9\u00e8\u00ea\u00eb\u011b\u0119', // éèêëěę
			'E' : '\u00c9\u00c8\u00ca\u00cb\u011a\u0118', // ÉÈÊËĚĘ
			'i' : '\u00ed\u00ec\u0130\u00ee\u00ef\u0131', // íìİîïı
			'I' : '\u00cd\u00cc\u0130\u00ce\u00cf', // ÍÌİÎÏ
			'o' : '\u00f3\u00f2\u00f4\u00f5\u00f6\u014d', // óòôõöō
			'O' : '\u00d3\u00d2\u00d4\u00d5\u00d6\u014c', // ÓÒÔÕÖŌ
			'ss': '\u00df', // ß (s sharp)
			'SS': '\u1e9e', // ẞ (Capital sharp s)
			'u' : '\u00fa\u00f9\u00fb\u00fc\u016f', // úùûüů
			'U' : '\u00da\u00d9\u00db\u00dc\u016e' // ÚÙÛÜŮ
		},

		replaceAccents : function( str ) {
			var chr,
				acc = '[',
				eq = ts.characterEquivalents;
			if ( !ts.characterRegex ) {
				ts.characterRegexArray = {};
				for ( chr in eq ) {
					if ( typeof chr === 'string' ) {
						acc += eq[ chr ];
						ts.characterRegexArray[ chr ] = new RegExp( '[' + eq[ chr ] + ']', 'g' );
					}
				}
				ts.characterRegex = new RegExp( acc + ']' );
			}
			if ( ts.characterRegex.test( str ) ) {
				for ( chr in eq ) {
					if ( typeof chr === 'string' ) {
						str = str.replace( ts.characterRegexArray[ chr ], chr );
					}
				}
			}
			return str;
		},

		// restore headers
		restoreHeaders : function( table ) {
			var index, $cell,
				c = $( table )[ 0 ].config,
				$headers = c.$table.find( c.selectorHeaders ),
				len = $headers.length;
			// don't use c.$headers here in case header cells were swapped
			for ( index = 0; index < len; index++ ) {
				$cell = $headers.eq( index );
				// only restore header cells if it is wrapped
				// because this is also used by the updateAll method
				if ( $cell.find( '.' + ts.css.headerIn ).length ) {
					$cell.html( c.headerContent[ index ] );
				}
			}
		},

		destroy : function( table, removeClasses, callback ) {
			table = $( table )[ 0 ];
			if ( !table.hasInitialized ) { return; }
			// remove all widgets
			ts.removeWidget( table, true, false );
			var events,
				$t = $( table ),
				c = table.config,
				debug = c.debug,
				$h = $t.find( 'thead:first' ),
				$r = $h.find( 'tr.' + ts.css.headerRow ).removeClass( ts.css.headerRow + ' ' + c.cssHeaderRow ),
				$f = $t.find( 'tfoot:first > tr' ).children( 'th, td' );
			if ( removeClasses === false && $.inArray( 'uitheme', c.widgets ) >= 0 ) {
				// reapply uitheme classes, in case we want to maintain appearance
				$t.triggerHandler( 'applyWidgetId', [ 'uitheme' ] );
				$t.triggerHandler( 'applyWidgetId', [ 'zebra' ] );
			}
			// remove widget added rows, just in case
			$h.find( 'tr' ).not( $r ).remove();
			// disable tablesorter - not using .unbind( namespace ) because namespacing was
			// added in jQuery v1.4.3 - see http://api.jquery.com/event.namespace/
			events = 'sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton ' +
				'appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave ' +
				'keypress sortBegin sortEnd resetToLoadState '.split( ' ' )
				.join( c.namespace + ' ' );
			$t
				.removeData( 'tablesorter' )
				.unbind( events.replace( ts.regex.spaces, ' ' ) );
			c.$headers
				.add( $f )
				.removeClass( [ ts.css.header, c.cssHeader, c.cssAsc, c.cssDesc, ts.css.sortAsc, ts.css.sortDesc, ts.css.sortNone ].join( ' ' ) )
				.removeAttr( 'data-column' )
				.removeAttr( 'aria-label' )
				.attr( 'aria-disabled', 'true' );
			$r
				.find( c.selectorSort )
				.unbind( ( 'mousedown mouseup keypress '.split( ' ' ).join( c.namespace + ' ' ) ).replace( ts.regex.spaces, ' ' ) );
			ts.restoreHeaders( table );
			$t.toggleClass( ts.css.table + ' ' + c.tableClass + ' tablesorter-' + c.theme, removeClasses === false );
			// clear flag in case the plugin is initialized again
			table.hasInitialized = false;
			delete table.config.cache;
			if ( typeof callback === 'function' ) {
				callback( table );
			}
			if ( debug ) {
				console.log( 'tablesorter has been removed' );
			}
		}

	};

	$.fn.tablesorter = function( settings ) {
		return this.each( function() {
			var table = this,
			// merge & extend config options
			c = $.extend( true, {}, ts.defaults, settings, ts.instanceMethods );
			// save initial settings
			c.originalSettings = settings;
			// create a table from data (build table widget)
			if ( !table.hasInitialized && ts.buildTable && this.nodeName !== 'TABLE' ) {
				// return the table (in case the original target is the table's container)
				ts.buildTable( table, c );
			} else {
				ts.setup( table, c );
			}
		});
	};

	// set up debug logs
	if ( !( window.console && window.console.log ) ) {
		// access $.tablesorter.logs for browsers that don't have a console...
		ts.logs = [];
		/*jshint -W020 */
		console = {};
		console.log = console.warn = console.error = console.table = function() {
			var arg = arguments.length > 1 ? arguments : arguments[0];
			ts.logs.push({ date: Date.now(), log: arg });
		};
	}

	// add default parsers
	ts.addParser({
		id : 'no-parser',
		is : function() {
			return false;
		},
		format : function() {
			return '';
		},
		type : 'text'
	});

	ts.addParser({
		id : 'text',
		is : function() {
			return true;
		},
		format : function( str, table ) {
			var c = table.config;
			if ( str ) {
				str = $.trim( c.ignoreCase ? str.toLocaleLowerCase() : str );
				str = c.sortLocaleCompare ? ts.replaceAccents( str ) : str;
			}
			return str;
		},
		type : 'text'
	});

	ts.regex.nondigit = /[^\w,. \-()]/g;
	ts.addParser({
		id : 'digit',
		is : function( str ) {
			return ts.isDigit( str );
		},
		format : function( str, table ) {
			var num = ts.formatFloat( ( str || '' ).replace( ts.regex.nondigit, '' ), table );
			return str && typeof num === 'number' ? num :
				str ? $.trim( str && table.config.ignoreCase ? str.toLocaleLowerCase() : str ) : str;
		},
		type : 'numeric'
	});

	ts.regex.currencyReplace = /[+\-,. ]/g;
	ts.regex.currencyTest = /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/;
	ts.addParser({
		id : 'currency',
		is : function( str ) {
			str = ( str || '' ).replace( ts.regex.currencyReplace, '' );
			// test for £$€¤¥¢
			return ts.regex.currencyTest.test( str );
		},
		format : function( str, table ) {
			var num = ts.formatFloat( ( str || '' ).replace( ts.regex.nondigit, '' ), table );
			return str && typeof num === 'number' ? num :
				str ? $.trim( str && table.config.ignoreCase ? str.toLocaleLowerCase() : str ) : str;
		},
		type : 'numeric'
	});

	// too many protocols to add them all https://en.wikipedia.org/wiki/URI_scheme
	// now, this regex can be updated before initialization
	ts.regex.urlProtocolTest =   /^(https?|ftp|file):\/\//;
	ts.regex.urlProtocolReplace = /(https?|ftp|file):\/\//;
	ts.addParser({
		id : 'url',
		is : function( str ) {
			return ts.regex.urlProtocolTest.test( str );
		},
		format : function( str ) {
			return str ? $.trim( str.replace( ts.regex.urlProtocolReplace, '' ) ) : str;
		},
		parsed : true, // filter widget flag
		type : 'text'
	});

	ts.regex.dash = /-/g;
	ts.regex.isoDate = /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/;
	ts.addParser({
		id : 'isoDate',
		is : function( str ) {
			return ts.regex.isoDate.test( str );
		},
		format : function( str, table ) {
			var date = str ? new Date( str.replace( ts.regex.dash, '/' ) ) : str;
			return date instanceof Date && isFinite( date ) ? date.getTime() : str;
		},
		type : 'numeric'
	});

	ts.regex.percent = /%/g;
	ts.regex.percentTest = /(\d\s*?%|%\s*?\d)/;
	ts.addParser({
		id : 'percent',
		is : function( str ) {
			return ts.regex.percentTest.test( str ) && str.length < 15;
		},
		format : function( str, table ) {
			return str ? ts.formatFloat( str.replace( ts.regex.percent, '' ), table ) : str;
		},
		type : 'numeric'
	});

	// added image parser to core v2.17.9
	ts.addParser({
		id : 'image',
		is : function( str, table, node, $node ) {
			return $node.find( 'img' ).length > 0;
		},
		format : function( str, table, cell ) {
			return $( cell ).find( 'img' ).attr( table.config.imgAttr || 'alt' ) || str;
		},
		parsed : true, // filter widget flag
		type : 'text'
	});

	ts.regex.dateReplace = /(\S)([AP]M)$/i; // used by usLongDate & time parser
	ts.regex.usLongDateTest1 = /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i;
	ts.regex.usLongDateTest2 = /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i;
	ts.addParser({
		id : 'usLongDate',
		is : function( str ) {
			// two digit years are not allowed cross-browser
			// Jan 01, 2013 12:34:56 PM or 01 Jan 2013
			return ts.regex.usLongDateTest1.test( str ) || ts.regex.usLongDateTest2.test( str );
		},
		format : function( str, table ) {
			var date = str ? new Date( str.replace( ts.regex.dateReplace, '$1 $2' ) ) : str;
			return date instanceof Date && isFinite( date ) ? date.getTime() : str;
		},
		type : 'numeric'
	});

	// testing for ##-##-#### or ####-##-##, so it's not perfect; time can be included
	ts.regex.shortDateTest = /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/;
	// escaped "-" because JSHint in Firefox was showing it as an error
	ts.regex.shortDateReplace = /[\-.,]/g;
	// XXY covers MDY & DMY formats
	ts.regex.shortDateXXY = /(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/;
	ts.regex.shortDateYMD = /(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/;
	ts.convertFormat = function( dateString, format ) {
		dateString = ( dateString || '' )
			.replace( ts.regex.spaces, ' ' )
			.replace( ts.regex.shortDateReplace, '/' );
		if ( format === 'mmddyyyy' ) {
			dateString = dateString.replace( ts.regex.shortDateXXY, '$3/$1/$2' );
		} else if ( format === 'ddmmyyyy' ) {
			dateString = dateString.replace( ts.regex.shortDateXXY, '$3/$2/$1' );
		} else if ( format === 'yyyymmdd' ) {
			dateString = dateString.replace( ts.regex.shortDateYMD, '$1/$2/$3' );
		}
		var date = new Date( dateString );
		return date instanceof Date && isFinite( date ) ? date.getTime() : '';
	};

	ts.addParser({
		id : 'shortDate', // 'mmddyyyy', 'ddmmyyyy' or 'yyyymmdd'
		is : function( str ) {
			str = ( str || '' ).replace( ts.regex.spaces, ' ' ).replace( ts.regex.shortDateReplace, '/' );
			return ts.regex.shortDateTest.test( str );
		},
		format : function( str, table, cell, cellIndex ) {
			if ( str ) {
				var c = table.config,
					$header = c.$headerIndexed[ cellIndex ],
					format = $header.length && $header.data( 'dateFormat' ) ||
						ts.getData( $header, ts.getColumnData( table, c.headers, cellIndex ), 'dateFormat' ) ||
						c.dateFormat;
				// save format because getData can be slow...
				if ( $header.length ) {
					$header.data( 'dateFormat', format );
				}
				return ts.convertFormat( str, format ) || str;
			}
			return str;
		},
		type : 'numeric'
	});

	// match 24 hour time & 12 hours time + am/pm - see http://regexr.com/3c3tk
	ts.regex.timeTest = /^([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)$/i;
	ts.regex.timeMatch = /([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i;
	ts.addParser({
		id : 'time',
		is : function( str ) {
			return ts.regex.timeTest.test( str );
		},
		format : function( str, table ) {
			// isolate time... ignore month, day and year
			var temp,
				timePart = ( str || '' ).match( ts.regex.timeMatch ),
				orig = new Date( str ),
				// no time component? default to 00:00 by leaving it out, but only if str is defined
				time = str && ( timePart !== null ? timePart[ 0 ] : '00:00 AM' ),
				date = time ? new Date( '2000/01/01 ' + time.replace( ts.regex.dateReplace, '$1 $2' ) ) : time;
			if ( date instanceof Date && isFinite( date ) ) {
				temp = orig instanceof Date && isFinite( orig ) ? orig.getTime() : 0;
				// if original string was a valid date, add it to the decimal so the column sorts in some kind of order
				// luckily new Date() ignores the decimals
				return temp ? parseFloat( date.getTime() + '.' + orig.getTime() ) : date.getTime();
			}
			return str;
		},
		type : 'numeric'
	});

	ts.addParser({
		id : 'metadata',
		is : function() {
			return false;
		},
		format : function( str, table, cell ) {
			var c = table.config,
			p = ( !c.parserMetadataName ) ? 'sortValue' : c.parserMetadataName;
			return $( cell ).metadata()[ p ];
		},
		type : 'numeric'
	});

	/*
		██████ ██████ █████▄ █████▄ ▄████▄
		  ▄█▀  ██▄▄   ██▄▄██ ██▄▄██ ██▄▄██
		▄█▀    ██▀▀   ██▀▀██ ██▀▀█  ██▀▀██
		██████ ██████ █████▀ ██  ██ ██  ██
		*/
	// add default widgets
	ts.addWidget({
		id : 'zebra',
		priority : 90,
		format : function( table, c, wo ) {
			var $visibleRows, $row, count, isEven, tbodyIndex, rowIndex, len,
				child = new RegExp( c.cssChildRow, 'i' ),
				$tbodies = c.$tbodies.add( $( c.namespace + '_extra_table' ).children( 'tbody:not(.' + c.cssInfoBlock + ')' ) );
			for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				// loop through the visible rows
				count = 0;
				$visibleRows = $tbodies.eq( tbodyIndex ).children( 'tr:visible' ).not( c.selectorRemove );
				len = $visibleRows.length;
				for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {
					$row = $visibleRows.eq( rowIndex );
					// style child rows the same way the parent row was styled
					if ( !child.test( $row[ 0 ].className ) ) { count++; }
					isEven = ( count % 2 === 0 );
					$row
						.removeClass( wo.zebra[ isEven ? 1 : 0 ] )
						.addClass( wo.zebra[ isEven ? 0 : 1 ] );
				}
			}
		},
		remove : function( table, c, wo, refreshing ) {
			if ( refreshing ) { return; }
			var tbodyIndex, $tbody,
				$tbodies = c.$tbodies,
				toRemove = ( wo.zebra || [ 'even', 'odd' ] ).join( ' ' );
			for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ){
				$tbody = ts.processTbody( table, $tbodies.eq( tbodyIndex ), true ); // remove tbody
				$tbody.children().removeClass( toRemove );
				ts.processTbody( table, $tbody, false ); // restore tbody
			}
		}
	});

})( jQuery );

return $.tablesorter;
}));
