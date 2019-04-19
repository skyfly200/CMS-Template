(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./contact.js":
/*!********************!*\
  !*** ./contact.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'dotenv'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).config();

const apiKey = process.env.MAILGUN_API_KEY;
const apiUrl = process.env.DOMAIN;
const contactEmail = process.env.CONTACT_EMAIL;

const mailgun = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'mailgun-js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))({
  apiKey,
  apiUrl
});

const generateResponse = (body, statusCode) => {
  return {
    headers: {
      "access-control-allow-methods": "POST",
      "access-control-allow-origin": "*",
      "content-type": "application/json"
    },
    statusCode: statusCode,
    body: JSON.stringify(body)
  };
};

const sendEmail = data => {
  const {
    from,
    to,
    subject,
    text,
    html
  } = data;
  return mailgun.messages().send({
    from,
    to,
    subject,
    text,
    html
  });
};

exports.handler = async (event, context, callback) => {
  // complain if method is not POST or event body is empty
  if (event.httpMethod !== "POST" || !event.body) {
    let response = generateResponse({
      status: "Invalid Request"
    }, 200);
    return callback(null, response);
  }

  const data = JSON.parse(event.body); //-- Make sure we have all required data. Otherwise, complain.

  if (!data.name || !data.email || !data.message) {
    let response = generateResponse({
      status: "missing-information"
    }, 200);
    callback(null, response);
    return;
  } // build the email object


  const email = {
    from: data.email,
    to: contactEmail,
    subject: data.company + " (" + data.industry + ") - " + data.name,
    text: data.problem,
    html: ""
  }; // attempt to send email

  try {
    const result = await sendEmail(email);
    let response = generateResponse({
      result: result
    }, 200);
    return callback(null, response);
  } catch (_unused) {
    let response = generateResponse({
      status: "Error Sending Email"
    }, 200);
    return callback(null, response);
  }
};

/***/ })

/******/ })));