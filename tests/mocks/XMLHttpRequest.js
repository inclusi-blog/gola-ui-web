function NOOP() {}

function XMLHttpRequest() {}

XMLHttpRequest.prototype.abort = NOOP;
XMLHttpRequest.prototype.getAllResponseHeaders = NOOP;
XMLHttpRequest.prototype.getResponseHeader = NOOP;
XMLHttpRequest.prototype.open = NOOP;
XMLHttpRequest.prototype.overrideMimeType = NOOP;
XMLHttpRequest.prototype.send = NOOP;
XMLHttpRequest.prototype.setRequestHeader = NOOP;

global.XMLHttpRequest = XMLHttpRequest;
