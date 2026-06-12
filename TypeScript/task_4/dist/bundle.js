/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/subjects/Cpp.ts"
/*!****************************!*\
  !*** ./js/subjects/Cpp.ts ***!
  \****************************/
() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return "Here is the list of requirements for Cpp";
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return "No available teacher";
        };
        return Cpp;
    }(Subject));
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));


/***/ },

/***/ "./js/subjects/Java.ts"
/*!*****************************!*\
  !*** ./js/subjects/Java.ts ***!
  \*****************************/
() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return "Here is the list of requirements for Java";
        };
        Java.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return "No available teacher";
        };
        return Java;
    }(Subject));
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));


/***/ },

/***/ "./js/subjects/React.ts"
/*!******************************!*\
  !*** ./js/subjects/React.ts ***!
  \******************************/
() {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return "Here is the list of requirements for React";
        };
        React.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            return "No available teacher";
        };
        return React;
    }(Subject));
    Subjects.React = React;
})(Subjects || (Subjects = {}));


/***/ },

/***/ "./js/subjects/Subject.ts"
/*!********************************!*\
  !*** ./js/subjects/Subject.ts ***!
  \********************************/
() {


var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));


/***/ },

/***/ "./js/subjects/Teacher.ts"
/*!********************************!*\
  !*** ./js/subjects/Teacher.ts ***!
  \********************************/
() {




/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subjects_Teacher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects/Teacher */ "./js/subjects/Teacher.ts");
/* harmony import */ var _subjects_Teacher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_subjects_Teacher__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subjects_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects/Subject */ "./js/subjects/Subject.ts");
/* harmony import */ var _subjects_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subjects_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subjects/Cpp */ "./js/subjects/Cpp.ts");
/* harmony import */ var _subjects_Cpp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subjects_Cpp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subjects/React */ "./js/subjects/React.ts");
/* harmony import */ var _subjects_React__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_subjects_React__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subjects/Java */ "./js/subjects/Java.ts");
/* harmony import */ var _subjects_Java__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_subjects_Java__WEBPACK_IMPORTED_MODULE_4__);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDQTtBQUNKO0FBQ0U7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvQ3BwLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvSmF2YS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL1JlYWN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvc3ViamVjdHMvU3ViamVjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL3N1YmplY3RzL1RlYWNoZXIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIFN1YmplY3RzIHtcbiAgZXhwb3J0IGludGVyZmFjZSBUZWFjaGVyIHtcbiAgICBleHBlcmllbmNlVGVhY2hpbmdDPzogbnVtYmVyO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENwcCBleHRlbmRzIFN1YmplY3Qge1xuICAgIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIFwiSGVyZSBpcyB0aGUgbGlzdCBvZiByZXF1aXJlbWVudHMgZm9yIENwcFwiO1xuICAgIH1cblxuICAgIGdldEF2YWlsYWJsZVRlYWNoZXIoKTogc3RyaW5nIHtcbiAgICAgIGlmICh0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nQyAmJiB0aGlzLnRlYWNoZXIuZXhwZXJpZW5jZVRlYWNoaW5nQyA+IDApIHtcbiAgICAgICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIk5vIGF2YWlsYWJsZSB0ZWFjaGVyXCI7XG4gICAgfVxuICB9XG59IiwibmFtZXNwYWNlIFN1YmplY3RzIHtcbiAgZXhwb3J0IGludGVyZmFjZSBUZWFjaGVyIHtcbiAgICBleHBlcmllbmNlVGVhY2hpbmdKYXZhPzogbnVtYmVyO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEphdmEgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgICBnZXRSZXF1aXJlbWVudHMoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBcIkhlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBKYXZhXCI7XG4gICAgfVxuXG4gICAgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdKYXZhICYmIHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdKYXZhID4gMCkge1xuICAgICAgICByZXR1cm4gYEF2YWlsYWJsZSBUZWFjaGVyOiAke3RoaXMudGVhY2hlci5maXJzdE5hbWV9YDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiTm8gYXZhaWxhYmxlIHRlYWNoZXJcIjtcbiAgICB9XG4gIH1cbn0iLCJuYW1lc3BhY2UgU3ViamVjdHMge1xuICBleHBvcnQgaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIGV4cGVyaWVuY2VUZWFjaGluZ1JlYWN0PzogbnVtYmVyO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFJlYWN0IGV4dGVuZHMgU3ViamVjdCB7XG4gICAgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gXCJIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3RcIjtcbiAgICB9XG5cbiAgICBnZXRBdmFpbGFibGVUZWFjaGVyKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ1JlYWN0ICYmIHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdSZWFjdCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGBBdmFpbGFibGUgVGVhY2hlcjogJHt0aGlzLnRlYWNoZXIuZmlyc3ROYW1lfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIk5vIGF2YWlsYWJsZSB0ZWFjaGVyXCI7XG4gICAgfVxuICB9XG59IiwibmFtZXNwYWNlIFN1YmplY3RzIHtcbiAgZXhwb3J0IGNsYXNzIFN1YmplY3Qge1xuICAgIHRlYWNoZXIhOiBUZWFjaGVyO1xuXG4gICAgc2V0VGVhY2hlcih0ZWFjaGVyOiBUZWFjaGVyKTogdm9pZCB7XG4gICAgICB0aGlzLnRlYWNoZXIgPSB0ZWFjaGVyO1xuICAgIH1cbiAgfVxufSIsIm5hbWVzcGFjZSBTdWJqZWN0cyB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgVGVhY2hlciB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3ViamVjdHMvVGVhY2hlclwiO1xuaW1wb3J0IFwiLi9zdWJqZWN0cy9TdWJqZWN0XCI7XG5pbXBvcnQgXCIuL3N1YmplY3RzL0NwcFwiO1xuaW1wb3J0IFwiLi9zdWJqZWN0cy9SZWFjdFwiO1xuaW1wb3J0IFwiLi9zdWJqZWN0cy9KYXZhXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9