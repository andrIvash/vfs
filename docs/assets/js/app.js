webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	angular.module('vfs', []);
	
	__webpack_require__(1);
	__webpack_require__(25);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(113);
	__webpack_require__(115);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(24);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VfsComponent = function () {
	  (0, _createClass3.default)(VfsComponent, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['vfs'];
	    }
	  }]);
	
	  function VfsComponent(vfs) {
	    (0, _classCallCheck3.default)(this, VfsComponent);
	
	    this.vfs = vfs;
	    this.vfs.assignVfsComponent(this);
	    this.refreshFolder();
	  }
	
	  (0, _createClass3.default)(VfsComponent, [{
	    key: 'folderChanges',
	    value: function folderChanges() {
	      this.refreshFolder();
	    }
	  }, {
	    key: 'refreshFolder',
	    value: function refreshFolder() {
	      this.node = this.vfs.openedNode;
	    }
	  }]);
	  return VfsComponent;
	}();
	
	var templateUrl = __webpack_require__(23);
	angular.module('vfs').component('vfs', {
	  templateUrl: templateUrl,
	  controller: VfsComponent
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(5);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	var $Object = __webpack_require__(10).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(18), 'Object', {defineProperty: __webpack_require__(14).f});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(10)
	  , ctx       = __webpack_require__(11)
	  , hide      = __webpack_require__(13)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(12);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(14)
	  , createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , toPrimitive    = __webpack_require__(21)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function(){
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(16)
	  , document = __webpack_require__(9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	var path = 'vfs/vfs.template.html';
	var html = "<div class=\"vfs\">\n\n  <aside class=\"vfs_side\">\n    <vfs-explorer-nav></vfs-explorer-nav>\n  </aside>\n\n  <vfs-node-explorer vfs-node=\"$ctrl.node\"\n                     class=\"vfs_base\">\n  </vfs-node-explorer>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VfsService = function () {
	  (0, _createClass3.default)(VfsService, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['vfs$builder', 'vfs$designer'];
	    }
	  }]);
	
	  function VfsService(vfs$builder, vfs$designer) {
	    (0, _classCallCheck3.default)(this, VfsService);
	
	    this.vfs$designer = vfs$designer;
	    this.vfs$builder = vfs$builder;
	    this.createRoot();
	    this.openNode(this.root);
	  }
	
	  (0, _createClass3.default)(VfsService, [{
	    key: 'isOpen',
	    value: function isOpen(node) {
	      return this.openedNode === node;
	    }
	  }, {
	    key: 'createRoot',
	    value: function createRoot() {
	      var node = this.vfs$builder.createRoot();
	      this.vfs$builder.wrapNode(node);
	      this.root = node;
	    }
	  }, {
	    key: 'createFolder',
	    value: function createFolder() {
	      var folderTitle = prompt('Type a folder name');
	      folderTitle = (folderTitle || '').trim();
	
	      if (!folderTitle) {
	        return;
	      }
	
	      var node = this.vfs$builder.createFolder();
	      this.vfs$builder.wrapNode(node);
	      this.vfs$builder.injectParent(node, this.openedNode);
	      node.title = folderTitle;
	
	      this.openedNode.children.push(node);
	    }
	  }, {
	    key: 'createFile',
	    value: function createFile() {
	      var fileTitle = prompt('Type a file name');
	      fileTitle = (fileTitle || '').trim();
	
	      if (!fileTitle) {
	        return;
	      }
	
	      var node = this.vfs$builder.createFile();
	      this.vfs$builder.wrapNode(node);
	      this.vfs$builder.injectParent(node, this.openedNode);
	      node.title = fileTitle;
	
	      this.openedNode.children.push(node);
	    }
	  }, {
	    key: 'deleteFolder',
	    value: function deleteFolder() {
	      var hasConfirmed = confirm('Are you sure you want to delete this folder?');
	
	      if (!hasConfirmed) {
	        return;
	      }
	
	      var vfs$ = this.openedNode.vfs$();
	      var parent = vfs$.parent;
	      var index = parent.children.indexOf(this.openedNode);
	
	      if (index === -1) {
	        return;
	      }
	
	      this.vfs$builder.unwrapNode(this.openedNode);
	      parent.children.splice(index, 1);
	
	      this.openNode(parent);
	    }
	  }, {
	    key: 'deleteFile',
	    value: function deleteFile() {
	      var hasConfirmed = confirm('Are you sure you want to delete this file?');
	
	      if (!hasConfirmed) {
	        return;
	      }
	
	      var vfs$ = this.openedNode.vfs$();
	      var parent = vfs$.parent;
	      var index = parent.children.indexOf(this.openedNode);
	
	      if (index === -1) {
	        return;
	      }
	
	      this.vfs$builder.unwrapNode(this.openedNode);
	      parent.children.splice(index, 1);
	
	      this.openNode(parent);
	    }
	  }, {
	    key: 'openNode',
	    value: function openNode(node) {
	      if (!node) {
	        return;
	      }
	
	      this.openedNode = node;
	
	      if (this.vfsComponent) {
	        this.vfsComponent.folderChanges();
	      }
	    }
	  }, {
	    key: 'assignVfsComponent',
	    value: function assignVfsComponent(component) {
	      this.vfsComponent = component;
	    }
	  }]);
	  return VfsService;
	}();
	
	var app = angular.module('vfs');
	app.service('vfs', VfsService);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(26);
	__webpack_require__(29);
	__webpack_require__(32);
	__webpack_require__(35);
	__webpack_require__(36);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(27);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RootExplorer = function () {
	  (0, _createClass3.default)(RootExplorer, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['$scope', '$filter', 'vfs', 'vfs$designer'];
	    }
	  }]);
	
	  function RootExplorer($scope, $filter, vfs, vfs$designer) {
	    (0, _classCallCheck3.default)(this, RootExplorer);
	
	    this.$scope = $scope;
	    this.vfs = vfs;
	    this.$filter = $filter;
	    this.vfs$designer = vfs$designer;
	  }
	
	  (0, _createClass3.default)(RootExplorer, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.explorerCtrl.assignNodeExplorer(this);
	    }
	  }, {
	    key: 'readNode',
	    value: function readNode() {
	      var node = {};
	      var vfsNode = this.vfsNode;
	
	      if (!vfsNode) {
	        return;
	      }
	
	      node.title = vfsNode.title;
	      this.node = node;
	    }
	  }, {
	    key: 'onCreateFile',
	    value: function onCreateFile(e) {
	      e.preventDefault();
	      this.vfs.createFile();
	    }
	  }, {
	    key: 'onCreateFolder',
	    value: function onCreateFolder(e) {
	      e.preventDefault();
	      this.vfs.createFolder();
	    }
	  }, {
	    key: 'onDeleteFolder',
	    value: function onDeleteFolder(e) {
	      e.preventDefault();
	      this.vfs.deleteFolder();
	    }
	  }, {
	    key: 'countFolders',
	    get: function get() {
	      var _this = this;
	
	      if (!this.vfsNode) {
	        return;
	      }
	
	      var children = this.vfsNode.children || [];
	      var files = children.filter(function (p) {
	        return _this.vfs$designer.isFolder(p);
	      });
	      return files.length;
	    }
	  }, {
	    key: 'countFiles',
	    get: function get() {
	      var _this2 = this;
	
	      if (!this.vfsNode) {
	        return;
	      }
	
	      var children = this.vfsNode.children || [];
	      var files = children.filter(function (p) {
	        return _this2.vfs$designer.isFile(p);
	      });
	      return files.length;
	    }
	  }, {
	    key: 'folderSize',
	    get: function get() {
	      var size = this.vfs$designer.folderSize(this.vfsNode);
	      size = this.$filter('formatSizeUnits')(size);
	      return size;
	    }
	  }]);
	  return RootExplorer;
	}();
	
	var templateUrl = __webpack_require__(28);
	angular.module('vfs').component('vfsRootExplorer', {
	  controller: RootExplorer,
	  templateUrl: templateUrl,
	  require: {
	    explorerCtrl: '^vfsNodeExplorer'
	  },
	  bindings: {
	    vfsNode: '<'
	  }
	});

/***/ },
/* 28 */
/***/ function(module, exports) {

	var path = 'node/root/explorer.template.html';
	var html = "<div class=\"explorer\">\n  <header class=\"explorer_header\">\n    <div class=\"explorer_header-base\">\n      <h2 class=\"explorer_header-title\">\n        <span ng-bind=\"$ctrl.node.title\"\n              title=\"{{$ctrl.node.title}}\"></span>\n      </h2>\n    </div>\n  </header>\n\n  <div class=\"explorer_meta\">\n    <span class=\"explorer_meta-item\" ng-bind=\"$ctrl.folderSize\"></span>\n    <span class=\"explorer_meta-item\">folders: <span ng-bind=\"$ctrl.countFolders\"></span></span>\n    <span class=\"explorer_meta-item\">files: <span ng-bind=\"$ctrl.countFiles\"></span></span>\n  </div>\n\n  <div class=\"explorer_content\">\n    <ul class=\"explorer_tools\">\n      <li class=\"explorer_tools-item\">\n        <a href=\"#\"\n           class=\"explorer_tools-link\"\n           ng-click=\"$ctrl.onCreateFolder($event)\">\n          <i class=\"icon icon-folder-m\"></i>\n          <span class=\"explorer_tools-text\">Create folder</span>\n        </a>\n      </li>\n      <li class=\"explorer_tools-item\">\n        <a href=\"#\"\n           class=\"explorer_tools-link\"\n           ng-click=\"$ctrl.onCreateFile($event)\">\n          <i class=\"icon icon-file-m\"></i>\n          <span class=\"explorer_tools-text\">Create file</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(30);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FileExplorer = function () {
	  (0, _createClass3.default)(FileExplorer, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['$scope', '$filter', 'vfs', 'vfs$designer'];
	    }
	  }]);
	
	  function FileExplorer($scope, $filter, vfs, vfs$designer) {
	    (0, _classCallCheck3.default)(this, FileExplorer);
	
	    this.$scope = $scope;
	    this.$filter = $filter;
	    this.vfs = vfs;
	    this.vfs$designer = vfs$designer;
	  }
	
	  (0, _createClass3.default)(FileExplorer, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.explorerCtrl.assignNodeExplorer(this);
	    }
	  }, {
	    key: 'readNode',
	    value: function readNode() {
	      var node = {};
	      var vfsNode = this.vfsNode;
	
	      if (!vfsNode) {
	        return;
	      }
	
	      node.title = vfsNode.title;
	      node.content = vfsNode.content;
	      this.node = node;
	    }
	  }, {
	    key: 'onDeleteFile',
	    value: function onDeleteFile(e) {
	      e.preventDefault();
	      this.vfs.deleteFile();
	    }
	  }, {
	    key: 'onSaveFile',
	    value: function onSaveFile(e) {
	      e.preventDefault();
	      this.vfsNode.content = this.node.content;
	    }
	  }, {
	    key: 'fileSize',
	    get: function get() {
	      if (!this.vfsNode) {
	        return;
	      }
	
	      var size = this.vfs$designer.fileSize(this.vfsNode);
	      size = this.$filter('formatSizeUnits')(size);
	      return size;
	    }
	  }]);
	  return FileExplorer;
	}();
	
	var templateUrl = __webpack_require__(31);
	angular.module('vfs').component('vfsFileExplorer', {
	  controller: FileExplorer,
	  templateUrl: templateUrl,
	  require: {
	    explorerCtrl: '^vfsNodeExplorer'
	  },
	  bindings: {
	    vfsNode: '<'
	  }
	});

/***/ },
/* 31 */
/***/ function(module, exports) {

	var path = 'node/file/explorer.template.html';
	var html = "<div>\n  <header class=\"explorer_header\">\n    <div class=\"explorer_header-base\">\n      <h2 ng-bind=\"$ctrl.node.title\"\n          class=\"explorer_header-title\"></h2>\n    </div>\n    <div class=\"explorer_header-side\">\n      <a href=\"#\"\n         title=\"Save file\"\n         class=\"explorer_header-btn\"\n         ng-click=\"$ctrl.onSaveFile($event)\">\n        <i class=\"icon icon-save\"></i>\n      </a>\n      <a href=\"#\"\n         title=\"Delete file\"\n         class=\"explorer_header-btn\"\n         ng-click=\"$ctrl.onDeleteFile($event)\">\n        <i class=\"icon icon-delete\"></i>\n      </a>\n    </div>\n  </header>\n\n  <div class=\"explorer_meta\">\n    <span class=\"explorer_meta-item\" ng-bind=\"$ctrl.fileSize\"></span>\n  </div>\n\n  <div class=\"explorer_content\">\n    <textarea class=\"editor\"\n              ng-model=\"$ctrl.node.content\"></textarea>\n  </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(33);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FolderExplorer = function () {
	  (0, _createClass3.default)(FolderExplorer, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['$scope', '$filter', 'vfs', 'vfs$designer'];
	    }
	  }]);
	
	  function FolderExplorer($scope, $filter, vfs, vfs$designer) {
	    (0, _classCallCheck3.default)(this, FolderExplorer);
	
	    this.$scope = $scope;
	    this.$filter = $filter;
	    this.vfs$designer = vfs$designer;
	    this.vfs = vfs;
	  }
	
	  (0, _createClass3.default)(FolderExplorer, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.explorerCtrl.assignNodeExplorer(this);
	    }
	  }, {
	    key: 'readNode',
	    value: function readNode() {
	      var node = {};
	      var vfsNode = this.vfsNode;
	
	      if (!vfsNode) {
	        return;
	      }
	
	      node.title = vfsNode.title;
	      this.node = node;
	    }
	  }, {
	    key: 'onCreateFile',
	    value: function onCreateFile(e) {
	      e.preventDefault();
	      this.vfs.createFile();
	    }
	  }, {
	    key: 'onCreateFolder',
	    value: function onCreateFolder(e) {
	      e.preventDefault();
	      this.vfs.createFolder();
	    }
	  }, {
	    key: 'onDeleteFolder',
	    value: function onDeleteFolder(e) {
	      e.preventDefault();
	      this.vfs.deleteFolder();
	    }
	  }, {
	    key: 'countFolders',
	    get: function get() {
	      var _this = this;
	
	      if (!this.vfsNode) {
	        return;
	      }
	
	      var children = this.vfsNode.children || [];
	      var folders = children.filter(function (p) {
	        return _this.vfs$designer.isFolder(p);
	      });
	      return folders.length;
	    }
	  }, {
	    key: 'countFiles',
	    get: function get() {
	      var _this2 = this;
	
	      if (!this.vfsNode) {
	        return;
	      }
	
	      var children = this.vfsNode.children || [];
	      var files = children.filter(function (p) {
	        return _this2.vfs$designer.isFile(p);
	      });
	      return files.length;
	    }
	  }, {
	    key: 'folderSize',
	    get: function get() {
	      var size = this.vfs$designer.folderSize(this.vfsNode);
	      size = this.$filter('formatSizeUnits')(size);
	      return size;
	    }
	  }]);
	  return FolderExplorer;
	}();
	
	var templateUrl = __webpack_require__(34);
	angular.module('vfs').component('vfsFolderExplorer', {
	  controller: FolderExplorer,
	  templateUrl: templateUrl,
	  require: {
	    explorerCtrl: '^vfsNodeExplorer'
	  },
	  bindings: {
	    vfsNode: '<'
	  }
	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	var path = 'node/folder/explorer.template.html';
	var html = "<div class=\"explorer\">\n  <header class=\"explorer_header\">\n    <div class=\"explorer_header-base\">\n      <h2 ng-bind=\"$ctrl.node.title\"\n          class=\"explorer_header-title\"></h2>\n    </div>\n    <div class=\"explorer_header-side\">\n      <a href=\"#\"\n         title=\"Delete folder\"\n         class=\"explorer_header-btn\"\n         ng-click=\"$ctrl.onDeleteFolder($event)\">\n        <i class=\"icon icon-delete\"></i>\n      </a>\n    </div>\n  </header>\n\n  <div class=\"explorer_meta\">\n    <span class=\"explorer_meta-item\" ng-bind=\"$ctrl.folderSize\"></span>\n    <span class=\"explorer_meta-item\">folders: <span ng-bind=\"$ctrl.countFolders\"></span></span>\n    <span class=\"explorer_meta-item\">files: <span ng-bind=\"$ctrl.countFiles\"></span></span>\n  </div>\n\n  <div class=\"explorer_content\">\n    <ul class=\"explorer_tools\">\n      <li class=\"explorer_tools-item\">\n        <a href=\"#\"\n           class=\"explorer_tools-link\"\n           ng-click=\"$ctrl.onCreateFolder($event)\">\n          <i class=\"icon icon-folder-m\"></i>\n          <span class=\"explorer_tools-text\">Create folder</span>\n        </a>\n      </li>\n      <li class=\"explorer_tools-item\">\n        <a href=\"#\"\n           class=\"explorer_tools-link\"\n           ng-click=\"$ctrl.onCreateFile($event)\">\n          <i class=\"icon icon-file-m\"></i>\n          <span class=\"explorer_tools-text\">Create file</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NodeDesigner = function () {
	  (0, _createClass3.default)(NodeDesigner, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['spec', 'vfs$designer'];
	    }
	  }]);
	
	  function NodeDesigner(spec, vfs$designer) {
	    (0, _classCallCheck3.default)(this, NodeDesigner);
	
	    this.spec = spec;
	    this.vfs$designer = vfs$designer;
	  }
	
	  (0, _createClass3.default)(NodeDesigner, [{
	    key: 'createNode',
	    value: function createNode() {}
	  }, {
	    key: 'explorerName',
	    value: function explorerName() {}
	  }, {
	    key: 'icon',
	    value: function icon() {}
	  }]);
	  return NodeDesigner;
	}();
	
	module.exports = NodeDesigner;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __specs = [];
	var __designers = {
	  'vfs.spec.root.designer': __webpack_require__(37),
	  'vfs.spec.folder.designer': __webpack_require__(104),
	  'vfs.spec.file.designer': __webpack_require__(105)
	};
	
	var app = angular.module('vfs');
	app.provider('vfs$designer', DesignerProvider);
	function DesignerProvider() {
	  this.$get = DesignerFactory;
	  this.spec = function (spec) {
	    __specs.push(spec);
	  };
	}
	
	DesignerFactory.$inject = ['$injector'];
	function DesignerFactory($injector) {
	  return $injector.instantiate(DesignerService);
	}
	
	var DesignerService = function () {
	  (0, _createClass3.default)(DesignerService, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['$injector'];
	    }
	  }]);
	
	  function DesignerService($injector) {
	    (0, _classCallCheck3.default)(this, DesignerService);
	
	    this.$injector = $injector;
	    this.initSpecs();
	  }
	
	  (0, _createClass3.default)(DesignerService, [{
	    key: 'initSpecs',
	    value: function initSpecs() {
	      var _this = this;
	
	      var specMap = {};
	
	      __specs.forEach(function (spec) {
	        specMap[spec.id] = spec;
	        _this.injectDesigner(spec);
	      });
	
	      this._specs = specMap;
	    }
	  }, {
	    key: 'injectDesigner',
	    value: function injectDesigner(spec) {
	      var designerId = spec.designer;
	      var designerClass = __designers[designerId];
	
	      if (!(designerId && designerClass)) {
	        return angular.noop;
	      }
	
	      var options = {
	        spec: spec,
	        vfs$designer: this
	      };
	
	      var designer = this.$injector.instantiate(designerClass, options);
	      spec.vfs$designer = function () {
	        return designer;
	      };
	    }
	  }, {
	    key: 'getSpec',
	    value: function getSpec(specId) {
	      return this._specs[specId];
	    }
	  }, {
	    key: 'getDesigner',
	    value: function getDesigner(specId) {
	      var spec = this.getSpec(specId);
	      var designer = spec.vfs$designer();
	      return designer;
	    }
	  }, {
	    key: 'designerRoot',
	    value: function designerRoot() {
	      var specId = 'root';
	      var designer = this.getDesigner(specId);
	      return designer;
	    }
	  }, {
	    key: 'designerFolder',
	    value: function designerFolder() {
	      var specId = 'folder';
	      var designer = this.getDesigner(specId);
	      return designer;
	    }
	  }, {
	    key: 'designerFile',
	    value: function designerFile() {
	      var specId = 'file';
	      var designer = this.getDesigner(specId);
	      return designer;
	    }
	  }, {
	    key: 'isFolder',
	    value: function isFolder(node) {
	      return node && node.specId === 'folder' || node.specId === 'root';
	    }
	  }, {
	    key: 'isFile',
	    value: function isFile(node) {
	      return node && node.specId === 'file';
	    }
	  }, {
	    key: 'fileSize',
	    value: function fileSize(file) {
	      var empty = 0;
	
	      if (!this.isFile(file)) {
	        return empty;
	      }
	
	      var size = file.content.length || empty;
	      return size;
	    }
	  }, {
	    key: 'folderSize',
	    value: function folderSize(folder) {
	      var _this2 = this;
	
	      var empty = 0;
	
	      if (!this.isFolder(folder)) {
	        return empty;
	      }
	
	      var size = folder.children.reduce(function (size, node) {
	        if (_this2.isFolder(node)) {
	          size += _this2.folderSize(node);
	        } else {
	          size += _this2.fileSize(node);
	        }
	
	        return size;
	      }, empty);
	
	      return size;
	    }
	  }]);
	  return DesignerService;
	}();

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(38);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(49);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(96);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var spec = {
	  id: 'root',
	  title: 'Root',
	  designer: 'vfs.spec.root.designer'
	};
	
	var app = angular.module('vfs');
	app.config(RootDesignerConfig);
	
	RootDesignerConfig.$inject = ['vfs$designerProvider'];
	function RootDesignerConfig(vfs$designer) {
	  vfs$designer.spec(spec);
	}
	
	var baseClass = __webpack_require__(35);
	
	var RootDesigner = function (_baseClass) {
	  (0, _inherits3.default)(RootDesigner, _baseClass);
	
	  function RootDesigner() {
	    (0, _classCallCheck3.default)(this, RootDesigner);
	    return (0, _possibleConstructorReturn3.default)(this, (RootDesigner.__proto__ || (0, _getPrototypeOf2.default)(RootDesigner)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(RootDesigner, [{
	    key: 'createNode',
	    value: function createNode() {
	      var node = {
	        specId: spec.id,
	        title: spec.title,
	        children: []
	      };
	
	      return node;
	    }
	  }, {
	    key: 'explorerName',
	    value: function explorerName() {
	      return 'vfs-root-explorer';
	    }
	  }, {
	    key: 'icon',
	    value: function icon() {
	      return 'folder';
	    }
	  }]);
	  return RootDesigner;
	}(baseClass);
	
	module.exports = RootDesigner;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(39), __esModule: true };

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(40);
	module.exports = __webpack_require__(10).Object.getPrototypeOf;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(41)
	  , $getPrototypeOf = __webpack_require__(43);
	
	__webpack_require__(48)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(42);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(44)
	  , toObject    = __webpack_require__(41)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(46)('keys')
	  , uid    = __webpack_require__(47);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(9)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(10)
	  , fails   = __webpack_require__(19);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(50);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(51);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(80);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	__webpack_require__(75);
	module.exports = __webpack_require__(79).f('iterator');

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(54)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(56)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(55)
	  , defined   = __webpack_require__(42);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(57)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(58)
	  , hide           = __webpack_require__(13)
	  , has            = __webpack_require__(44)
	  , Iterators      = __webpack_require__(59)
	  , $iterCreate    = __webpack_require__(60)
	  , setToStringTag = __webpack_require__(73)
	  , getPrototypeOf = __webpack_require__(43)
	  , ITERATOR       = __webpack_require__(74)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(61)
	  , descriptor     = __webpack_require__(22)
	  , setToStringTag = __webpack_require__(73)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(74)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(15)
	  , dPs         = __webpack_require__(62)
	  , enumBugKeys = __webpack_require__(71)
	  , IE_PROTO    = __webpack_require__(45)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(20)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(72).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(14)
	  , anObject = __webpack_require__(15)
	  , getKeys  = __webpack_require__(63);
	
	module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(64)
	  , enumBugKeys = __webpack_require__(71);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(44)
	  , toIObject    = __webpack_require__(65)
	  , arrayIndexOf = __webpack_require__(68)(false)
	  , IE_PROTO     = __webpack_require__(45)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(66)
	  , defined = __webpack_require__(42);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(67);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(65)
	  , toLength  = __webpack_require__(69)
	  , toIndex   = __webpack_require__(70);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(55)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(55)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(14).f
	  , has = __webpack_require__(44)
	  , TAG = __webpack_require__(74)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(46)('wks')
	  , uid        = __webpack_require__(47)
	  , Symbol     = __webpack_require__(9).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	var global        = __webpack_require__(9)
	  , hide          = __webpack_require__(13)
	  , Iterators     = __webpack_require__(59)
	  , TO_STRING_TAG = __webpack_require__(74)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(77)
	  , step             = __webpack_require__(78)
	  , Iterators        = __webpack_require__(59)
	  , toIObject        = __webpack_require__(65);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(56)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(74);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(82);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	module.exports = __webpack_require__(10).Symbol;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(9)
	  , has            = __webpack_require__(44)
	  , DESCRIPTORS    = __webpack_require__(18)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(58)
	  , META           = __webpack_require__(83).KEY
	  , $fails         = __webpack_require__(19)
	  , shared         = __webpack_require__(46)
	  , setToStringTag = __webpack_require__(73)
	  , uid            = __webpack_require__(47)
	  , wks            = __webpack_require__(74)
	  , wksExt         = __webpack_require__(79)
	  , wksDefine      = __webpack_require__(84)
	  , keyOf          = __webpack_require__(85)
	  , enumKeys       = __webpack_require__(86)
	  , isArray        = __webpack_require__(89)
	  , anObject       = __webpack_require__(15)
	  , toIObject      = __webpack_require__(65)
	  , toPrimitive    = __webpack_require__(21)
	  , createDesc     = __webpack_require__(22)
	  , _create        = __webpack_require__(61)
	  , gOPNExt        = __webpack_require__(90)
	  , $GOPD          = __webpack_require__(92)
	  , $DP            = __webpack_require__(14)
	  , $keys          = __webpack_require__(63)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(91).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(88).f  = $propertyIsEnumerable;
	  __webpack_require__(87).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(57)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(47)('meta')
	  , isObject = __webpack_require__(16)
	  , has      = __webpack_require__(44)
	  , setDesc  = __webpack_require__(14).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(19)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(9)
	  , core           = __webpack_require__(10)
	  , LIBRARY        = __webpack_require__(57)
	  , wksExt         = __webpack_require__(79)
	  , defineProperty = __webpack_require__(14).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(63)
	  , toIObject = __webpack_require__(65);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(63)
	  , gOPS    = __webpack_require__(87)
	  , pIE     = __webpack_require__(88);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 88 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(67);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(65)
	  , gOPN      = __webpack_require__(91).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(64)
	  , hiddenKeys = __webpack_require__(71).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(88)
	  , createDesc     = __webpack_require__(22)
	  , toIObject      = __webpack_require__(65)
	  , toPrimitive    = __webpack_require__(21)
	  , has            = __webpack_require__(44)
	  , IE8_DOM_DEFINE = __webpack_require__(17)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(18) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 93 */
/***/ function(module, exports) {



/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84)('asyncIterator');

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(84)('observable');

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(97);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(101);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(50);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(99);
	module.exports = __webpack_require__(10).Object.setPrototypeOf;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(100).set});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(16)
	  , anObject = __webpack_require__(15);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(11)(Function.call, __webpack_require__(92).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(103);
	var $Object = __webpack_require__(10).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(61)});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(38);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(49);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(96);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var spec = {
	  id: 'folder',
	  title: 'Folder',
	  designer: 'vfs.spec.folder.designer'
	};
	
	var app = angular.module('vfs');
	app.config(FileDesignerConfig);
	
	FileDesignerConfig.$inject = ['vfs$designerProvider'];
	function FileDesignerConfig(vfs$designer) {
	  vfs$designer.spec(spec);
	}
	
	var baseClass = __webpack_require__(35);
	
	var FileDesigner = function (_baseClass) {
	  (0, _inherits3.default)(FileDesigner, _baseClass);
	
	  function FileDesigner() {
	    (0, _classCallCheck3.default)(this, FileDesigner);
	    return (0, _possibleConstructorReturn3.default)(this, (FileDesigner.__proto__ || (0, _getPrototypeOf2.default)(FileDesigner)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(FileDesigner, [{
	    key: 'createNode',
	    value: function createNode() {
	      var node = {
	        specId: spec.id,
	        title: spec.title,
	        children: []
	      };
	
	      return node;
	    }
	  }, {
	    key: 'explorerName',
	    value: function explorerName() {
	      return 'vfs-folder-explorer';
	    }
	  }, {
	    key: 'icon',
	    value: function icon() {
	      return 'folder';
	    }
	  }]);
	  return FileDesigner;
	}(baseClass);
	
	module.exports = FileDesigner;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(38);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(49);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(96);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var spec = {
	  id: 'file',
	  title: 'File',
	  designer: 'vfs.spec.file.designer'
	};
	
	var app = angular.module('vfs');
	app.config(FolderDesignerConfig);
	
	FolderDesignerConfig.$inject = ['vfs$designerProvider'];
	function FolderDesignerConfig(vfs$designer) {
	  vfs$designer.spec(spec);
	}
	
	var baseClass = __webpack_require__(35);
	
	var FolderDesigner = function (_baseClass) {
	  (0, _inherits3.default)(FolderDesigner, _baseClass);
	
	  function FolderDesigner() {
	    (0, _classCallCheck3.default)(this, FolderDesigner);
	    return (0, _possibleConstructorReturn3.default)(this, (FolderDesigner.__proto__ || (0, _getPrototypeOf2.default)(FolderDesigner)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(FolderDesigner, [{
	    key: 'createNode',
	    value: function createNode() {
	      var node = {
	        specId: spec.id,
	        title: spec.title,
	        content: ''
	      };
	
	      return node;
	    }
	  }, {
	    key: 'explorerName',
	    value: function explorerName() {
	      return 'vfs-file-explorer';
	    }
	  }, {
	    key: 'icon',
	    value: function icon() {
	      return 'file';
	    }
	  }]);
	  return FolderDesigner;
	}(baseClass);
	
	module.exports = FolderDesigner;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BuilderService = function () {
	  (0, _createClass3.default)(BuilderService, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['vfs$designer'];
	    }
	  }]);
	
	  function BuilderService(vfs$designer) {
	    (0, _classCallCheck3.default)(this, BuilderService);
	
	    this.vfs$designer = vfs$designer;
	  }
	
	  (0, _createClass3.default)(BuilderService, [{
	    key: 'wrapNode',
	    value: function wrapNode(node) {
	      this.injectBuilder(node);
	      var specId = node.specId;
	      var designer = this.vfs$designer.getDesigner(specId);
	      node.vfs$().designer = designer;
	    }
	  }, {
	    key: 'unwrapNode',
	    value: function unwrapNode(node) {
	      delete node.vfs$;
	    }
	  }, {
	    key: 'injectBuilder',
	    value: function injectBuilder(node) {
	      var item = {
	        builder: this
	      };
	
	      node.vfs$ = function () {
	        return item;
	      };
	    }
	  }, {
	    key: 'injectParent',
	    value: function injectParent(node, parent) {
	      node.vfs$().parent = parent;
	    }
	  }, {
	    key: 'createRoot',
	    value: function createRoot() {
	      var designer = this.vfs$designer.designerRoot();
	      var node = designer.createNode();
	      return node;
	    }
	  }, {
	    key: 'createFolder',
	    value: function createFolder() {
	      var designer = this.vfs$designer.designerFolder();
	      var node = designer.createNode();
	      return node;
	    }
	  }, {
	    key: 'createFile',
	    value: function createFile() {
	      var designer = this.vfs$designer.designerFile();
	      var node = designer.createNode();
	      return node;
	    }
	  }]);
	  return BuilderService;
	}();
	
	var app = angular.module('vfs');
	app.service('vfs$builder', BuilderService);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(108);
	__webpack_require__(110);

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VfsFolderThreeComponent = function () {
	  (0, _createClass3.default)(VfsFolderThreeComponent, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['vfs'];
	    }
	  }]);
	
	  function VfsFolderThreeComponent(vfs) {
	    (0, _classCallCheck3.default)(this, VfsFolderThreeComponent);
	
	    this.root = vfs.root;
	  }
	
	  return VfsFolderThreeComponent;
	}();
	
	var templateUrl = __webpack_require__(109);
	angular.module('vfs').component('vfsExplorerNav', {
	  templateUrl: templateUrl,
	  controller: VfsFolderThreeComponent
	});

/***/ },
/* 109 */
/***/ function(module, exports) {

	var path = 'explorer-nav/explorer-nav.template.html';
	var html = "<div class=\"explorer-nav\">\n  <vfs-explorer-nav-item node=\"$ctrl.root\"\n                         class=\"explorer-nav_item-wrap\">\n  </vfs-explorer-nav-item>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(111);

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VfsExplorerNav = function () {
	  (0, _createClass3.default)(VfsExplorerNav, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['vfs'];
	    }
	  }]);
	
	  function VfsExplorerNav(vfs) {
	    (0, _classCallCheck3.default)(this, VfsExplorerNav);
	
	    this.vfs = vfs;
	  }
	
	  (0, _createClass3.default)(VfsExplorerNav, [{
	    key: '$onInit',
	    value: function $onInit() {
	      this.depth = (this.depth || 0) + 1;
	    }
	  }, {
	    key: 'padding',
	    value: function padding() {
	      var step = 20;
	      var unit = 'px';
	
	      var padding = this.depth * step;
	      return padding + unit;
	    }
	  }, {
	    key: 'openNode',
	    value: function openNode(node) {
	      this.vfs.openNode(node);
	    }
	  }, {
	    key: 'isOpen',
	    value: function isOpen(node) {
	      return this.vfs.isOpen(node);
	    }
	  }, {
	    key: 'icon',
	    value: function icon(node) {
	      if (!node) {
	        return;
	      }
	
	      var designer = node.vfs$().designer;
	      var icon = designer.icon();
	      var className = 'icon-' + icon + '-s';
	      return className;
	    }
	  }]);
	  return VfsExplorerNav;
	}();
	
	var templateUrl = __webpack_require__(112);
	angular.module('vfs').component('vfsExplorerNavItem', {
	  templateUrl: templateUrl,
	  controller: VfsExplorerNav,
	  require: {
	    explorerNavCtrl: '^vfsExplorerNav'
	  },
	  bindings: {
	    node: '<',
	    depth: '<'
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports) {

	var path = 'explorer-nav/explorer-nav-item/explorer-nav-item.template.html';
	var html = "<div ng-class=\"{'is-open': $ctrl.isOpen($ctrl.node)}\"\n     class=\"explorer-nav_item\">\n  <a ng-click=\"$ctrl.openNode($ctrl.node)\"\n     ng-style=\"{'padding-left': $ctrl.padding()}\"\n     class=\"explorer-nav_link\">\n    <i class=\"icon\" ng-class=\"::$ctrl.icon($ctrl.node)\"></i>\n    <span ng-bind=\"::$ctrl.node.title\"></span>\n  </a>\n\n  <vfs-explorer-nav-item ng-repeat=\"child in $ctrl.node.children\"\n                         node=\"child\"\n                         depth=\"$ctrl.depth\">\n  </vfs-explorer-nav-item>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(114);

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(4);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ExplorerViewer = function () {
	  (0, _createClass3.default)(ExplorerViewer, null, [{
	    key: '$inject',
	    get: function get() {
	      return ['$scope', '$element', '$compile'];
	    }
	  }]);
	
	  function ExplorerViewer($scope, $element, $compile) {
	    (0, _classCallCheck3.default)(this, ExplorerViewer);
	
	    this.$scope = $scope;
	    this.$element = $element;
	    this.$compile = $compile;
	  }
	
	  (0, _createClass3.default)(ExplorerViewer, [{
	    key: '$onChanges',
	    value: function $onChanges(change) {
	      if (!change.vfsNode) {
	        return;
	      }
	
	      this.clearNodeExplorer();
	      this.createNodeExplorer();
	      this.readNodeExplorer();
	    }
	  }, {
	    key: 'clearNodeExplorer',
	    value: function clearNodeExplorer() {
	      if (!this.nodeExplorer) {
	        return;
	      }
	
	      this.nodeExplorer.$scope.$destroy();
	      this.nodeExplorer = null;
	      this.nodeElement.remove();
	      this.nodeElement = null;
	    }
	  }, {
	    key: 'createNodeExplorer',
	    value: function createNodeExplorer() {
	      if (!this.vfsNode) {
	        return;
	      }
	
	      var vfs$ = this.vfsNode.vfs$();
	      var designer = vfs$.designer;
	      var editorName = designer.explorerName();
	
	      if (!editorName) {
	        return;
	      }
	
	      var scope = this.$scope;
	      var compileFn = this.$compile('<' + editorName + ' vfs-node="$ctrl.vfsNode" ></' + editorName + '>');
	      var element = compileFn(scope);
	      this.$element.append(element);
	      this.nodeElement = element;
	    }
	  }, {
	    key: 'readNodeExplorer',
	    value: function readNodeExplorer() {}
	  }, {
	    key: 'assignNodeExplorer',
	    value: function assignNodeExplorer(nodeExplorer) {
	      this.nodeExplorer = nodeExplorer;
	      this.nodeExplorer.readNode();
	    }
	  }]);
	  return ExplorerViewer;
	}();
	
	angular.module('vfs').component('vfsNodeExplorer', {
	  controller: ExplorerViewer,
	  bindings: {
	    vfsNode: '<'
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports) {

	'use strict';
	
	var app = angular.module('vfs');
	app.filter('formatSizeUnits', function () {
	  var decimal = 2;
	  var unit = 1024;
	  var empty = 0;
	  var sizes = ['bytes', 'KB', 'MB', 'GB', 'TB'];
	
	  return function (bytes) {
	    bytes = parseInt(bytes) || empty;
	
	    if (!bytes) {
	      return empty + ' byte';
	    }
	
	    var step = Math.floor(Math.log(bytes) / Math.log(unit));
	
	    var output = bytes / Math.pow(unit, step);
	    output = output.toFixed(decimal);
	    output = parseFloat(output);
	    output = output + ' ' + sizes[step];
	
	    return output;
	  };
	});

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdmZzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Zmcy92ZnMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vdmZzL3Zmcy50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL3Zmcy92ZnMuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGUvcm9vdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlL3Jvb3QvZXhwbG9yZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGUvcm9vdC9leHBsb3Jlci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL25vZGUvZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlL2ZpbGUvZXhwbG9yZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGUvZmlsZS9leHBsb3Jlci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL25vZGUvZm9sZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGUvZm9sZGVyL2V4cGxvcmVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlL2ZvbGRlci9leHBsb3Jlci50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL25vZGUvZGVzaWduZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZS9kZXNpZ25lci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL25vZGUvcm9vdC9kZXNpZ25lci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlL2ZvbGRlci9kZXNpZ25lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlL2ZpbGUvZGVzaWduZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9leHBsb3Jlci1uYXYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXhwbG9yZXItbmF2L2V4cGxvcmVyLW5hdi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZXhwbG9yZXItbmF2L2V4cGxvcmVyLW5hdi50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL2V4cGxvcmVyLW5hdi9leHBsb3Jlci1uYXYtaXRlbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9leHBsb3Jlci1uYXYvZXhwbG9yZXItbmF2LWl0ZW0vZXhwbG9yZXItbmF2LWl0ZW0uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2V4cGxvcmVyLW5hdi9leHBsb3Jlci1uYXYtaXRlbS9leHBsb3Jlci1uYXYtaXRlbS50ZW1wbGF0ZS5odG1sIiwid2VicGFjazovLy8uL25vZGUtZXhwbG9yZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZS1leHBsb3Jlci9ub2RlLWV4cGxvcmVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9maWx0ZXIuZm9ybWF0LXNpemUtdW5pdHMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsInJlcXVpcmUiLCJWZnNDb21wb25lbnQiLCJ2ZnMiLCJhc3NpZ25WZnNDb21wb25lbnQiLCJyZWZyZXNoRm9sZGVyIiwibm9kZSIsIm9wZW5lZE5vZGUiLCJ0ZW1wbGF0ZVVybCIsImNvbXBvbmVudCIsImNvbnRyb2xsZXIiLCJWZnNTZXJ2aWNlIiwidmZzJGJ1aWxkZXIiLCJ2ZnMkZGVzaWduZXIiLCJjcmVhdGVSb290Iiwib3Blbk5vZGUiLCJyb290Iiwid3JhcE5vZGUiLCJmb2xkZXJUaXRsZSIsInByb21wdCIsInRyaW0iLCJjcmVhdGVGb2xkZXIiLCJpbmplY3RQYXJlbnQiLCJ0aXRsZSIsImNoaWxkcmVuIiwicHVzaCIsImZpbGVUaXRsZSIsImNyZWF0ZUZpbGUiLCJoYXNDb25maXJtZWQiLCJjb25maXJtIiwidmZzJCIsInBhcmVudCIsImluZGV4IiwiaW5kZXhPZiIsInVud3JhcE5vZGUiLCJzcGxpY2UiLCJ2ZnNDb21wb25lbnQiLCJmb2xkZXJDaGFuZ2VzIiwiYXBwIiwic2VydmljZSIsIlJvb3RFeHBsb3JlciIsIiRzY29wZSIsIiRmaWx0ZXIiLCJleHBsb3JlckN0cmwiLCJhc3NpZ25Ob2RlRXhwbG9yZXIiLCJ2ZnNOb2RlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGVsZXRlRm9sZGVyIiwiZmlsZXMiLCJmaWx0ZXIiLCJpc0ZvbGRlciIsInAiLCJsZW5ndGgiLCJpc0ZpbGUiLCJzaXplIiwiZm9sZGVyU2l6ZSIsImJpbmRpbmdzIiwiRmlsZUV4cGxvcmVyIiwiY29udGVudCIsImRlbGV0ZUZpbGUiLCJmaWxlU2l6ZSIsIkZvbGRlckV4cGxvcmVyIiwiZm9sZGVycyIsIk5vZGVEZXNpZ25lciIsInNwZWMiLCJleHBvcnRzIiwiX19zcGVjcyIsIl9fZGVzaWduZXJzIiwicHJvdmlkZXIiLCJEZXNpZ25lclByb3ZpZGVyIiwiJGdldCIsIkRlc2lnbmVyRmFjdG9yeSIsIiRpbmplY3QiLCIkaW5qZWN0b3IiLCJpbnN0YW50aWF0ZSIsIkRlc2lnbmVyU2VydmljZSIsImluaXRTcGVjcyIsInNwZWNNYXAiLCJmb3JFYWNoIiwiaWQiLCJpbmplY3REZXNpZ25lciIsIl9zcGVjcyIsImRlc2lnbmVySWQiLCJkZXNpZ25lciIsImRlc2lnbmVyQ2xhc3MiLCJub29wIiwib3B0aW9ucyIsInNwZWNJZCIsImdldFNwZWMiLCJnZXREZXNpZ25lciIsImZpbGUiLCJlbXB0eSIsImZvbGRlciIsInJlZHVjZSIsImNvbmZpZyIsIlJvb3REZXNpZ25lckNvbmZpZyIsImJhc2VDbGFzcyIsIlJvb3REZXNpZ25lciIsIkZpbGVEZXNpZ25lckNvbmZpZyIsIkZpbGVEZXNpZ25lciIsIkZvbGRlckRlc2lnbmVyQ29uZmlnIiwiRm9sZGVyRGVzaWduZXIiLCJCdWlsZGVyU2VydmljZSIsImluamVjdEJ1aWxkZXIiLCJpdGVtIiwiYnVpbGRlciIsImRlc2lnbmVyUm9vdCIsImNyZWF0ZU5vZGUiLCJkZXNpZ25lckZvbGRlciIsImRlc2lnbmVyRmlsZSIsIlZmc0ZvbGRlclRocmVlQ29tcG9uZW50IiwiVmZzRXhwbG9yZXJOYXYiLCJkZXB0aCIsInN0ZXAiLCJ1bml0IiwicGFkZGluZyIsImlzT3BlbiIsImljb24iLCJjbGFzc05hbWUiLCJleHBsb3Jlck5hdkN0cmwiLCJFeHBsb3JlclZpZXdlciIsIiRlbGVtZW50IiwiJGNvbXBpbGUiLCJjaGFuZ2UiLCJjbGVhck5vZGVFeHBsb3JlciIsImNyZWF0ZU5vZGVFeHBsb3JlciIsInJlYWROb2RlRXhwbG9yZXIiLCJub2RlRXhwbG9yZXIiLCIkZGVzdHJveSIsIm5vZGVFbGVtZW50IiwicmVtb3ZlIiwiZWRpdG9yTmFtZSIsImV4cGxvcmVyTmFtZSIsInNjb3BlIiwiY29tcGlsZUZuIiwiZWxlbWVudCIsImFwcGVuZCIsInJlYWROb2RlIiwiZGVjaW1hbCIsInNpemVzIiwiYnl0ZXMiLCJwYXJzZUludCIsIk1hdGgiLCJmbG9vciIsImxvZyIsIm91dHB1dCIsInBvdyIsInRvRml4ZWQiLCJwYXJzZUZsb2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsU0FBUUMsTUFBUixDQUFlLEtBQWYsRUFBc0IsRUFBdEI7O0FBRUEsb0JBQUFDLENBQVEsQ0FBUjtBQUNBLG9CQUFBQSxDQUFRLEVBQVI7QUFDQSxvQkFBQUEsQ0FBUSxHQUFSO0FBQ0Esb0JBQUFBLENBQVEsR0FBUjtBQUNBLG9CQUFBQSxDQUFRLEdBQVI7QUFDQSxvQkFBQUEsQ0FBUSxHQUFSLEU7Ozs7Ozs7O0FDUEEsb0JBQUFBLENBQVEsQ0FBUjtBQUNBLG9CQUFBQSxDQUFRLEVBQVIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDRE1DLFk7Ozt5QkFFaUI7QUFDbkIsY0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEOzs7QUFFRCx5QkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNmLFVBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtBLEdBQUwsQ0FBU0Msa0JBQVQsQ0FBNEIsSUFBNUI7QUFDQSxVQUFLQyxhQUFMO0FBQ0Q7Ozs7cUNBRWU7QUFDZCxZQUFLQSxhQUFMO0FBQ0Q7OztxQ0FFZTtBQUNkLFlBQUtDLElBQUwsR0FBWSxLQUFLSCxHQUFMLENBQVNJLFVBQXJCO0FBQ0Q7Ozs7O0FBR0gsS0FBSUMsY0FBYyxtQkFBQVAsQ0FBUSxFQUFSLENBQWxCO0FB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LE9BQWY7QUFDRDs7QUFFRCxTQUFJc0IsT0FBTzZCLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsR0FBTCxDQUFTSixLQUFULElBQWtCRSxLQUFLRSxHQUFMLENBQVM5QixJQUFULENBQTdCLENBQVg7O0FBRUEsU0FBSStCLFNBQVNMLFFBQVFFLEtBQUtJLEdBQUwsQ0FBU2hDLElBQVQsRUFBZUQsSUFBZixDQUFyQjtBQUNBZ0MsY0FBU0EsT0FBT0UsT0FBUCxDQUFlVCxPQUFmLENBQVQ7QUFDQU8sY0FBU0csV0FBV0gsTUFBWCxDQUFUO0FBQ0FBLGNBQVNBLFNBQVMsR0FBVCxHQUFlTixNQUFNMUIsSUFBTixDQUF4Qjs7QUFFQSxZQUFPZ0MsTUFBUDtBQUNELElBZkQ7QUFnQkQsRUF0QkQsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgndmZzJywgW10pO1xuXG5yZXF1aXJlKCcuL3ZmcycpO1xucmVxdWlyZSgnLi9ub2RlJyk7XG5yZXF1aXJlKCcuL2J1aWxkZXInKTtcbnJlcXVpcmUoJy4vZXhwbG9yZXItbmF2Jyk7XG5yZXF1aXJlKCcuL25vZGUtZXhwbG9yZXInKTtcbnJlcXVpcmUoJy4vZmlsdGVyLmZvcm1hdC1zaXplLXVuaXRzLmpzJyk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC5qc1xuICoqLyIsInJlcXVpcmUoJy4vdmZzLmNvbXBvbmVudCcpO1xucmVxdWlyZSgnLi92ZnMuc2VydmljZScpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi92ZnMvaW5kZXguanNcbiAqKi8iLCJjbGFzcyBWZnNDb21wb25lbnQge1xuXG4gIHN0YXRpYyBnZXQgJGluamVjdCgpIHtcbiAgICByZXR1cm4gWyd2ZnMnXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZmcykge1xuICAgIHRoaXMudmZzID0gdmZzO1xuICAgIHRoaXMudmZzLmFzc2lnblZmc0NvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnJlZnJlc2hGb2xkZXIoKTtcbiAgfVxuXG4gIGZvbGRlckNoYW5nZXMoKSB7XG4gICAgdGhpcy5yZWZyZXNoRm9sZGVyKCk7XG4gIH1cblxuICByZWZyZXNoRm9sZGVyKCkge1xuICAgIHRoaXMubm9kZSA9IHRoaXMudmZzLm9wZW5lZE5vZGU7XG4gIH1cbn1cblxudmFyIHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnLi92ZnMudGVtcGxhdGUuaHRtbCcpO1xuYW5ndWxhci5tb2R1bGUoJ3ZmcycpLmNvbXBvbmVudCgndmZzJywge1xuICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVVcmwsXG4gIGNvbnRyb2xsZXI6IFZmc0NvbXBvbmVudFxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zmcy92ZnMuY29tcG9uZW50LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHBhdGggPSAndmZzL3Zmcy50ZW1wbGF0ZS5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJ2ZnNcXFwiPlxcblxcbiAgPGFzaWRlIGNsYXNzPVxcXCJ2ZnNfc2lkZVxcXCI+XFxuICAgIDx2ZnMtZXhwbG9yZXItbmF2PjwvdmZzLWV4cGxvcmVyLW5hdj5cXG4gIDwvYXNpZGU+XFxuXFxuICA8dmZzLW5vZGUtZXhwbG9yZXIgdmZzLW5vZGU9XFxcIiRjdHJsLm5vZGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInZmc19iYXNlXFxcIj5cXG4gIDwvdmZzLW5vZGUtZXhwbG9yZXI+XFxuPC9kaXY+XFxuXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdmZzL3Zmcy50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNsYXNzIFZmc1NlcnZpY2Uge1xuXG4gIHN0YXRpYyBnZXQgJGluamVjdCgpIHtcbiAgICByZXR1cm4gWyd2ZnMkYnVpbGRlcicsICd2ZnMkZGVzaWduZXInXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZmcyRidWlsZGVyLCB2ZnMkZGVzaWduZXIpIHtcbiAgICB0aGlzLnZmcyRkZXNpZ25lciA9IHZmcyRkZXNpZ25lcjtcbiAgICB0aGlzLnZmcyRidWlsZGVyID0gdmZzJGJ1aWxkZXI7XG4gICAgdGhpcy5jcmVhdGVSb290KCk7XG4gICAgdGhpcy5vcGVuTm9kZSh0aGlzLnJvb3QpO1xuICB9XG5cbiAgaXNPcGVuKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuZWROb2RlID09PSBub2RlO1xuICB9XG5cbiAgY3JlYXRlUm9vdCgpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMudmZzJGJ1aWxkZXIuY3JlYXRlUm9vdCgpO1xuICAgIHRoaXMudmZzJGJ1aWxkZXIud3JhcE5vZGUobm9kZSk7XG4gICAgdGhpcy5yb290ID0gbm9kZTtcbiAgfVxuXG4gIGNyZWF0ZUZvbGRlcigpIHtcbiAgICB2YXIgZm9sZGVyVGl0bGUgPSBwcm9tcHQoJ1R5cGUgYSBmb2xkZXIgbmFtZScpO1xuICAgIGZvbGRlclRpdGxlID0gKGZvbGRlclRpdGxlIHx8ICcnKS50cmltKCk7XG5cbiAgICBpZiAoIWZvbGRlclRpdGxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSB0aGlzLnZmcyRidWlsZGVyLmNyZWF0ZUZvbGRlcigpO1xuICAgIHRoaXMudmZzJGJ1aWxkZXIud3JhcE5vZGUobm9kZSk7XG4gICAgdGhpcy52ZnMkYnVpbGRlci5pbmplY3RQYXJlbnQobm9kZSwgdGhpcy5vcGVuZWROb2RlKTtcbiAgICBub2RlLnRpdGxlID0gZm9sZGVyVGl0bGU7XG5cbiAgICB0aGlzLm9wZW5lZE5vZGUuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgfVxuXG4gIGNyZWF0ZUZpbGUoKSB7XG4gICAgdmFyIGZpbGVUaXRsZSA9IHByb21wdCgnVHlwZSBhIGZpbGUgbmFtZScpO1xuICAgIGZpbGVUaXRsZSA9IChmaWxlVGl0bGUgfHwgJycpLnRyaW0oKTtcblxuICAgIGlmICghZmlsZVRpdGxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5vZGUgPSB0aGlzLnZmcyRidWlsZGVyLmNyZWF0ZUZpbGUoKTtcbiAgICB0aGlzLnZmcyRidWlsZGVyLndyYXBOb2RlKG5vZGUpO1xuICAgIHRoaXMudmZzJGJ1aWxkZXIuaW5qZWN0UGFyZW50KG5vZGUsIHRoaXMub3BlbmVkTm9kZSk7XG4gICAgbm9kZS50aXRsZSA9IGZpbGVUaXRsZTtcblxuICAgIHRoaXMub3BlbmVkTm9kZS5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICB9XG5cbiAgZGVsZXRlRm9sZGVyKCkge1xuICAgIHZhciBoYXNDb25maXJtZWQgPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZm9sZGVyPycpO1xuXG4gICAgaWYgKCFoYXNDb25maXJtZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmZzJCA9IHRoaXMub3BlbmVkTm9kZS52ZnMkKCk7XG4gICAgdmFyIHBhcmVudCA9IHZmcyQucGFyZW50O1xuICAgIHZhciBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMub3BlbmVkTm9kZSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52ZnMkYnVpbGRlci51bndyYXBOb2RlKHRoaXMub3BlbmVkTm9kZSk7XG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICB0aGlzLm9wZW5Ob2RlKHBhcmVudClcbiAgfVxuXG4gIGRlbGV0ZUZpbGUoKSB7XG4gICAgdmFyIGhhc0NvbmZpcm1lZCA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBmaWxlPycpO1xuXG4gICAgaWYgKCFoYXNDb25maXJtZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdmZzJCA9IHRoaXMub3BlbmVkTm9kZS52ZnMkKCk7XG4gICAgdmFyIHBhcmVudCA9IHZmcyQucGFyZW50O1xuICAgIHZhciBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMub3BlbmVkTm9kZSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52ZnMkYnVpbGRlci51bndyYXBOb2RlKHRoaXMub3BlbmVkTm9kZSk7XG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICB0aGlzLm9wZW5Ob2RlKHBhcmVudClcbiAgfVxuXG4gIG9wZW5Ob2RlKG5vZGUpIHtcbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9wZW5lZE5vZGUgPSBub2RlO1xuXG4gICAgaWYgKHRoaXMudmZzQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLnZmc0NvbXBvbmVudC5mb2xkZXJDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgYXNzaWduVmZzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIHRoaXMudmZzQ29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG59XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmZzJyk7XG5hcHAuc2VydmljZSgndmZzJywgVmZzU2VydmljZSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3Zmcy92ZnMuc2VydmljZS5qc1xuICoqLyIsInJlcXVpcmUoJy4vcm9vdCcpO1xucmVxdWlyZSgnLi9maWxlJyk7XG5yZXF1aXJlKCcuL2ZvbGRlcicpO1xucmVxdWlyZSgnLi9kZXNpZ25lcicpO1xucmVxdWlyZSgnLi9kZXNpZ25lci5zZXJ2aWNlJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub2RlL2luZGV4LmpzXG4gKiovIiwicmVxdWlyZSgnLi9leHBsb3Jlci5jb21wb25lbnQnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vZGUvcm9vdC9pbmRleC5qc1xuICoqLyIsImNsYXNzIFJvb3RFeHBsb3JlciB7XG5cbiAgc3RhdGljIGdldCAkaW5qZWN0KCkge1xuICAgIHJldHVybiBbJyRzY29wZScsICckZmlsdGVyJywgJ3ZmcycsICd2ZnMkZGVzaWduZXInXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGZpbHRlciwgdmZzLCB2ZnMkZGVzaWduZXIpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLnZmcyA9IHZmcztcbiAgICB0aGlzLiRmaWx0ZXIgPSAkZmlsdGVyO1xuICAgIHRoaXMudmZzJGRlc2lnbmVyID0gdmZzJGRlc2lnbmVyO1xuICB9XG5cbiAgJG9uSW5pdCgpIHtcbiAgICB0aGlzLmV4cGxvcmVyQ3RybC5hc3NpZ25Ob2RlRXhwbG9yZXIodGhpcyk7XG4gIH1cblxuICByZWFkTm9kZSgpIHtcbiAgICB2YXIgbm9kZSA9IHt9O1xuICAgIHZhciB2ZnNOb2RlID0gdGhpcy52ZnNOb2RlO1xuXG4gICAgaWYgKCF2ZnNOb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbm9kZS50aXRsZSA9IHZmc05vZGUudGl0bGU7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIG9uQ3JlYXRlRmlsZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmZzLmNyZWF0ZUZpbGUoKTtcbiAgfVxuXG4gIG9uQ3JlYXRlRm9sZGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52ZnMuY3JlYXRlRm9sZGVyKCk7XG4gIH1cblxuICBvbkRlbGV0ZUZvbGRlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmZzLmRlbGV0ZUZvbGRlcigpO1xuICB9XG5cbiAgZ2V0IGNvdW50Rm9sZGVycygpIHtcbiAgICBpZiAoIXRoaXMudmZzTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMudmZzTm9kZS5jaGlsZHJlbiB8fCBbXTtcbiAgICB2YXIgZmlsZXMgPSBjaGlsZHJlbi5maWx0ZXIocCA9PiB0aGlzLnZmcyRkZXNpZ25lci5pc0ZvbGRlcihwKSk7XG4gICAgcmV0dXJuIGZpbGVzLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBjb3VudEZpbGVzKCkge1xuICAgIGlmICghdGhpcy52ZnNOb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy52ZnNOb2RlLmNoaWxkcmVuIHx8IFtdO1xuICAgIHZhciBmaWxlcyA9IGNoaWxkcmVuLmZpbHRlcihwID0+IHRoaXMudmZzJGRlc2lnbmVyLmlzRmlsZShwKSk7XG4gICAgcmV0dXJuIGZpbGVzLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBmb2xkZXJTaXplKCkge1xuICAgIHZhciBzaXplID0gdGhpcy52ZnMkZGVzaWduZXIuZm9sZGVyU2l6ZSh0aGlzLnZmc05vZGUpO1xuICAgIHNpemUgPSB0aGlzLiRmaWx0ZXIoJ2Zvcm1hdFNpemVVbml0cycpKHNpemUpO1xuICAgIHJldHVybiBzaXplO1xuICB9XG59XG5cbnZhciB0ZW1wbGF0ZVVybCA9IHJlcXVpcmUoJy4vZXhwbG9yZXIudGVtcGxhdGUuaHRtbCcpO1xuYW5ndWxhci5tb2R1bGUoJ3ZmcycpLmNvbXBvbmVudCgndmZzUm9vdEV4cGxvcmVyJywge1xuICBjb250cm9sbGVyOiBSb290RXhwbG9yZXIsXG4gIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcbiAgcmVxdWlyZToge1xuICAgIGV4cGxvcmVyQ3RybDogJ152ZnNOb2RlRXhwbG9yZXInXG4gIH0sXG4gIGJpbmRpbmdzOiB7XG4gICAgdmZzTm9kZTogJzwnXG4gIH0sXG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbm9kZS9yb290L2V4cGxvcmVyLmNvbXBvbmVudC5qc1xuICoqLyIsInZhciBwYXRoID0gJ25vZGUvcm9vdC9leHBsb3Jlci50ZW1wbGF0ZS5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJleHBsb3JlclxcXCI+XFxuICA8aGVhZGVyIGNsYXNzPVxcXCJleHBsb3Jlcl9oZWFkZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJleHBsb3Jlcl9oZWFkZXItYmFzZVxcXCI+XFxuICAgICAgPGgyIGNsYXNzPVxcXCJleHBsb3Jlcl9oZWFkZXItdGl0bGVcXFwiPlxcbiAgICAgICAgPHNwYW4gbmctYmluZD1cXFwiJGN0cmwubm9kZS50aXRsZVxcXCJcXG4gICAgICAgICAgICAgIHRpdGxlPVxcXCJ7eyRjdHJsLm5vZGUudGl0bGV9fVxcXCI+PC9zcGFuPlxcbiAgICAgIDwvaDI+XFxuICAgIDwvZGl2PlxcbiAgPC9oZWFkZXI+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJleHBsb3Jlcl9tZXRhXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImV4cGxvcmVyX21ldGEtaXRlbVxcXCIgbmctYmluZD1cXFwiJGN0cmwuZm9sZGVyU2l6ZVxcXCI+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZXhwbG9yZXJfbWV0YS1pdGVtXFxcIj5mb2xkZXJzOiA8c3BhbiBuZy1iaW5kPVxcXCIkY3RybC5jb3VudEZvbGRlcnNcXFwiPjwvc3Bhbj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJleHBsb3Jlcl9tZXRhLWl0ZW1cXFwiPmZpbGVzOiA8c3BhbiBuZy1iaW5kPVxcXCIkY3RybC5jb3VudEZpbGVzXFxcIj48L3NwYW4+PC9zcGFuPlxcbiAgPC9kaXY+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJleHBsb3Jlcl9jb250ZW50XFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJleHBsb3Jlcl90b29sc1xcXCI+XFxuICAgICAgPGxpIGNsYXNzPVxcXCJleHBsb3Jlcl90b29scy1pdGVtXFxcIj5cXG4gICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiXFxuICAgICAgICAgICBjbGFzcz1cXFwiZXhwbG9yZXJfdG9vbHMtbGlua1xcXCJcXG4gICAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5vbkNyZWF0ZUZvbGRlcigkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImljb24gaWNvbi1mb2xkZXItbVxcXCI+PC9pPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZXhwbG9yZXJfdG9vbHMtdGV4dFxcXCI+Q3JlYXRlIGZvbGRlcjwvc3Bhbj5cXG4gICAgICAgIDwvYT5cXG4gICAgICA8L2xpPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwiZXhwbG9yZXJfdG9vbHMtaXRlbVxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImV4cGxvcmVyX3Rvb2xzLWxpbmtcXFwiXFxuICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwub25DcmVhdGVGaWxlKCRldmVudClcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbiBpY29uLWZpbGUtbVxcXCI+PC9pPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZXhwbG9yZXJfdG9vbHMtdGV4dFxcXCI+Q3JlYXRlIGZpbGU8L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9saT5cXG4gICAgPC91bD5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL25vZGUvcm9vdC9leHBsb3Jlci50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vZXhwbG9yZXIuY29tcG9uZW50Jyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub2RlL2ZpbGUvaW5kZXguanNcbiAqKi8iLCJjbGFzcyBGaWxlRXhwbG9yZXIge1xuXG4gIHN0YXRpYyBnZXQgJGluamVjdCgpIHtcbiAgICByZXR1cm4gWyckc2NvcGUnLCAnJGZpbHRlcicsICd2ZnMnLCAndmZzJGRlc2lnbmVyJ107XG4gIH1cblxuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRmaWx0ZXIsIHZmcywgdmZzJGRlc2lnbmVyKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy4kZmlsdGVyID0gJGZpbHRlcjtcbiAgICB0aGlzLnZmcyA9IHZmcztcbiAgICB0aGlzLnZmcyRkZXNpZ25lciA9IHZmcyRkZXNpZ25lcjtcbiAgfVxuXG4gICRvbkluaXQoKSB7XG4gICAgdGhpcy5leHBsb3JlckN0cmwuYXNzaWduTm9kZUV4cGxvcmVyKHRoaXMpO1xuICB9XG5cbiAgcmVhZE5vZGUoKSB7XG4gICAgdmFyIG5vZGUgPSB7fTtcbiAgICB2YXIgdmZzTm9kZSA9IHRoaXMudmZzTm9kZTtcblxuICAgIGlmICghdmZzTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5vZGUudGl0bGUgPSB2ZnNOb2RlLnRpdGxlO1xuICAgIG5vZGUuY29udGVudCA9IHZmc05vZGUuY29udGVudDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgb25EZWxldGVGaWxlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52ZnMuZGVsZXRlRmlsZSgpO1xuICB9XG5cbiAgb25TYXZlRmlsZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmZzTm9kZS5jb250ZW50ID0gdGhpcy5ub2RlLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgZmlsZVNpemUoKSB7XG4gICAgaWYgKCF0aGlzLnZmc05vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2l6ZSA9IHRoaXMudmZzJGRlc2lnbmVyLmZpbGVTaXplKHRoaXMudmZzTm9kZSk7XG4gICAgc2l6ZSA9IHRoaXMuJGZpbHRlcignZm9ybWF0U2l6ZVVuaXRzJykoc2l6ZSk7XG4gICAgcmV0dXJuIHNpemU7XG4gIH1cbn1cblxudmFyIHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnLi9leHBsb3Jlci50ZW1wbGF0ZS5odG1sJyk7XG5hbmd1bGFyLm1vZHVsZSgndmZzJykuY29tcG9uZW50KCd2ZnNGaWxlRXhwbG9yZXInLCB7XG4gIGNvbnRyb2xsZXI6IEZpbGVFeHBsb3JlcixcbiAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxuICByZXF1aXJlOiB7XG4gICAgZXhwbG9yZXJDdHJsOiAnXnZmc05vZGVFeHBsb3JlcidcbiAgfSxcbiAgYmluZGluZ3M6IHtcbiAgICB2ZnNOb2RlOiAnPCdcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vZGUvZmlsZS9leHBsb3Jlci5jb21wb25lbnQuanNcbiAqKi8iLCJ2YXIgcGF0aCA9ICdub2RlL2ZpbGUvZXhwbG9yZXIudGVtcGxhdGUuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdj5cXG4gIDxoZWFkZXIgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlci1iYXNlXFxcIj5cXG4gICAgICA8aDIgbmctYmluZD1cXFwiJGN0cmwubm9kZS50aXRsZVxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlci10aXRsZVxcXCI+PC9oMj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlci1zaWRlXFxcIj5cXG4gICAgICA8YSBocmVmPVxcXCIjXFxcIlxcbiAgICAgICAgIHRpdGxlPVxcXCJTYXZlIGZpbGVcXFwiXFxuICAgICAgICAgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlci1idG5cXFwiXFxuICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm9uU2F2ZUZpbGUoJGV2ZW50KVxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiaWNvbiBpY29uLXNhdmVcXFwiPjwvaT5cXG4gICAgICA8L2E+XFxuICAgICAgPGEgaHJlZj1cXFwiI1xcXCJcXG4gICAgICAgICB0aXRsZT1cXFwiRGVsZXRlIGZpbGVcXFwiXFxuICAgICAgICAgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlci1idG5cXFwiXFxuICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm9uRGVsZXRlRmlsZSgkZXZlbnQpXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJpY29uIGljb24tZGVsZXRlXFxcIj48L2k+XFxuICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gIDwvaGVhZGVyPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZXhwbG9yZXJfbWV0YVxcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJleHBsb3Jlcl9tZXRhLWl0ZW1cXFwiIG5nLWJpbmQ9XFxcIiRjdHJsLmZpbGVTaXplXFxcIj48L3NwYW4+XFxuICA8L2Rpdj5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImV4cGxvcmVyX2NvbnRlbnRcXFwiPlxcbiAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImVkaXRvclxcXCJcXG4gICAgICAgICAgICAgIG5nLW1vZGVsPVxcXCIkY3RybC5ub2RlLmNvbnRlbnRcXFwiPjwvdGV4dGFyZWE+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ub2RlL2ZpbGUvZXhwbG9yZXIudGVtcGxhdGUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2V4cGxvcmVyLmNvbXBvbmVudCcpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbm9kZS9mb2xkZXIvaW5kZXguanNcbiAqKi8iLCJjbGFzcyBGb2xkZXJFeHBsb3JlciB7XG5cbiAgc3RhdGljIGdldCAkaW5qZWN0KCkge1xuICAgIHJldHVybiBbJyRzY29wZScsICckZmlsdGVyJywgJ3ZmcycsICd2ZnMkZGVzaWduZXInXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGZpbHRlciwgdmZzLCB2ZnMkZGVzaWduZXIpIHtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLiRmaWx0ZXIgPSAkZmlsdGVyO1xuICAgIHRoaXMudmZzJGRlc2lnbmVyID0gdmZzJGRlc2lnbmVyO1xuICAgIHRoaXMudmZzID0gdmZzO1xuICB9XG5cbiAgJG9uSW5pdCgpIHtcbiAgICB0aGlzLmV4cGxvcmVyQ3RybC5hc3NpZ25Ob2RlRXhwbG9yZXIodGhpcyk7XG4gIH1cblxuICByZWFkTm9kZSgpIHtcbiAgICB2YXIgbm9kZSA9IHt9O1xuICAgIHZhciB2ZnNOb2RlID0gdGhpcy52ZnNOb2RlO1xuXG4gICAgaWYgKCF2ZnNOb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbm9kZS50aXRsZSA9IHZmc05vZGUudGl0bGU7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIG9uQ3JlYXRlRmlsZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmZzLmNyZWF0ZUZpbGUoKTtcbiAgfVxuXG4gIG9uQ3JlYXRlRm9sZGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52ZnMuY3JlYXRlRm9sZGVyKCk7XG4gIH1cblxuICBvbkRlbGV0ZUZvbGRlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmZzLmRlbGV0ZUZvbGRlcigpO1xuICB9XG5cbiAgZ2V0IGNvdW50Rm9sZGVycygpIHtcbiAgICBpZiAoIXRoaXMudmZzTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMudmZzTm9kZS5jaGlsZHJlbiB8fCBbXTtcbiAgICB2YXIgZm9sZGVycyA9IGNoaWxkcmVuLmZpbHRlcihwID0+IHRoaXMudmZzJGRlc2lnbmVyLmlzRm9sZGVyKHApKTtcbiAgICByZXR1cm4gZm9sZGVycy5sZW5ndGg7XG4gIH1cblxuICBnZXQgY291bnRGaWxlcygpIHtcbiAgICBpZiAoIXRoaXMudmZzTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMudmZzTm9kZS5jaGlsZHJlbiB8fCBbXTtcbiAgICB2YXIgZmlsZXMgPSBjaGlsZHJlbi5maWx0ZXIocCA9PiB0aGlzLnZmcyRkZXNpZ25lci5pc0ZpbGUocCkpO1xuICAgIHJldHVybiBmaWxlcy5sZW5ndGg7XG4gIH1cblxuICBnZXQgZm9sZGVyU2l6ZSgpIHtcbiAgICB2YXIgc2l6ZSA9IHRoaXMudmZzJGRlc2lnbmVyLmZvbGRlclNpemUodGhpcy52ZnNOb2RlKTtcbiAgICBzaXplID0gdGhpcy4kZmlsdGVyKCdmb3JtYXRTaXplVW5pdHMnKShzaXplKTtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxufVxuXG52YXIgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCcuL2V4cGxvcmVyLnRlbXBsYXRlLmh0bWwnKTtcbmFuZ3VsYXIubW9kdWxlKCd2ZnMnKS5jb21wb25lbnQoJ3Zmc0ZvbGRlckV4cGxvcmVyJywge1xuICBjb250cm9sbGVyOiBGb2xkZXJFeHBsb3JlcixcbiAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxuICByZXF1aXJlOiB7XG4gICAgZXhwbG9yZXJDdHJsOiAnXnZmc05vZGVFeHBsb3JlcidcbiAgfSxcbiAgYmluZGluZ3M6IHtcbiAgICB2ZnNOb2RlOiAnPCdcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vZGUvZm9sZGVyL2V4cGxvcmVyLmNvbXBvbmVudC5qc1xuICoqLyIsInZhciBwYXRoID0gJ25vZGUvZm9sZGVyL2V4cGxvcmVyLnRlbXBsYXRlLmh0bWwnO1xudmFyIGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImV4cGxvcmVyXFxcIj5cXG4gIDxoZWFkZXIgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlci1iYXNlXFxcIj5cXG4gICAgICA8aDIgbmctYmluZD1cXFwiJGN0cmwubm9kZS50aXRsZVxcXCJcXG4gICAgICAgICAgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlci10aXRsZVxcXCI+PC9oMj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImV4cGxvcmVyX2hlYWRlci1zaWRlXFxcIj5cXG4gICAgICA8YSBocmVmPVxcXCIjXFxcIlxcbiAgICAgICAgIHRpdGxlPVxcXCJEZWxldGUgZm9sZGVyXFxcIlxcbiAgICAgICAgIGNsYXNzPVxcXCJleHBsb3Jlcl9oZWFkZXItYnRuXFxcIlxcbiAgICAgICAgIG5nLWNsaWNrPVxcXCIkY3RybC5vbkRlbGV0ZUZvbGRlcigkZXZlbnQpXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJpY29uIGljb24tZGVsZXRlXFxcIj48L2k+XFxuICAgICAgPC9hPlxcbiAgICA8L2Rpdj5cXG4gIDwvaGVhZGVyPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZXhwbG9yZXJfbWV0YVxcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJleHBsb3Jlcl9tZXRhLWl0ZW1cXFwiIG5nLWJpbmQ9XFxcIiRjdHJsLmZvbGRlclNpemVcXFwiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImV4cGxvcmVyX21ldGEtaXRlbVxcXCI+Zm9sZGVyczogPHNwYW4gbmctYmluZD1cXFwiJGN0cmwuY291bnRGb2xkZXJzXFxcIj48L3NwYW4+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZXhwbG9yZXJfbWV0YS1pdGVtXFxcIj5maWxlczogPHNwYW4gbmctYmluZD1cXFwiJGN0cmwuY291bnRGaWxlc1xcXCI+PC9zcGFuPjwvc3Bhbj5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiZXhwbG9yZXJfY29udGVudFxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwiZXhwbG9yZXJfdG9vbHNcXFwiPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwiZXhwbG9yZXJfdG9vbHMtaXRlbVxcXCI+XFxuICAgICAgICA8YSBocmVmPVxcXCIjXFxcIlxcbiAgICAgICAgICAgY2xhc3M9XFxcImV4cGxvcmVyX3Rvb2xzLWxpbmtcXFwiXFxuICAgICAgICAgICBuZy1jbGljaz1cXFwiJGN0cmwub25DcmVhdGVGb2xkZXIoJGV2ZW50KVxcXCI+XFxuICAgICAgICAgIDxpIGNsYXNzPVxcXCJpY29uIGljb24tZm9sZGVyLW1cXFwiPjwvaT5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImV4cGxvcmVyX3Rvb2xzLXRleHRcXFwiPkNyZWF0ZSBmb2xkZXI8L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9saT5cXG4gICAgICA8bGkgY2xhc3M9XFxcImV4cGxvcmVyX3Rvb2xzLWl0ZW1cXFwiPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJleHBsb3Jlcl90b29scy1saW5rXFxcIlxcbiAgICAgICAgICAgbmctY2xpY2s9XFxcIiRjdHJsLm9uQ3JlYXRlRmlsZSgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcImljb24gaWNvbi1maWxlLW1cXFwiPjwvaT5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImV4cGxvcmVyX3Rvb2xzLXRleHRcXFwiPkNyZWF0ZSBmaWxlPC9zcGFuPlxcbiAgICAgICAgPC9hPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcbndpbmRvdy5hbmd1bGFyLm1vZHVsZSgnbmcnKS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uKGMpIHsgYy5wdXQocGF0aCwgaHRtbCkgfV0pO1xubW9kdWxlLmV4cG9ydHMgPSBwYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9ub2RlL2ZvbGRlci9leHBsb3Jlci50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImNsYXNzIE5vZGVEZXNpZ25lciB7XG5cbiAgc3RhdGljIGdldCAkaW5qZWN0KCkge1xuICAgIHJldHVybiBbJ3NwZWMnLCAndmZzJGRlc2lnbmVyJ107XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzcGVjLCB2ZnMkZGVzaWduZXIpIHtcbiAgICB0aGlzLnNwZWMgPSBzcGVjO1xuICAgIHRoaXMudmZzJGRlc2lnbmVyID0gdmZzJGRlc2lnbmVyO1xuICB9XG5cbiAgY3JlYXRlTm9kZSgpIHt9XG5cbiAgZXhwbG9yZXJOYW1lKCkge31cblxuICBpY29uKCkge31cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb2RlRGVzaWduZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vZGUvZGVzaWduZXIuanNcbiAqKi8iLCJ2YXIgX19zcGVjcyA9IFtdO1xudmFyIF9fZGVzaWduZXJzID0ge1xuICAndmZzLnNwZWMucm9vdC5kZXNpZ25lcic6IHJlcXVpcmUoJy4vcm9vdC9kZXNpZ25lcicpLFxuICAndmZzLnNwZWMuZm9sZGVyLmRlc2lnbmVyJzogcmVxdWlyZSgnLi9mb2xkZXIvZGVzaWduZXInKSxcbiAgJ3Zmcy5zcGVjLmZpbGUuZGVzaWduZXInOiByZXF1aXJlKCcuL2ZpbGUvZGVzaWduZXInKVxufTtcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2ZnMnKTtcbmFwcC5wcm92aWRlcigndmZzJGRlc2lnbmVyJywgRGVzaWduZXJQcm92aWRlcik7XG5mdW5jdGlvbiBEZXNpZ25lclByb3ZpZGVyKCkge1xuICB0aGlzLiRnZXQgPSBEZXNpZ25lckZhY3Rvcnk7XG4gIHRoaXMuc3BlYyA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICBfX3NwZWNzLnB1c2goc3BlYyk7XG4gIH07XG59XG5cbkRlc2lnbmVyRmFjdG9yeS4kaW5qZWN0ID0gWyckaW5qZWN0b3InXTtcbmZ1bmN0aW9uIERlc2lnbmVyRmFjdG9yeSgkaW5qZWN0b3IpIHtcbiAgcmV0dXJuICRpbmplY3Rvci5pbnN0YW50aWF0ZShEZXNpZ25lclNlcnZpY2UpO1xufVxuXG5jbGFzcyBEZXNpZ25lclNlcnZpY2Uge1xuXG4gIHN0YXRpYyBnZXQgJGluamVjdCgpIHtcbiAgICByZXR1cm4gWyckaW5qZWN0b3InXVxuICB9XG5cbiAgY29uc3RydWN0b3IoJGluamVjdG9yKSB7XG4gICAgdGhpcy4kaW5qZWN0b3IgPSAkaW5qZWN0b3I7XG4gICAgdGhpcy5pbml0U3BlY3MoKTtcbiAgfVxuXG4gIGluaXRTcGVjcygpIHtcbiAgICB2YXIgc3BlY01hcCA9IHt9O1xuXG4gICAgX19zcGVjcy5mb3JFYWNoKHNwZWMgPT4ge1xuICAgICAgc3BlY01hcFtzcGVjLmlkXSA9IHNwZWM7XG4gICAgICB0aGlzLmluamVjdERlc2lnbmVyKHNwZWMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc3BlY3MgPSBzcGVjTWFwO1xuICB9XG5cbiAgaW5qZWN0RGVzaWduZXIoc3BlYykge1xuICAgIHZhciBkZXNpZ25lcklkID0gc3BlYy5kZXNpZ25lcjtcbiAgICB2YXIgZGVzaWduZXJDbGFzcyA9IF9fZGVzaWduZXJzW2Rlc2lnbmVySWRdO1xuXG4gICAgaWYgKCEoZGVzaWduZXJJZCAmJiBkZXNpZ25lckNsYXNzKSkge1xuICAgICAgcmV0dXJuIGFuZ3VsYXIubm9vcDtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIHNwZWM6IHNwZWMsXG4gICAgICB2ZnMkZGVzaWduZXI6IHRoaXNcbiAgICB9O1xuXG4gICAgdmFyIGRlc2lnbmVyID0gdGhpcy4kaW5qZWN0b3IuaW5zdGFudGlhdGUoZGVzaWduZXJDbGFzcywgb3B0aW9ucyk7XG4gICAgc3BlYy52ZnMkZGVzaWduZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBkZXNpZ25lcjtcbiAgICB9O1xuICB9XG5cbiAgZ2V0U3BlYyhzcGVjSWQpIHtcbiAgICByZXR1cm4gdGhpcy5fc3BlY3Nbc3BlY0lkXTtcbiAgfVxuXG4gIGdldERlc2lnbmVyKHNwZWNJZCkge1xuICAgIHZhciBzcGVjID0gdGhpcy5nZXRTcGVjKHNwZWNJZCk7XG4gICAgdmFyIGRlc2lnbmVyID0gc3BlYy52ZnMkZGVzaWduZXIoKTtcbiAgICByZXR1cm4gZGVzaWduZXI7XG4gIH1cblxuICBkZXNpZ25lclJvb3QoKSB7XG4gICAgdmFyIHNwZWNJZCA9ICdyb290JztcbiAgICB2YXIgZGVzaWduZXIgPSB0aGlzLmdldERlc2lnbmVyKHNwZWNJZCk7XG4gICAgcmV0dXJuIGRlc2lnbmVyO1xuICB9XG5cbiAgZGVzaWduZXJGb2xkZXIoKSB7XG4gICAgdmFyIHNwZWNJZCA9ICdmb2xkZXInO1xuICAgIHZhciBkZXNpZ25lciA9IHRoaXMuZ2V0RGVzaWduZXIoc3BlY0lkKTtcbiAgICByZXR1cm4gZGVzaWduZXI7XG4gIH1cblxuICBkZXNpZ25lckZpbGUoKSB7XG4gICAgdmFyIHNwZWNJZCA9ICdmaWxlJztcbiAgICB2YXIgZGVzaWduZXIgPSB0aGlzLmdldERlc2lnbmVyKHNwZWNJZCk7XG4gICAgcmV0dXJuIGRlc2lnbmVyO1xuICB9XG5cbiAgaXNGb2xkZXIobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIG5vZGUuc3BlY0lkID09PSAnZm9sZGVyJyB8fCBub2RlLnNwZWNJZCA9PT0gJ3Jvb3QnO1xuICB9XG5cbiAgaXNGaWxlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLnNwZWNJZCA9PT0gJ2ZpbGUnO1xuICB9XG5cbiAgZmlsZVNpemUoZmlsZSkge1xuICAgIHZhciBlbXB0eSA9IDA7XG5cbiAgICBpZiAoIXRoaXMuaXNGaWxlKGZpbGUpKSB7XG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfVxuXG4gICAgdmFyIHNpemUgPSBmaWxlLmNvbnRlbnQubGVuZ3RoIHx8IGVtcHR5O1xuICAgIHJldHVybiBzaXplO1xuICB9XG5cbiAgZm9sZGVyU2l6ZShmb2xkZXIpIHtcbiAgICB2YXIgZW1wdHkgPSAwO1xuXG4gICAgaWYgKCF0aGlzLmlzRm9sZGVyKGZvbGRlcikpIHtcbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9XG5cbiAgICB2YXIgc2l6ZSA9IGZvbGRlci5jaGlsZHJlbi5yZWR1Y2UoKHNpemUsIG5vZGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzRm9sZGVyKG5vZGUpKSB7XG4gICAgICAgIHNpemUgKz0gdGhpcy5mb2xkZXJTaXplKG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2l6ZSArPSB0aGlzLmZpbGVTaXplKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2l6ZTtcbiAgICB9LCBlbXB0eSk7XG5cbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub2RlL2Rlc2lnbmVyLnNlcnZpY2UuanNcbiAqKi8iLCJ2YXIgc3BlYyA9IHtcbiAgaWQ6ICdyb290JyxcbiAgdGl0bGU6ICdSb290JyxcbiAgZGVzaWduZXI6ICd2ZnMuc3BlYy5yb290LmRlc2lnbmVyJ1xufTtcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2ZnMnKTtcbmFwcC5jb25maWcoUm9vdERlc2lnbmVyQ29uZmlnKTtcblxuUm9vdERlc2lnbmVyQ29uZmlnLiRpbmplY3QgPSBbJ3ZmcyRkZXNpZ25lclByb3ZpZGVyJ107XG5mdW5jdGlvbiBSb290RGVzaWduZXJDb25maWcodmZzJGRlc2lnbmVyKSB7XG4gIHZmcyRkZXNpZ25lci5zcGVjKHNwZWMpO1xufVxuXG52YXIgYmFzZUNsYXNzID0gcmVxdWlyZSgnLi4vZGVzaWduZXInKTtcbmNsYXNzIFJvb3REZXNpZ25lciBleHRlbmRzIGJhc2VDbGFzcyB7XG5cbiAgY3JlYXRlTm9kZSgpIHtcbiAgICB2YXIgbm9kZSA9IHtcbiAgICAgIHNwZWNJZDogc3BlYy5pZCxcbiAgICAgIHRpdGxlOiBzcGVjLnRpdGxlLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZXhwbG9yZXJOYW1lKCkge1xuICAgIHJldHVybiAndmZzLXJvb3QtZXhwbG9yZXInO1xuICB9XG5cbiAgaWNvbigpIHtcbiAgICByZXR1cm4gJ2ZvbGRlcic7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb290RGVzaWduZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub2RlL3Jvb3QvZGVzaWduZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbiAqKiBtb2R1bGUgaWQgPSA3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbiAqKiBtb2R1bGUgaWQgPSA4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuICoqIG1vZHVsZSBpZCA9IDg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuICoqIG1vZHVsZSBpZCA9IDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4gKiogbW9kdWxlIGlkID0gOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAvVXNlcnMvYW5kcml2YXNoL2RvbWFpbnMvdmZzL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4gKiogbW9kdWxlIGlkID0gMTAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC9Vc2Vycy9hbmRyaXZhc2gvZG9tYWlucy92ZnMvfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogL1VzZXJzL2FuZHJpdmFzaC9kb21haW5zL3Zmcy9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3BlYyA9IHtcbiAgaWQ6ICdmb2xkZXInLFxuICB0aXRsZTogJ0ZvbGRlcicsXG4gIGRlc2lnbmVyOiAndmZzLnNwZWMuZm9sZGVyLmRlc2lnbmVyJ1xufTtcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd2ZnMnKTtcbmFwcC5jb25maWcoRmlsZURlc2lnbmVyQ29uZmlnKTtcblxuRmlsZURlc2lnbmVyQ29uZmlnLiRpbmplY3QgPSBbJ3ZmcyRkZXNpZ25lclByb3ZpZGVyJ107XG5mdW5jdGlvbiBGaWxlRGVzaWduZXJDb25maWcodmZzJGRlc2lnbmVyKSB7XG4gIHZmcyRkZXNpZ25lci5zcGVjKHNwZWMpO1xufVxuXG52YXIgYmFzZUNsYXNzID0gcmVxdWlyZSgnLi4vZGVzaWduZXInKTtcbmNsYXNzIEZpbGVEZXNpZ25lciBleHRlbmRzIGJhc2VDbGFzcyB7XG5cbiAgY3JlYXRlTm9kZSgpIHtcbiAgICB2YXIgbm9kZSA9IHtcbiAgICAgIHNwZWNJZDogc3BlYy5pZCxcbiAgICAgIHRpdGxlOiBzcGVjLnRpdGxlLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZXhwbG9yZXJOYW1lKCkge1xuICAgIHJldHVybiAndmZzLWZvbGRlci1leHBsb3Jlcic7XG4gIH1cblxuICBpY29uKCkge1xuICAgIHJldHVybiAnZm9sZGVyJztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbGVEZXNpZ25lcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vZGUvZm9sZGVyL2Rlc2lnbmVyLmpzXG4gKiovIiwidmFyIHNwZWMgPSB7XG4gIGlkOiAnZmlsZScsXG4gIHRpdGxlOiAnRmlsZScsXG4gIGRlc2lnbmVyOiAndmZzLnNwZWMuZmlsZS5kZXNpZ25lcidcbn07XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndmZzJyk7XG5hcHAuY29uZmlnKEZvbGRlckRlc2lnbmVyQ29uZmlnKTtcblxuRm9sZGVyRGVzaWduZXJDb25maWcuJGluamVjdCA9IFsndmZzJGRlc2lnbmVyUHJvdmlkZXInXTtcbmZ1bmN0aW9uIEZvbGRlckRlc2lnbmVyQ29uZmlnKHZmcyRkZXNpZ25lcikge1xuICB2ZnMkZGVzaWduZXIuc3BlYyhzcGVjKTtcbn1cblxudmFyIGJhc2VDbGFzcyA9IHJlcXVpcmUoJy4uL2Rlc2lnbmVyJyk7XG5jbGFzcyBGb2xkZXJEZXNpZ25lciBleHRlbmRzIGJhc2VDbGFzcyB7XG5cbiAgY3JlYXRlTm9kZSgpIHtcbiAgICB2YXIgbm9kZSA9IHtcbiAgICAgIHNwZWNJZDogc3BlYy5pZCxcbiAgICAgIHRpdGxlOiBzcGVjLnRpdGxlLFxuICAgICAgY29udGVudDogJydcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBleHBsb3Jlck5hbWUoKSB7XG4gICAgcmV0dXJuICd2ZnMtZmlsZS1leHBsb3Jlcic7XG4gIH1cblxuICBpY29uKCkge1xuICAgIHJldHVybiAnZmlsZSc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb2xkZXJEZXNpZ25lcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbm9kZS9maWxlL2Rlc2lnbmVyLmpzXG4gKiovIiwiY2xhc3MgQnVpbGRlclNlcnZpY2Uge1xuXG4gIHN0YXRpYyBnZXQgJGluamVjdCgpIHtcbiAgICByZXR1cm4gWyd2ZnMkZGVzaWduZXInXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZmcyRkZXNpZ25lcikge1xuICAgIHRoaXMudmZzJGRlc2lnbmVyID0gdmZzJGRlc2lnbmVyO1xuICB9XG5cbiAgd3JhcE5vZGUobm9kZSkge1xuICAgIHRoaXMuaW5qZWN0QnVpbGRlcihub2RlKTtcbiAgICB2YXIgc3BlY0lkID0gbm9kZS5zcGVjSWQ7XG4gICAgdmFyIGRlc2lnbmVyID0gdGhpcy52ZnMkZGVzaWduZXIuZ2V0RGVzaWduZXIoc3BlY0lkKTtcbiAgICBub2RlLnZmcyQoKS5kZXNpZ25lciA9IGRlc2lnbmVyO1xuICB9XG5cbiAgdW53cmFwTm9kZShub2RlKSB7XG4gICAgZGVsZXRlIG5vZGUudmZzJDtcbiAgfVxuXG4gIGluamVjdEJ1aWxkZXIobm9kZSkge1xuICAgIHZhciBpdGVtID0ge1xuICAgICAgYnVpbGRlcjogdGhpc1xuICAgIH07XG5cbiAgICBub2RlLnZmcyQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG4gIH1cblxuICBpbmplY3RQYXJlbnQobm9kZSwgcGFyZW50KSB7XG4gICAgbm9kZS52ZnMkKCkucGFyZW50ID0gcGFyZW50O1xuICB9XG5cbiAgY3JlYXRlUm9vdCgpIHtcbiAgICB2YXIgZGVzaWduZXIgPSB0aGlzLnZmcyRkZXNpZ25lci5kZXNpZ25lclJvb3QoKTtcbiAgICB2YXIgbm9kZSA9IGRlc2lnbmVyLmNyZWF0ZU5vZGUoKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGNyZWF0ZUZvbGRlcigpIHtcbiAgICB2YXIgZGVzaWduZXIgPSB0aGlzLnZmcyRkZXNpZ25lci5kZXNpZ25lckZvbGRlcigpO1xuICAgIHZhciBub2RlID0gZGVzaWduZXIuY3JlYXRlTm9kZSgpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgY3JlYXRlRmlsZSgpIHtcbiAgICB2YXIgZGVzaWduZXIgPSB0aGlzLnZmcyRkZXNpZ25lci5kZXNpZ25lckZpbGUoKTtcbiAgICB2YXIgbm9kZSA9IGRlc2lnbmVyLmNyZWF0ZU5vZGUoKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZmcycpO1xuYXBwLnNlcnZpY2UoJ3ZmcyRidWlsZGVyJywgQnVpbGRlclNlcnZpY2UpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9idWlsZGVyLmpzXG4gKiovIiwicmVxdWlyZSgnLi9leHBsb3Jlci1uYXYuY29tcG9uZW50LmpzJyk7XG5yZXF1aXJlKCcuL2V4cGxvcmVyLW5hdi1pdGVtJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leHBsb3Jlci1uYXYvaW5kZXguanNcbiAqKi8iLCJjbGFzcyBWZnNGb2xkZXJUaHJlZUNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGdldCAkaW5qZWN0KCkge1xuICAgIHJldHVybiBbJ3ZmcyddO1xuICB9XG5cbiAgY29uc3RydWN0b3IodmZzKSB7XG4gICAgdGhpcy5yb290ID0gdmZzLnJvb3Q7XG4gIH1cbn1cblxudmFyIHRlbXBsYXRlVXJsID0gcmVxdWlyZSgnLi9leHBsb3Jlci1uYXYudGVtcGxhdGUuaHRtbCcpO1xuYW5ndWxhci5tb2R1bGUoJ3ZmcycpLmNvbXBvbmVudCgndmZzRXhwbG9yZXJOYXYnLCB7XG4gIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZVVybCxcbiAgY29udHJvbGxlcjogVmZzRm9sZGVyVGhyZWVDb21wb25lbnRcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leHBsb3Jlci1uYXYvZXhwbG9yZXItbmF2LmNvbXBvbmVudC5qc1xuICoqLyIsInZhciBwYXRoID0gJ2V4cGxvcmVyLW5hdi9leHBsb3Jlci1uYXYudGVtcGxhdGUuaHRtbCc7XG52YXIgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiZXhwbG9yZXItbmF2XFxcIj5cXG4gIDx2ZnMtZXhwbG9yZXItbmF2LWl0ZW0gbm9kZT1cXFwiJGN0cmwucm9vdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImV4cGxvcmVyLW5hdl9pdGVtLXdyYXBcXFwiPlxcbiAgPC92ZnMtZXhwbG9yZXItbmF2LWl0ZW0+XFxuPC9kaXY+XFxuXCI7XG53aW5kb3cuYW5ndWxhci5tb2R1bGUoJ25nJykucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbihjKSB7IGMucHV0KHBhdGgsIGh0bWwpIH1dKTtcbm1vZHVsZS5leHBvcnRzID0gcGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZXhwbG9yZXItbmF2L2V4cGxvcmVyLW5hdi50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2V4cGxvcmVyLW5hdi1pdGVtLmNvbXBvbmVudC5qcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhwbG9yZXItbmF2L2V4cGxvcmVyLW5hdi1pdGVtL2luZGV4LmpzXG4gKiovIiwiY2xhc3MgVmZzRXhwbG9yZXJOYXYge1xuXG4gIHN0YXRpYyBnZXQgJGluamVjdCgpIHtcbiAgICByZXR1cm4gWyd2ZnMnXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHZmcykge1xuICAgIHRoaXMudmZzID0gdmZzO1xuICB9XG5cbiAgJG9uSW5pdCgpIHtcbiAgICB0aGlzLmRlcHRoID0gKHRoaXMuZGVwdGggfHwgMCkgKyAxO1xuICB9XG5cbiAgcGFkZGluZygpIHtcbiAgICB2YXIgc3RlcCA9IDIwO1xuICAgIHZhciB1bml0ID0gJ3B4JztcblxuICAgIHZhciBwYWRkaW5nID0gdGhpcy5kZXB0aCAqIHN0ZXA7XG4gICAgcmV0dXJuIHBhZGRpbmcgKyB1bml0O1xuICB9XG5cbiAgb3Blbk5vZGUobm9kZSkge1xuICAgIHRoaXMudmZzLm9wZW5Ob2RlKG5vZGUpO1xuICB9XG5cbiAgaXNPcGVuKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy52ZnMuaXNPcGVuKG5vZGUpO1xuICB9XG5cbiAgaWNvbihub2RlKSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlc2lnbmVyID0gbm9kZS52ZnMkKCkuZGVzaWduZXI7XG4gICAgdmFyIGljb24gPSBkZXNpZ25lci5pY29uKCk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGBpY29uLSR7aWNvbn0tc2A7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxufVxuXG52YXIgdGVtcGxhdGVVcmwgPSByZXF1aXJlKCcuL2V4cGxvcmVyLW5hdi1pdGVtLnRlbXBsYXRlLmh0bWwnKTtcbmFuZ3VsYXIubW9kdWxlKCd2ZnMnKS5jb21wb25lbnQoJ3Zmc0V4cGxvcmVyTmF2SXRlbScsIHtcbiAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlVXJsLFxuICBjb250cm9sbGVyOiBWZnNFeHBsb3Jlck5hdixcbiAgcmVxdWlyZToge1xuICAgIGV4cGxvcmVyTmF2Q3RybDogJ152ZnNFeHBsb3Jlck5hdidcbiAgfSxcbiAgYmluZGluZ3M6IHtcbiAgICBub2RlOiAnPCcsXG4gICAgZGVwdGg6ICc8J1xuICB9XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhwbG9yZXItbmF2L2V4cGxvcmVyLW5hdi1pdGVtL2V4cGxvcmVyLW5hdi1pdGVtLmNvbXBvbmVudC5qc1xuICoqLyIsInZhciBwYXRoID0gJ2V4cGxvcmVyLW5hdi9leHBsb3Jlci1uYXYtaXRlbS9leHBsb3Jlci1uYXYtaXRlbS50ZW1wbGF0ZS5odG1sJztcbnZhciBodG1sID0gXCI8ZGl2IG5nLWNsYXNzPVxcXCJ7J2lzLW9wZW4nOiAkY3RybC5pc09wZW4oJGN0cmwubm9kZSl9XFxcIlxcbiAgICAgY2xhc3M9XFxcImV4cGxvcmVyLW5hdl9pdGVtXFxcIj5cXG4gIDxhIG5nLWNsaWNrPVxcXCIkY3RybC5vcGVuTm9kZSgkY3RybC5ub2RlKVxcXCJcXG4gICAgIG5nLXN0eWxlPVxcXCJ7J3BhZGRpbmctbGVmdCc6ICRjdHJsLnBhZGRpbmcoKX1cXFwiXFxuICAgICBjbGFzcz1cXFwiZXhwbG9yZXItbmF2X2xpbmtcXFwiPlxcbiAgICA8aSBjbGFzcz1cXFwiaWNvblxcXCIgbmctY2xhc3M9XFxcIjo6JGN0cmwuaWNvbigkY3RybC5ub2RlKVxcXCI+PC9pPlxcbiAgICA8c3BhbiBuZy1iaW5kPVxcXCI6OiRjdHJsLm5vZGUudGl0bGVcXFwiPjwvc3Bhbj5cXG4gIDwvYT5cXG5cXG4gIDx2ZnMtZXhwbG9yZXItbmF2LWl0ZW0gbmctcmVwZWF0PVxcXCJjaGlsZCBpbiAkY3RybC5ub2RlLmNoaWxkcmVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlPVxcXCJjaGlsZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGg9XFxcIiRjdHJsLmRlcHRoXFxcIj5cXG4gIDwvdmZzLWV4cGxvcmVyLW5hdi1pdGVtPlxcbjwvZGl2PlxcblwiO1xud2luZG93LmFuZ3VsYXIubW9kdWxlKCduZycpLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oYykgeyBjLnB1dChwYXRoLCBodG1sKSB9XSk7XG5tb2R1bGUuZXhwb3J0cyA9IHBhdGg7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2V4cGxvcmVyLW5hdi9leHBsb3Jlci1uYXYtaXRlbS9leHBsb3Jlci1uYXYtaXRlbS50ZW1wbGF0ZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL25vZGUtZXhwbG9yZXIuY29tcG9uZW50LmpzJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ub2RlLWV4cGxvcmVyL2luZGV4LmpzXG4gKiovIiwiY2xhc3MgRXhwbG9yZXJWaWV3ZXIge1xuXG4gIHN0YXRpYyBnZXQgJGluamVjdCgpIHtcbiAgICByZXR1cm4gWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGNvbXBpbGUnXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJGVsZW1lbnQgLCRjb21waWxlKSB7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50O1xuICAgIHRoaXMuJGNvbXBpbGUgPSAkY29tcGlsZTtcbiAgfVxuXG4gICRvbkNoYW5nZXMoY2hhbmdlKSB7XG4gICAgaWYgKCFjaGFuZ2UudmZzTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2xlYXJOb2RlRXhwbG9yZXIoKTtcbiAgICB0aGlzLmNyZWF0ZU5vZGVFeHBsb3JlcigpO1xuICAgIHRoaXMucmVhZE5vZGVFeHBsb3JlcigpO1xuICB9XG5cbiAgY2xlYXJOb2RlRXhwbG9yZXIoKSB7XG4gICAgaWYgKCF0aGlzLm5vZGVFeHBsb3Jlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubm9kZUV4cGxvcmVyLiRzY29wZS4kZGVzdHJveSgpO1xuICAgIHRoaXMubm9kZUV4cGxvcmVyID0gbnVsbDtcbiAgICB0aGlzLm5vZGVFbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMubm9kZUVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgY3JlYXRlTm9kZUV4cGxvcmVyKCkge1xuICAgIGlmICghdGhpcy52ZnNOb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHZmcyQgPSB0aGlzLnZmc05vZGUudmZzJCgpO1xuICAgIHZhciBkZXNpZ25lciA9IHZmcyQuZGVzaWduZXI7XG4gICAgdmFyIGVkaXRvck5hbWUgPSBkZXNpZ25lci5leHBsb3Jlck5hbWUoKTtcblxuICAgIGlmICghZWRpdG9yTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzY29wZSA9IHRoaXMuJHNjb3BlO1xuICAgIHZhciBjb21waWxlRm4gPSB0aGlzLiRjb21waWxlKCc8JyArIGVkaXRvck5hbWUgKyAgJyB2ZnMtbm9kZT1cIiRjdHJsLnZmc05vZGVcIiA+PC8nICsgZWRpdG9yTmFtZSArICc+Jyk7XG4gICAgdmFyIGVsZW1lbnQgPSBjb21waWxlRm4oc2NvcGUpO1xuICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgIHRoaXMubm9kZUVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgcmVhZE5vZGVFeHBsb3JlcigpIHt9XG5cbiAgYXNzaWduTm9kZUV4cGxvcmVyKG5vZGVFeHBsb3Jlcikge1xuICAgIHRoaXMubm9kZUV4cGxvcmVyID0gbm9kZUV4cGxvcmVyO1xuICAgIHRoaXMubm9kZUV4cGxvcmVyLnJlYWROb2RlKCk7XG4gIH1cbn1cblxuYW5ndWxhci5tb2R1bGUoJ3ZmcycpLmNvbXBvbmVudCgndmZzTm9kZUV4cGxvcmVyJywge1xuICBjb250cm9sbGVyOiBFeHBsb3JlclZpZXdlcixcbiAgYmluZGluZ3M6IHtcbiAgICB2ZnNOb2RlOiAnPCdcbiAgfVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25vZGUtZXhwbG9yZXIvbm9kZS1leHBsb3Jlci5jb21wb25lbnQuanNcbiAqKi8iLCJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3ZmcycpO1xuYXBwLmZpbHRlcignZm9ybWF0U2l6ZVVuaXRzJywgKCkgPT4ge1xuICB2YXIgZGVjaW1hbCA9IDI7XG4gIHZhciB1bml0ID0gMTAyNDtcbiAgdmFyIGVtcHR5ID0gMDtcbiAgdmFyIHNpemVzID0gWydieXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xuXG4gIHJldHVybiBieXRlcyA9PiB7XG4gICAgYnl0ZXMgPSBwYXJzZUludChieXRlcykgfHwgZW1wdHk7XG5cbiAgICBpZiAoIWJ5dGVzKSB7XG4gICAgICByZXR1cm4gZW1wdHkgKyAnIGJ5dGUnO1xuICAgIH1cblxuICAgIHZhciBzdGVwID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyh1bml0KSk7XG5cbiAgICB2YXIgb3V0cHV0ID0gYnl0ZXMgLyBNYXRoLnBvdyh1bml0LCBzdGVwKTtcbiAgICBvdXRwdXQgPSBvdXRwdXQudG9GaXhlZChkZWNpbWFsKTtcbiAgICBvdXRwdXQgPSBwYXJzZUZsb2F0KG91dHB1dCk7XG4gICAgb3V0cHV0ID0gb3V0cHV0ICsgJyAnICsgc2l6ZXNbc3RlcF07XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9O1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2ZpbHRlci5mb3JtYXQtc2l6ZS11bml0cy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=