/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _beacon = __webpack_require__(1);\n\nvar _beacon2 = _interopRequireDefault(_beacon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {\n  window.BeaconSender = _beacon2.default;\n}\n\nmodule.exports = _beacon2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/main.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar eventsQueue = [];\nvar config = {\n  queue: queue,\n  send: send,\n  start: start\n};\n\nfunction queue(topic, data) {\n  eventsQueue.push({\n    topic: topic,\n    data: data\n  });\n}\n\nfunction send(data, method, endpoint) {\n  var headers = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];\n\n  if (typeof XMLHttpRequest !== 'undefined' && 'data' in data && 'topic' in data) {\n    (function () {\n      var xhr = new XMLHttpRequest();\n      xhr.open(method, endpoint);\n      headers.map(function (h) {\n        if (h[0] && h[1]) {\n          xhr.setRequestHeader(h[0], h[1]);\n        }\n      });\n      xhr.send(JSON.stringify(data));\n    })();\n  }\n}\n\nfunction start(method, endpoint, headers, interval) {\n  if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {\n    window.setInterval(function () {\n      if (eventsQueue && eventsQueue.length > 0) {\n        var tempQueue = eventsQueue;\n        eventsQueue = [];\n        tempQueue.map(function (element) {\n          send(element, method, endpoint, headers);\n        });\n      }\n    }, interval);\n  }\n}\n\nmodule.exports = config;\nwindow.BeaconSender = config;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/beacon.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/beacon.js?");

/***/ }
/******/ ]);