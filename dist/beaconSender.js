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

	eval("'use strict';\n\nvar _beacon = __webpack_require__(1);\n\nvar _beacon2 = _interopRequireDefault(_beacon);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {\n  window.BeaconSender = new _beacon2.default();\n}\n\nmodule.exports = new _beacon2.default();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/main.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _typeof(obj) { return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; }\n\nvar BeaconSender = (function () {\n  function BeaconSender() {\n    _classCallCheck(this, BeaconSender);\n\n    var eventsQueue = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];\n\n    this.eventsQueue = eventsQueue;\n  }\n\n  _createClass(BeaconSender, [{\n    key: 'queue',\n    value: function queue(data) {\n      if (data instanceof Object && 'data' in data && 'topic' in data) {\n        this.eventsQueue.push({\n          topic: data['topic'],\n          data: data['data']\n        });\n      }\n    }\n  }, {\n    key: 'queueBatch',\n    value: function queueBatch(data) {\n      var self = this;\n      if (data instanceof Array && data.length > 0) {\n        data.map(function (element) {\n          self.queue(element);\n        });\n      }\n    }\n  }, {\n    key: 'send',\n    value: function send(data, method, endpoint) {\n      var headers = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];\n\n      if (typeof XMLHttpRequest !== 'undefined' && data) {\n        var _ret = (function () {\n          var xhr = new XMLHttpRequest();\n          xhr.open(method, endpoint);\n          headers.map(function (h) {\n            if (h[0] && h[1]) {\n              xhr.setRequestHeader(h[0], h[1]);\n            }\n          });\n          xhr.send(JSON.stringify(data));\n          return {\n            v: xhr\n          };\n        })();\n\n        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === \"object\") return _ret.v;\n      }\n    }\n  }, {\n    key: 'sendAll',\n    value: function sendAll(method, endpoint, headers) {\n      if (this.eventsQueue && this.eventsQueue.length > 0) {\n        var tempQueue = this.eventsQueue;\n        this.eventsQueue = [];\n        this.send(tempQueue, method, endpoint, headers);\n      }\n    }\n  }, {\n    key: 'start',\n    value: function start(method, endpoint, headers, interval) {\n      var self = this;\n      if (typeof window !== 'undefined') {\n        return window.setInterval(function () {\n          self.sendAll(method, endpoint, headers);\n        }, interval);\n      }\n    }\n  }]);\n\n  return BeaconSender;\n})();\n\nexports.default = BeaconSender;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/beacon.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/beacon.js?");

/***/ }
/******/ ]);