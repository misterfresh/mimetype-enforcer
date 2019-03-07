var matchJS = new chrome.declarativeWebRequest.RequestMatcher({
    url: { pathSuffix: ".js"} });

var matchCSS = new chrome.declarativeWebRequest.RequestMatcher({
    url: { pathSuffix: ".css"} });

var removeMimeType = new chrome.declarativeWebRequest.RemoveResponseHeader({
    name: "Content-Type"
})
var setJSMimeType = new chrome.declarativeWebRequest.AddResponseHeader({
    name: "Content-Type",
    value: "application/javascript"
})
var setCSSMimeType = new chrome.declarativeWebRequest.AddResponseHeader({
    name: "Content-Type",
    value: "text/css"
})

var handleJS = {
    id: "handle js",  // optional, will be generated if not set.
    priority: 100,  // optional, defaults to 100.
    conditions: [ matchJS ],
    actions: [ removeMimeType, setJSMimeType ]
};

var handleCSS = {
    id: "handle css",  // optional, will be generated if not set.
    priority: 110,  // optional, defaults to 100.
    conditions: [ matchCSS ],
    actions: [ removeMimeType, setCSSMimeType ]
};

chrome.declarativeWebRequest.onRequest.addRules([handleJS, handleCSS]);
