/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  //nav\n  document.getElementById('nav-btn').addEventListener('click', () => {\n    let toggleBtn = document.getElementById('nav-btn');\n    let toggleMenu = document.getElementById('nav-menu');\n    let isOpen = toggleBtn.classList.contains('active');\n\n    if (isOpen) {\n      toggleBtn.classList.remove('active');\n      toggleMenu.classList.remove('active');\n    } else {\n      toggleBtn.classList.add('active');\n      toggleMenu.classList.add('active');\n    }\n  }); //nav detect\n\n  window.addEventListener('scroll', function (e) {\n    if (document.scrollingElement.scrollTop < 100) {\n      document.getElementById('header').classList.remove('active');\n    } else {\n      document.getElementById('header').classList.add('active');\n    }\n  }); //scroll down\n\n  document.getElementById('scroll-down').addEventListener('click', () => {\n    window.scrollTo({\n      top: $('#summer-intro').offset().top,\n      behavior: \"smooth\"\n    });\n  }); //resize\n\n  var tl = new TimelineMax({\n    paused: true\n  });\n  var perAniTime = 0.3;\n  tl.fromTo($('.summer-index-kv__bg'), perAniTime * 4, {\n    scale: 0.98,\n    opacity: 0\n  }, {\n    scale: 1,\n    opacity: 1\n  }).add('bgReady').fromTo($('.summer-kv-title-box'), perAniTime * 2, {\n    y: -8,\n    opacity: 0\n  }, {\n    y: 0,\n    opacity: 1\n  }).add('titleReady').fromTo($('.summer-kv-note'), perAniTime * 2, {\n    y: -4,\n    opacity: 0,\n    ease: Power1.easeOut\n  }, {\n    y: 0,\n    opacity: 1,\n    ease: Power1.easeOut\n  }).add('noteReady').fromTo($('.summer-kv-p1'), perAniTime * 2, {\n    x: -10,\n    opacity: 0\n  }, {\n    x: 0,\n    opacity: 1\n  }, '-=0.2').fromTo($('.summer-kv-p2'), perAniTime * 2, {\n    x: -10,\n    opacity: 0\n  }, {\n    x: 0,\n    opacity: 1\n  }, '-=0.3').fromTo($('.summer-kv-p3'), perAniTime * 2, {\n    x: -10,\n    opacity: 0\n  }, {\n    x: 0,\n    opacity: 1\n  }, '-=0.3').fromTo($('.stage-frame'), perAniTime * 10, {\n    x: -2,\n    opacity: 0\n  }, {\n    x: 0,\n    opacity: 1\n  }, 0).fromTo($('.summer-kv-airplane'), perAniTime * 4, {\n    x: -40,\n    scale: 0.8,\n    opacity: 0,\n    transformOrigin: \"0% 100%\",\n    ease: Power1.easeOut\n  }, {\n    x: 0,\n    scale: 1,\n    opacity: 1,\n    transformOrigin: \"0% 100%\",\n    ease: Power1.easeOut\n  }, `titleReady-=${perAniTime * 1}`).fromTo($('#scroll-down'), perAniTime, {\n    opacity: 0\n  }, {\n    opacity: 1\n  });\n  setTimeout(() => {\n    tl.play();\n  }, 1000); // init controller\n\n  var maginController = new ScrollMagic.Controller();\n  var scene = {};\n\n  for (let i = 1; i <= 5; i++) {\n    scene[`s${i}`] = new ScrollMagic.Scene({\n      triggerElement: `#s${i}`,\n      duration: 380,\n      triggerHook: window.innerHeight - 200,\n      offset: 120\n    });\n  }\n\n  scene.s1.on(\"start\", function (event) {\n    $('#intro1').addClass('entered');\n    scene.s1.enabled(false);\n  });\n  scene.s2.on(\"start\", function (event) {\n    $('#intro2').addClass('entered');\n    scene.s2.enabled(false);\n  });\n  scene.s3.on(\"start\", function (event) {\n    $('#intro3').addClass('entered');\n    scene.s3.enabled(false);\n  });\n  scene.s4.on(\"start\", function (event) {\n    $('#intro4').addClass('entered');\n    scene.s4.enabled(false);\n  });\n  scene.s5.on(\"start\", function (event) {\n    $('#intro5').addClass('entered');\n    scene.s5.enabled(false);\n  });\n  maginController.addScene([scene.s1, scene.s2, scene.s3, scene.s4, scene.s5]);\n});\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ })

/******/ });