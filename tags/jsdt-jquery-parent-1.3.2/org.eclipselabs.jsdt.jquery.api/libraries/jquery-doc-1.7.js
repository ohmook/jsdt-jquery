var jQueryObject = { };
/**
 * Remove an event handler.
 * @since 1.7
 * @param {String} events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
 * @param {String} [selector] A selector which should match the one originally passed to <code>.on()</code> when attaching event handlers.
 * @param {Function} [handler] A handler function previously attached for the event(s), or the special value <code>false</code>.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.off = function(events, selector, handler) {};
/**
 * Attach an event handler function for one or more events to the selected elements.
 * @since 1.7
 * @param {String} events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
 * @param {String} [selector] A selector string to filter the descendants of the selected elements that trigger the event. If the selector is <code>null</code> or omitted, the event is always triggered when it reaches the selected element.
 * @param {Anything} [data] Data to be passed to the handler in <a><code>event.data</code></a> when an event is triggered.
 * @param {Function} handler A function to execute when the event is triggered. The value <code>false</code> is also allowed as a shorthand for a function that simply does <code>return false</code>.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.on = function(events, selector, data, handler) {};
/**
 *  Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished. 
 * @since 1.6
 * @param {String} [type=fx]  The type of queue that needs to be observed. 
 * @param {Object} [target] Object onto which the promise methods have to be attached
 * @returns {Promise}
 */
jQueryObject.prototype.promise = function(type, target) {};
/**
 * Remove a property for the set of matched elements.
 * @since 1.6
 * @param {String} propertyName The name of the property to set.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.removeProp = function(propertyName) {};
/**
 * Get the value of a property for the first element in the set of matched elements.
 * @since 1.6
 * @param {String} propertyName The name of the property to get.
 * @returns {String}
 */
jQueryObject.prototype.prop = function(propertyName) {};
/**
 * Set one or more properties for the set of matched elements.
 * @since 1.6
 * @param {String} propertyName The name of the property to set.
 * @param {String} value A value to set for the property.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.prop = function(propertyName, value) {};
/**
 * A string containing the jQuery version number.
 * @type {String}
 */
jQueryObject.prototype.jquery = "";
/**
 * Display or hide the matched elements by animating their opacity.
 * @since 1.4
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {String} [easing] A string indicating which easing function to use for the transition.
 * @param {Function} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.fadeToggle = function(duration, easing, callback) {};
/**
 * Bind two or more handlers to the matched elements, to be executed on alternate clicks.
 * @since 1.0
 * @param {Function} handler A function to execute every even time the element is clicked.
 * @param {Function} handler A function to execute every odd time the element is clicked.
 * @param {Function} [handler] Additional handlers to cycle through after clicks.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.toggle = function(handler, handler, handler) {};
/**
 * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
 * @since 1.4
 * @returns {jQueryObject}
 */
jQueryObject.prototype.undelegate = function() {};
/**
 * Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
 * @since 1.4
 * @param {String} selector A selector to filter the elements that trigger the event.
 * @param {String} eventType A string containing one or more space-separated JavaScript event types, such as "click" or "keydown," or custom event names.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.delegate = function(selector, eventType, handler) {};
/**
 * Bind an event handler to the "focusout" JavaScript event.
 * @since 1.4
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.focusout = function(handler) {};
/**
 * Bind an event handler to the "focusin" event.
 * @since 1.4
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.focusin = function(handler) {};
/**
 * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
 * @since 1.4
 * @param {String} selector A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.has = function(selector) {};
/**
 * Set a timer to delay execution of subsequent items in the queue.
 * @since 1.4
 * @param {Integer} duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.delay = function(duration, queueName) {};
/**
 * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching ancestor elements.
 * @param {Selector} [filter] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.parentsUntil = function(selector, filter) {};
/**
 * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching preceding sibling elements.
 * @param {Selector} [filter] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.prevUntil = function(selector, filter) {};
/**
 * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
 * @since 1.4
 * @param {Selector} [selector] A string containing a selector expression to indicate where to stop matching following sibling elements.
 * @param {Selector} [filter] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.nextUntil = function(selector, filter) {};
/**
 * Iterate over a jQuery object, executing a function for each matched element. 
 * @since 1.0
 * @param {Function} func A function to execute for each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.each = function(func) {};
/**
 * Add a collection of DOM elements onto the jQuery stack.
 * @since 1.0
 * @param {Array} elements An array of elements to push onto the stack and make into a new jQuery object.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.pushStack = function(elements) {};
/**
 * Remove from the queue all items that have not yet been run.
 * @since 1.4
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.clearQueue = function(queueName) {};
/**
 * Retrieve all the DOM elements contained in the jQuery set, as an array.
 * @since 1.4
 * @returns {Array}
 */
jQueryObject.prototype.toArray = function() {};
/**
 * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.keydown = function(handler) {};
/**
 * Search for a given element from among the matched elements.
 * @since 1.4
 * @returns {Number}
 */
jQueryObject.prototype.index = function() {};
/**
 * Remove a previously-stored piece of data.
 * @since 1.2
 * @param {String} [name] A string naming the piece of data to delete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.removeData = function(name) {};
/**
 * Store arbitrary data associated with the matched elements.
 * @since 1.2
 * @param {String} key A string naming the piece of data to set.
 * @param {Object} value The new data value; it can be any Javascript type including Array or Object.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.data = function(key, value) {};
/**
 * Returns value at named data store for the first element in the jQuery collection, as set by data(name, value).
 * @since 1.2
 * @param {String} key Name of the data stored.
 * @returns {Object}
 */
jQueryObject.prototype.data = function(key) {};
/**
 * Retrieve the DOM elements matched by the jQuery object.
 * @since 1.0
 * @param {Number} [index] A zero-based integer indicating which element to retrieve.
 * @returns {Element|Array}
 */
jQueryObject.prototype.get = function(index) {};
/**
 * Return the number of elements in the jQuery object.
 * @since 1.0
 * @returns {Number}
 */
jQueryObject.prototype.size = function() {};
/**
 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.scroll = function(handler) {};
/**
 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.resize = function(handler) {};
/**
 * Execute the next function on the queue for the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.dequeue = function(queueName) {};
/**
 * Show the queue of functions to be executed on the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @returns {Array}
 */
jQueryObject.prototype.queue = function(queueName) {};
/**
 * Manipulate the queue of functions to be executed on the matched elements.
 * @since 1.2
 * @param {String} [queueName] A string containing the name of the queue. Defaults to <code>fx</code>, the standard effects queue.
 * @param {Array} newQueue An array of functions to replace the current queue contents.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.queue = function(queueName, newQueue) {};
/**
 * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.keyup = function(handler) {};
/**
 * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.keypress = function(handler) {};
/**
 * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.submit = function(handler) {};
/**
 * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.select = function(handler) {};
/**
 * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.change = function(handler) {};
/**
 * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.blur = function(handler) {};
/**
 * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.focus = function(handler) {};
/**
 * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mousemove = function(handler) {};
/**
 * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
 * @since 1.0
 * @param {Function} handlerIn A function to execute when the mouse pointer enters the element.
 * @param {Function} handlerOut A function to execute when the mouse pointer leaves the element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.hover = function(handlerIn, handlerOut) {};
/**
 * Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.
 * @since 1.4
 * @param {Function} handlerInOut A function to execute when the mouse pointer enters or leaves the element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.hover = function(handlerInOut) {};
/**
 * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseleave = function(handler) {};
/**
 * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseenter = function(handler) {};
/**
 * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseout = function(handler) {};
/**
 * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseover = function(handler) {};
/**
 * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.dblclick = function(handler) {};
/**
 * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.click = function(handler) {};
/**
 * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseup = function(handler) {};
/**
 * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mousedown = function(handler) {};
/**
 * Bind an event handler to the "error" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.error = function(handler) {};
/**
 * Bind an event handler to the "unload" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.unload = function(handler) {};
/**
 * Bind an event handler to the "load" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.load = function(handler) {};
/**
 * Specify a function to execute when the DOM is fully loaded.
 * @since 1.0
 * @param {Function} handler A function to execute after the DOM is ready.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ready = function(handler) {};
/**
 * Remove all event handlers previously attached using <code>.live()</code> from the elements.
 * @since 1.4
 * @deprecated 1.7
 * @returns {jQueryObject}
 */
jQueryObject.prototype.die = function() {};
/**
 * Remove an event handler previously attached using <code>.live()</code> from the elements.
 * @since 1.3
 * @deprecated 1.7
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>keydown</code>.
 * @param {String} [handler] The function that is no longer to be executed.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.die = function(eventType, handler) {};
/**
 * Attach an event handler for all elements which match the current selector, now and in the future.
 * @since 1.3
 * @deprecated 1.7
 * @param {String} events A string containing a JavaScript event type, such as "click" or "keydown." As of jQuery 1.4 the string can contain multiple, space-separated event types or custom event names.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.live = function(events, handler) {};
/**
 * Execute all handlers attached to an element for an event.
 * @since 1.2
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} extraParameters An array of additional parameters to pass along to the event handler.
 * @returns {Object}
 */
jQueryObject.prototype.triggerHandler = function(eventType, extraParameters) {};
/**
 * Execute all handlers and behaviors attached to the matched elements for the given event type.
 * @since 1.0
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Object} extraParameters Additional parameters to pass along to the event handler.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.trigger = function(eventType, extraParameters) {};
/**
 * Register a handler to be called when Ajax requests complete. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxComplete = function(handler) {};
/**
 * Attach a handler to an event for the elements. The handler is executed at most once per element.
 * @since 1.1
 * @param {String} events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
 * @param {Object} [data] A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.one = function(events, data, handler) {};
/**
 * Encode a set of form elements as an array of names and values.
 * @since 1.2
 * @returns {Array}
 */
jQueryObject.prototype.serializeArray = function() {};
/**
 * Encode a set of form elements as a string for submission.
 * @since 1.0
 * @returns {String}
 */
jQueryObject.prototype.serialize = function() {};
/**
 * Attach a function to be executed whenever an Ajax request completes successfully. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxSuccess = function(handler) {};
/**
 * Register a handler to be called when all Ajax requests have completed. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxStop = function(handler) {};
/**
 * Register a handler to be called when the first Ajax request begins. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxStart = function(handler) {};
/**
 * Attach a function to be executed before an Ajax request is sent. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxSend = function(handler) {};
/**
 * Register a handler to be called when Ajax requests complete with an error. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxError = function(handler) {};
/**
 * Remove a previously-attached event handler from the elements.
 * @since 1.0
 * @param {String} [eventType] A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Function} [handler] The function that is to be no longer executed.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.unbind = function(eventType, handler) {};
/**
 * Attach a handler to an event for the elements.
 * @since 1.0
 * @param {String} eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
 * @param {Object} [eventData] A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.bind = function(eventType, eventData, handler) {};
/**
 * Reduce the set of matched elements to the first in the set.
 * @since 1.4
 * @returns {jQueryObject}
 */
jQueryObject.prototype.first = function() {};
/**
 * Reduce the set of matched elements to the final one in the set.
 * @since 1.4
 * @returns {jQueryObject}
 */
jQueryObject.prototype.last = function() {};
/**
 * Reduce the set of matched elements to a subset specified by a range of indices.
 * @since 1.1
 * @param {Integer} start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
 * @param {Integer} [end] An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.slice = function(start, end) {};
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @since 1.0
 * @param {selector} selector A string containing a selector expression
 * @param {Element} [context] A DOM Element, Document, or jQuery to use as context
 * @returns {jQueryObject}
 */
jQueryObject.prototype.jQuery = function(selector, context) {};
/**
 * Creates DOM elements on the fly from the provided string of raw HTML.
 * @since 1.0
 * @param {String} html A string of HTML to create on the fly. Note that this parses HTML, <strong>not</strong> XML.
 * @param {document} [ownerDocument] A document in which the new elements will be created
 * @returns {jQueryObject}
 */
jQueryObject.prototype.jQuery = function(html, ownerDocument) {};
/**
 * Binds a function to be executed when the DOM has finished loading.
 * @since 1.0
 * @param {Function} callback The function to execute when the DOM is ready.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.jQuery = function(callback) {};
/**
 * Stop the currently-running animation on the matched elements.
 * @since 1.2
 * @param {Boolean} [clearQueue] A Boolean indicating whether to remove queued animation as well. Defaults to <code>false</code>.
 * @param {Boolean} [jumpToEnd] A Boolean indicating whether to complete the current animation immediately. Defaults to <code>false</code>.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.stop = function(clearQueue, jumpToEnd) {};
/**
 * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
 * @since 1.0
 * @returns {jQueryObject}
 */
jQueryObject.prototype.end = function() {};
/**
 * Add the previous set of elements on the stack to the current set.
 * @since 1.2
 * @returns {jQueryObject}
 */
jQueryObject.prototype.andSelf = function() {};
/**
 * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.siblings = function(selector) {};
/**
 * Perform a custom animation of a set of CSS properties.
 * @since 1.0
 * @param {Map} properties A map of CSS properties that the animation will move toward.
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {String} [easing] A string indicating which easing function to use for the transition.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.animate = function(properties, duration, easing, complete) {};
/**
 * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.2
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.prevAll = function(selector) {};
/**
 * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.prev = function(selector) {};
/**
 * Adjust the opacity of the matched elements.
 * @since 1.0
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Number} opacity A number between 0 and 1 denoting the target opacity.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.fadeTo = function(duration, opacity, callback) {};
/**
 * Hide the matched elements by fading them to transparent.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.fadeOut = function(duration, callback) {};
/**
 * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.parents = function(selector) {};
/**
 * Display the matched elements by fading them to opaque.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.fadeIn = function(duration, callback) {};
/**
 * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.parent = function(selector) {};
/**
 * Get the closest ancestor element that is positioned.
 * @since 1.2
 * @returns {jQueryObject}
 */
jQueryObject.prototype.offsetParent = function() {};
/**
 * Display or hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.slideToggle = function(duration, callback) {};
/**
 * Hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.slideUp = function(duration, callback) {};
/**
 * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.2
 * @param {String} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.nextAll = function(selector) {};
/**
 * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.next = function(selector) {};
/**
 * Display the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.slideDown = function(duration, callback) {};
/**
 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.find = function(selector) {};
/**
 * Get the children of each element in the set of matched elements, including text and comment nodes.
 * @since 1.2
 * @returns {jQueryObject}
 */
jQueryObject.prototype.contents = function() {};
/**
 * Get the first element that matches the selector, beginning at the current element and progressing up through the DOM tree.
 * @since 1.3
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.closest = function(selector) {};
/**
 * Gets an array of all the elements and selectors matched against the current element up through the DOM tree.
 * @since 1.4
 * @deprecated 1.7
 * @param {Array} selectors An array or string containing a selector expression to match elements against (can also be a jQuery object).
 * @param {Element} [context] A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
 * @returns {Array}
 */
jQueryObject.prototype.closest = function(selectors, context) {};
/**
 * Load data from the server and place the returned HTML into the matched element.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} [complete] A callback function that is executed when the request completes.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.load = function(url, data, complete) {};
/**
 * The number of elements in the jQuery object.
 * @type {Number}
 */
jQueryObject.prototype.length = 1;
/**
 * Get the children of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.children = function(selector) {};
/**
 * Add elements to the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string representing a selector expression to find additional elements to add to the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.add = function(selector) {};
/**
 * The DOM node context originally passed to <code>jQuery()</code>; if none was passed then context will likely be the document.
 * @type {Element}
 */
jQueryObject.prototype.context = null;
/**
 * Remove elements from the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.not = function(selector) {};
/**
 * Get the current computed width for the first element in the set of matched elements, including padding and border.
 * @since 1.2
 * @param {Boolean} [includeMargin] A Boolean indicating whether to include the element's margin in the calculation.
 * @returns {Integer}
 */
jQueryObject.prototype.outerWidth = function(includeMargin) {};
/**
 * Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns an integer (without "px") representation of the value or null if called on an empty set of elements.
 * @since 1.2
 * @param {Boolean} [includeMargin] A Boolean indicating whether to include the element's margin in the calculation.
 * @returns {Integer}
 */
jQueryObject.prototype.outerHeight = function(includeMargin) {};
/**
 * Display or hide the matched elements.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.toggle = function(duration, callback) {};
/**
 * Get the current computed width for the first element in the set of matched elements, including padding but not border.
 * @since 1.2
 * @returns {Integer}
 */
jQueryObject.prototype.innerWidth = function() {};
/**
 * Get the current computed height for the first element in the set of matched elements, including padding but not border.
 * @since 1.2
 * @returns {Integer}
 */
jQueryObject.prototype.innerHeight = function() {};
/**
 * Hide the matched elements.
 * @since 1.0
 * @returns {jQueryObject}
 */
jQueryObject.prototype.hide = function() {};
/**
 * Get the current computed width for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
jQueryObject.prototype.width = function() {};
/**
 * Set the CSS width of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
 * @returns {jQueryObject}
 */
jQueryObject.prototype.width = function(value) {};
/**
 * Get the current computed height for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
jQueryObject.prototype.height = function() {};
/**
 * Set the CSS height of every matched element.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
 * @returns {jQueryObject}
 */
jQueryObject.prototype.height = function(value) {};
/**
 * Display the matched elements.
 * @since 1.0
 * @returns {jQueryObject}
 */
jQueryObject.prototype.show = function() {};
/**
 * Get the current horizontal position of the scroll bar for the first element in the set of matched elements.
 * @since 1.2
 * @returns {Integer}
 */
jQueryObject.prototype.scrollLeft = function() {};
/**
 * Set the current horizontal position of the scroll bar for each of the set of matched elements.
 * @since 1.2
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.scrollLeft = function(value) {};
/**
 * Get the current vertical position of the scroll bar for the first element in the set of matched elements.
 * @since 1.2
 * @returns {Integer}
 */
jQueryObject.prototype.scrollTop = function() {};
/**
 * Set the current vertical position of the scroll bar for each of the set of matched elements.
 * @since 1.2
 * @param {Number} value An integer indicating the new position to set the scroll bar to.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.scrollTop = function(value) {};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
 * @since 1.2
 * @returns {Object}
 */
jQueryObject.prototype.position = function() {};
/**
 * Get the current coordinates of the first element in the set of matched elements, relative to the document.
 * @since 1.2
 * @returns {Object}
 */
jQueryObject.prototype.offset = function() {};
/**
 * Set the current coordinates of every element in the set of matched elements, relative to the document.
 * @since 1.4
 * @param {Object} coordinates An object containing the properties <code>top</code> and <code>left</code>, which are integers indicating the new top and left coordinates for the elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.offset = function(coordinates) {};
/**
 * Get the value of a style property for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property.
 * @returns {String}
 */
jQueryObject.prototype.css = function(propertyName) {};
/**
 * Set one or more CSS properties for the  set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property name.
 * @param {String} value A value to set for the property.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.css = function(propertyName, value) {};
/**
 * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
 * @since 1.4
 * @returns {jQueryObject}
 */
jQueryObject.prototype.unwrap = function() {};
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.4
 * @param {Selector} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.detach = function(selector) {};
/**
 * Create a deep copy of the set of matched elements.
 * @since 1.0
 * @param {Boolean} [withDataAndEvents=false] A Boolean indicating whether event handlers should be copied along with the elements. As of jQuery 1.4, element data will be copied as well.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.clone = function(withDataAndEvents) {};
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.0
 * @param {String} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.remove = function(selector) {};
/**
 * Remove all child nodes of the set of matched elements from the DOM.
 * @since 1.0
 * @returns {jQueryObject}
 */
jQueryObject.prototype.empty = function() {};
/**
 * Replace each target element with the set of matched elements.
 * @since 1.2
 * @param {Selector} target A selector expression indicating which element(s) to replace.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.replaceAll = function(target) {};
/**
 * Replace each element in the set of matched elements with the provided new content.
 * @since 1.2
 * @param {String} newContent The content to insert. May be an HTML string, DOM element, or jQuery object.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.replaceWith = function(newContent) {};
/**
 * Wrap an HTML structure around the content of each element in the set of matched elements.
 * @since 1.2
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.wrapInner = function(wrappingElement) {};
/**
 * Wrap an HTML structure around all elements in the set of matched elements.
 * @since 1.2
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.wrapAll = function(wrappingElement) {};
/**
 * Wrap an HTML structure around each element in the set of matched elements.
 * @since 1.0
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.wrap = function(wrappingElement) {};
/**
 * Insert every element in the set of matched elements before the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.insertBefore = function(target) {};
/**
 * Insert content, specified by the parameter, before each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert before each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.before = function(content, content) {};
/**
 * Insert every element in the set of matched elements after the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.insertAfter = function(target) {};
/**
 * Insert content, specified by the parameter, after each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert after each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.after = function(content, content) {};
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.prependTo = function(target) {};
/**
 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.prepend = function(content, content) {};
/**
 * Insert every element in the set of matched elements to the end of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.appendTo = function(target) {};
/**
 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.append = function(content, content) {};
/**
 * Get the current value of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String|Number|Array}
 */
jQueryObject.prototype.val = function() {};
/**
 * Set the value of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.val = function(value) {};
/**
 * Get the combined text contents of each element in the set of matched elements, including their descendants.
 * @since 1.0
 * @returns {String}
 */
jQueryObject.prototype.text = function() {};
/**
 * Set the content of each element in the set of matched elements to the specified text.
 * @since 1.0
 * @param {String} textString A string of text to set as the content of each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.text = function(textString) {};
/**
 * Get the HTML contents of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String}
 */
jQueryObject.prototype.html = function() {};
/**
 * Set the HTML contents of each element in the set of matched elements.
 * @since 1.0
 * @param {String} htmlString A string of HTML to set as the content of each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.html = function(htmlString) {};
/**
 * Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
 * @since 1.2
 * @param {Function} callback A function object that will be invoked for each element in the current set.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.map = function(callback) {};
/**
 * Check the current matched set of elements against a selector, element, or jQuery object and return <code>true</code> if at least one of these elements matches the given arguments.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {Boolean}
 */
jQueryObject.prototype.is = function(selector) {};
/**
 * Reduce the set of matched elements to the one at the specified index.
 * @since 1.1
 * @param {Integer} index An integer indicating the 0-based position of the element. 
 * @returns {jQueryObject}
 */
jQueryObject.prototype.eq = function(index) {};
/**
 * Reduce the set of matched elements to those that match the selector or pass the function's test. 
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match the current set of elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.filter = function(selector) {};
/**
 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
 * @since 1.0
 * @param {String} className One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.toggleClass = function(className) {};
/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * @since 1.0
 * @param {String} [className] One or more space-separated classes to be removed from the class attribute of each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.removeClass = function(className) {};
/**
 * Determine whether any of the matched elements are assigned the given class.
 * @since 1.2
 * @param {String} className The class name to search for.
 * @returns {Boolean}
 */
jQueryObject.prototype.hasClass = function(className) {};
/**
 * Remove an attribute from each element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.removeAttr = function(attributeName) {};
/**
 * Get the value of an attribute for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to get.
 * @returns {String}
 */
jQueryObject.prototype.attr = function(attributeName) {};
/**
 * Set one or more attributes for the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to set.
 * @param {String} value A value to set for the attribute.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.attr = function(attributeName, value) {};
/**
 * Adds the specified class(es) to each of the set of matched elements.
 * @since 1.0
 * @param {String} className One or more class names to be added to the class attribute of each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.addClass = function(className) {};
function jQueryEvent(){};
jQueryEvent = new Object();
/**
 * The element where the currently-called jQuery event handler was attached.
 * @type {Element}
 */
jQueryEvent.prototype.delegateTarget = null;
/**
 * The namespace specified when the event was triggered.
 * @type {String}
 */
jQueryEvent.prototype.namespace = "";
/**
 *   Returns whether event.stopImmediatePropagation() was ever called on this event object. 
 * @since 1.3
 * @returns {Boolean}
 */
jQueryEvent.prototype.isImmediatePropagationStopped = function() {};
/**
 *  Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.  
 * @since 1.3
 */
jQueryEvent.prototype.stopImmediatePropagation = function() {};
/**
 *   Returns whether <a>event.stopPropagation()</a> was ever called on this event object. 
 * @since 1.3
 * @returns {Boolean}
 */
jQueryEvent.prototype.isPropagationStopped = function() {};
/**
 * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.   
 * @since 1.0
 */
jQueryEvent.prototype.stopPropagation = function() {};
/**
 * Returns whether <a>event.preventDefault()</a> was ever called on this event object. 
 * @since 1.3
 * @returns {Boolean}
 */
jQueryEvent.prototype.isDefaultPrevented = function() {};
/**
 *  If this method is called, the default action of the event will not be triggered. 
 * @since 1.0
 * @returns {undefined}
 */
jQueryEvent.prototype.preventDefault = function() {};
/**
 * The difference in milliseconds between the time the browser created the event and January 1, 1970.
 * @type {Number}
 */
jQueryEvent.prototype.timeStamp = 1;
/**
 *  The last value returned by an event handler that was triggered by this event, unless the value was <code>undefined</code>.  
 * @type {Object}
 */
jQueryEvent.prototype.result = {};
/**
 *  For key or button events, this attribute indicates the specific button or key that was pressed.  
 * @type {Number}
 */
jQueryEvent.prototype.which = 1;
/**
 * The mouse position relative to the top edge of the document. 
 * @type {Number}
 */
jQueryEvent.prototype.pageY = 1;
/**
 * The mouse position relative to the left edge of the document. 
 * @type {Number}
 */
jQueryEvent.prototype.pageX = 1;
/**
 *  The current DOM element within the event bubbling phase.  
 * @type {Element}
 */
jQueryEvent.prototype.currentTarget = null;
/**
 *   The other DOM element involved in the event, if any. 
 * @type {Element}
 */
jQueryEvent.prototype.relatedTarget = null;
/**
 *  The optional data passed to jQuery.fn.bind when the current executing handler was bound.  
 * @type {Anything}
 */
jQueryEvent.prototype.data = {};
/**
 *  The DOM element that initiated the event.  
 * @type {Element}
 */
jQueryEvent.prototype.target = null;
/**
 *  Describes the nature of the event.  
 * @type {String}
 */
jQueryEvent.prototype.type = "";
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @returns {jQueryObject}
 */
function jQuery() {};
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @returns {jQueryObject}
 */
function $() {};
