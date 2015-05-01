/**
 * @module Remove event listener
 * @param  {DOM Element} el - dom element to attach the event to
 * @param  {String} eventName - name of the event to be removed
 * @param  {function} handler - function to be fired when the event is triggered
 */
module.exports = function(el, eventName, handler) {
    // check to see if the browser supports removeEventListener
    if (el.removeEventListener) {
        // run removeEventListener
        el.removeEventListener(eventName, handler);
    } else {
        // otherwuse use detachEvent
        el.detachEvent('on' + eventName, handler);
    }
};