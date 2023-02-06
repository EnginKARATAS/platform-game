// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"p5.play.js":[function(require,module,exports) {
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * p5.play
 *
 * @version 3.5
 * @author quinton-ashley
 * @year 2023
 * @license gpl-v3-only
 * @descripton p5.play is a 2D game engine that uses planck (Box2D) to simulate
 * physics and provides sprites, a tile system, input handling, and animations!
 */
p5.prototype.registerMethod('init', function p5PlayInit() {
  var _this$p5play,
      _this$p5play$os,
      _this$p5play2,
      _this$p5play2$autoDra,
      _this$p5play3,
      _this$p5play3$autoUpd,
      _this$p5play4,
      _this$p5play4$mouseTr,
      _this12 = this;

  if (typeof window.planck == 'undefined') {
    throw new Error('planck.js must be loaded before p5.play');
  } // store a reference to the p5 instance that p5play is being added to


  var pInst = this;
  var log = console.log; // shortcut

  this.log = console.log;
  var pl = planck; // set the velocity threshold to allow for slow moving objects

  pl.Settings.velocityThreshold = 0.19;
  var plScale = 60;
  this.p5play = this.p5play || {};
  (_this$p5play$os = (_this$p5play = this.p5play).os) !== null && _this$p5play$os !== void 0 ? _this$p5play$os : _this$p5play.os = {
    emulated: false
  };
  (_this$p5play2$autoDra = (_this$p5play2 = this.p5play).autoDrawSprites) !== null && _this$p5play2$autoDra !== void 0 ? _this$p5play2$autoDra : _this$p5play2.autoDrawSprites = true;
  (_this$p5play3$autoUpd = (_this$p5play3 = this.p5play).autoUpdateSprites) !== null && _this$p5play3$autoUpd !== void 0 ? _this$p5play3$autoUpd : _this$p5play3.autoUpdateSprites = true;
  (_this$p5play4$mouseTr = (_this$p5play4 = this.p5play).mouseTracking) !== null && _this$p5play4$mouseTr !== void 0 ? _this$p5play4$mouseTr : _this$p5play4.mouseTracking = true;
  this.p5play.mouseSprite = null;
  this.p5play.mouseSprites = [];
  this.p5play.standardizeKeyboard = false; // change the angle mode to degrees

  this.angleMode(p5.prototype.DEGREES); // scale to planck coordinates from p5 coordinates

  var scaleTo = function scaleTo(_ref, tileSize) {
    var x = _ref.x,
        y = _ref.y;
    return new pl.Vec2(x * tileSize / plScale, y * tileSize / plScale);
  };

  var scaleXTo = function scaleXTo(x, tileSize) {
    return x * tileSize / plScale;
  }; // scale from planck coordinates to p5 coordinates


  var scaleFrom = function scaleFrom(_ref2, tileSize) {
    var x = _ref2.x,
        y = _ref2.y;
    return new pl.Vec2(x / tileSize * plScale, y / tileSize * plScale);
  };

  var scaleXFrom = function scaleXFrom(x, tileSize) {
    return x / tileSize * plScale;
  };

  var fixRound = function fixRound(val) {
    return Math.abs(val - Math.round(val)) <= pl.Settings.linearSlop ? Math.round(val) : val;
  };

  var isArrowFunction = function isArrowFunction(fn) {
    return !/^(?:(?:\/\*[^(?:\*\/)]*\*\/\s*)|(?:\/\/[^\r\n]*))*\s*(?:(?:(?:async\s(?:(?:\/\*[^(?:\*\/)]*\*\/\s*)|(?:\/\/[^\r\n]*))*\s*)?function|class)(?:\s|(?:(?:\/\*[^(?:\*\/)]*\*\/\s*)|(?:\/\/[^\r\n]*))*)|(?:[_$\w][\w0-9_$]*\s*(?:\/\*[^(?:\*\/)]*\*\/\s*)*\s*\()|(?:\[\s*(?:\/\*[^(?:\*\/)]*\*\/\s*)*\s*(?:(?:['][^']+['])|(?:["][^"]+["]))\s*(?:\/\*[^(?:\*\/)]*\*\/\s*)*\s*\]\())/.test(fn.toString());
  };
  /**
   * Checks if the given string contains a valid collider type
   * or collider type code letter:
   *
   * 'd' or 'dynamic'
   * 's' or 'static'
   * 'k' or 'kinematic'
   * 'n' or 'none'
   *
   * @param {String} t type name
   * @returns {Boolean} true if the given string contains a valid collider type
   */


  function isColliderType(t) {
    var abr = t.slice(0, 2);
    return t == 'd' || t == 's' || t == 'k' || t == 'n' || abr == 'dy' || abr == 'st' || abr == 'ki' || abr == 'no';
  }
  /**
   * Returns an array with the line length, angle, and number of sides of a regular polygon
   *
   * @param {String} n name of the regular polygon
   * @param {Number} l side length
   * @returns {Boolean} an array [line, angle, sides]
   */


  function getRegularPolygon(n, l) {
    if (n == 'triangle') l = [l, -120, 3];else if (n == 'square') l = [l, -90, 4];else if (n == 'pentagon') l = [l, -72, 5];else if (n == 'hexagon') l = [l, -60, 6];else if (n == 'septagon') l = [l, -51.4285714286, 7];else if (n == 'octagon') l = [l, -45, 8];else if (n == 'enneagon') l = [l, -40, 9];else if (n == 'decagon') l = [l, -36, 10];else if (n == 'hendecagon') l = [l, -32.7272727273, 11];else if (n == 'dodecagon') l = [l, -30, 12];
    return l;
  }

  var spriteProps = ['bounciness', 'collider', 'color', 'density', 'd', 'debug', 'diameter', 'direction', // 'directionLock',
  'drag', 'dynamic', 'friction', 'fill', 'h', 'height', 'heading', 'isSuperFast', 'kinematic', 'layer', 'life', 'mass', 'rotation', 'rotationDrag', 'rotationLock', 'rotationSpeed', 'scale', 'shape', 'speed', 'static', 'stroke', 'strokeWeight', 'text', 'textColor', 'tileSize', 'visible', 'w', 'width', 'x', 'y'];
  var eventTypes = {
    _collisions: ['_collides', '_colliding', '_collided'],
    _overlappers: ['_overlaps', '_overlapping', '_overlapped']
  };
  p5.Vector.prototype._angleBetween = p5.Vector.prototype.angleBetween;

  p5.Vector.prototype.angleBetween = function (v) {
    var a = this._angleBetween(v);

    if (!isNaN(a)) return a;
    return 0;
  };
  /**
   * Look at the Sprite reference pages before reading these docs.
   *
   * https://p5play.org/learn/sprite.html
   *
   * Every sprite you create is added to the allSprites
   * group and put on the top layer, in front of all other
   * previously created sprites.
   *
   * @example
   *
   *   let rectangle = new Sprite(x, y, width, height);
   *
   *   let circle = new Sprite(x, y, diameter);
   *
   *   let line = new Sprite(x, y, [length, angle]);
   *
   * @class Sprite
   * @constructor
   * @param {String|SpriteAnimation|p5.Image} [aniName|ani|image]
   * @param {Number} x Horizontal position of the sprite
   * @param {Number} y Vertical position of the sprite
   * @param {Number} [width|diameter] Width of the placeholder rectangle and of
   * the collider until an image or new collider are set. *OR* If height is not
   * set then this parameter becomes the diameter of the placeholder circle.
   * @param {Number} [height] Height of the placeholder rectangle and of the collider
   * until an image or new collider are set
   * @param {String} [physics] collider type is 'dynamic' by default, can be
   * 'static', 'kinematic', or 'none'
   */


  var Sprite = /*#__PURE__*/function () {
    function Sprite(x, y, w, h, collider) {
      var _collider, _collider2, _collider3, _collider4, _this$layer, _collider5, _x, _y, _w, _h, _this$color, _this$textColor, _this$textSize;

      _classCallCheck(this, Sprite);

      this.p = pInst;
      this.idNum = this.p.world.spritesCreated;
      this.p.world.spritesCreated++;
      var args = Array.prototype.slice.call(arguments);
      var group, ani;

      if (args[0] !== undefined && args[0] instanceof Group) {
        group = args[0];
        args = args.slice(1);
      }

      if (!args.length) this._noArgs = true;

      if (args[0] !== undefined && isNaN(args[0]) && (typeof args[0] == 'string' || args[0] instanceof SpriteAnimation || args[0] instanceof p5.Image)) {
        // shift
        ani = args[0];
        args = args.slice(1);
      }

      if (args.length == 1 && typeof args[0] == 'number') {
        throw new FriendlyError('Sprite', 0, [args[0]]);
      }

      x = args[0];
      y = args[1];
      w = args[2];
      h = args[3];
      collider = args[4];
      this.originMode = 'center';

      if (Array.isArray(x)) {
        x = undefined;
        y = undefined;
        w = args[0];
        h = args[1];
        collider = args[2];
      } // if (w is chain array) or (diameter/side length and h is a
      // collider type or the name of a regular polygon)


      if (Array.isArray(w) || typeof h == 'string') {
        if (!isNaN(w)) w = Number(w);

        if (typeof w != 'number' && Array.isArray(w[0])) {
          this.originMode = 'start';
        }

        if (h !== undefined) {
          if (Array.isArray(h)) {
            throw new FriendlyError('Sprite', 1, ["[[".concat(w, "], [").concat(h, "]]")]);
          }

          if (isColliderType(h)) {
            collider = h;
          } else {
            w = getRegularPolygon(h, w);
          }

          h = undefined;
        }
      } else if (isNaN(w)) {
        collider = w;
        w = undefined;
      }
      /**
       * Groups the sprite belongs to, including allSprites
       *
       * @property groups
       * @type {Array}
       * @default [allSprites]
       */


      this.groups = [];
      this.p.allSprites.push(this);
      /**
       * Keys are the animation label, values are SpriteAnimation objects.
       *
       * @property animations
       * @type {Object}
       */

      this.animations = {};
      /**
       * If false, animations that are stopped before they are completed,
       * typically by a call to sprite.changeAni, will start at the frame
       * they were stopped at. If true, animations will always start playing from
       * frame 0 unless specified by the user in a separate anim.changeFrame
       * call.
       *
       * @property autoResetAnimations
       * @type {SpriteAnimation}
       * @default false
       */

      this.autoResetAnimations;
      /**
       * True if the sprite was removed from the world
       *
       * @property removed
       * @type {Boolean}
       * @default false
       */

      this.removed = false;

      if (group) {
        group.push(this);

        if (!ani) {
          for (var _ani in group.animations) {
            ani = _ani;
            break;
          }
        }
      } else {
        group = this.p.allSprites;
      }

      if (group.dynamic) (_collider = collider) !== null && _collider !== void 0 ? _collider : collider = 'dynamic';
      if (group.kinematic) (_collider2 = collider) !== null && _collider2 !== void 0 ? _collider2 : collider = 'kinematic';
      if (group.static) (_collider3 = collider) !== null && _collider3 !== void 0 ? _collider3 : collider = 'static';
      (_collider4 = collider) !== null && _collider4 !== void 0 ? _collider4 : collider = group.collider;
      this._shape = group.shape;
      /**
       * Cycles before self removal.
       * Set it to initiate a countdown, every draw cycle the property is
       * reduced by 1 unit. If less than or equal to 0, this sprite will be removed.
       *
       * @property life
       * @type {Number}
       * @default 100000000
       */

      this.life = 100000000;
      /**
       * The sprite's visibility.
       *
       * @property visible
       * @type {Boolean}
       * @default true
       */

      this.visible = true;
      /**
       * Contains all the collision callback functions for this sprite
       * when it comes in contact with other sprites or groups.
       */

      this._collides = {};
      this._colliding = {};
      this._collided = {};
      this._overlap = {};
      /**
       * Contains all the overlap callback functions for this sprite
       * when it comes in contact with other sprites or groups.
       */

      this._overlaps = {};
      this._overlapping = {};
      this._overlapped = {};
      this._collisions = new Map();
      this._overlappers = new Map();
      this.tileSize = group.tileSize || 1;

      var _this = this; // this.x and this.y are getters and setters that change this._pos internally
      // this.pos and this.position get this._position


      this._pos = {
        x: 0,
        y: 0
      };
      this._position = {
        get x() {
          return _this.x;
        },

        set x(val) {
          _this.x = val;
        },

        get y() {
          return _this.y;
        },

        set y(val) {
          _this.y = val;
        }

      }; // this._vel is used if the Sprite has no physics body

      this._vel = {
        x: 0,
        y: 0
      }; // this._velocity extends p5.Vector

      this._velocity = pInst.createVector.call(pInst);
      Object.defineProperty(this._velocity, 'x', {
        get: function get() {
          var val;
          if (!_this.body) val = _this._vel.x;else val = _this.body.getLinearVelocity().x;
          return fixRound(val / _this.tileSize);
        },
        set: function set(val) {
          val *= _this.tileSize;

          if (_this.body) {
            _this.body.setLinearVelocity(new pl.Vec2(val, _this.body.getLinearVelocity().y));
          } else {
            _this._vel.x = val;
          }
        }
      });
      Object.defineProperty(this._velocity, 'y', {
        get: function get() {
          var val;
          if (!_this.body) val = _this._vel.y;else val = _this.body.getLinearVelocity().y;
          return fixRound(val / _this.tileSize);
        },
        set: function set(val) {
          val *= _this.tileSize;

          if (_this.body) {
            _this.body.setLinearVelocity(new pl.Vec2(_this.body.getLinearVelocity().x, val));
          } else {
            _this._vel.y = val;
          }
        }
      });
      this._mirror = {
        x: 1,
        y: 1
      };
      this.mirror = {
        get x() {
          return _this._mirror.x < 0;
        },

        set x(val) {
          _this._mirror.x = val ? -1 : 1;
        },

        get y() {
          return _this._mirror.y < 0;
        },

        set y(val) {
          _this._mirror.y = val ? -1 : 1;
        }

      };
      this.layer = group.layer;
      (_this$layer = this.layer) !== null && _this$layer !== void 0 ? _this$layer : this.layer = this.p.allSprites.maxDepth() + 1;
      (_collider5 = collider) !== null && _collider5 !== void 0 ? _collider5 : collider = group.collider;

      if (!collider || typeof collider != 'string') {
        collider = 'dynamic';
      }

      this.collider = collider;
      (_x = x) !== null && _x !== void 0 ? _x : x = group.x;

      if (x === undefined) {
        x = this.p.width / this.p.allSprites.tileSize / 2;
        this._vertexMode = true;
      }

      (_y = y) !== null && _y !== void 0 ? _y : y = group.y;
      if (y === undefined) y = this.p.height / this.p.allSprites.tileSize / 2;
      (_w = w) !== null && _w !== void 0 ? _w : w = group.w || group.width || group.diameter;
      (_h = h) !== null && _h !== void 0 ? _h : h = group.h || group.height;
      if (typeof x == 'function') x = x(group.length - 1);
      if (typeof y == 'function') y = y(group.length - 1);
      this.x = x;
      this.y = y;

      if (ani) {
        if (ani instanceof p5.Image) {
          this.addAni(ani);
        } else {
          if (typeof ani == 'string') this._changeAni(ani);else this._animation = ani.clone();
        }

        var ts = this.tileSize;

        if (!w && (this.ani.w != 1 || this.ani.h != 1)) {
          w = this.ani.w / ts;

          if (this.shape != 'circle') {
            h = this.ani.h / ts;
          }
        }
      }

      this.mouse = new SpriteMouse();

      if (this.collider != 'none') {
        if (this._vertexMode) this.addCollider(w, h);else this.addCollider(0, 0, w, h);
      } else {
        this.w = w || (this.tileSize > 1 ? 1 : 50);
        this.h = h || this.w;
        if (w !== undefined && h === undefined) this._shape = 'circle';else this._shape = 'box';
      }

      this._scale = new Scale();
      Object.defineProperty(this._scale, 'x', {
        get: function get() {
          return this._x;
        },
        set: function set(val) {
          if (val == this._x) return;
          var scalarX = val / this._x;
          _this._w *= scalarX;
          _this._hw *= scalarX;

          _this._resizeCollider({
            x: scalarX,
            y: 1
          });

          this._x = val;
          this._avg = (this._x + this._y) * 0.5;
        }
      });
      Object.defineProperty(this._scale, 'y', {
        get: function get() {
          return this._y;
        },
        set: function set(val) {
          if (val == this._y) return;
          var scalarY = val / this._y;

          if (_this._h) {
            this._h *= scalarY;
            this._hh *= scalarY;
          }

          _this._resizeCollider({
            x: 1,
            y: scalarY
          });

          this._y = val;
          this._avg = (this._x + this._y) * 0.5;
        }
      });
      /**
       * The sprite's position on the previous frame.
       *
       * @property prevPos
       * @type {object}
       */

      this.prevPos = {
        x: x,
        y: y
      };
      this._dest = {
        x: x,
        y: y
      };
      this._destIdx = 0;
      this.drag = 0;
      /**
       * When the sprite.debug property is set to true you can see the
       * sprite's physics body collider.
       *
       * @property debug
       * @type {boolean}
       * @default false
       */

      this.debug = false;
      this._shift = {};
      var gvx = group.vel.x || 0;
      var gvy = group.vel.y || 0;
      if (typeof gvx == 'function') gvx = gvx(group.length - 1);
      if (typeof gvy == 'function') gvy = gvy(group.length - 1);
      this.vel.x = gvx;
      this.vel.y = gvy;

      var _iterator = _createForOfIteratorHelper(spriteProps),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var prop = _step.value;
          if (prop == 'collider' || prop == 'x' || prop == 'y') continue;
          var val = group[prop];
          if (val === undefined) continue;
          if (typeof val == 'function') val = val(group.length - 1);

          if (_typeof(val) == 'object') {
            this[prop] = Object.assign({}, val);
          } else {
            this[prop] = val;
          }
        } // custom group properties "sprite group traits"
        // that are non-default sprite properties

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.groups),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var g = _step2.value;
          var traits = {};
          var props = Object.keys(g);

          for (var _i = 0, _props = props; _i < _props.length; _i++) {
            var _prop = _props[_i];
            if (!isNaN(_prop) || _prop[0] == '_') continue;
            traits[_prop] = null;
          } // delete these traits


          var deletes = ['collider', 'idNum', 'p', 'parent', 'length', '_collides', '_colliding', '_collided', '_collisions', '_overlap', '_overlaps', '_overlapping', '_overlapped', '_overlappers', 'animation', 'animations', 'autoCull', 'Sprite', 'GroupSprite', 'Group', 'SubGroup', 'vel', 'mirror', 'mouse'];

          for (var _i2 = 0, _deletes = deletes; _i2 < _deletes.length; _i2++) {
            var d = _deletes[_i2];
            delete traits[d];
          }

          for (var _prop2 in traits) {
            var _val = g[_prop2];
            if (_val === undefined) continue;

            if (typeof _val == 'function') {
              if (isArrowFunction(_val)) _val = _val();
            }

            if (_typeof(_val) == 'object') {
              this[_prop2] = Object.assign({}, _val);
            } else {
              this[_prop2] = _val;
            }
          }
        }
        /**
         * @property strokeWeight
         * @type {Number}
         * @default undefined
         */

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.strokeWeight;
      (_this$color = this.color) !== null && _this$color !== void 0 ? _this$color : this.color = this.p.color(this.p.random(30, 245), this.p.random(30, 245), this.p.random(30, 245));
      (_this$textColor = this.textColor) !== null && _this$textColor !== void 0 ? _this$textColor : this.textColor = this.p.color(0);
      (_this$textSize = this.textSize) !== null && _this$textSize !== void 0 ? _this$textSize : this.textSize = this.tileSize == 1 ? this.p.canvas ? this.p.textSize() : 12 : 0.8;
      var shouldCreateSensor = false;

      var _iterator3 = _createForOfIteratorHelper(this.groups),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _g = _step3.value;

          if (_g._hasOverlaps) {
            shouldCreateSensor = true;
            break;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (shouldCreateSensor && !this._hasOverlaps) this._createSensors();
      this._dimensionsUndefined = w === undefined && h === undefined;
    }
    /**
     * EXPERIMENTAL method! Subject to change!
     *
     * Adds a collider (fixture) to the sprite's physics body.
     *
     * It accepts parameters in a similar format to the Sprite
     * constructor except the first two parameters are x and y offsets,
     * the distance new collider should be from the center of the sprite.
     *
     * One limitation of the current implementation is that the collider
     * type can't be changed without losing every collider added to the
     * sprite besides the first. This will be fixed in a future release.
     *
     * @method addCollider
     * @param {Number} offsetX distance from the center of the sprite
     * @param {Number} offsetY distance from the center of the sprite
     * @param {Number} w width of the collider
     * @param {Number} h height of the collider
     */


    _createClass(Sprite, [{
      key: "addCollider",
      value: function addCollider(offsetX, offsetY, w, h) {
        var _offsetX, _offsetY, _w2, _props$density, _props$friction, _props$restitution;

        var args = Array.prototype.slice.call(arguments);
        var path, shape;

        if (args.length < 3) {
          offsetX = 0;
          offsetY = 0;
          w = args[0];
          h = args[1];
          this._vertexMode = true;
        }

        (_offsetX = offsetX) !== null && _offsetX !== void 0 ? _offsetX : offsetX = 0;
        (_offsetY = offsetY) !== null && _offsetY !== void 0 ? _offsetY : offsetY = 0;
        (_w2 = w) !== null && _w2 !== void 0 ? _w2 : w = this._w;

        if (!this.body && this.shape && this.shape != 'circle') {
          var _h2;

          (_h2 = h) !== null && _h2 !== void 0 ? _h2 : h = this._h;
        } // if (w is chain array) or (diameter/side length and h is a
        // collider type or the name of a regular polygon)


        if (Array.isArray(w) || typeof h == 'string') {
          if (!isNaN(w)) w = Number(w);

          if (typeof w != 'number' && Array.isArray(w[0])) {
            this.originMode = 'start';
          }

          if (typeof h == 'string') {
            path = getRegularPolygon(h, w);
            h = undefined;
          } else {
            path = w;
          }
        } else {
          var _shape, _shape2;

          if (w !== undefined && h === undefined) (_shape = shape) !== null && _shape !== void 0 ? _shape : shape = 'circle';
          (_shape2 = shape) !== null && _shape2 !== void 0 ? _shape2 : shape = 'box';
        }

        if (shape == 'box' || shape == 'circle') {
          var _w3, _h3;

          (_w3 = w) !== null && _w3 !== void 0 ? _w3 : w = this.tileSize > 1 ? 1 : 50;
          (_h3 = h) !== null && _h3 !== void 0 ? _h3 : h = w;
        }

        var props = {};
        var dimensions; // the actual dimensions of the collider for a box or circle are a
        // little bit smaller so that they can slid past each other
        // when in a tile grid

        if (shape == 'box' || shape == 'circle') {
          dimensions = scaleTo({
            x: w - 0.08,
            y: h - 0.08
          }, this.tileSize);
        }

        var s;

        if (shape == 'box') {
          s = pl.Box(dimensions.x / 2, dimensions.y / 2, scaleTo({
            x: offsetX,
            y: offsetY
          }, this.tileSize), 0);
        } else if (shape == 'circle') {
          s = pl.Circle(scaleTo({
            x: offsetX,
            y: offsetY
          }, this.tileSize), dimensions.x / 2);
        } else if (path) {
          var checkVert = function checkVert() {
            if (vert.x < min.x) min.x = vert.x;
            if (vert.y < min.y) min.y = vert.y;
            if (vert.x > max.x) max.x = vert.x;
            if (vert.y > max.y) max.y = vert.y;
          };

          var vecs = [{
            x: 0,
            y: 0
          }];
          var vert = {
            x: 0,
            y: 0
          };
          var min = {
            x: 0,
            y: 0
          };
          var max = {
            x: 0,
            y: 0
          }; // if the path is an array of position arrays

          var usesVertices = Array.isArray(path[0]);
          var x, y;

          if (usesVertices) {
            if (this._vertexMode) {
              x = path[0][0];
              y = path[0][1]; // log(x, y);

              if (!this.body) {
                this.x = x;
                this.y = y;
              } else {
                x = this.x - this._relativeOrigin.x;
                y = this.y - this._relativeOrigin.y;
                vecs.pop();
              }
            }

            for (var i = 0; i < path.length; i++) {
              if (this._vertexMode) {
                if (i == 0 && !this.body) continue; // verts are relative to the first vert

                vert.x = path[i][0] - x;
                vert.y = path[i][1] - y;
                log(i, vert.x, vert.y);
              } else {
                vert.x += path[i][0];
                vert.y += path[i][1];
              }

              vecs.push({
                x: vert.x,
                y: vert.y
              });
              checkVert();
            }
          } else {
            var rep = 1;
            if (path.length % 2) rep = path[path.length - 1];
            var mod = rep > 0 ? 1 : -1;
            rep = Math.abs(rep);
            var ang = 0;

            for (var _i3 = 0; _i3 < rep; _i3++) {
              for (var j = 0; j < path.length - 1; j += 2) {
                var len = path[j];
                ang += path[j + 1];
                vert.x += len * this.p.cos(ang);
                vert.y += len * this.p.sin(ang);
                vecs.push({
                  x: vert.x,
                  y: vert.y
                });
                checkVert();
              }

              ang *= mod;
            }
          }

          if (Math.abs(Math.abs(vecs[0].x) - Math.abs(vecs[vecs.length - 1].x)) <= pl.Settings.linearSlop && Math.abs(Math.abs(vecs[0].y) - Math.abs(vecs[vecs.length - 1].y)) <= pl.Settings.linearSlop) {
            shape = 'polygon';
            this.originMode = 'center';
          } else {
            shape = 'chain';
          }

          w = max.x - min.x;
          this._hw = w * 0.5;
          h = max.y - min.y;
          this._hh = h * 0.5;
          var isConvex = false;

          if (shape == 'polygon' && this._isConvexPoly(vecs.slice(0, -1))) {
            isConvex = true;
          }

          if (this.originMode == 'start') {
            for (var _i4 = 0; _i4 < vecs.length; _i4++) {
              vecs[_i4] = scaleTo(vecs[_i4], this.tileSize);
            }
          } else {
            // the center relative to the first vertex
            var centerX = 0;
            var centerY = 0; // use centroid of a triangle method to get center
            // average of all vertices

            var sumX = 0;
            var sumY = 0;
            var vl = vecs.length; // last vertex is same as first

            if (shape == 'polygon' || isConvex) vl--;

            for (var _i5 = 0; _i5 < vl; _i5++) {
              sumX += vecs[_i5].x;
              sumY += vecs[_i5].y;
            }

            centerX = sumX / vl;
            centerY = sumY / vl;

            if (!this.body) {
              this._relativeOrigin = {
                x: centerX,
                y: centerY
              };
            } // use bounding box method to get center
            // not how planck does it!
            // centerX = this._hw - min.x;
            // centerY = this._hh - min.y;


            if (this._vertexMode && usesVertices) {
              if (!this.body) {
                // repositions the sprite's x, y coordinates
                // to be in the center of the shape
                this.x += centerX;
                this.y += centerY;
              } else {
                centerX = this._relativeOrigin.x;
                centerY = this._relativeOrigin.y;
              }
            }

            for (var _i6 = 0; _i6 < vecs.length; _i6++) {
              var vec = vecs[_i6];
              vecs[_i6] = scaleTo({
                x: vec.x + offsetX - centerX,
                y: vec.y + offsetY - centerY
              }, this.tileSize);
            }
          }

          if (!isConvex || vecs.length - 1 > pl.Settings.maxPolygonVertices || this._shape == 'chain') {
            shape = 'chain';
          }

          if (shape == 'polygon') {
            s = pl.Polygon(vecs);
          } else if (shape == 'chain') {
            s = pl.Chain(vecs, false);
            props.density = 0;
            props.restitution = 0;
          }
        }

        props.shape = s;
        (_props$density = props.density) !== null && _props$density !== void 0 ? _props$density : props.density = this.density || 5;
        (_props$friction = props.friction) !== null && _props$friction !== void 0 ? _props$friction : props.friction = this.friction || 0.5;
        (_props$restitution = props.restitution) !== null && _props$restitution !== void 0 ? _props$restitution : props.restitution = this.bounciness || 0.2;

        if (!this.body) {
          this.body = this.p.world.createBody({
            position: scaleTo({
              x: this.x,
              y: this.y
            }, this.tileSize),
            type: this.collider
          });
          this.body.sprite = this;
        }

        if (!this._shape) {
          this._shape = shape;
        }

        this.body.createFixture(props);
        this._w = w;
        this._hw = w * 0.5;

        if (shape == 'circle') {
          this._diameter = w;
        } else {
          this._h = h;
          this._hh = h * 0.5;
        }
      }
      /**
       * Removes the physics body colliders from the sprite but not
       * overlap sensors.
       *
       * @private _removeColliders
       */

    }, {
      key: "_removeColliders",
      value: function _removeColliders() {
        this._collides = {};
        this._colliding = {};
        this._collided = {};

        this._removeFixtures(false);
      }
      /**
       * EXPERIMENTAL! This function doesn't work yet and will be changed.
       *
       * Adds a joint between this sprite and another sprite.
       *
       * @param {Sprite} spriteB the sprite to add a joint to
       * @param {String} [type] the type of joint
       * @param {Object} [props] the joint options
       */

    }, {
      key: "addJoint",
      value: function addJoint(spriteB, type, props) {
        var _props2, _type;

        var spriteA = this;
        (_props2 = props) !== null && _props2 !== void 0 ? _props2 : props = {};
        /*
         * frequencyHz, dampingRatio, collideConnected, userData, ratio,
         * enableLimit, enableMotor, lowerAngle, maxMotorTorque
         * maxMotorForce, motorSpeed, referenceAngle, upperAngle, maxForce
         * maxTorque, localAxisA, angularOffset, joint1, joint2,
         * correctionFactor
         */

        if (props.motorSpeed) props.enableMotor = true; // function genProps(a, b) {

        props = Object.assign(props, {
          bodyA: spriteA.body,
          bodyB: spriteB.body,
          length: props.length != undefined ? scaleXTo(props.length) : null,
          maxLength: props.maxLength != undefined ? scaleXTo(props.maxLength) : null,
          lengthA: props.lengthA != undefined ? scaleXTo(props.lengthA) : null,
          lengthB: props.lengthB != undefined ? scaleXTo(props.lengthB) : null,
          groundAnchorA: props.groundAnchorA ? scaleXTo(props.groundAnchorA) : new pl.Vec2(0, 0),
          groundAnchorB: props.groundAnchorB ? scaleXTo(props.groundAnchorB) : new pl.Vec2(0, 0),
          upperTranslation: props.upperTranslation ? scaleXTo(props.upperTranslation) : 1,
          lowerTranslation: props.lowerTranslation ? scaleXTo(props.lowerTranslation) : 1,
          linearOffset: props.linearOffset ? scaleTo(props.linearOffset) : new pl.Vec2(0, 0)
        });

        if (props.anchorA) {
          props.localAnchorA = scaleTo(props.anchorA);
        } else if (props.localAnchorA) {
          props.localAnchorA = scaleTo(props.localAnchorA);
        } else {
          props.localAnchorA = new pl.Vec2(0, 0);
        }

        if (props.anchorB) {
          props.localAnchorB = scaleTo(props.anchorB);
        } else if (props.localAnchorB) {
          props.localAnchorB = scaleTo(props.localAnchorB);
        } else {
          props.localAnchorB = new pl.Vec2(0, 0);
        } // 	return props;
        // }


        (_type = type) !== null && _type !== void 0 ? _type : type = 'distance';
        var j;

        if (type == 'distance') {
          j = pl.DistanceJoint(props);
        } else if (type == 'orbit') {// let s = new Sprite([
          // 	[spriteA.x, spriteA.y],
          // 	[spriteB.x, spriteB.y]
          // ]);
          // s.overlaps(allSprites);
          // j = pl.DistanceJoint(genProps(spriteA, s));
          // this.p.world.createJoint(j);
          // genProps(s, spriteB);
          // j = pl.RevoluteJoint(props, s.body, spriteB.body, spriteB.body.getWorldCenter());
        } else if (type == 'pulley') {
          j = pl.PulleyJoint(props);
        } else if (type == 'wheel') {
          j = pl.WheelJoint(props);
        } else if (type == 'rope') {
          j = pl.RopeJoint(props);
        } else if (type == 'weld') {
          j = pl.WeldJoint(props);
        } else if (type == 'revolute') {
          j = pl.RevoluteJoint(props, spriteA.body, spriteB.body, spriteA.body.getWorldCenter());
        } else if (type == 'gear') {
          j = pl.GearJoint(props);
        } else if (type == 'friction') {
          j = pl.FrictionJoint(props);
        } else if (type == 'motor') {
          j = pl.MotorJoint(props);
        } else if (type == 'prismatic') {
          j = pl.PrismaticJoint(props);
        } else if (type == 'mouse') {
          /*j = new box2d.b2MouseJointDef();
              j.bodyA = bodyA!=null?bodyA.body:b2world.CreateBody(new box2d.b2BodyDef());
              j.bodyB = bodyB.body;
              j.target = b2scaleTo(props.xy);
              j.collideConnected = true;
              j.maxForce = props.maxForce||(1000.0 * bodyB.body.GetMass());
              j.frequencyHz = props.frequency||5;  // Try a value less than 5 (0 for no elasticity)
              j.dampingRatio = props.damping||0.9; // Ranges between 0 and 1 (1 for no springiness)
              bodyB.body.SetAwake(true);
              bodyA=bodyB;*/
        }

        return this.p.world.createJoint(j);
      }
      /**
       * Removes overlap sensors from the sprite.
       *
       * @private _removeSensors
       */

    }, {
      key: "_removeSensors",
      value: function _removeSensors() {
        this._overlap = {};
        this._overlaps = {};
        this._overlapping = {};
        this._overlapped = {};

        this._removeFixtures(true);
      } // removes sensors or colliders

    }, {
      key: "_removeFixtures",
      value: function _removeFixtures(isSensor) {
        var prevFxt;

        for (var fxt = this.fixtureList; fxt; fxt = fxt.getNext()) {
          if (fxt.m_isSensor == isSensor) {
            var _fxt = fxt.m_next;
            fxt.destroyProxies(this.p.world.m_broadPhase);

            if (!prevFxt) {
              this.body.m_fixtureList = _fxt;
            } else {
              prevFxt.m_next = _fxt;
            }
          } else {
            prevFxt = fxt;
          }
        }
      }
      /**
       * Clones the collider's props to be transferred to a new collider.
       * @private
       */

    }, {
      key: "_cloneBodyProps",
      value: function _cloneBodyProps() {
        var body = {};
        var props = [].concat(spriteProps);
        var deletes = ['w', 'h', 'width', 'height', 'shape', 'd', 'diameter', 'dynamic', 'static', 'kinematic', 'collider', 'heading', 'direction'];

        for (var _i7 = 0, _deletes2 = deletes; _i7 < _deletes2.length; _i7++) {
          var del = _deletes2[_i7];
          var i = props.indexOf(del);
          if (i >= 0) props.splice(i, 1);
        }

        var _iterator4 = _createForOfIteratorHelper(props),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var prop = _step4.value;
            body[prop] = this[prop];
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return body;
      } // get aabb() {
      // 	return getAABB(this);
      // }
      // set advance(val) {
      // 	this.body.advance(val);
      // }
      // set angularImpulse(val) {
      // 	this.body.applyAngularImpulse(val, true);
      // }

      /**
       * This property disables the ability for a sprite to "sleep".
       *
       * "Sleeping" sprites are not included in the physics simulation, a
       * sprite starts "sleeping" when it stops moving and doesn't collide
       * with anything that it wasn't already _touching.
       *
       * @property allowSleeping
       * @type {Boolean}
       * @default true
       */

    }, {
      key: "allowSleeping",
      get: function get() {
        return this.body.getSleepingAllowed();
      },
      set: function set(val) {
        this.body.setSleepingAllowed(val);
      }
      /**
       * Reference to the sprite's current animation.
       *
       * @property animation
       * @type {SpriteAnimation}
       */

    }, {
      key: "animation",
      get: function get() {
        return this._animation;
      },
      set: function set(val) {
        this.changeAni(val);
      }
    }, {
      key: "ani",
      get: function get() {
        return this._animation;
      },
      set: function set(val) {
        this.changeAni(val);
      }
    }, {
      key: "anis",
      get: function get() {
        return this.animations;
      }
      /**
       * The bounciness of the sprite's physics body.
       *
       * @property bounciness
       * @type {Number}
       * @default 0.2
       */

    }, {
      key: "bounciness",
      get: function get() {
        if (!this.fixture) return;
        return this.fixture.getRestitution();
      },
      set: function set(val) {
        for (var fxt = this.fixtureList; fxt; fxt = fxt.getNext()) {
          fxt.setRestitution(val);
        }
      }
      /**
       * The center of mass of the sprite's physics body.
       *
       * @property centerOfMass
       * @type {Number}
       */

    }, {
      key: "centerOfMass",
      get: function get() {
        return scaleFrom(this.body.getWorldCenter(), this.tileSize);
      }
      /**
       * The sprite's collider type. Default is 'dynamic'.
       *
       * The collider type can be one of the following strings:
       * 'dynamic', 'static', 'kinematic', 'none'.
       *
       * @property collider
       * @type {String}
       * @default 'dynamic'
       */

    }, {
      key: "collider",
      get: function get() {
        return this._collider;
      },
      set: function set(val) {
        val = val.toLowerCase();
        var c = val[0];
        if (c == 'd') val = 'dynamic';
        if (c == 's') val = 'static';
        if (c == 'k') val = 'kinematic';
        if (c == 'n') val = 'none';

        if (this._collider === undefined) {
          this._collider = val;
          return;
        }

        if (val == this._collider) return;
        var oldCollider = this._collider;
        this._collider = val;
        if (oldCollider !== undefined) this._reset();
      }
    }, {
      key: "_reset",
      value: function _reset() {
        var bodyProps;

        if (this._collider != 'none') {
          bodyProps = this._cloneBodyProps();
        }

        var v;

        if (this._shape == 'chain' || this._shape == 'polygon') {
          v = this._getVertices(true);
          this._vertexMode = true;
        } // remove body


        if (this.body) {
          this.p.world.destroyBody(this.body);
          this.body = undefined;
        } // replace colliders and overlap sensors


        if (this._collider != 'none') {
          if (v) {
            this.addCollider(0, 0, v);
          } else {
            this.addCollider();
          }

          if (this._hasOverlaps) {
            this._createSensors();
          }

          for (var prop in bodyProps) {
            if (bodyProps[prop] !== undefined) {
              this[prop] = bodyProps[prop];
            }
          }
        }
      }
    }, {
      key: "_parseColor",
      value: function _parseColor(val) {
        var _this$p;

        if (val instanceof p5.Color) {
          return val;
        } else if (_typeof(val) != 'object') {
          if (typeof val == 'string' && val.length == 1) {
            return this.p.colorPal(val);
          } else {
            return this.p.color(val);
          }
        }

        return (_this$p = this.p).color.apply(_this$p, _toConsumableArray(val.levels));
      }
      /**
       * The sprite's current color. By default sprites get a random color.
       *
       * @property color
       * @type {p5.Color}
       * @default random color
       */

    }, {
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set(val) {
        this._color = this._parseColor(val);
      }
      /**
       * @deprecated shapeColor
       */

    }, {
      key: "shapeColor",
      get: function get() {
        return this._color;
      },
      set: function set(val) {
        this.color = val;
      }
      /**
       * Alias for sprite.fillColor
       *
       * @property fill
       * @type {p5.Color}
       * @default random color
       */

    }, {
      key: "fill",
      get: function get() {
        return this._color;
      },
      set: function set(val) {
        this._color = this._parseColor(val);
      }
      /**
       * Alias for sprite.color
       *
       * @property fillColor
       * @type {p5.Color}
       * @default random color
       */

    }, {
      key: "fillColor",
      get: function get() {
        return this._color;
      },
      set: function set(val) {
        this._color = this._parseColor(val);
      }
      /**
       * Alias for sprite.strokeColor
       *
       * @property stroke
       * @type {p5.Color}
       */

    }, {
      key: "stroke",
      get: function get() {
        return this._stroke;
      },
      set: function set(val) {
        this._stroke = this._parseColor(val);
      }
      /**
       * The sprite's stroke current color. By default the stroke of a sprite
       * indicates its collider type.
       *
       * @property strokeColor
       * @type {p5.Color}
       */

    }, {
      key: "strokeColor",
      get: function get() {
        return this._stroke;
      },
      set: function set(val) {
        this._stroke = this._parseColor(val);
      }
      /**
       * The sprite's current text color. Black by default.
       *
       * @property textColor
       * @type {p5.Color}
       * @default black (#000000)
       */

    }, {
      key: "textColor",
      get: function get() {
        return this._textColor;
      },
      set: function set(val) {
        this._textColor = this._parseColor(val);
      }
      /**
       * The density of the sprite's physics body.
       *
       * @property density
       * @type {Number}
       */

    }, {
      key: "density",
      get: function get() {
        if (!this.fixture) return;
        return this.fixture.getDensity();
      },
      set: function set(val) {
        for (var fxt = this.fixtureList; fxt; fxt = fxt.getNext()) {
          fxt.setDensity(val);
        }
      }
      /**
       * Use .layer instead.
       *
       * @deprecated depth
       */

    }, {
      key: "depth",
      get: function get() {
        console.warn('sprite.depth is deprecated, use sprite.layer instead');
        return this.layer;
      },
      set: function set(val) {
        console.warn('sprite.depth is deprecated, use sprite.layer instead');
        this.layer = val;
      }
      /**
       * The angle of the sprite's movement or it's rotation angle if the
       * sprite is not moving.
       *
       * @property direction
       * @type {Number}
       * @default 0 ("right")
       */

    }, {
      key: "direction",
      get: function get() {
        if (this.body && (this.vel.x !== 0 || this.vel.y !== 0)) {
          return this.p.atan2(this.vel.y, this.vel.x);
        }

        if (!this._direction) return this.rotation;
        return this._direction;
      },
      set: function set(val) {
        if (typeof val == 'string') {
          this._heading = val;
          var dir = val.toLowerCase().replaceAll(/[ _-]/g, '');
          var dirs = {
            up: -90,
            down: 90,
            left: 180,
            right: 0,
            upright: -45,
            rightup: -45,
            upleft: -135,
            leftup: -135,
            downright: 45,
            rightdown: 45,
            downleft: 135,
            leftdown: 135,
            forward: this.rotation,
            backward: this.rotation + 180
          };
          val = dirs[dir];
        }

        this._direction = val;
        var speed = this.speed;
        this.vel.x = this.p.cos(val) * speed;
        this.vel.y = this.p.sin(val) * speed;
      }
      /**
       * The amount of resistance a sprite has to being moved.
       *
       * @property drag
       * @type {Number}
       * @default 0
       */

    }, {
      key: "drag",
      get: function get() {
        if (this.body) return this.body.getLinearDamping();else return Infinity;
      },
      set: function set(val) {
        if (this.body) this.body.setLinearDamping(val);
      }
      /**
       * Displays the sprite.
       *
       * This function is called automatically at
       * the end of each p5.js draw function call but it can also be run
       * separately to customize the order sprites are drawn in relation
       * to other stuff drawn to the p5.js canvas. Also see the sprite.layer
       * property.
       *
       * A sprite's draw function can be overridden with a
       * custom draw function, in which the center of the sprite is
       * at (0, 0).
       *
       * @example
       * sprite.draw = function() {
       *   // an oval
       *   ellipse(0,0,20,10);
       * }
       *
       * @method draw
       */

    }, {
      key: "draw",
      get: function get() {
        return this._display;
      },
      set: function set(val) {
        this._draw = val;
      }
      /**
       * True if the sprite's physics body is dynamic.
       *
       * @property dynamic
       * @type {Boolean}
       * @default true
       */

    }, {
      key: "dynamic",
      get: function get() {
        if (!this.body) return undefined;
        return this.body.isDynamic();
      },
      set: function set(val) {
        if (val) this.collider = 'dynamic';
      }
      /**
       * If true the sprite can not rotate.
       *
       * @property rotationLock
       * @type {Boolean}
       * @default false
       */

    }, {
      key: "rotationLock",
      get: function get() {
        if (!this.body) return undefined;
        return this.body.isFixedRotation();
      },
      set: function set(val) {
        if (this.body) this.body.setFixedRotation(val);
      }
      /**
       * Returns the first node in a linked list of the planck physics
       * body's fixtures.
       */

    }, {
      key: "fixture",
      get: function get() {
        return this.fixtureList;
      }
      /**
       * Returns the first node in a linked list of the planck physics
       * body's fixtures.
       */

    }, {
      key: "fixtureList",
      get: function get() {
        if (!this.body) return null;
        return this.body.getFixtureList();
      }
      /**
       * The amount the sprite's physics body resists moving
       * when rubbing against another physics body.
       *
       * @property friction
       * @type {Number}
       * @default 0.5
       */

    }, {
      key: "friction",
      get: function get() {
        if (!this.fixture) return;
        return this.fixture.getFriction();
      },
      set: function set(val) {
        for (var fxt = this.fixtureList; fxt; fxt = fxt.getNext()) {
          fxt.setFriction(val);
        }
      }
      /**
       * The sprite's heading. This is a string that can be set to
       * "up", "down", "left", "right", "upRight", "upLeft", "downRight"
       *
       * It ignores cardinal direction word order, capitalization, spaces,
       * underscores, and dashes.
       *
       * @property heading
       * @type {String}
       * @default undefined
       */

    }, {
      key: "heading",
      get: function get() {
        return this._heading;
      },
      set: function set(val) {
        this.direction = val;
      }
      /**
       * Use .static instead.
       *
       * @deprecated immovable
       */

    }, {
      key: "immovable",
      get: function get() {
        console.warn('sprite.immovable is deprecated, use sprite.static instead');
        return this.body.isStatic();
      },
      set: function set(val) {
        console.warn('sprite.immovable is deprecated, use sprite.static instead');
        if (val) this.body.setStatic();
      } // set impulse(val) {
      // 	this.body.applyLinearImpulse(val, this.body.getWorldCenter(), true);
      // }
      // get inertia() {
      // 	return this.body.getInertia();
      // }

      /**
       * A reference to the sprite's current image.
       *
       * @property img
       * @type {SpriteAnimation}
       */

    }, {
      key: "img",
      get: function get() {
        return this._animation.frameImage;
      },
      set: function set(val) {
        this.changeAni(val);
      }
      /**
       * A reference to the sprite's current image.
       *
       * @property image
       * @type {SpriteAnimation}
       */

    }, {
      key: "image",
      get: function get() {
        return this._animation.frameImage;
      },
      set: function set(val) {
        this.changeAni(val);
      }
      /**
       * True if the sprite is moving.
       *
       * @property isMoving
       * @type {Boolean}
       * @readonly
       */

    }, {
      key: "isMoving",
      get: function get() {
        return this.vel.x != 0 || this.vel.y != 0;
      }
      /**
       * Set this to true if the sprite goes really fast to prevent
       * inaccurate physics simulation.
       *
       * @property isSuperFast
       * @type {Boolean}
       * @default false
       */

    }, {
      key: "isSuperFast",
      get: function get() {
        if (!this.body) return undefined;
        return this.body.isBullet();
      },
      set: function set(val) {
        if (this.body) this.body.setBullet(val);
      } // get joint() {
      // 	return this.body.getJointList().joint;
      // }
      // get jointList() {
      // 	return this.body.getJointList();
      // }

      /**
       * True if the sprite's physics body is kinematic.
       *
       * @property kinematic
       * @type {Boolean}
       * @default false
       */

    }, {
      key: "kinematic",
      get: function get() {
        if (!this.body) return undefined;
        return this.body.isKinematic();
      },
      set: function set(val) {
        if (val) this.collider = 'kinematic';
      }
      /**
       * The mass of the sprite's physics body.
       *
       * @property mass
       * @type {Number}
       */

    }, {
      key: "mass",
      get: function get() {
        if (!this.body) return undefined;
        return this.body.getMass();
      },
      set: function set(val) {
        if (!this.body) return;
        var t = this.massData;
        t.mass = val;
        this.body.setMassData(t);
      }
    }, {
      key: "massData",
      get: function get() {
        var t = {
          I: 0,
          center: new pl.Vec2(0, 0),
          mass: 0
        };
        this.body.getMassData(t);
        t.center = scaleFrom(t.center, this.tileSize);
        return t;
      } // set massData(val) {
      // 	val.center = scaleTo(val.center);
      // 	this.body.setMassData(val);
      // }
      // get next() {
      // 	return this.body.getNext();
      // }

      /**
       * Verbose alias for sprite.prevPos
       *
       * @property previousPosition
       * @type {object}
       */

    }, {
      key: "previousPosition",
      get: function get() {
        return this.prevPos;
      },
      set: function set(val) {
        this.prevPos = val;
      }
      /**
       * The angle of the sprite's rotation, not the direction it is moving.
       *
       * @property rotation
       * @type {Number}
       * @default 0
       */

    }, {
      key: "rotation",
      get: function get() {
        if (!this.body) return this._angle || 0;

        if (this.p._angleMode === p5.prototype.DEGREES) {
          return p5.prototype.degrees(this.body.getAngle());
        }

        return this.body.getAngle();
      },
      set: function set(val) {
        if (this.body) {
          if (this.p._angleMode === p5.prototype.DEGREES) {
            this.body.setAngle(p5.prototype.radians(val));
          } else {
            this.body.setAngle(val);
          }
        } else {
          this._angle = val;
        }
      }
      /**
       * The amount the sprite resists rotating.
       *
       * @property rotationDrag
       * @type {Number}
       * @default 0
       */

    }, {
      key: "rotationDrag",
      get: function get() {
        if (!this.body) return undefined;
        return this.body.getAngularDamping();
      },
      set: function set(val) {
        if (this.body) this.body.setAngularDamping(val);
      }
      /**
       * The speed of the sprite's rotation.
       *
       * @property rotationSpeed
       * @type {Number}
       * @default 0
       */

    }, {
      key: "rotationSpeed",
      get: function get() {
        if (this.body) return this.body.getAngularVelocity();
        return this._rotationSpeed || 0;
      },
      set: function set(val) {
        if (this.body) this.body.setAngularVelocity(val);else this._rotationSpeed = val;
      }
      /**
       * Scale of the sprite's physics body. Default is {x: 1, y: 1}
       *
       * The getter for sprite.scale returns the scale as an object with
       * x and y properties.
       *
       * The valueOf function for sprite.scale returns the scale as a
       * number. This enables users to do things like `sprite.scale *= 2`
       * to double the sprite's scale.
       *
       * @property scale
       * @type {Number|Object}
       * @default 1
       */

    }, {
      key: "scale",
      get: function get() {
        return this._scale;
      },
      set: function set(val) {
        if (val <= 0) val = 0.01;

        if (typeof val === 'number') {
          val = {
            x: val,
            y: val
          };
        }

        if (val.x == this._scale._x && val.y == this._scale._y) return;
        var scalars = {
          x: val.x / this._scale._x,
          y: val.y / this._scale._y
        };
        this._w *= scalars.x;
        this._hw *= scalars.x;

        if (this._h) {
          this._h *= scalars.y;
          this._hh *= scalars.y;
        }

        this._resizeCollider(scalars);

        this._scale._x = val.x;
        this._scale._y = val.y;
        this._scale._avg = val.x;
      }
      /**
       * Wake a sprite up or put it to sleep.
       *
       * "Sleeping" sprites are not included in the physics simulation, a
       * sprite starts "sleeping" when it stops moving and doesn't collide
       * with anything that it wasn't already _touching.
       *
       * @property sleeping
       * @type {Boolean}
       * @default true
       */

    }, {
      key: "sleeping",
      get: function get() {
        if (this.body) return !this.body.isAwake();
        return undefined;
      },
      set: function set(val) {
        if (this.body) this.body.setAwake(!val);
      }
      /**
       * @deprecated
       */

    }, {
      key: "getSpeed",
      value: function getSpeed() {
        console.warn('getSpeed() is deprecated, use sprite.speed instead');
        return this.speed;
      }
      /**
       * The sprite's speed.
       *
       * @property speed
       * @type {Number}
       * @default 0
       */

    }, {
      key: "speed",
      get: function get() {
        return this.p.createVector(this.vel.x, this.vel.y).mag();
      },
      set: function set(val) {
        var angle = this.direction;
        this.vel.x = this.p.cos(angle) * val;
        this.vel.y = this.p.sin(angle) * val;
      }
      /**
       * Is the sprite's physics collider static?
       *
       * @property static
       * @type {Boolean}
       * @default false
       */

    }, {
      key: "static",
      get: function get() {
        if (!this.body) return undefined;
        return this.body.isStatic();
      },
      set: function set(val) {
        if (val) this.collider = 'static';
      }
      /**
       * The sprite's vertices.
       *
       * @property vertices
       * @type {Array} An array of p5.Vector objects.
       * @readonly
       */

    }, {
      key: "vertices",
      get: function get() {
        return this._getVertices();
      }
    }, {
      key: "_getVertices",
      value: function _getVertices(output2DArrays) {
        var f = this.fixture;

        while (f.m_next) {
          f = f.m_next;
        }

        var s = f.getShape();

        var v = _toConsumableArray(s.m_vertices);

        if (s.m_type == 'polygon') v.unshift(v.at(-1));
        var x = this.x;
        var y = this.y;

        for (var i = 0; i < v.length; i++) {
          var arr = [fixRound(v[i].x / this.tileSize * plScale + x), fixRound(v[i].y / this.tileSize * plScale + y)];
          log(arr);
          if (output2DArrays) v[i] = arr;else v[i] = pInst.createVector(arr[0], arr[1]);
        }

        return v;
      } // TODO set vertices

      /**
       * The horizontal position of the sprite.
       * @property x
       * @type {Number}
       */

    }, {
      key: "x",
      get: function get() {
        if (!this.body) return this._pos.x;
        var x = this.body.getPosition().x / this.tileSize * plScale;
        return fixRound(x);
      },
      set: function set(val) {
        if (this.body) {
          var pos = new pl.Vec2(val * this.tileSize / plScale, this.body.getPosition().y);
          this.body.setPosition(pos);
        }

        this._pos.x = val;
      }
      /**
       * The vertical position of the sprite.
       * @property y
       * @type {Number}
       */

    }, {
      key: "y",
      get: function get() {
        if (!this.body) return this._pos.y;
        var y = this.body.getPosition().y / this.tileSize * plScale;
        return fixRound(y);
      },
      set: function set(val) {
        if (this.body) {
          var pos = new pl.Vec2(this.body.getPosition().x, val * this.tileSize / plScale);
          this.body.setPosition(pos);
        }

        this._pos.y = val;
      }
      /**
       * Set the position vector {x, y}
       *
       * @property pos
       * @type {Object}
       */

    }, {
      key: "pos",
      get: function get() {
        return this._position;
      },
      set: function set(val) {
        this.x = val.x;
        this.y = val.y;
      }
    }, {
      key: "w",
      get:
      /**
       * The width of the sprite.
       * @property w
       * @type {Number}
       */
      function get() {
        return this._w;
      },
      set: function set(val) {
        if (val < 0) val = 0.01;
        if (val == this._w) return;
        this._dimensionsUndefined = false;
        var scalarX = val / this._w;
        this._w = val;
        this._hw = val * 0.5;

        this._resizeCollider({
          x: scalarX,
          y: 1
        });
      }
      /**
       * Half the width of the sprite.
       * @property hw
       * @type {Number}
       */

    }, {
      key: "hw",
      get: function get() {
        return this._hw;
      },
      set: function set(val) {
        throw new FriendlyError('Sprite.hw');
      }
      /**
       * The width of the sprite.
       * @property width
       * @type {Number}
       */

    }, {
      key: "width",
      get: function get() {
        return this.w;
      },
      set: function set(val) {
        this.w = val;
      }
      /**
       * Half the width of the sprite.
       * @property halfWidth
       * @type {Number}
       */

    }, {
      key: "halfWidth",
      get: function get() {
        return this.hw;
      },
      set: function set(val) {
        throw new FriendlyError('Sprite.hw');
      }
      /**
       * The height of the sprite.
       * @property h
       * @type {Number}
       */

    }, {
      key: "h",
      get: function get() {
        if (this.shape == 'circle') return this._w;
        return this._h;
      },
      set: function set(val) {
        if (val < 0) val = 0.01;

        if (this.shape == 'circle') {
          this.w = val;
          return;
        }

        if (val == this._h) return;
        this._dimensionsUndefined = false;
        var scalarY = val / this._h;
        this._h = val;
        this._hh = val * 0.5;

        this._resizeCollider({
          x: 1,
          y: scalarY
        });
      }
      /**
       * Half the height of the sprite.
       * @property hh
       * @type {Number}
       */

    }, {
      key: "hh",
      get: function get() {
        return this._hh || this._hw;
      },
      set: function set(val) {
        throw new FriendlyError('Sprite.hh');
      }
      /**
       * The height of the sprite.
       * @property height
       * @type {Number}
       */

    }, {
      key: "height",
      get: function get() {
        return this.h;
      },
      set: function set(val) {
        this.h = val;
      }
      /**
       * Half the height of the sprite.
       * @property halfHeight
       * @type {Number}
       */

    }, {
      key: "halfHeight",
      get: function get() {
        return this.hh;
      },
      set: function set(val) {
        throw new FriendlyError('Sprite.hh');
      }
      /**
       * The diameter of a circular sprite.
       * @property d
       * @type {Number}
       */

    }, {
      key: "d",
      get: function get() {
        var _this$_diameter;

        (_this$_diameter = this._diameter) !== null && _this$_diameter !== void 0 ? _this$_diameter : this._diameter = this.w;
        return this._diameter;
      },
      set: function set(val) {
        if (val < 0) {
          this.remove();
          return;
        }

        var shapeChange = this.shape != 'circle';

        if (!shapeChange) {
          if (this._diameter == val) return;
          this._diameter = val;
        } else {
          var bodyProps;

          if (this._collider == 'none') {
            bodyProps = this._cloneBodyProps();
          }

          this._removeSensors();

          this._removeColliders();

          this._h = undefined;
          this._shape = undefined;

          if (this._collider != 'none') {
            this.addCollider(0, 0, val);

            for (var prop in bodyProps) {
              if (bodyProps[prop] !== undefined) {
                this[prop] = bodyProps[prop];
              }
            }
          }

          this._shape = 'circle';
        }

        var scalar = val / this._w;
        this._w = val;
        this._hw = val * 0.5;
        this._h = val;
        this._hh = this._hw;
        if (shapeChange) return;

        this._resizeCollider({
          x: scalar,
          y: scalar
        });
      }
      /**
       * The diameter of a circular sprite.
       * @property diameter
       * @type {Number}
       */

    }, {
      key: "diameter",
      get: function get() {
        return this.d;
      },
      set: function set(val) {
        this.d = val;
      }
      /**
       * The radius of a circular sprite.
       * @property r
       * @type {Number}
       */

    }, {
      key: "r",
      get: function get() {
        return this._hw;
      },
      set: function set(val) {
        this.d = val * 2;
      }
      /**
       * The radius of a circular sprite.
       * @property radius
       * @type {Number}
       */

    }, {
      key: "radius",
      get: function get() {
        return this._hw;
      },
      set: function set(val) {
        this.d = val * 2;
      }
      /**
       * Resizes the collider of the sprite.
       *
       * @private _resizeCollider
       * @param {*} scalars The x and y scalars to resize the collider by.
       */

    }, {
      key: "_resizeCollider",
      value: function _resizeCollider(scalars) {
        if (!this.body) return;

        if (this.shape == 'circle') {
          var fxt = this.fixture;
          var sh = fxt.m_shape;
          sh.m_radius *= scalars.x;
        } else {
          for (var _fxt2 = this.fixtureList; _fxt2; _fxt2 = _fxt2.getNext()) {
            if (_fxt2.m_isSensor) continue;
            var _sh = _fxt2.m_shape;

            var _iterator5 = _createForOfIteratorHelper(_sh.m_vertices),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var vert = _step5.value;
                vert.x *= scalars.x;
                vert.y *= scalars.y;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }

        if (this.collider == 'static') this.body.synchronizeFixtures();
      }
      /**
       * Validate convexity.
       *
       * @private _isConvexPoly
       * @param vecs {Array} an array of planck.Vec2 vertices
       * @returns true if the polygon is convex
       */

    }, {
      key: "_isConvexPoly",
      value: function _isConvexPoly(vecs) {
        loopk: for (var k = 0; k < 2; k++) {
          if (k == 1) vecs = vecs.reverse();

          for (var i = 0; i < vecs.length; ++i) {
            var i1 = i;
            var i2 = i < vecs.length - 1 ? i1 + 1 : 0;
            var p = vecs[i1];
            var e = pl.Vec2.sub(vecs[i2], p);

            for (var j = 0; j < vecs.length; ++j) {
              if (j == i1 || j == i2) {
                continue;
              }

              var v = pl.Vec2.sub(vecs[j], p);
              var c = pl.Vec2.cross(e, v);

              if (c < 0.0) {
                if (k == 0) continue loopk;else return false;
              }
            }
          }

          break;
        }

        return true;
      }
      /**
       * The kind of shape: 'box', 'circle', 'chain', or 'polygon'.
       *
       * @property shape
       * @type {String}
       * @default box
       */

    }, {
      key: "shape",
      get: function get() {
        return this._shape;
      },
      set: function set(val) {
        if (val == this._shape) return;
        var validShapes = ['box', 'circle', 'chain', 'polygon'];

        if (validShapes.indexOf(val) == -1) {
          throw new Error('Invalid shape type: "' + val + '"\nThe valid shape types are: "' + validShapes.join('", "') + '"');
        }

        if (val == 'circle') {
          this.d = this.w;
        } else {
          this._shape = val;

          this._reset();
        }
      }
      /**
       * You can set the sprite's update function to your own custom
       * update function that will be run after every draw call or when
       * the updateSprites function is called.
       *
       * @method update
       */

    }, {
      key: "update",
      get: function get() {
        return this._update;
      },
      set: function set(val) {
        this._customUpdate = val;
      }
    }, {
      key: "position",
      get: function get() {
        return this._position;
      },
      set: function set(val) {
        this.pos = val;
      }
    }, {
      key: "vel",
      get: function get() {
        return this._velocity;
      },
      set: function set(val) {
        this.vel.x = val.x;
        this.vel.y = val.y;
      }
    }, {
      key: "velocity",
      get: function get() {
        return this._velocity;
      }
      /**
       * Updates the sprite. Called automatically at the end of the draw
       * cycle.
       *
       * @private _update
       */
      ,
      set: function set(val) {
        this.vel = val;
      }
    }, {
      key: "_update",
      value: function _update() {
        if (this.animation) this.animation.update();

        if (!this.body) {
          this.rotation += this._rotationSpeed;
          this.x += this.vel.x;
          this.y += this.vel.y;
        }

        for (var prop in this.mouse) {
          if (this.mouse[prop] == -1) this.mouse[prop] = 0;
        }

        var a = this;

        for (var event in eventTypes) {
          var _iterator6 = _createForOfIteratorHelper(this[event]),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var entry = _step6.value;
              var contactType = void 0;
              var b = entry[0];
              var f = entry[1] + 1;
              this[event].set(b, f);

              if (f == 0) {
                this[event].delete(b);
                continue;
              } else if (f == -1) {
                contactType = eventTypes[event][2];
              } else if (f == 1) {
                contactType = eventTypes[event][0];
              } else {
                contactType = eventTypes[event][1];
              }

              if (b instanceof Group) continue;

              var cb = _findContactCB(contactType, a, b);

              if (typeof cb == 'function') cb(a, b, f);
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }

        if (this._customUpdate) this._customUpdate();
      }
      /**
       * Default draw
       *
       * @private _draw
       */

    }, {
      key: "_draw",
      value: function _draw() {
        if (this.strokeWeight) this.p.strokeWeight(this.strokeWeight);

        if (this.animation && !this.debug) {
          this.animation.draw(0, 0, 0, this._scale.x, this._scale.y);
        } else if (this.fixture != null) {
          if (this._shape == 'chain') this.p.stroke(this.stroke || this.color);else if (this._stroke) this.p.stroke(this._stroke);

          for (var fxt = this.fixtureList; fxt; fxt = fxt.getNext()) {
            this._drawFixture(fxt);
          }
        } else {
          this.p.stroke(this._stroke || 120);

          if (this._shape == 'box') {
            this.p.rect(0, 0, this.w * this.tileSize, this.h * this.tileSize);
          } else if (this._shape == 'circle') {
            this.p.circle(0, 0, this.d * this.tileSize);
          }
        }

        if (this.text !== undefined) {
          this.p.textAlign(this.p.CENTER, this.p.CENTER);
          this.p.fill(this.textColor);
          this.p.textSize(this.textSize * this.tileSize);
          this.p.text(this.text, 0, 0);
        }
      }
      /**
       * Displays the Sprite with rotation and scaling applied before
       * the sprite's draw function is called.
       *
       * @private _display
       */

    }, {
      key: "_display",
      value: function _display() {
        var x = this.p.width * 0.5 - this.p.world.origin.x + this.x * this.tileSize;
        var y = this.p.height * 0.5 - this.p.world.origin.y + this.y * this.tileSize; // skip drawing for out-of-view bodies, but
        // edges can be very long, so they still should be drawn

        if (this.shape != 'chain' && this.p.camera.active && (x + this.w < this.p.camera.bound.min.x || x - this.w > this.p.camera.bound.max.x || y + this.h < this.p.camera.bound.min.y || y - this.h > this.p.camera.bound.max.y)) {
          return;
        }

        x = fixRound(x);
        x -= this.w * this.tileSize % 2 ? 0.5 : 0;
        y = fixRound(y);
        y -= this.h * this.tileSize % 2 ? 0.5 : 0; // x += this.tileSize * 0.015;
        // y += this.tileSize * 0.015;

        this.p.push();
        this.p.imageMode(p5.prototype.CENTER);
        this.p.rectMode(p5.prototype.CENTER);
        this.p.ellipseMode(p5.prototype.CENTER);
        this.p.translate(x, y);
        if (this.rotation) this.p.rotate(this.rotation);
        this.p.scale(this._mirror.x, this._mirror.y);
        this.p.fill(this.color);

        this._draw();

        this.p.pop();
        this.p.p5play.autoDrawSprites = false;
        this._cameraActiveWhenDrawn = this.p.camera.active;
      }
      /**
       * Draws a fixture. Used to draw the sprite's physics body.
       *
       * @private _drawFixture
       */

    }, {
      key: "_drawFixture",
      value: function _drawFixture(fxt) {
        var sh = fxt.m_shape;

        if (sh.m_type == 'polygon' || sh.m_type == 'chain') {
          if (sh.m_type == 'chain') {
            this.p.push();
            this.p.noFill();
          }

          var v = sh.m_vertices;
          this.p.beginShape();

          for (var i = 0; i < v.length; i++) {
            this.p.vertex(v[i].x * plScale, v[i].y * plScale);
          }

          if (sh.m_type != 'chain') this.p.endShape(p5.prototype.CLOSE);else {
            this.p.endShape();
            this.p.pop();
          }
        } else if (sh.m_type == 'circle') {
          var d = sh.m_radius * 2 * plScale;
          this.p.ellipse(sh.m_p.x * plScale, sh.m_p.y * plScale, d, d);
        } else if (sh.m_type == 'edge') {
          this.p.line(sh.m_vertex1.x * plScale, sh.m_vertex1.y * plScale, sh.m_vertex2.x * plScale, sh.m_vertex2.y * plScale);
        }
      }
      /**
       * Apply a force that is scaled to the sprite's mass.
       *
       * @method applyForce
       * @param {p5.Vector|Array} forceVector force vector
       * @param {p5.Vector|Array} [forceOrigin] force origin
       */

    }, {
      key: "applyForce",
      value: function applyForce(forceVector, forceOrigin) {
        if (!this.body) return;

        if (Array.isArray(forceVector)) {
          forceVector = new pl.Vec2(forceVector[0], forceVector[1]);
        } else {
          forceVector = new pl.Vec2(forceVector.x || 0, forceVector.y || 0);
        }

        if (forceOrigin) {
          if (Array.isArray(forceOrigin)) {
            forceOrigin = new pl.Vec2(forceOrigin[0], forceOrigin[1]);
          } else {
            forceOrigin = new pl.Vec2(forceOrigin.x || 0, forceOrigin.y || 0);
          }

          this.body.applyForce(forceVector.mul(this.body.m_mass), forceOrigin, false);
        } else {
          this.body.applyForceToCenter(forceVector.mul(this.body.m_mass), false);
        }
      }
      /**
       * Apply a torque on the sprite's physics body.
       * Torque is the force that causes rotation.
       * A positive torque will rotate the sprite clockwise.
       * A negative torque will rotate the sprite counter-clockwise.
       *
       * @method applyTorque
       * @param {Number} torque The amount of torque to apply.
       */

    }, {
      key: "applyTorque",
      value: function applyTorque(val) {
        this.body.applyTorque(val, true);
      }
      /**
       * Deprecated: set sprite.vel instead.
       *
       * Sets the velocity vector.
       *
       * @deprecated setVelocity
       * @param {Number} vector|x vector or horizontal velocity
       * @param {Number} y vertical velocity
       * @example
       * sprite.vel = createVector(1, 2);
       * // OR
       * sprite.vel.x = 1;
       * sprite.vel.y = 2;
       */

    }, {
      key: "setVelocity",
      value: function setVelocity(x, y) {
        console.warn('setVelocity() is deprecated. Set sprite.vel instead.');

        if (_typeof(x) == 'object') {
          y = x.y;
          x = x.x;
        }

        this.vel.x = x;
        this.vel.y = y;
      }
      /**
       * Deprecated: set direction and set speed separately
       *
       * Sets the speed of the sprite.
       * The action overwrites the current velocity.
       * If direction is not supplied, the current direction is maintained.
       * If direction is not supplied and there is no current velocity, the
       * current rotation angle used for the direction.
       *
       * @deprecated setSpeed
       * @param {Number} speed Scalar speed
       * @param {Number} [direction] angle
       */

    }, {
      key: "setSpeed",
      value: function setSpeed(speed, direction) {
        console.warn('setSpeed is deprecated. Set sprite.direction and sprite.speed separately instead.');
        if (direction) this.direction = direction;
        this.speed = speed;
      }
      /**
       * Add to the speed of the sprite.
       * If direction is not supplied, the current direction is maintained.
       * If direction is not supplied and there is no current velocity, the * current rotation angle used for the direction.
       *
       * @method addSpeed
       * @param {Number} speed Scalar speed
       * @param {Number} [angle] Direction in degrees
       */

    }, {
      key: "addSpeed",
      value: function addSpeed(speed, angle) {
        var _angle;

        (_angle = angle) !== null && _angle !== void 0 ? _angle : angle = this.direction;
        this.vel.x += this.p.cos(angle) * speed;
        this.vel.y += this.p.sin(angle) * speed;
      }
      /**
       * Move a sprite towards a position.
       *
       * @method moveTowards
       * @param {Number|Object} x|position destination x or any object with x and y properties
       * @param {Number} y destination y
       * @param {Number} tracking [optional] 1 represents 1:1 tracking, the mouse moves to the destination immediately, 0 represents no tracking. Default is 0.1 (10% tracking).
       */

    }, {
      key: "moveTowards",
      value: function moveTowards(x, y, tracking) {
        var _tracking;

        if (typeof x != 'number') {
          var obj = x;
          if (obj == this.p.mouse && !this.p.mouse.active) return;

          if (obj.x === undefined || obj.y === undefined) {
            console.error('sprite.moveTowards/moveAway ERROR: movement destination not defined, object given with no x or y properties');
            return;
          }

          tracking = y;
          y = obj.y;
          x = obj.x;
        }

        if (x === undefined && y === undefined) return;
        (_tracking = tracking) !== null && _tracking !== void 0 ? _tracking : tracking = 0.1; // let vec = new pl.Vec2(0, 0);

        if (x !== undefined && x !== null) {
          // vec.x = (destX - this.x) * tracking * this.tileSize * this.mass;
          this.vel.x = (x - this.x) * tracking * this.tileSize;
        }

        if (y !== undefined && y !== null) {
          // vec.y = (destY - this.y) * tracking * this.tileSize * this.mass;
          this.vel.y = (y - this.y) * tracking * this.tileSize;
        } // this.body.applyForce(vec, new pl.Vec2(0, 0));

      }
      /**
       * Move a sprite away from a position.
       *
       * @method moveAway
       * @param {Number|Object} x|position x or any object with x and y properties
       * @param {Number} y
       * @param {Number} repel [optional] the higher the value, the faster the sprite moves away. Default is 0.1 (10% repel).
       */

    }, {
      key: "moveAway",
      value: function moveAway(x, y, repel) {
        this.moveTowards.apply(this, arguments);
        this.vel.x *= -1;
        this.vel.y *= -1;
      }
      /**
       * Move the sprite a certain distance from its current position.
       *
       * @method move
       * @param {Number} distance [optional]
       * @param {Number|String} direction [optional]
       * @param {Number} speed [optional]
       * @returns {Promise} resolves when the movement is complete or cancelled
       *
       * @example
       * sprite.move(distance);
       * sprite.move(distance, direction);
       * sprite.move(distance, direction, speed);
       *
       * sprite.move(directionName);
       * sprite.move(directionName, speed);
       * sprite.move(directionName, speed, distance); // deprecated usage
       */

    }, {
      key: "move",
      value: function move(distance, direction, speed) {
        var _distance;

        var dirNameMode = isNaN(arguments[0]);

        if (dirNameMode) {
          direction = arguments[0];
          speed = arguments[1];
          distance = arguments[2];

          if (distance !== undefined) {
            console.warn("In p5.play v3.3.0 the parameter ordering for the move() function was changed to: move(distance, direction, speed).");
          }
        } else {
          dirNameMode = isNaN(direction);
        }

        if (direction !== undefined) this.direction = direction;
        (_distance = distance) !== null && _distance !== void 0 ? _distance : distance = 1;
        var x = this.x + this.p.cos(this.direction) * distance;
        var y = this.y + this.p.sin(this.direction) * distance;

        if (dirNameMode) {
          x = Math.round(x);
          y = Math.round(y);
        }

        return this.moveTo(x, y, speed);
      }
      /**
       * Move the sprite to a position.
       *
       * @method moveTo
       * @param {Number|Object} x|position destination x or any object with x and y properties
       * @param {Number} y destination y
       * @param {Number} speed [optional]
       * @returns {Promise} resolves when the movement is complete or cancelled
       */

    }, {
      key: "moveTo",
      value: function moveTo(x, y, speed) {
        var _speed,
            _speed2,
            _speed3,
            _this2 = this;

        if (typeof x == 'undefined') {
          console.error('sprite.move ERROR: movement direction or destination not defined');
          return;
        }

        if (typeof x != 'number') {
          var obj = x;
          if (obj == this.p.mouse && !this.p.mouse.active) return;

          if (obj.x === undefined || obj.y === undefined) {
            console.error('sprite.moveTo ERROR: movement destination not defined, object given with no x or y properties');
            return;
          }

          speed = y;
          y = obj.y;
          x = obj.x;
        }

        this._dest.x = this.x;
        this._dest.y = this.y;
        var direction = true;
        if (x == this.x) x = false;else {
          this._dest.x = x;
          x = true;
        }
        if (y == this.y) y = false;else {
          this._dest.y = y;
          y = true;
        }
        this._destIdx++;
        if (!x && !y) return true;
        if (this.speed) (_speed = speed) !== null && _speed !== void 0 ? _speed : speed = this.speed;
        if (this.tileSize > 1) (_speed2 = speed) !== null && _speed2 !== void 0 ? _speed2 : speed = 0.1;
        (_speed3 = speed) !== null && _speed3 !== void 0 ? _speed3 : speed = 1;

        if (speed <= 0) {
          console.warn('sprite.move: speed should be a positive number');
          return;
        }

        var a = this._dest.y - this.y;
        var b = this._dest.x - this.x;
        var c = Math.sqrt(a * a + b * b);
        var percent = speed / c;
        this.vel.x = b * percent;
        this.vel.y = a * percent; // estimate how many frames it will take for the sprite
        // to reach its destination

        var frames = Math.floor(c / speed) - 5; // margin of error

        var margin = speed + 0.01;
        var destIdx = this._destIdx;
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var distX, distY;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  distX = margin + margin;
                  distY = margin + margin;

                case 2:
                  if (!(destIdx != _this2._destIdx)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return", false);

                case 4:
                  _context.next = 6;
                  return p5.prototype.delay();

                case 6:
                  if (!(frames > 0)) {
                    _context.next = 9;
                    break;
                  }

                  frames--;
                  return _context.abrupt("continue", 11);

                case 9:
                  // check if the sprite has reached its destination
                  distX = Math.abs(_this2.x - _this2._dest.x);
                  distY = Math.abs(_this2.y - _this2._dest.y);

                case 11:
                  if (x && distX > margin || y && distY > margin) {
                    _context.next = 2;
                    break;
                  }

                case 12:
                  // stop moving the sprite, snap to destination
                  if (distX < margin) _this2.x = _this2._dest.x;
                  if (distY < margin) _this2.y = _this2._dest.y;
                  _this2.vel.x = 0;
                  _this2.vel.y = 0;
                  return _context.abrupt("return", true);

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
      /**
       * Pushes the sprite toward a point.
       * The force is added to the current velocity.
       *
       * Legacy method, use moveTo or moveTowards instead.
       *
       * @deprecated
       * @param {Number}  magnitude Scalar speed to add
       * @param {Number}  x Direction x coordinate
       * @param {Number}  y Direction y coordinate
       */

    }, {
      key: "attractionPoint",
      value: function attractionPoint(magnitude, x, y) {
        console.warn('sprite.attractionPoint is deprecated, use sprite.moveTowards instead');
        var angle = this.p.atan2(y - this.y, x - this.x);
        this.vel.x += this.p.cos(angle) * magnitude;
        this.vel.y += this.p.sin(angle) * magnitude;
      }
    }, {
      key: "snap",
      value: function snap(o, dist) {
        var _dist;

        if (o.isMoving || o.x != o._dest.x || o.y != o._dest.y || !this.isMoving) return;
        (_dist = dist) !== null && _dist !== void 0 ? _dist : dist = 1 || this.tileSize * 0.1;

        if (Math.abs(this.x) % 1 >= dist || Math.abs(this.y) % 1 >= dist) {
          return;
        }

        this.vel.x = 0;
        this.vel.y = 0;
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
      }
      /**
       * @method rotateTowards
       * @param {*} x position to rotate towards
       * @param {*} y position to rotate towards
       * @param {*} tracking percent of the distance to rotate on each frame towards the target angle, default is 0.1 (10%)
       * @param {*} facing rotation angle the sprite should be at when "facing" the position, default is 0
       */

    }, {
      key: "rotateTowards",
      value: function rotateTowards(x, y, tracking, facing) {
        var _tracking2;

        if (typeof x != 'number') {
          facing = tracking;
          tracking = y;
          y = facing;
        }

        var angle = this.angleTo(x, y, facing);
        (_tracking2 = tracking) !== null && _tracking2 !== void 0 ? _tracking2 : tracking = 0.1;
        this.rotationSpeed = angle * tracking;
      }
      /**
       * Finds the minimium amount the sprite would have to rotate to
       * "face" a position at a rotation.
       *
       * @method angleTo
       * @param {Number|Object} x|position
       * @param {Number} y
       * @param {Number} facing rotation angle the sprite should be at when "facing" the position, default is 0
       * @returns {Number} minimum angle of rotation to face the position
       */

    }, {
      key: "angleTo",
      value: function angleTo(x, y, facing) {
        var _facing;

        if (typeof x != 'number') {
          var obj = x;
          if (obj == this.p.mouse && !this.p.mouse.active) return 0;

          if (obj.x === undefined || obj.y === undefined) {
            console.error('sprite.angleTo ERROR: rotation destination not defined, object given with no x or y properties');
            return 0;
          }

          facing = y;
          y = obj.y;
          x = obj.x;
        }

        if (Math.abs(x - this.x) < 0.01 && Math.abs(y - this.y) < 0.01) {
          return 0;
        }

        (_facing = facing) !== null && _facing !== void 0 ? _facing : facing = 0;
        var ang = this.p.atan2(y - this.y, x - this.x) + facing;
        var dist1 = ang - this.rotation % 360;
        var dist2 = 360 - Math.abs(dist1);
        dist2 *= dist1 < 0 ? 1 : -1;
        return Math.abs(dist1) < Math.abs(dist2) ? dist1 : dist2;
      }
      /**
       * Rotates the sprite to a position at a rotation.
       *
       * @method rotateTo
       * @param {Number|Object} x|position
       * @param {Number} y
       * @param {Number} speed the amount of rotation per frame, default is 1
       * @param {Number} facing rotation angle the sprite should be at when "facing" the position, default is 0
       * @returns {Promise} a promise that resolves when the rotation is complete
       */

    }, {
      key: "rotateTo",
      value: function rotateTo(x, y, speed, facing) {
        if (typeof x != 'number') {
          facing = speed;
          speed = y;
          y = facing;
        }

        var angle = this.angleTo(x, y, facing);
        return this.rotate(angle, speed);
      }
      /**
       * Rotates the sprite by an amount at a specified angles per frame speed.
       *
       * @method rotate
       * @param {Number} angle the amount to rotate the sprite
       * @param {Number} speed the amount of rotation per frame, default is 1
       * @returns {Promise} a promise that resolves when the rotation is complete
       */

    }, {
      key: "rotate",
      value: function rotate(angle, speed) {
        var _speed4,
            _this$_rotateIdx,
            _this3 = this;

        if (isNaN(angle)) throw new FriendlyError();
        if (angle == 0) return;
        var absA = Math.abs(angle);
        (_speed4 = speed) !== null && _speed4 !== void 0 ? _speed4 : speed = 1;
        if (speed > absA) speed = absA;
        var ang = this.rotation + angle;
        var cw = angle > 0;
        this.rotationSpeed = speed * (cw ? 1 : -1);
        var frames = Math.ceil(absA / speed);
        (_this$_rotateIdx = this._rotateIdx) !== null && _this$_rotateIdx !== void 0 ? _this$_rotateIdx : this._rotateIdx = 0;
        this._rotateIdx++;
        var _rotateIdx = this._rotateIdx;
        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(frames > 1)) {
                    _context2.next = 20;
                    break;
                  }

                case 1:
                  if (!(frames > 0)) {
                    _context2.next = 9;
                    break;
                  }

                  if (!(_this3._rotateIdx != _rotateIdx)) {
                    _context2.next = 4;
                    break;
                  }

                  return _context2.abrupt("return");

                case 4:
                  _context2.next = 6;
                  return p5.prototype.delay();

                case 6:
                  frames--;
                  _context2.next = 1;
                  break;

                case 9:
                  if (!(Math.abs(_this3.rotationSpeed) < Math.abs(ang - _this3.rotation))) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.next = 12;
                  return p5.prototype.delay();

                case 12:
                  _context2.next = 9;
                  break;

                case 14:
                  if (!(Math.abs(ang - _this3.rotation) > 0.01)) {
                    _context2.next = 18;
                    break;
                  }

                  _this3.rotationSpeed = ang - _this3.rotation;
                  _context2.next = 18;
                  return p5.prototype.delay();

                case 18:
                  _context2.next = 22;
                  break;

                case 20:
                  _context2.next = 22;
                  return p5.prototype.delay();

                case 22:
                  _this3.rotationSpeed = 0;
                  _this3.rotation = ang;

                case 24:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }
      /**
       * Changes the sprite's animation. Use `addAni` to define the
       * animation(s) first.
       *
       * @method changeAni
       * @param {...String} anis the names of one or many animations to be played in
       * sequence
       * @returns A promise that fulfills when the animation or sequence of animations
       * completes
       */

    }, {
      key: "changeAni",
      value: function () {
        var _changeAni2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var _this4 = this;

          var _len,
              anis,
              _key,
              _ani,
              i,
              ani,
              _i8,
              _ani2,
              name,
              start,
              end,
              _args3 = arguments;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  for (_len = _args3.length, anis = new Array(_len), _key = 0; _key < _len; _key++) {
                    anis[_key] = _args3[_key];
                  }

                  if (anis.length == 1 && Array.isArray(anis[0])) {
                    anis = anis[0];
                  }

                  _ani = function _ani(name, start, end) {
                    return new Promise(function (resolve) {
                      _this4._changeAni(name);

                      if (start < 0) start = _this4._animation.length + start;
                      if (start) _this4._animation.frame = start;
                      if (end !== undefined) _this4._animation.goToFrame(end);else if (_this4.frame == _this4.lastFrame) resolve();

                      _this4._animation.onComplete = function () {
                        resolve();
                      };
                    });
                  };

                  for (i = 0; i < anis.length; i++) {
                    ani = anis[i];

                    if (ani instanceof SpriteAnimation || ani instanceof p5.Image || typeof ani == 'string' && ani.length != 1 && ani.includes('.')) {
                      anis[i] = this.addAni(ani);
                      ani = anis[i];
                    }

                    if (typeof ani == 'string') {
                      anis[i] = {
                        name: ani
                      };
                      ani = anis[i];
                    }

                    if (ani.name[0] == '!') {
                      ani.name = ani.name.slice(1);
                      ani.start = -1;
                      ani.end = 0;
                    }
                  } // let count = ++this._aniChanged;


                  _i8 = 0;

                case 5:
                  if (!(_i8 < anis.length)) {
                    _context3.next = 13;
                    break;
                  }

                  _ani2 = anis[_i8]; // if () { // TODO repeat
                  // 	if (count == this._aniChanged) i = 0;
                  // 	continue;
                  // }

                  name = _ani2.name, start = _ani2.start, end = _ani2.end;
                  _context3.next = 10;
                  return _ani(name, start, end);

                case 10:
                  _i8++;
                  _context3.next = 5;
                  break;

                case 13:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function changeAni() {
          return _changeAni2.apply(this, arguments);
        }

        return changeAni;
      }()
      /**
       * Changes the sprite's animation. Use `addAni` to define the
       * animation(s) first. Alt for `changeAni`.
       *
       * @method changeAnimation
       * @param {...String} anis the names of one or many animations to be played in
       * sequence
       * @returns A promise that fulfills when the animation or sequence of animations
       * completes
       */

    }, {
      key: "changeAnimation",
      value: function changeAnimation() {
        return this.changeAni.apply(this, arguments);
      }
      /**
       * Changes the displayed animation. The animation must be added first
       * using the sprite.addAnimation method. The animation could also be
       * added using the group.addAnimation method to a group the sprite
       * has been added to.
       *
       * See SpriteAnimation for more control over the sequence.
       *
       * @method changeAnimation
       * @param {String} label SpriteAnimation identifier
       */

    }, {
      key: "_changeAni",
      value: function _changeAni(label) {
        var ani = this.animations[label];

        if (!ani) {
          for (var i = this.groups.length - 1; i >= 0; i--) {
            var g = this.groups[i];
            ani = g.animations[label];

            if (ani) {
              ani = ani.clone();
              break;
            }
          }
        }

        if (!ani) {
          this.p.noLoop();
          throw new FriendlyError('Sprite.changeAnimation', [label]);
        }

        this._animation = ani;
        this.animation.name = label; // reset to frame 0 of that animation

        if (this.autoResetAnimations || this.autoResetAnimations !== false && this.p.world.autoResetAnimations) {
          this.animation.frame = 0;
        }
      }
      /**
       * Removes the Sprite from the sketch.
       * The removed Sprite will not be drawn or updated anymore.
       *
       * @method remove
       */

    }, {
      key: "remove",
      value: function remove() {
        if (this.body) this.p.world.destroyBody(this.body);
        this.body = null;
        this.removed = true; //when removed from the "scene" also remove all the references in all the groups

        while (this.groups.length > 0) {
          this.groups[0].remove(this);
        }
      }
      /**
       * Returns the sprite's unique identifier
       *
       * @method toString
       * @returns the sprite's id
       */

    }, {
      key: "toString",
      value: function toString() {
        return 's' + this.idNum;
      }
    }, {
      key: "_ensureCollide",
      value: function _ensureCollide(target, callback) {
        if (!target) {
          throw new FriendlyError('Sprite.collide', 2);
        }

        if (!(target instanceof Sprite) && !(target instanceof Group)) {
          throw new FriendlyError('Sprite.collide', 0, [target]);
        }

        if (callback && typeof callback != 'function') {
          throw new FriendlyError('Sprite.collide', 1, [callback]);
        }
      }
    }, {
      key: "collide",
      value: function collide(target, callback) {
        return this.collides(target, callback);
      }
      /**
       * Returns true on the first frame that the sprite collides with the
       * target sprite or group.
       *
       * Custom collision event handling can be done by using this function
       * in an if statement or adding a callback as the second parameter.
       *
       * @method collides
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       */

    }, {
      key: "collides",
      value: function collides(target, callback) {
        this._ensureCollide(target, callback);

        this._collides[target] = callback || true;
        return this._collisions.get(target) == 1;
      }
      /**
       * Returns a truthy value while the sprite is colliding with the
       * target sprite or group. The value is the number of frames that
       * the sprite has been colliding with the target.
       *
       * @method colliding
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       * @return {Number} frames
       */

    }, {
      key: "colliding",
      value: function colliding(target, callback) {
        this._ensureCollide(target, callback);

        this._colliding[target] = callback || true;

        var val = this._collisions.get(target);

        return val > 0 ? val : 0;
      }
      /**
       * Returns true on the first frame that the sprite no longer overlaps
       * with the target sprite or group.
       *
       * @method collided
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       * @return {Boolean}
       */

    }, {
      key: "collided",
      value: function collided(target, callback) {
        this._ensureCollide(target, callback);

        this._collided[target] = callback || true;
        return this._collisions.get(target) == -1;
      }
    }, {
      key: "_ensureOverlap",
      value: function _ensureOverlap(target, callback) {
        if (!target) {
          throw new FriendlyError('Sprite.overlap', 2);
        }

        if (!(target instanceof Sprite) && !(target instanceof Group)) {
          throw new FriendlyError('Sprite.overlap', 0, [target]);
        }

        if (callback && typeof callback != 'function') {
          throw new FriendlyError('Sprite.overlap', 1, [callback]);
        }

        if (!this._hasOverlaps) this._createSensors();

        if (target instanceof Sprite) {
          if (!target._hasOverlaps) target._createSensors();
        } else if (target instanceof Group) {
          if (!target._hasOverlaps) {
            var _iterator7 = _createForOfIteratorHelper(target),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var s = _step7.value;
                if (!s._hasOverlaps) s._createSensors();
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            target._hasOverlaps = true;
          }
        }

        this._overlap[target] = true;
      }
    }, {
      key: "overlap",
      value: function overlap(target, callback) {
        return this.overlaps(target, callback);
      }
      /**
       * Returns true on the first frame that the sprite overlaps with the
       * target sprite or group.
       *
       * Custom overlap event handling can be done by using this function
       * in an if statement or adding a callback as the second parameter.
       *
       * @method overlaps
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       */

    }, {
      key: "overlaps",
      value: function overlaps(target, callback) {
        this._ensureOverlap(target, callback);

        this._overlaps[target] = callback || true;
        return this._overlappers.get(target) == 1;
      }
      /**
       * Returns a truthy value while the sprite is overlapping with the
       * target sprite or group. The value returned is the number of
       * frames the sprite has been overlapping with the target.
       *
       * @method overlapping
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       * @return {Number} frames
       */

    }, {
      key: "overlapping",
      value: function overlapping(target, callback) {
        this._ensureOverlap(target, callback);

        this._overlapping[target] = callback || true;

        var val = this._overlappers.get(target);

        return val > 0 ? val : 0;
      }
      /**
       * Returns true on the first frame that the sprite no longer overlaps
       * with the target sprite or group.
       *
       * @method overlapped
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       * @return {Boolean}
       */

    }, {
      key: "overlapped",
      value: function overlapped(target, callback) {
        this._ensureOverlap(target, callback);

        this._overlapped[target] = callback || true;
        return this._overlappers.get(target) == -1;
      }
    }, {
      key: "_createSensors",
      value: function _createSensors() {
        var shape;

        for (var fxt = this.fixtureList; fxt; fxt = fxt.getNext()) {
          shape = fxt.m_shape;
          this.body.createFixture({
            shape: shape,
            isSensor: true
          });
        }

        this._hasOverlaps = true;
      }
      /**
       * Use sprite.animation.name instead.
       *
       * @deprecated getAnimationLabel
       * @returns the name of the sprite's current animation
       */

    }, {
      key: "getAnimationLabel",
      value: function getAnimationLabel() {
        console.warn('sprite.getAnimationLabel is deprecated. Use sprite.animation.name instead.');
        return this.animation.name;
      }
    }]);

    return Sprite;
  }();

  this.Turtle = function (size) {
    var _size;

    if (pInst.allSprites.tileSize > 1) {
      throw new Error("Turtle can't be used when allSprites.tileSize is greater than 1.");
    }

    (_size = size) !== null && _size !== void 0 ? _size : size = 25;
    var t = new Sprite(size, size, [[size, size * 0.4], [-size, size * 0.4], [0, -size * 0.8]]);
    t.color = 'green';
    t._isTurtleSprite = true;
    t._prevPos = {
      x: t.x,
      y: t.y
    };
    var _move = t.move;
    t.move = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var _args4 = arguments;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this._prevPos.x = this.x;
              this._prevPos.y = this.y;
              _context4.next = 4;
              return _move.call.apply(_move, [this].concat(Array.prototype.slice.call(_args4)));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    return t;
  };
  /**
   * Look at the Animation reference pages before reading these docs.
   *
   * https://p5play.org/learn/sprite_animation.html
   *
   * A SpriteAnimation object contains a series of images (p5.Image objects)
   * that can be displayed sequentially.
   *
   * A sprite can have multiple labeled animations, see Sprite.addAnimation
   * and Sprite.changeAnimation, but you can also create animations that
   * can be used without being added to a sprite first.
   *
   * An animation can be created either from a list of images or sequentially
   * numbered images. p5.play will try to detect the sequence pattern.
   *
   * For example if the image file path is "image1.png" and the last frame
   * index is 3 then "image2.png" and "image3.png" will be loaded as well.
   *
   * @example
   *
   * let shapeShifter = new SpriteAnimation("dog.png", "cat.png", "snake.png");
   * let walking = new SpriteAnimation("walking0001.png", 5);
   *
   * @class SpriteAnimation
   * @constructor
   */


  var SpriteAnimation = /*#__PURE__*/function (_Array) {
    _inherits(SpriteAnimation, _Array);

    var _super = _createSuper(SpriteAnimation);

    function SpriteAnimation() {
      var _parent;

      var _this5;

      _classCallCheck(this, SpriteAnimation);

      _this5 = _super.call(this);
      _this5.p = pInst;
      var args = Array.prototype.slice.call(arguments);
      /**
       * The name of the animation
       *
       * @property name
       * @type {String}
       */

      _this5.name = 'default';
      var parent;

      if (args[0] instanceof Sprite || args[0] instanceof Group) {
        parent = args[0];
        args = args.slice(1);
      }

      (_parent = parent) !== null && _parent !== void 0 ? _parent : parent = _this5.p.allSprites;

      if (typeof args[0] == 'string' && (args[0].length == 1 || !args[0].includes('.'))) {
        _this5.name = args[0];
        args = args.slice(1);
      }
      /**
       * The index of the current frame that the animation is on.
       *
       * @property frame
       * @type {Number}
       */


      _this5.frame = 0;
      _this5.cycles = 0;
      _this5.targetFrame = -1;
      /**
       * The offset is how far the animation should be placed from
       * the location it is played at.
       *
       * @property offset
       * @type {Object} x and y keys
       *
       * @example
       * offset.x = 16;
       */

      _this5.offset = {
        x: 0,
        y: 0
      };
      _this5._frameDelay = 4;
      /**
       * True if the animation is currently playing.
       *
       * @property playing
       * @type {Boolean}
       * @default true
       */

      _this5.playing = true;
      /**
       * Animation visibility.
       *
       * @property visible
       * @type {Boolean}
       * @default true
       */

      _this5.visible = true;
      /**
       * If set to false the animation will stop after reaching the last frame
       *
       * @property looping
       * @type {Boolean}
       * @default true
       */

      _this5.looping = true;
      /**
       * Ends the loop on frame 0 instead of the last frame.
       * This is useful for animations that are symmetric.
       * For example a walking cycle where the first frame is the
       * same as the last frame.
       *
       * @property endOnFirstFrame
       * @type {Boolean}
       * @default false
       */

      _this5.endOnFirstFrame = false;
      /**
       * True if frame changed during the last draw cycle
       *
       * @property frameChanged
       * @type {Boolean}
       */

      _this5.frameChanged = false;
      _this5.rotation = 0;
      _this5._scale = new Scale();
      if (args.length == 0 || typeof args[0] == 'number') return _possibleConstructorReturn(_this5);
      parent.addAni(_assertThisInitialized(_this5)); // sequence mode

      if (args.length == 2 && typeof args[0] == 'string' && (typeof args[1] == 'string' || typeof args[1] == 'number')) {
        var from = args[0];
        var to, num2;
        if (!isNaN(args[1])) num2 = Number(args[1]);else to = args[1]; // print("sequence mode "+from+" -> "+to);
        // make sure the extensions are fine

        if (from.slice(-4) != '.png' || to && to.slice(-4) != '.png') {
          throw new FriendlyError('SpriteAnimation', 0, [from]);
        }

        var digits1 = 0;
        var digits2 = 0; // skip extension work backwards to find the numbers

        for (var i = from.length - 5; i >= 0; i--) {
          if (!isNaN(from.charAt(i))) digits1++;else break;
        }

        if (to) {
          for (var _i9 = to.length - 5; _i9 >= 0; _i9--) {
            if (!isNaN(to.charAt(_i9))) digits2++;else break;
          }
        }

        var prefix1 = from.slice(0, -4 - digits1);
        var prefix2;
        if (to) prefix2 = to.slice(0, -4 - digits2); // images don't belong to the same sequence
        // they are just two separate images with numbers

        if (to && prefix1 != prefix2) {
          _this5.push(_this5.p.loadImage(from));

          _this5.push(_this5.p.loadImage(to));
        } else {
          var _num;

          // Our numbers likely have leading zeroes, which means that some
          // browsers (e.g., PhantomJS) will interpret them as base 8 (octal)
          // instead of decimal. To fix this, we'll explicity tell parseInt to
          // use a base of 10 (decimal). For more details on this issue, see
          // http://stackoverflow.com/a/8763427/2422398.
          var num1 = parseInt(from.slice(-4 - digits1, -4), 10);
          (_num = num2) !== null && _num !== void 0 ? _num : num2 = parseInt(to.slice(-4 - digits2, -4), 10); // swap if inverted

          if (num2 < num1) {
            var t = num2;
            num2 = num1;
            num1 = t;
          }

          var fileName;

          if (!to || digits1 == digits2) {
            // load all images
            for (var _i10 = num1; _i10 <= num2; _i10++) {
              // Use nf() to number format 'i' into the amount of digits
              // ex: 14 with 4 digits is 0014
              fileName = prefix1 + _this5.p.nf(_i10, digits1) + '.png';

              _this5.push(_this5.p.loadImage(fileName));
            }
          } // case: case img1, img2
          else {
            for (var _i11 = num1; _i11 <= num2; _i11++) {
              // Use nf() to number format 'i' into four digits
              fileName = prefix1 + _i11 + '.png';

              _this5.push(_this5.p.loadImage(fileName));
            }
          }
        }
      } // end sequence mode
      // SpriteSheet mode
      else if (typeof args[args.length - 1] != 'string' && !(args[args.length - 1] instanceof p5.Image)) {
        var _generateSheetFrames = function _generateSheetFrames() {
          var _size2, _w4, _h4, _x2, _y2, _pos;

          if (Array.isArray(atlas) || Array.isArray(atlas.frames)) {
            if (typeof atlas[0] == 'number') {
              if (atlas.length == 4) {
                atlas = {
                  pos: atlas.slice(0, 2),
                  size: atlas.slice(2)
                };
              } else {
                atlas = {
                  pos: atlas
                };
              }
            } else {
              var _frames = atlas;

              if (Array.isArray(atlas.frames)) {
                _frames = atlas.frames;
                delete atlas.frames;

                for (var _i12 = 0; _i12 < _frames.length; _i12++) {
                  _frames[_i12] = {
                    pos: _frames[_i12]
                  };
                  Object.assign(_frames[_i12], atlas);
                }
              }

              var _iterator8 = _createForOfIteratorHelper(_frames),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var frame = _step8.value;
                  atlas = frame;

                  _generateSheetFrames();
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              return;
            }
          }

          var _atlas = atlas,
              w = _atlas.w,
              h = _atlas.h,
              width = _atlas.width,
              height = _atlas.height,
              frameSize = _atlas.frameSize,
              size = _atlas.size,
              pos = _atlas.pos,
              line = _atlas.line,
              x = _atlas.x,
              y = _atlas.y,
              frames = _atlas.frames,
              delay = _atlas.delay,
              rotation = _atlas.rotation;
          (_size2 = size) !== null && _size2 !== void 0 ? _size2 : size = frameSize;
          if (delay) _this6.frameDelay = delay;
          if (rotation) _this6.rotation = rotation;
          (_w4 = w) !== null && _w4 !== void 0 ? _w4 : w = width;
          (_h4 = h) !== null && _h4 !== void 0 ? _h4 : h = height;
          var tileSize;

          if (parent) {
            var _w5, _h5;

            (_w5 = w) !== null && _w5 !== void 0 ? _w5 : w = parent.w;
            (_h5 = h) !== null && _h5 !== void 0 ? _h5 : h = parent.h;
            tileSize = parent.tileSize;
          }

          (_x2 = x) !== null && _x2 !== void 0 ? _x2 : x = 0;
          (_y2 = y) !== null && _y2 !== void 0 ? _y2 : y = 0;
          (_pos = pos) !== null && _pos !== void 0 ? _pos : pos = line; // if pos is a number or only y is defined but not x
          // the animation's first frame is at x = 0
          // the line number is the location of the animation line
          // given as a distance from the top of the image

          if (typeof pos == 'number') {
            y = pos;
          } else if (pos) {
            // pos is the location of the animation line
            // given as a [row,column] coordinate pair of distances in tiles
            // from the top left corner of the image
            x = pos[0]; // column

            y = pos[1]; // row
          }

          if (typeof size == 'number') {
            w = h = size;
          } else if (size) {
            w = size[0];
            h = size[1];
          } // get the real dimensions and position of the frame
          // in the sheet


          x *= tileSize;
          y *= tileSize;

          if (!w || !h) {
            if (tileSize) {
              w = h = 1 * tileSize;
            } else if (_this6.spriteSheet.width < _this6.spriteSheet.height) {
              w = h = _this6.spriteSheet.width;
            } else {
              w = h = _this6.spriteSheet.height;
            }
          } else {
            w *= tileSize;
            h *= tileSize;
          }

          var frameCount = frames || 1; // add all the frames in the animation to the frames array

          for (var _i13 = 0; _i13 < frameCount; _i13++) {
            _this6.push({
              x: x,
              y: y,
              w: w,
              h: h
            });

            x += w;

            if (x >= _this6.spriteSheet.width) {
              x = 0;
              y += h;
              if (y >= _this6.spriteSheet.height) y = 0;
            }
          }
        };

        var sheet = parent.spriteSheet;
        var atlas;

        if (args[0] instanceof p5.Image || typeof args[0] == 'string') {
          if (args.length >= 3) {
            throw new FriendlyError('SpriteAnimation', 1);
          }

          sheet = args[0];
          atlas = args[1];
        } else {
          atlas = args[0];
        }

        var _this6 = _assertThisInitialized(_this5);

        if (sheet instanceof p5.Image && sheet.width != 1 && sheet.height != 1) {
          _this5.spriteSheet = sheet;

          _generateSheetFrames();
        } else {
          var url;
          if (typeof sheet == 'string') url = sheet;else url = sheet.url;
          _this5.spriteSheet = _this5.p.loadImage(url, function () {
            _generateSheetFrames();
          }); // parent.spriteSheet = this.spriteSheet;
        }
      } // end SpriteSheet mode
      else {
        // list of images
        for (var _i14 = 0; _i14 < args.length; _i14++) {
          if (args[_i14] instanceof p5.Image) _this5.push(args[_i14]);else _this5.push(_this5.p.loadImage(args[_i14]));
        }
      }

      return _this5;
    }
    /**
     * Delay between frames in number of draw cycles.
     * If set to 4 the framerate of the animation would be the
     * sketch framerate divided by 4 (60fps = 15fps)
     *
     * @property frameDelay
     * @type {Number}
     * @default 4
     */


    _createClass(SpriteAnimation, [{
      key: "frameDelay",
      get: function get() {
        return this._frameDelay;
      },
      set: function set(val) {
        if (val <= 0) val = 1;
        this._frameDelay = val;
      }
      /**
       * TODO frameRate
       * Another way to set the animation's frame delay.
       */
      // get frameRate() {
      // }
      // set frameRate(val) {
      // }

      /**
       * The animation's scale.
       *
       * Can be set to a number to scale both x and y
       * or an object with x and/or y properties.
       *
       * @property scale
       * @type {Number|Object}
       * @default 1
       */

    }, {
      key: "scale",
      get: function get() {
        return this._scale;
      },
      set: function set(val) {
        if (typeof val == 'number') {
          val = {
            x: val,
            y: val
          };
        }

        this._scale._x = val.x;
        this._scale._y = val.y;
        this._scale._avg = val.x;
      }
      /**
       * Make a copy of the animation.
       *
       * @method clone
       * @return {SpriteAnimation} A copy of the animation.
       */

    }, {
      key: "clone",
      value: function clone() {
        var ani = new SpriteAnimation();
        ani.spriteSheet = this.spriteSheet;

        for (var i = 0; i < this.length; i++) {
          ani.push(this[i]);
        }

        ani.offset.x = this.offset.x;
        ani.offset.y = this.offset.y;
        ani.frameDelay = this.frameDelay;
        ani.playing = this.playing;
        ani.looping = this.looping;
        ani.rotation = this.rotation;
        return ani;
      }
      /**
       * Draws the animation at coordinate x and y.
       * Updates the frames automatically.
       *
       * Optional parameters effect the current draw cycle only and
       * are not saved between draw cycles.
       *
       * @method draw
       * @param {Number} x horizontal position
       * @param {Number} y vertical position
       * @param {Number} [r] rotation
       * @param {Number} [sx] scale x
       * @param {Number} [sy] scale y
       */

    }, {
      key: "draw",
      value: function draw(x, y, r, sx, sy) {
        var _sx, _sy;

        this.x = x || 0;
        this.y = y || 0;
        if (!this.visible) return;
        (_sx = sx) !== null && _sx !== void 0 ? _sx : sx = 1;
        (_sy = sy) !== null && _sy !== void 0 ? _sy : sy = 1;
        this.p.push();
        this.p.imageMode(p5.prototype.CENTER);
        this.p.translate(this.x, this.y);
        this.p.rotate(r || this.rotation);
        this.p.scale(sx * this._scale.x, sy * this._scale.y);
        var img = this[this.frame];

        if (img !== undefined) {
          if (this.spriteSheet) {
            var _x3 = img.x,
                _y3 = img.y,
                w = img.w,
                h = img.h; // image info

            this.p.image(this.spriteSheet, this.offset.x, this.offset.y, w, h, _x3, _y3, w, h);
          } else {
            this.p.image(img, this.offset.x, this.offset.y);
          }
        } else {
          log('Warning: ' + this.name + ' animation not loaded yet or frame ' + this.frame + ' does not exist. Load this animation in the p5.js preload function if you need to use it at the start of your program.');
        }

        this.p.pop();
      }
    }, {
      key: "update",
      value: function update() {
        this.cycles++;
        var previousFrame = this.frame;
        this.frameChanged = false; //go to frame

        if (this.length === 1) {
          this.playing = false;
          this.frame = 0;
        }

        if (this.playing && this.cycles % this.frameDelay === 0) {
          this.frameChanged = true;

          if (this.targetFrame == -1 && this.frame == this.lastFrame || this.frame == this.targetFrame) {
            if (this.endOnFirstFrame) this.frame = 0;
            if (this.looping) this.targetFrame = -1;else this.playing = false;
            this.onComplete(); //fire when on last frame

            if (!this.looping) return;
          } //going to target frame up


          if (this.targetFrame > this.frame && this.targetFrame !== -1) {
            this.frame++;
          } //going to target frame down
          else if (this.targetFrame < this.frame && this.targetFrame !== -1) {
            this.frame--;
          } else if (this.targetFrame === this.frame && this.targetFrame !== -1) {
            this.playing = false;
          } else if (this.looping) {
            //advance frame
            //if next frame is too high
            if (this.frame >= this.lastFrame) {
              this.frame = 0;
            } else this.frame++;
          } else {
            //if next frame is too high
            if (this.frame < this.lastFrame) this.frame++;
          }
        }
      }
      /**
       * Plays the animation, starting from the specified frame.
       *
       * @method play
       * @returns [Promise] a promise that resolves when the animation completes
       */

    }, {
      key: "play",
      value: function play(frame) {
        var _this7 = this;

        this.playing = true;
        if (frame !== undefined) this.frame = frame;
        this.targetFrame = -1;
        return new Promise(function (resolve) {
          _this7.onComplete = function () {
            resolve();
          };
        });
      }
      /**
       * Pauses the animation.
       *
       * @method pause
       */

    }, {
      key: "pause",
      value: function pause(frame) {
        this.playing = false;
        if (frame) this.frame = frame;
      }
      /**
       * Stops the animation. Alt for pause.
       *
       * @method stop
       */

    }, {
      key: "stop",
      value: function stop(frame) {
        this.playing = false;
        if (frame) this.frame = frame;
      }
      /**
       * Plays the animation backwards.
       * Equivalent to ani.goToFrame(0)
       *
       * @method rewind
       * @returns [Promise] a promise that resolves when the animation completes
       * rewinding
       */

    }, {
      key: "rewind",
      value: function rewind() {
        this.looping = false;
        return this.goToFrame(0);
      }
      /**
       * Plays the animation forwards and loops it.
       *
       * @method loop
       */

    }, {
      key: "loop",
      value: function loop() {
        this.looping = true;
        this.playing = true;
      }
      /**
       * Prevents the animation from looping
       *
       * @method noLoop
       */

    }, {
      key: "noLoop",
      value: function noLoop() {
        this.looping = false;
      }
      /**
       * fire when animation ends
       *
       * @method onComplete
       * @return {SpriteAnimation}
       */

    }, {
      key: "onComplete",
      value: function onComplete() {
        return undefined;
      }
      /**
       * Deprecated, change the frame property directly.
       *
       * Changes the current frame.
       *
       * @deprecated
       * @param {Number} frame Frame number (starts from 0).
       */

    }, {
      key: "changeFrame",
      value: function changeFrame(f) {
        console.warn('Deprecated, change the ani.frame property directly.');
        if (f < this.length) this.frame = f;else this.frame = this.length - 1;
        this.targetFrame = -1; //this.playing = false;
      }
      /**
       * Goes to the next frame and stops.
       *
       * @method nextFrame
       */

    }, {
      key: "nextFrame",
      value: function nextFrame() {
        if (this.frame < this.length - 1) this.frame = this.frame + 1;else if (this.looping) this.frame = 0;
        this.targetFrame = -1;
        this.playing = false;
      }
      /**
       * Goes to the previous frame and stops.
       *
       * @method previousFrame
       */

    }, {
      key: "previousFrame",
      value: function previousFrame() {
        if (this.frame > 0) this.frame = this.frame - 1;else if (this.looping) this.frame = this.length - 1;
        this.targetFrame = -1;
        this.playing = false;
      }
      /**
       * Plays the animation forward or backward toward a target frame.
       *
       * @method goToFrame
       * @param {Number} toFrame Frame number destination (starts from 0)
       * @returns [Promise] a promise that resolves when the animation completes
       */

    }, {
      key: "goToFrame",
      value: function goToFrame(toFrame) {
        var _this8 = this;

        if (toFrame < 0 || toFrame >= this.length) {
          return;
        } // targetFrame gets used by the update() method to decide what frame to
        // select next.  When it's not being used it gets set to -1.


        this.targetFrame = toFrame;

        if (this.targetFrame !== this.frame) {
          this.playing = true;
        }

        return new Promise(function (resolve) {
          _this8.onComplete = function () {
            resolve();
          };
        });
      }
      /**
       * Use .frame instead.
       *
       * Returns the current frame number.
       *
       * @deprecated
       * @return {Number} Current frame (starts from 0)
       */

    }, {
      key: "getFrame",
      value: function getFrame() {
        console.warn('Deprecated, use ani.frame instead.');
        return this.frame;
      }
      /**
       * Use .lastFrame instead.
       *
       * Returns the last frame number.
       *
       * @deprecated
       * @return {Number} Last frame number (starts from 0)
       */

    }, {
      key: "getLastFrame",
      value: function getLastFrame() {
        console.warn('Deprecated, use ani.lastFrame instead.');
        return this.lastFrame;
      }
      /**
       * Returns the index of the last frame.
       *
       * @property lastFrame
       * @type {Number}
       * @readonly
       */

    }, {
      key: "lastFrame",
      get: function get() {
        return this.length - 1;
      }
      /**
       * Returns the current frame as p5.Image.
       *
       * @method frameImage
       * @return {p5.Image} Current frame image
       * @readonly
       */

    }, {
      key: "frameImage",
      get: function get() {
        var f = this.frame;
        var img = this[f];
        if (img instanceof p5.Image) return img;
        var x = img.x,
            y = img.y,
            w = img.w,
            h = img.h; // image info

        var g = createGraphics(w, h);
        g.image(this.spriteSheet, this.offset.x, this.offset.y, w, h, x, y, w, h);
        return g;
      }
      /**
       * Width of the animation.
       *
       * @property w
       * @type {Number}
       */

    }, {
      key: "w",
      get: function get() {
        return this.width;
      }
      /**
       * Width of the animation.
       *
       * @property width
       * @type {Number}
       */

    }, {
      key: "width",
      get: function get() {
        if (this[this.frame] instanceof p5.Image) {
          return this[this.frame].width;
        } else if (this[this.frame]) {
          return this[this.frame].w;
        }

        return 1;
      }
      /**
       * Height of the animation.
       *
       * @property h
       * @type {Number}
       */

    }, {
      key: "h",
      get: function get() {
        return this.height;
      }
      /**
       * Height of the animation.
       *
       * @property height
       * @type {Number}
       */

    }, {
      key: "height",
      get: function get() {
        if (this[this.frame] instanceof p5.Image) {
          return this[this.frame].height;
        } else if (this[this.frame]) {
          return this[this.frame].h;
        }

        return 1;
      }
      /**
       * The frames of the animation.
       *
       * @property frames
       * @type {Array}
       */

    }, {
      key: "frames",
      get: function get() {
        var frames = [];

        for (var i = 0; i < this.length; i++) {
          frames.push(this[i]);
        }

        return frames;
      }
      /**
       * The frames of the animation. Alt for ani.frames
       *
       * @property images
       * @type {Array}
       */

    }, {
      key: "images",
      get: function get() {
        return this.frames;
      }
    }]);

    return SpriteAnimation;
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  /**
   * Look at the Group reference pages before reading these docs.
   *
   * https://p5play.org/learn/group.html
   *
   * In p5.play groups are collections of sprites with similar behavior.
   * For example a group may contain all the coin sprites that the
   * player can collect.
   *
   * Group extends Array. You can use them in for loops just like arrays
   * since they inherit all the functions and properties of standard
   * arrays such as group.length
   *
   * Since groups just contain references to sprites, a sprite can be in
   * multiple groups.
   *
   * sprite.remove() removes the sprite from all the groups
   * it belongs to. group.removeAll() removes all the sprites from
   * a group.
   *
   * The top level group is a p5 instance level variable named
   * 'allSprites' that contains all the sprites added to the sketch.
   *
   * @class Group
   * @constructor
   */


  var Group = /*#__PURE__*/function (_Array2) {
    _inherits(Group, _Array2);

    var _super2 = _createSuper(Group);

    function Group() {
      var _this9;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _classCallCheck(this, Group);

      var parent;

      if (args[0] instanceof Group) {
        parent = args[0];
        args = args.slice(1);
      }

      _this9 = _super2.call.apply(_super2, [this].concat(_toConsumableArray(args)));
      _this9.idNum = 0;
      _this9.p = pInst; // if all sprites doesn't exist yet,
      // this group is the allSprites group

      if (!_this9.p.allSprites) _this9._isAllSpritesGroup = true;
      if (!_this9._isAllSpritesGroup) _this9.parent = 0;
      if (parent) _this9.parent = parent.idNum;
      /**
       * Keys are the animation label, values are SpriteAnimation objects.
       *
       * @property animations
       * @type {Object}
       */

      _this9.animations = {};
      /**
       * Contains all the collision callback functions for this group
       * when it comes in contact with other sprites or groups.
       */

      _this9._collides = {};
      _this9._colliding = {};
      _this9._collided = {};
      _this9._overlap = {};
      /**
       * Contains all the overlap callback functions for this group
       * when it comes in contact with other sprites or groups.
       */

      _this9._overlaps = {};
      _this9._overlapping = {};
      _this9._overlapped = {};
      _this9._collisions = new Map();
      _this9._overlappers = new Map(); // mainly for internal use
      // autoCull as a property of allSprites only refers to the default allSprites cull
      // in the post draw function, if the user calls cull on allSprites it should work
      // for any other group made by users autoCull affects whether cull removes sprites or not
      // by default for allSprites it is set to true, for all other groups it is undefined

      _this9.autoCull;

      if (_this9.p.world) {
        _this9.idNum = _this9.p.world.groupsCreated;
        _this9.p.world.groups[_this9.idNum] = _assertThisInitialized(_this9);
        _this9.p.world.groupsCreated++;
      }

      var _this = _assertThisInitialized(_this9);

      var GroupSprite = /*#__PURE__*/function (_Sprite) {
        _inherits(GroupSprite, _Sprite);

        var _super3 = _createSuper(GroupSprite);

        function GroupSprite() {
          _classCallCheck(this, GroupSprite);

          return _super3.call.apply(_super3, [this, _this].concat(Array.prototype.slice.call(arguments)));
        }

        return _createClass(GroupSprite);
      }(Sprite);

      _this9.GroupSprite = GroupSprite;
      _this9.Sprite = GroupSprite;

      var SubGroup = /*#__PURE__*/function (_Group) {
        _inherits(SubGroup, _Group);

        var _super4 = _createSuper(SubGroup);

        function SubGroup() {
          _classCallCheck(this, SubGroup);

          return _super4.call.apply(_super4, [this, _this].concat(Array.prototype.slice.call(arguments)));
        }

        return _createClass(SubGroup);
      }(Group);

      _this9.SubGroup = SubGroup;
      _this9.Group = SubGroup;
      _this9.mouse = {
        presses: null,
        pressing: null,
        pressed: null,
        holds: null,
        holding: null,
        held: null,
        released: null,
        hovers: null,
        hovering: null,
        hovered: null
      };

      var _loop = function _loop(state) {
        _this9.mouse[state] = function (inp) {
          var _iterator10 = _createForOfIteratorHelper(_this),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var s = _step10.value;
              if (s.mouse[state](inp)) return true;
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          return false;
        };
      };

      for (var state in _this9.mouse) {
        _loop(state);
      }

      var props = [].concat(spriteProps, ['spriteSheet']);

      var _iterator9 = _createForOfIteratorHelper(props),
          _step9;

      try {
        var _loop3 = function _loop3() {
          var prop = _step9.value;
          Object.defineProperty(_assertThisInitialized(_this9), prop, {
            get: function get() {
              var val = _this['_' + prop];
              var i = _this.length - 1;

              if (val === undefined && this.p.world && !_this._isAllSpritesGroup) {
                var _parent2 = this.p.world.groups[_this.parent];

                if (_parent2) {
                  val = _parent2[prop];
                  i = _parent2.length - 1;
                }
              }

              return val;
            },
            set: function set(val) {
              _this['_' + prop] = val; // change the prop in all the sprite of this group

              for (var i = 0; i < _this.length; i++) {
                var s = _this[i];
                var v = val;
                if (typeof val == 'function') v = val(i);
                s[prop] = v;
              }
            }
          });
        };

        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      _this9.vel = pInst.createVector.call(pInst);
      _this9.mirror = {};
      var objProps = {
        vel: ['x', 'y'],
        mirror: ['x', 'y']
      };

      var _loop2 = function _loop2(objProp) {
        var _iterator11 = _createForOfIteratorHelper(objProps[objProp]),
            _step11;

        try {
          var _loop4 = function _loop4() {
            var prop = _step11.value;
            Object.defineProperty(_this9[objProp], prop, {
              get: function get() {
                var val = _this[objProp]['_' + prop];
                var i = _this.length - 1;

                if (val === undefined && _this.p.world && !_this._isAllSpritesGroup) {
                  var _parent3 = _this.p.world.groups[_this.parent];

                  if (_parent3) {
                    val = _parent3[objProp][prop];
                    i = _parent3.length - 1;
                  }
                }

                return val;
              },
              set: function set(val) {
                _this[objProp]['_' + prop] = val; // change the prop in all the sprite of this group

                for (var i = 0; i < _this.length; i++) {
                  var s = _this[i];
                  var v = val;
                  if (typeof val == 'function') v = val(i);
                  s[objProp][prop] = v;
                }
              }
            });
          };

          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            _loop4();
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
      };

      for (var objProp in objProps) {
        _loop2(objProp);
      }

      _this9.orbitAngle = 0;
      return _this9;
    }
    /**
     * Reference to the group's current animation.
     *
     * @property ani
     * @type {SpriteAnimation}
     */


    _createClass(Group, [{
      key: "ani",
      get: function get() {
        return this._animation;
      },
      set: function set(val) {
        this.addAni(val);

        var _iterator12 = _createForOfIteratorHelper(this),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var s = _step12.value;
            s.changeAni(val);
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      }
      /**
       * Reference to the group's current animation.
       *
       * @property animation
       * @type {SpriteAnimation}
       */

    }, {
      key: "animation",
      get: function get() {
        return this._animation;
      },
      set: function set(val) {
        this.ani = val;
      }
      /**
       * The group's animations.
       *
       * @property anis
       * @type {SpriteAnimation}
       */

    }, {
      key: "anis",
      get: function get() {
        return this.animations;
      }
      /**
       * Reference to the group's current image.
       *
       * @property img
       * @type {SpriteAnimation}
       */

    }, {
      key: "img",
      get: function get() {
        return this._animation.frameImage;
      },
      set: function set(val) {
        this.ani = val;
      }
      /**
       * Reference to the group's current image.
       *
       * @property image
       * @type {SpriteAnimation}
       */

    }, {
      key: "image",
      get: function get() {
        return this._animation.frameImage;
      },
      set: function set(val) {
        this.ani = val;
      }
      /**
       * Depending on the value that the amount property is set to, the group will
       * either add or remove sprites.
       *
       * @property amount
       * @type {Number}
       */

    }, {
      key: "amount",
      set: function set(val) {
        var diff = val - this.length;
        var shouldAdd = diff > 0;
        diff = Math.abs(diff);

        for (var i = 0; i < diff; i++) {
          if (shouldAdd) this.add(new this.Sprite());else this[this.length - 1].remove();
        }
      }
    }, {
      key: "resetCentroid",
      value: function resetCentroid() {
        var x = 0;
        var y = 0;

        var _iterator13 = _createForOfIteratorHelper(this),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var s = _step13.value;
            x += s.x;
            y += s.y;
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        this.centroid = {
          x: x / this.length,
          y: y / this.length
        };
        return this.centroid;
      }
    }, {
      key: "resetDistancesFromCentroid",
      value: function resetDistancesFromCentroid() {
        var _iterator14 = _createForOfIteratorHelper(this),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var s = _step14.value;
            s.distCentroid = {
              x: s.x - this.centroid.x,
              y: s.y - this.centroid.y
            };
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    }, {
      key: "snap",
      value: function snap(o, dist) {
        var _dist2;

        (_dist2 = dist) !== null && _dist2 !== void 0 ? _dist2 : dist = 1 || this.tileSize * 0.1;

        var _iterator15 = _createForOfIteratorHelper(this),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var s = _step15.value;
            s.snap(o, dist);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    }, {
      key: "_ensureCollide",
      value: function _ensureCollide(target, callback) {
        if (!target) {
          throw new FriendlyError('Group.collide', 2);
        }

        if (!(target instanceof Sprite) && !(target instanceof Group)) {
          throw new FriendlyError('Group.collide', 0, [target]);
        }

        if (callback && typeof callback != 'function') {
          throw new FriendlyError('Group.collide', 1, [callback]);
        }
      }
    }, {
      key: "collide",
      value: function collide(target, callback) {
        return this.collides(target, callback);
      }
      /**
       * Returns true on the first frame that the group collides with the
       * target sprite or group.
       *
       * Custom collision event handling can be done by using this function
       * in an if statement or adding a callback as the second parameter.
       *
       * @method collides
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       */

    }, {
      key: "collides",
      value: function collides(target, callback) {
        this._ensureCollide(target, callback);

        this._collides[target] = callback || true;
        return this._collisions.get(target) == 1;
      }
      /**
       * Returns a truthy value while the group is colliding with the
       * target sprite or group. The value is the number of frames that
       * the group has been colliding with the target.
       *
       * @method colliding
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       * @return {Number} frames
       */

    }, {
      key: "colliding",
      value: function colliding(target, callback) {
        this._ensureCollide(target, callback);

        this._colliding[target] = callback || true;

        var val = this._collisions.get(target);

        return val > 0 ? val : 0;
      }
      /**
       * Returns true on the first frame that the group no longer overlaps
       * with the target sprite or group.
       *
       * @method collided
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       * @return {Boolean}
       */

    }, {
      key: "collided",
      value: function collided(target, callback) {
        this._ensureCollide(target, callback);

        this._collided[target] = callback || true;
        return this._collisions.get(target) == -1;
      }
    }, {
      key: "_ensureOverlap",
      value: function _ensureOverlap(target, callback) {
        if (!target) {
          throw new FriendlyError('Group.overlap', 2);
        }

        if (!(target instanceof Sprite) && !(target instanceof Group)) {
          throw new FriendlyError('Group.overlap', 0, [target]);
        }

        if (callback && typeof callback != 'function') {
          throw new FriendlyError('Group.overlap', 1, [callback]);
        }

        if (!this._hasOverlaps) {
          var _iterator16 = _createForOfIteratorHelper(this),
              _step16;

          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var s = _step16.value;
              if (!s._hasOverlaps) s._createSensors();
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }

          this._hasOverlaps = true;
        }

        if (target instanceof Sprite) {
          if (!target._hasOverlaps) target._createSensors();
        } else if (target instanceof Group) {
          if (!target._hasOverlaps) {
            var _iterator17 = _createForOfIteratorHelper(target),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var _s = _step17.value;
                if (!_s._hasOverlaps) _s._createSensors();
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            target._hasOverlaps = true;
          }
        }

        this._overlap[target] = true;
      }
    }, {
      key: "overlap",
      value: function overlap(target, callback) {
        return this.overlaps(target, callback);
      }
      /**
       * Returns true on the first frame that the group overlaps with the
       * target sprite or group.
       *
       * Custom overlap event handling can be done by using this function
       * in an if statement or adding a callback as the second parameter.
       *
       * @method overlaps
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       */

    }, {
      key: "overlaps",
      value: function overlaps(target, callback) {
        this._ensureOverlap(target, callback);

        this._overlaps[target] = callback || true;
        return this._overlappers.get(target) == 1;
      }
      /**
       * Returns a truthy value while the group is overlapping with the
       * target sprite or group. The value returned is the number of
       * frames the group has been overlapping with the target.
       *
       * @method overlapping
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       * @return {Number} frames
       */

    }, {
      key: "overlapping",
      value: function overlapping(target, callback) {
        this._ensureOverlap(target, callback);

        this._overlapping[target] = callback || true;

        var val = this._overlappers.get(target);

        return val > 0 ? val : 0;
      }
      /**
       * Returns true on the first frame that the group no longer overlaps
       * with the target sprite or group.
       *
       * @method overlapped
       * @param {Sprite|Group} target
       * @param {Function} [callback]
       * @return {Boolean}
       */

    }, {
      key: "overlapped",
      value: function overlapped(target, callback) {
        this._ensureOverlap(target, callback);

        this._overlapped[target] = callback || true;
        return this._overlappers.get(target) == -1;
      }
      /**
       * EXPERIMENTAL implementation for beta testing!
       *
       * Apply a force that is scaled to the sprite's mass.
       *
       * @method applyForce
       * @param {p5.Vector|Array} forceVector force vector
       * @param {p5.Vector|Array} [forceOrigin] force origin
       */

    }, {
      key: "applyForce",
      value: function applyForce(forceVector, forceOrigin) {
        var _iterator18 = _createForOfIteratorHelper(this),
            _step18;

        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var s = _step18.value;
            s.applyForce(forceVector, forceOrigin);
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
      }
      /**
       * @method move
       */

    }, {
      key: "move",
      value: function move(distance, direction, speed) {
        var movements = [];

        var _iterator19 = _createForOfIteratorHelper(this),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var s = _step19.value;
            movements.push(s.move(distance, direction, speed));
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }

        return Promise.all(movements);
      }
      /**
       * @method moveTo
       */

    }, {
      key: "moveTo",
      value: function moveTo(x, y, speed) {
        if (typeof x != 'number') {
          var obj = x;
          if (obj == this.p.mouse && !this.p.mouse.active) return;
          speed = y;
          y = obj.y;
          x = obj.x;
        }

        var centroid = this.resetCentroid();
        var movements = [];

        var _iterator20 = _createForOfIteratorHelper(this),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var s = _step20.value;
            var dest = {
              x: s.x - centroid.x + x,
              y: s.y - centroid.y + y
            };
            movements.push(s.moveTo(dest.x, dest.y, speed));
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        return Promise.all(movements);
      }
      /**
       * @method moveTowards
       */

    }, {
      key: "moveTowards",
      value: function moveTowards(x, y, tracking) {
        if (typeof x != 'number') {
          var obj = x;
          if (obj == this.p.mouse && !this.p.mouse.active) return;
          tracking = y;
          y = obj.y;
          x = obj.x;
        }

        if (x === undefined && y === undefined) return;
        this.resetCentroid();

        var _iterator21 = _createForOfIteratorHelper(this),
            _step21;

        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var s = _step21.value;
            if (s.distCentroid === undefined) this.resetDistancesFromCentroid();
            var dest = {
              x: s.distCentroid.x + x,
              y: s.distCentroid.y + y
            };
            s.moveTowards(dest.x, dest.y, tracking);
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
      }
      /**
       * @method moveAway
       */

    }, {
      key: "moveAway",
      value: function moveAway(x, y, tracking) {
        if (typeof x != 'number') {
          var obj = x;
          if (obj == this.p.mouse && !this.p.mouse.active) return;
          tracking = y;
          y = obj.y;
          x = obj.x;
        }

        if (x === undefined && y === undefined) return;
        this.resetCentroid();

        var _iterator22 = _createForOfIteratorHelper(this),
            _step22;

        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var s = _step22.value;
            if (s.distCentroid === undefined) this.resetDistancesFromCentroid();
            var dest = {
              x: s.distCentroid.x + x,
              y: s.distCentroid.y + y
            };
            s.moveAway(dest.x, dest.y, tracking);
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
      }
      /**
       * EXPERIMENTAL! Subject to change in the future!
       *
       * Rotates the group around its centroid.
       *
       * @method orbit
       * @param {Number} amount Amount of rotation
       */

    }, {
      key: "orbit",
      value: function orbit(amount) {
        if (this.frame == 0) console.warn('group.orbit is experimental and is subject to change in the future!');
        if (!this.centroid) this.resetCentroid();
        this.orbitAngle += amount;
        var angle = this.orbitAngle;

        var _iterator23 = _createForOfIteratorHelper(this),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var s = _step23.value;
            if (s.distCentroid === undefined) this.resetDistancesFromCentroid();
            var x = s.distCentroid.x;
            var y = s.distCentroid.y;
            var x2 = x * this.p.cos(angle) - y * this.p.sin(angle);
            var y2 = x * this.p.sin(angle) + y * this.p.cos(angle);
            x2 += this.centroid.x;
            y2 += this.centroid.y;
            s.vel.x = (x2 - s.x) * 0.1 * s.tileSize;
            s.vel.y = (y2 - s.y) * 0.1 * s.tileSize;
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
      /**
       * Gets the member at index i.
       *
       * @deprecated get
       * @param {Number} i The index of the object to retrieve
       */

    }, {
      key: "get",
      value: function get(i) {
        console.warn('Deprecated: use group[i] instead of group.get(i)');
        return this[i];
      }
      /**
       * Check if a sprite is in the group.
       *
       * @method includes
       * @param {Sprite} sprite
       * @return {Number} index of the sprite or -1 if not found
       */

      /**
       * Use group.includes(sprite) instead.
       *
       * @deprecated contains
       * @param {Sprite} sprite The sprite to search
       * @return {Number} Index or -1 if not found
       */

    }, {
      key: "contains",
      value: function contains(sprite) {
        console.warn('Deprecated: use group.includes(sprite) instead of group.contains(sprite)');
        return this.indexOf(sprite) > -1;
      }
      /**
       * Adds a sprite to the group. Returns true if the sprite was added
       * because it was not already in the group.
       *
       * @method push
       * @param {Sprite} s The sprite to be added
       */

    }, {
      key: "push",
      value: function push(s) {
        if (!(s instanceof Sprite)) {
          throw new Error('you can only add sprites to a group');
        }

        if (this.indexOf(s) == -1) {
          _get(_getPrototypeOf(Group.prototype), "push", this).call(this, s);

          if (this.parent) this.p.world.groups[this.parent].push(s);
          s.groups.push(this);
          return true;
        }
      }
      /**
       * Alias for push.
       *
       * @method add
       * @param {Sprite} s The sprite to be added
       */

    }, {
      key: "add",
      value: function add(s) {
        this.push(s);
      }
      /**
       * @property length
       * @return {Number} The amount of sprites in the group
       */

      /**
       * Alias for group.length
       * @deprecated size
       */

    }, {
      key: "size",
      value: function size() {
        return this.length;
      }
      /**
       * Returns the group's unique identifier.
       *
       * @returns {String} groupID
       */

    }, {
      key: "toString",
      value: function toString() {
        return 'g' + this.idNum;
      }
      /**
       * Remove sprites that go outside the given culling boundary
       * relative to the camera.
       *
       * @method cull
       * @param {Number} top|size The distance that sprites can move below the p5.js canvas before they are removed. *OR* The distance sprites can travel outside the screen on all sides before they get removed.
       * @param {Number} bottom|cb The distance that sprites can move below the p5.js canvas before they are removed.
       * @param {Number} [left] The distance that sprites can move beyond the left side of the p5.js canvas before they are removed.
       * @param {Number} [right] The distance that sprites can move beyond the right side of the p5.js canvas before they are removed.
       * @param {Function} [cb(sprite)] The callback is given the sprite that
       * passed the cull boundary, if no callback is given the sprite is
       * removed by default
       */

    }, {
      key: "cull",
      value: function cull(top, bottom, left, right, cb) {
        if (left === undefined) {
          var size = top;
          cb = bottom;
          top = bottom = left = right = size;
        }

        if (isNaN(top) || isNaN(bottom) || isNaN(left) || isNaN(right)) {
          throw new TypeError('The culling boundary must be defined with numbers');
        }

        if (cb && typeof cb != 'function') {
          throw new TypeError('The callback to group.cull must be a function');
        }

        var cx = this.p.camera.x - this.p.world.hw / this.p.camera.zoom;
        var cy = this.p.camera.y - this.p.world.hh / this.p.camera.zoom;
        var minX = -left + cx;
        var minY = -top + cy;
        var maxX = this.p.width + right + cx;
        var maxY = this.p.height + bottom + cy;

        var _iterator24 = _createForOfIteratorHelper(this),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var s = _step24.value;

            if (s.x < minX || s.y < minY || s.x > maxX || s.y > maxY) {
              if (cb) cb(s);else s.remove();
            }
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
      /**
       * If no input is given all sprites in the group are removed.
       *
       * If a sprite or index is given, that sprite is removed from this
       * group and any group this group inherits from except for the
       * allSprites group.
       *
       * @method remove
       * @param {Sprite} item The sprite to be removed
       * @return {Boolean} true if sprite was found and removed
       */

    }, {
      key: "remove",
      value: function remove(item) {
        var _this10 = this;

        if (item === undefined) {
          while (this.length > 0) {
            this[0].remove();
          }

          return;
        }

        var idx;

        if (typeof item == 'number') {
          idx = item;
        } else {
          for (var i = this.length - 1; i >= 0; i--) {
            if (this[i] === item) {
              idx = i;
              break;
            }
          }
        }

        if (idx !== undefined) {
          var removed = this[idx];
          var gIdx = this[idx].groups.findIndex(function (g) {
            return g.idNum == _this10.idNum;
          });
          this[idx].groups.splice(gIdx, 1);
          this.splice(idx, 1);
          return removed;
        }

        throw new Error('Sprite not found in group');
      }
      /**
       * Removes all sprites from the group and destroys the group.
       *
       * @method removeAll
       */

    }, {
      key: "removeAll",
      value: function removeAll() {
        this.remove();
      }
      /**
       * Returns the highest depth in a group
       *
       * @deprecated maxDepth
       * @return {Number} The depth of the sprite drawn on the top
       */

    }, {
      key: "maxDepth",
      value: function maxDepth() {
        if (this.length == 0) return 0;
        if (this.length == 1 && this[0].layer === undefined) return 0;
        var max = this[0].layer;

        var _iterator25 = _createForOfIteratorHelper(this),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var s = _step25.value;
            if (s.layer > max) max = s.layer;
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }

        return max;
      }
      /**
       * Returns the lowest depth in a group
       *
       * @deprecated minDepth
       * @return {Number} The depth of the sprite drawn on the bottom
       */

    }, {
      key: "minDepth",
      value: function minDepth() {
        if (this.length === 0) {
          return 99999;
        }

        return this.reduce(function (minDepth, sprite) {
          return Math.min(minDepth, sprite.depth);
        }, Infinity);
      }
      /**
       * Draws all the sprites in the group.
       *
       * @method draw
       */

    }, {
      key: "draw",
      value: function draw() {
        var g = _toConsumableArray(this);

        g.sort(function (a, b) {
          return a.layer - b.layer;
        });

        for (var i = 0; i < g.length; i++) {
          var sprite = g[i];

          if (sprite.life-- < 0) {
            sprite.remove();
            g.splice(i, 1);
            i--;
            continue;
          }

          if (sprite.visible) sprite.draw();
        }
      }
    }, {
      key: "update",
      value: function update() {
        throw new Error('Use the updateSprites function instead to control whether sprites are updated or not.');
      }
    }]);

    return Group;
  }( /*#__PURE__*/_wrapNativeSuper(Array));
  /**
   * Adds an animation to the sprite. Use this function in the preload p5.js
   * function. You don't need to name the animation if the sprite will only
   * use one animation. See SpriteAnimation for more information.
   *
   * @example
   * sprite.addAni(name, animation);
   * sprite.addAni(name, frame1, frame2, frame3...);
   * sprite.addAni(name, atlas);
   *
   * @method addAni
   * @param {String} name SpriteAnimation identifier
   * @param {SpriteAnimation} animation The preloaded animation
   */


  Sprite.prototype.addAnimation = Group.prototype.addAnimation = Sprite.prototype.addAni = Group.prototype.addAni = Sprite.prototype.addImage = Group.prototype.addImage = Sprite.prototype.addImg = Group.prototype.addImg = function () {
    var args = Array.prototype.slice.call(arguments);
    var name, ani;

    if (args[0] instanceof SpriteAnimation) {
      ani = args[0];
      name = ani.name || 'default';
      ani.name = name;
    } else if (args[1] instanceof SpriteAnimation) {
      name = args[0];
      ani = args[1];
      ani.name = name;
    } else {
      ani = _construct(SpriteAnimation, [this].concat(_toConsumableArray(args)));
      name = ani.name;
    }

    this.animations[name] = ani;
    this._animation = ani; // only works if the animation was loaded in preload

    if (this._dimensionsUndefined && (ani.w != 1 || ani.h != 1)) {
      this.w = ani.w;
      this.h = ani.h;
    }

    return ani;
  };
  /**
   * Add multiple animations
   *
   * @method addAnis
   */


  Sprite.prototype.addAnis = Group.prototype.addAnis = Sprite.prototype.addAnimations = Group.prototype.addAnimations = Sprite.prototype.addImages = Group.prototype.addImages = Sprite.prototype.addImgs = Group.prototype.addImgs = function () {
    var args = arguments;
    var atlases;

    if (args.length == 1) {
      atlases = args[0];
    } else {
      this.spriteSheet = args[0];
      atlases = args[1];
    }

    for (var name in atlases) {
      var atlas = atlases[name];
      this.addAni(name, atlas);
    }
  };
  /**
   * Look at the World reference pages before reading these docs.
   *
   * https://p5play.org/learn/world.html
   *
   * @class World
   * @constructor
   */


  var World = /*#__PURE__*/function (_pl$World) {
    _inherits(World, _pl$World);

    var _super5 = _createSuper(World);

    function World() {
      var _this11$p$world;

      var _this11;

      _classCallCheck(this, World);

      _this11 = _super5.call(this, new pl.Vec2(0, 0), true);
      _this11.p = pInst;
      _this11.width = _this11.p.width;
      _this11.height = _this11.p.height;
      _this11._offset = {
        x: 0,
        y: 0
      };

      var _this = _assertThisInitialized(_this11);

      _this11.offset = {
        get x() {
          return -_this._offset.x;
        },

        /**
         * @property offset.x
         */
        set x(val) {
          _this._offset.x = val;

          _this.resize();
        },

        get y() {
          return -_this._offset.y;
        },

        /**
         * @property offset.y
         */
        set y(val) {
          _this._offset.y = val;

          _this.resize();
        }

      };

      _this11.resize();
      /**
       * If false, animations that are stopped before they are completed,
       * typically by a call to sprite.changeAni, will restart at the
       * frame they were stopped at. If true, animations will always
       * start playing from frame 0 unless specified by the user in a
       * separate `anim.changeFrame` call.
       *
       * @property autoResetAnimations
       * @type {SpriteAnimation}
       * @default false
       */


      _this11.autoResetAnimations = false;
      _this11.palettes = ((_this11$p$world = _this11.p.world) === null || _this11$p$world === void 0 ? void 0 : _this11$p$world.palettes) || [{
        // a
        b: 'black',
        c: 'crimson',
        d: 'dark blue',
        // e
        f: 'fuchsia',
        g: 'green',
        h: 'hot pink',
        i: 'blue',
        // indigo
        // j
        k: 'black',
        l: 'lavender',
        m: 'magenta',
        n: 'brown',
        o: 'orange',
        p: 'pink',
        // q
        r: 'red',
        s: 'sky blue',
        t: 'turquoise',
        u: 'blue',
        v: 'violet',
        w: 'white',
        // x
        y: 'yellow' // z

      }];
      _this11.groups = [_this11.p.allSprites];
      _this11.groupsCreated = 1;
      _this11.spritesCreated = 0;
      _this11.contacts = [];

      _this11.on('begin-contact', _this11._beginContact);

      _this11.on('end-contact', _this11._endContact);
      /**
       * Gravity vector (x, y)
       *
       * All sprites getting
       *
       * @property gravity
       */


      _this11.gravity = {
        get x() {
          return _this.m_gravity.x;
        },

        set x(val) {
          var _iterator26 = _createForOfIteratorHelper(_this.p.allSprites),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var s = _step26.value;
              s.sleeping = false;
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }

          _this.m_gravity.x = _this.p.round(val || 0);
        },

        get y() {
          return _this.m_gravity.y;
        },

        set y(val) {
          var _iterator27 = _createForOfIteratorHelper(_this.p.allSprites),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var s = _step27.value;
              s.sleeping = false;
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }

          _this.m_gravity.y = _this.p.round(val || 0);
        }

      };
      return _this11;
    }

    _createClass(World, [{
      key: "resize",
      value: function resize(w, h) {
        var _w6, _h6;

        (_w6 = w) !== null && _w6 !== void 0 ? _w6 : w = this.p.width;
        (_h6 = h) !== null && _h6 !== void 0 ? _h6 : h = this.p.height;
        this.origin = {
          x: w * 0.5 + this.offset.x,
          y: h * 0.5 + this.offset.y
        };

        if (this.p.allSprites.tileSize != 1) {
          this.origin.x -= this.p.allSprites.tileSize * 0.5;
          this.origin.y -= this.p.allSprites.tileSize * 0.5;
        }

        this.hw = w * 0.5;
        this.hh = h * 0.5;
      }
    }, {
      key: "_beginContact",
      value: function _beginContact(contact) {
        // Get both fixtures
        var a = contact.m_fixtureA;
        var b = contact.m_fixtureB;
        var t = '_collisions';
        if (a.isSensor()) t = '_overlappers';
        a = a.m_body.sprite;
        b = b.m_body.sprite;
        a[t].set(b, 0);
        b[t].set(a, 0);

        var _iterator28 = _createForOfIteratorHelper(b.groups),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var g = _step28.value;
            g[t].set(a, g[t].get(a) || 0);
            a[t].set(g, a[t].get(g) || 0);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }

        var _iterator29 = _createForOfIteratorHelper(a.groups),
            _step29;

        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _g2 = _step29.value;

            _g2[t].set(b, _g2[t].get(b) || 0);

            b[t].set(_g2, b[t].get(_g2) || 0);

            var _iterator30 = _createForOfIteratorHelper(b.groups),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var g2 = _step30.value;

                _g2[t].set(g2, _g2[t].get(g2) || 0);

                g2[t].set(_g2, g2[t].get(_g2) || 0);
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }
    }, {
      key: "_endContact",
      value: function _endContact(contact) {
        var a = contact.m_fixtureA;
        var b = contact.m_fixtureB;
        var contactType = '_collisions';
        if (a.isSensor()) contactType = '_overlappers';
        a = a.m_body.sprite;
        b = b.m_body.sprite;
        a[contactType].set(b, -2);
        b[contactType].set(a, -2);

        var _iterator31 = _createForOfIteratorHelper(b.groups),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var g = _step31.value;
            var inContact = false;

            var _iterator33 = _createForOfIteratorHelper(g),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var s = _step33.value;

                if (s[contactType].get(a) >= 0) {
                  inContact = true;
                  break;
                }
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }

            if (!inContact) {
              g[contactType].set(a, -2);
              a[contactType].set(g, -2);
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }

        var _iterator32 = _createForOfIteratorHelper(a.groups),
            _step32;

        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var _g3 = _step32.value;
            var _inContact = false;

            var _iterator34 = _createForOfIteratorHelper(_g3),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var _s2 = _step34.value;

                if (_s2[contactType].get(b) >= 0) {
                  _inContact = true;
                  break;
                }
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }

            if (!_inContact) {
              _g3[contactType].set(b, -2);

              b[contactType].set(_g3, -2);

              var _iterator35 = _createForOfIteratorHelper(b.groups),
                  _step35;

              try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                  var g2 = _step35.value;

                  _g3[contactType].set(g2, -2);

                  g2[contactType].set(_g3, -2);
                }
              } catch (err) {
                _iterator35.e(err);
              } finally {
                _iterator35.f();
              }
            }
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }
      }
    }, {
      key: "autoCull",
      get: function get() {
        return this.p.allSprites.autoCull;
      },
      set: function set(val) {
        this.p.allSprites.autoCull = val;
      }
    }, {
      key: "allowSleeping",
      get: function get() {
        return this.getAllowSleeping();
      },
      set: function set(val) {
        this.setAllowSleeping(val);
      }
    }]);

    return World;
  }(pl.World);
  /**
   * Look at the Camera reference pages before reading these docs.
   *
   * https://p5play.org/learn/camera.html
   *
   * A camera facilitates scrolling and zooming for scenes extending beyond
   * the canvas. A camera has a position, a zoom factor, and the mouse
   * coordinates relative to the view.
   * The camera is automatically created on the first draw cycle.
   *
   * In p5.js terms the camera wraps the whole drawing cycle in a
   * transformation matrix but it can be disable anytime during the draw
   * cycle for example to draw interface elements in an absolute position.
   *
   * @class Camera
   * @constructor
   * @param {Number} x Initial x coordinate
   * @param {Number} y Initial y coordinate
   * @param {Number} zoom magnification
   **/


  var Camera = /*#__PURE__*/function () {
    function Camera(x, y, zoom) {
      _classCallCheck(this, Camera);

      this.p = pInst;

      var _this = this;

      this._pos = {
        x: 0,
        y: 0
      };
      /**
       * Camera zoom.
       *
       * A scale of 1 will be the normal size. Setting it to 2 will
       * make everything twice the size. .5 will make everything half
       * size.
       *
       * @property zoom
       * @type {Number}
       * @default 1
       */

      this.zoom = zoom || 1;
      /**
       * Get the translated mouse position relative to the camera view.
       * Offsetting and scaling the canvas will not change the sprites' position
       * nor the mouseX and mouseY variables. Use this property to read the mouse
       * position if the camera moved or zoomed.
       *
       * @property mouse
       * @type {Object}
       */

      this.mouse = {
        x: this.p.mouseX,
        y: this.p.mouseY
      };
      /**
       * @property mouse.x
       * @type {Number}
       */

      /**
       * @property mouse.y
       * @type {Number}
       */

      /**
       * True if the camera is active.
       * Read only property. Use the methods Camera.on() and Camera.off()
       * to enable or disable the camera.
       *
       * @property active
       * @type {Boolean}
       * @default false
       */

      this.active = false;
      this.bound = {
        min: {
          x: 0,
          y: 0
        },
        max: {
          x: 0,
          y: 0
        }
      };
      if (x) this.x = x;
      if (y) this.y = y;
    }
    /**
     * The camera's position. {x, y}
     *
     * @property pos
     * @type {Object}
     */


    _createClass(Camera, [{
      key: "pos",
      get: function get() {
        return this._pos;
      }
      /**
       * The camera's position. Alias for pos.
       *
       * @property position
       * @type {Object}
       */

    }, {
      key: "position",
      get: function get() {
        return this._pos;
      }
      /**
       * The camera x position.
       *
       * @property x
       * @type {Number}
       */

    }, {
      key: "x",
      get: function get() {
        return this._pos.x;
      },
      set: function set(val) {
        this._pos.x = val;
        this.bound.min.x = this.x - this.p.world.hw / this.zoom - 100;
        this.bound.max.x = this.x + this.p.world.hw / this.zoom + 100;
      }
      /**
       * The camera y position.
       *
       * @property y
       * @type {Number}
       */

    }, {
      key: "y",
      get: function get() {
        return this._pos.y;
      },
      set: function set(val) {
        this._pos.y = val;
        this.bound.min.y = this.y - this.p.world.hh / this.zoom - 100;
        this.bound.max.y = this.y + this.p.world.hh / this.zoom + 100;
      }
      /**
       * Activates the camera.
       * The canvas will be drawn according to the camera position and scale until
       * camera.off() is called
       *
       * @method on
       */

    }, {
      key: "on",
      value: function on() {
        if (!this.active) {
          this.p.push();
          this.p.scale(this.zoom);
          this.p.translate(-this.x + this.p.world.hw / this.zoom, -this.y + this.p.world.hh / this.zoom);
          this.active = true;
        }
      }
      /**
       * Deactivates the camera.
       * The canvas will be drawn normally, ignoring the camera's position
       * and scale until camera.on() is called
       *
       * @method off
       */

    }, {
      key: "off",
      value: function off() {
        if (this.active) {
          this.p.pop();
          this.active = false;
        }
      }
    }]);

    return Camera;
  }(); //end camera class

  /**
   * Used internally to find a contact callback between two sprites.
   *
   * @private _findContactCB
   * @param {String} type "collide" or "overlap"
   * @param {Sprite} s0
   * @param {Sprite} s1
   * @returns contact cb if one can be found between the two sprites
   */


  function _findContactCB(type, s0, s1) {
    var cb = s0[type][s1];
    if (cb) return cb;
    var s1IsSprite = s1 instanceof Sprite;

    if (s1IsSprite) {
      var _iterator36 = _createForOfIteratorHelper(s1.groups),
          _step36;

      try {
        for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
          var g1 = _step36.value;
          cb = s0[type][g1];
          if (cb) return cb;
        }
      } catch (err) {
        _iterator36.e(err);
      } finally {
        _iterator36.f();
      }
    }

    if (s0 instanceof Sprite) {
      var _iterator37 = _createForOfIteratorHelper(s0.groups),
          _step37;

      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var g0 = _step37.value;
          cb = g0[type][s1];
          if (cb) return cb;

          if (s1IsSprite) {
            var _iterator38 = _createForOfIteratorHelper(s1.groups),
                _step38;

            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var _g4 = _step38.value;
                cb = g0[type][_g4];
                if (cb) return cb;
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
          }
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }
    }

    return false;
  }
  /**
   * This planck function should've be named "shouldContact", because that's what
   * it actually decides.
   *
   * Here we override it to allow for overlap events between sprites.
   */


  pl.Fixture.prototype.shouldCollide = function (that) {
    // should this and that produce a contact event?
    var a = this;
    var b = that; // sensors overlap (returning true doesn't mean they will collide it means
    // they're included in begin contact and end contact events)

    if (a.isSensor() && b.isSensor()) return true; // ignore contact events between a sensor and a non-sensor

    if (a.isSensor() || b.isSensor()) return false; // else test if the two non-sensor colliders should overlap

    a = a.m_body.sprite;
    b = b.m_body.sprite; // if `a` has an overlap enabled with `b` their colliders should not produce a
    // contact event, the overlap contact event is between their sensors

    var shouldOverlap = _findContactCB('_overlap', a, b);

    if (!shouldOverlap) shouldOverlap = _findContactCB('_overlap', b, a);
    if (shouldOverlap) return false;
    return true;
  };
  /**
   * Look at the Tiles reference pages before reading these docs.
   *
   * https://p5play.org/learn/tiles.html
   *
   * @class Tiles
   * @constructor
   * @param {String} tiles
   * @param {Number} x
   * @param {Number} y
   * @param {Number} w
   * @param {Number} h
   */


  var Tiles = /*#__PURE__*/_createClass(function Tiles(tiles, x, y, w, h) {
    var _x4, _y4, _w7, _h7;

    _classCallCheck(this, Tiles);

    if (typeof tiles == 'string') tiles = tiles.split('\n');
    (_x4 = x) !== null && _x4 !== void 0 ? _x4 : x = 0;
    (_y4 = y) !== null && _y4 !== void 0 ? _y4 : y = 0;
    (_w7 = w) !== null && _w7 !== void 0 ? _w7 : w = 1;
    (_h7 = h) !== null && _h7 !== void 0 ? _h7 : h = 1;

    for (var row = 0; row < tiles.length; row++) {
      for (var col = 0; col < tiles[row].length; col++) {
        var t = tiles[row][col];
        if (t == ' ' || t == '.') continue;
        var ani = void 0,
            g = void 0;

        var _iterator39 = _createForOfIteratorHelper(pInst.world.groups),
            _step39;

        try {
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
            g = _step39.value;
            ani = g.animations[t];
            if (ani) break;
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }

        if (ani) {
          new g.Sprite(ani, x + col * w, y + row * h);
          continue;
        }

        var wasFound = false;

        var _iterator40 = _createForOfIteratorHelper(pInst.world.groups),
            _step40;

        try {
          for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
            g = _step40.value;

            if (g.tile == t) {
              wasFound = true;
              break;
            }
          }
        } catch (err) {
          _iterator40.e(err);
        } finally {
          _iterator40.f();
        }

        if (wasFound) {
          new g.Sprite(x + col * w, y + row * h);
          continue;
        }

        var s = void 0;

        var _iterator41 = _createForOfIteratorHelper(pInst.allSprites),
            _step41;

        try {
          for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
            s = _step41.value;

            if (s.tile == t) {
              wasFound = true;
              break;
            }
          }
        } catch (err) {
          _iterator41.e(err);
        } finally {
          _iterator41.f();
        }

        if (wasFound) {
          s.x = x + col * w;
          s.y = y + row * h;
          continue;
        }

        console.error('Tile not found: ' + t);
      }
    }
  });

  this.Tiles = Tiles;
  /**
   * Look at the p5.play reference pages before reading these docs.
   *
   * https://p5play.org/learn
   *
   * @class p5.play
   */

  /**
   * Equivalent to `new Tiles`
   *
   * @method createTiles
   * @param {String|Array} tiles String or array of strings
   */

  this.createTiles = function (tiles, x, y, w, h) {
    return new Tiles(tiles, x, y, w, h);
  };

  var Scale = /*#__PURE__*/function () {
    function Scale() {
      _classCallCheck(this, Scale);

      this._x = 1;
      this._y = 1;
      this._avg = 1;
    }

    _createClass(Scale, [{
      key: "valueOf",
      value: function valueOf() {
        return this._avg;
      }
    }, {
      key: "x",
      get: function get() {
        return this._x;
      },
      set: function set(val) {
        if (val == this._x) return;
        this._x = val;
        this._avg = (this._x + this._y) * 0.5;
      }
    }, {
      key: "y",
      get: function get() {
        return this._y;
      },
      set: function set(val) {
        if (val == this._y) return;
        this._y = val;
        this._avg = (this._x + this._y) * 0.5;
      }
    }]);

    return Scale;
  }();
  /**
   * This function is automatically called at the end of the p5.js draw
   * loop, unless it was already called in the draw loop.
   *
   * @method updateSprites
   * @param {Number} timeStep
   * @param {Number} velocityIterations
   * @param {Number} positionIterations
   */


  this.updateSprites = function (timeStep, velocityIterations, positionIterations) {
    var _iterator42 = _createForOfIteratorHelper(this.allSprites),
        _step42;

    try {
      for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
        var s = _step42.value;
        s.prevPos.x = s.x;
        s.prevPos.y = s.y;
      } // 2nd and 3rd arguments are velocity and position iterations

    } catch (err) {
      _iterator42.e(err);
    } finally {
      _iterator42.f();
    }

    this.world.step(timeStep || 1 / 60, velocityIterations || 8, positionIterations || 3);

    var _iterator43 = _createForOfIteratorHelper(this.allSprites),
        _step43;

    try {
      for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
        var _s3 = _step43.value;

        _s3.update();
      }
    } catch (err) {
      _iterator43.e(err);
    } finally {
      _iterator43.f();
    }

    this.p5play.autoUpdateSprites = false;
  };
  /**
   * Returns the sprites at a position.
   *
   * @method getSpriteAt
   * @param {Number} x
   * @param {Number} y
   * @returns
   */


  this.getSpritesAt = function (x, y, group, cameraActiveWhenDrawn) {
    var _cameraActiveWhenDraw, _group;

    (_cameraActiveWhenDraw = cameraActiveWhenDrawn) !== null && _cameraActiveWhenDraw !== void 0 ? _cameraActiveWhenDraw : cameraActiveWhenDrawn = true;
    var convertedPoint = new pl.Vec2(x / plScale, y / plScale);
    var aabb = new pl.AABB();
    aabb.lowerBound = new pl.Vec2(convertedPoint.x - 0.001, convertedPoint.y - 0.001);
    aabb.upperBound = new pl.Vec2(convertedPoint.x + 0.001, convertedPoint.y + 0.001); // Query the world for overlapping shapes.

    var fxts = [];
    pInst.world.queryAABB(aabb, function (fxt) {
      if (fxt.getShape().testPoint(fxt.getBody().getTransform(), convertedPoint)) {
        fxts.push(fxt);
      }

      return true;
    });
    (_group = group) !== null && _group !== void 0 ? _group : group = pInst.allSprites;
    var sprites = [];

    if (fxts.length > 0) {
      var _iterator44 = _createForOfIteratorHelper(group),
          _step44;

      try {
        for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
          var s = _step44.value;
          if (!s.body) continue;

          if (fxts.includes(s.body.m_fixtureList)) {
            if (s._cameraActiveWhenDrawn == cameraActiveWhenDrawn) sprites.push(s);
          }
        }
      } catch (err) {
        _iterator44.e(err);
      } finally {
        _iterator44.f();
      }
    }

    return sprites;
  };
  /**
   * Returns the sprite at the top most layer position where
   * the mouse click occurs
   *
   * @method getSpriteAt
   * @param {Number} x
   * @param {Number} y
   * @returns
   */


  this.getSpriteAt = function (x, y, group) {
    var sprites = this.getSpritesAt(x, y, group);
    sprites.sort(function (a, b) {
      return (a.layer - b.layer) * -1;
    });
    return sprites[0];
  }; // TODO implement planck joints
  // the following code is from https://github.com/bobcgausa/cook-js
  // const debugDraw = (canvas, scale, world) => {
  // 	const context = canvas.getContext('2d');
  // 	//context.fillStyle = '#DDD';
  // 	//context.fillRect(0, 0, canvas.width, canvas.height);
  // 	// Draw joints
  // 	for (let j = world.m_jointList; j; j = j.m_next) {
  // 		context.lineWidth = 0.25;
  // 		context.strokeStyle = '#00F';
  // 		drawJoint(context, scale, world, j);
  // 	}
  // };
  // const drawJoint = (context, scale, world, joint) => {
  // 	context.save();
  // 	context.scale(scale, scale);
  // 	context.lineWidth /= scale;
  // 	const b1 = joint.m_bodyA;
  // 	const b2 = joint.m_bodyB;
  // 	const x1 = b1.getPosition();
  // 	const x2 = b2.getPosition();
  // 	let p1;
  // 	let p2;
  // 	context.beginPath();
  // 	switch (joint.m_type) {
  // 		case 'distance-joint':
  // 		case 'rope-joint':
  // 			context.moveTo(x1.x, x1.y);
  // 			context.lineTo(x2.x, x2.y);
  // 			break;
  // 		case 'wheel-joint':
  // 		case 'revolute-joint':
  // 			p1 = joint.m_localAnchorA;
  // 			p2 = joint.m_localAnchorB;
  // 			const a = b2.getAngle();
  // 			const v = new pl.Vec2(cos(a), sin(a));
  // 			context.moveTo(x2.x, x2.y);
  // 			context.lineTo(x2.x + v.x, x2.y + v.y);
  // 			break;
  // 		case 'mouse-joint':
  // 		case 'weld-joint':
  // 			p1 = joint.getAnchorA();
  // 			p2 = joint.getAnchorB();
  // 			context.moveTo(p1.x, p1.y);
  // 			context.lineTo(p2.x, p2.y);
  // 			break;
  // 		case 'pulley-joint':
  // 			p1 = joint.m_groundAnchorA;
  // 			p2 = joint.m_groundAnchorB;
  // 			context.moveTo(p1.x, p1.y);
  // 			context.lineTo(x1.x, x1.y);
  // 			context.moveTo(p2.x, p2.y);
  // 			context.lineTo(x2.x, x2.y);
  // 			context.moveTo(p1.x, p1.y);
  // 			context.lineTo(p2.x, p2.y);
  // 			break;
  // 		default:
  // 			break;
  // 	}
  // 	context.closePath();
  // 	context.stroke();
  // 	context.restore();
  // };
  // function getAABB(body) {
  // 	const aabb = new pl.AABB();
  // 	const t = new pl.Transform();
  // 	t.setIdentity();
  // 	const shapeAABB = new pl.AABB();
  // 	aabb.lowerBound = new pl.Vec2(1000000, 1000000);
  // 	aabb.upperBound = new pl.Vec2(-1000000, -1000000);
  // 	let fixture = body.body.getFixtureList();
  // 	while (fixture) {
  // 		const shape = fixture.getShape();
  // 		const childCount = shape.getChildCount(); //only for chains
  // 		for (let child = 0; child < childCount; ++child) {
  // 			shape.computeAABB(shapeAABB, body.body.m_xf, child);
  // 			unionTo(aabb, shapeAABB);
  // 		}
  // 		fixture = fixture.getNext();
  // 	}
  // 	aabb.lowerBound.mul(plScale); //upper left, offset from center
  // 	aabb.upperBound.mul(plScale); //lower right
  // 	return aabb;
  // }
  // function unionTo(a, b) {
  // 	a.lowerBound.x = min(a.lowerBound.x, b.lowerBound.x);
  // 	a.lowerBound.y = min(a.lowerBound.y, b.lowerBound.y);
  // 	a.upperBound.x = max(a.upperBound.x, b.upperBound.x);
  // 	a.upperBound.y = max(a.upperBound.y, b.upperBound.y);
  // }
  // The ray cast collects multiple hits along the ray in ALL mode.
  // The fixtures are not necessary reported in order.
  // We might not capture the closest fixture in ANY.
  // const rayCast = (() => {
  // 	let def = {
  // 		ANY: 0,
  // 		NEAREST: 2,
  // 		ALL: 1
  // 	};
  // 	const reset = (mode, ignore) => {
  // 		def.points = [];
  // 		def.normals = [];
  // 		def.fixtures = [];
  // 		def.fractions = [];
  // 		def.ignore = ignore || [];
  // 		def.mode = mode == undefined ? def.NEAREST : mode;
  // 	};
  // 	def.rayCast = (point1, point2, mode, ignore) => {
  // 		reset(mode, ignore);
  // 		world.rayCast(scaleTo(point1), scaleTo(point2), def.callback);
  // 	};
  // 	def.callback = (fixture, point, normal, fraction) => {
  // 		if (def.ignore.length > 0) for (let i = 0; i < def.ignore.length; i++) if (def.ignore[i] === fixture) return -1;
  // 		if (def.mode == def.NEAREST && def.points.length == 1) {
  // 			def.fixtures[0] = fixture;
  // 			def.points[0] = scaleFrom(point);
  // 			def.normals[0] = normal;
  // 			def.fractions[0] = fraction;
  // 		} else {
  // 			def.fixtures.push(fixture);
  // 			def.points.push(scaleFrom(point));
  // 			def.normals.push(normal);
  // 			def.fractions.push(fraction);
  // 		}
  // 		// -1 to ignore a fixture and continue
  // 		//  0 to terminate on first hit, or for searching
  // 		//  fraction seems to return nearest fixture as last entry in array
  // 		// +1 returns multiple but mix of low high or high low
  // 		return def.mode == def.NEAREST ? fraction : def.mode;
  // 	};
  // 	return def;
  // })();
  // const queryAABB = (() => {
  // 	let def = {};
  // 	function reset(search) {
  // 		def.fixtures = [];
  // 		def.search = search || [];
  // 	}
  // 	def.query = ({ lowerBound, upperBound }, search) => {
  // 		reset(search);
  // 		aabbc = new pl.AABB(lowerBound.mul(1 / plScale), upperBound.mul(1 / plScale));
  // 		world.queryAABB(aabbc, def.callback);
  // 	};
  // 	def.callback = (fixture) => {
  // 		def.fixtures.push(fixture);
  // 		return true;
  // 	};
  // 	return def;
  // })();

  /**
   * Gets a color from a color palette
   *
   * @method colorPal
   * @param {String} c A single character, a key found in the color palette object.
   * @param {Number|Object} palette Can be a palette object or number index
   * in the system's palettes array.
   * @returns a hex color string for use by p5.js functions
   */


  this.colorPal = function (c, palette) {
    var _palette;

    if (c instanceof p5.Color) return c;

    if (typeof palette == 'number') {
      palette = pInst.world.palettes[palette];
    }

    (_palette = palette) !== null && _palette !== void 0 ? _palette : palette = pInst.world.palettes[0];
    var clr;
    if (palette) clr = palette[c]; // if transparent

    if (clr === '' || c === '.' || c === ' ') {
      return pInst.color(0, 0, 0, 0);
    }

    return pInst.color(clr || c);
  };
  /**
   * Create pixel art images from a string. Each character in the
   * input string represents a color value defined in the palette
   * object.
   *
   * @method spriteArt
   * @param {String} txt Each character represents a pixel color value
   * @param {Number} scale The scale of the image
   * @param {Number|Object} palette Color palette
   * @returns A p5.js Image
   *
   * @example
   * let str = `
   * ...yyyy
   * .yybyybyy
   * yyyyyyyyyy
   * yybyyyybyy
   * .yybbbbyy
   * ...yyyy`;
   *
   * let img = spriteArt(str);
   */


  this.spriteArt = function (txt, scale, palette) {
    var _scale, _palette2;

    (_scale = scale) !== null && _scale !== void 0 ? _scale : scale = 1;

    if (typeof palette == 'number') {
      palette = pInst.world.palettes[palette];
    }

    (_palette2 = palette) !== null && _palette2 !== void 0 ? _palette2 : palette = pInst.world.palettes[0];
    var lines = txt; // accepts 2D arrays of characters

    if (typeof txt == 'string') {
      txt = txt.trim();
      txt = txt.replace(/\r*\n\t+/g, '\n'); // trim leading tabs

      txt = txt.replace(/\s+$/g, ''); // trim trailing whitespace

      lines = txt.split('\n');
    }

    var w = 0;

    var _iterator45 = _createForOfIteratorHelper(lines),
        _step45;

    try {
      for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
        var line = _step45.value;
        if (line.length > w) w = line.length;
      }
    } catch (err) {
      _iterator45.e(err);
    } finally {
      _iterator45.f();
    }

    var h = lines.length;
    var img = pInst.createImage(w * scale, h * scale);
    img.loadPixels();

    for (var i = 0; i < lines.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        for (var sX = 0; sX < scale; sX++) {
          for (var sY = 0; sY < scale; sY++) {
            var c = _this12.colorPal(lines[i][j], palette);

            img.set(j * scale + sX, i * scale + sY, c);
          }
        }
      }
    }

    img.updatePixels();
    img.w = img.width;
    img.h = img.height;
    pInst.p5play.images.onLoad(img);
    return img; // return the p5 graphics object
  };
  /**
   * Deprecated, use sprite.draw() instead.
   *
   * allSprites.draw() is run automatically at the end of the p5.js
   * draw loop, unless a sprite or group is drawn separately within the
   * draw loop.
   *
   * @deprecated
   * @method drawSprites
   */


  this.drawSprite = function (sprite) {
    if (pInst.frameCount == 1) console.warn('drawSprite() is deprecated, use sprite.draw() instead.');
    sprite.draw();
  };
  /**
   * Deprecated, use group.draw() instead.
   *
   * allSprites.draw() is run automatically at the end of the p5.js
   * draw loop, unless a sprite or group is drawn separately within the
   * draw loop.
   *
   * @deprecated
   * @method drawSprites
   */


  this.drawSprites = function (group) {
    var _group2;

    if (pInst.frameCount == 1) console.warn('drawSprites() is deprecated, use group.draw() instead.');
    (_group2 = group) !== null && _group2 !== void 0 ? _group2 : group = pInst.allSprites;
    group.draw();
  };
  /**
   * Creates a new sprite. Equivalent to `new Sprite()`
   *
   * @returns {Sprite}
   */


  this.createSprite = function () {
    return _construct(Sprite, Array.prototype.slice.call(arguments));
  };
  /**
   * Creates a new group of sprites. Equivalent to `new Group()`
   *
   * @returns {Group}
   */


  this.createGroup = function () {
    return _construct(Group, Array.prototype.slice.call(arguments));
  };
  /**
   * Loads an animation. Equivalent to `new SpriteAnimation()`
   *
   * Load animations in the preload p5.js function if you need to use
   * them when your program starts.
   *
   * @method loadAni
   * @returns {SpriteAnimation}
   */

  /**
   * Alias for loadAni
   *
   * @method loadAnimation
   * @returns {SpriteAnimation}
   */


  this.loadAni = this.loadAnimation = function () {
    return _construct(SpriteAnimation, Array.prototype.slice.call(arguments));
  };
  /**
   * Displays an animation. Similar to the p5.js image function.
   *
   * @method animation
   * @param {SpriteAnimation} ani Animation to be displayed
   * @param {Number} x X coordinate
   * @param {Number} y Y coordinate
   *
   */


  this.animation = function (ani, x, y, r, sX, sY) {
    if (ani.visible) ani.update();
    ani.draw(x, y, r, sX, sY);
  };
  /**
   * Delay code execution in an async function for the specified time.
   *
   * @method delay
   * @param {Number} millisecond
   * @returns {Promise} A Promise that fulfills after the specified time.
   *
   * @example
   * async function startGame() {
   *   await delay(3000);
   * }
   */


  p5.prototype.delay = function (millisecond) {
    // if no input arg given, delay waits for the next possible animation frame
    if (!millisecond) {
      return new Promise(requestAnimationFrame);
    } else {
      // else it wraps setTimeout in a Promise
      return new Promise(function (resolve) {
        setTimeout(resolve, millisecond);
      });
    }
  };
  /**
   * Sleep for the specified time. Equivalent to the delay function.
   *
   * @method sleep
   * @param {Number} millisecond
   * @returns {Promise} A Promise that fulfills after the specified time.
   *
   * @example
   * async function startGame() {
   *   await sleep(3000);
   * }
   */


  p5.prototype.sleep = function (millisecond) {
    return p5.prototype.delay(millisecond);
  };
  /**
   * Awaitable function for playing sounds.
   *
   * @method play
   * @param {p5.Sound} sound
   * @returns {Promise}
   */


  this.play = function (sound) {
    if (!sound.play) throw new Error('Tried to play a sound but the sound is not a sound object: ' + sound); // TODO reject if sound not found

    return new Promise(function (resolve, reject) {
      sound.play();
      sound.onended(function () {
        return resolve();
      });
    });
  };

  var userDisabledP5Errors = p5.disableFriendlyErrors;
  p5.disableFriendlyErrors = true;
  var _createCanvas = this.createCanvas;
  /**
   * Equivalent to p5.js createCanvas function and `new Canvas()`
   *
   * In p5.play a canvas can be created with an aspect ratio in the
   * format `width:height`. For example `new Canvas('16:9')` will create
   * the largest possible canvas with a 16:9 aspect ratio.
   *
   * This function also disables the default keydown responses for
   * the arrow keys, slash, and spacebar. This is to prevent the
   * browser from scrolling the page when the user is playing a game using
   * common keyboard commands.
   *
   * @method createCanvas
   * @param {Number} width|ratio
   * @param {Number} height
   */

  this.createCanvas = function () {
    var _this13 = this;

    var args = Array.prototype.slice.call(arguments);
    var isFullScreen = false;
    var pixelated = false;
    var w, h, ratio;

    if (typeof args[0] == 'string') {
      ratio = args[0].split(':');

      if (args[1] == 'fullscreen') {
        isFullScreen = true;
      }
    }

    if (!args.length) {
      args[0] = window.innerWidth;
      args[1] = window.innerHeight;
      isFullScreen = true;
    } else if (typeof args[0] == 'number' && typeof args[1] != 'number') {
      args[2] = args[1];
      args[1] = args[0];
    }

    if (args[2] == 'pixelated') {
      pixelated = true;
      isFullScreen = true;
      ratio = [args[0], args[1]];
    }

    if (ratio) {
      var rW = Number(ratio[0]);
      var rH = Number(ratio[1]);
      w = window.innerWidth;
      h = window.innerWidth * (rH / rW);

      if (h > window.innerHeight) {
        w = window.innerHeight * (rW / rH);
        h = window.innerHeight;
      }

      w = Math.round(w);
      h = Math.round(h);

      if (!pixelated) {
        args[0] = w;
        args[1] = h;
      }
    }

    if (args.length < 3) args[2] = 'p2d';

    var can = _createCanvas.call.apply(_createCanvas, [pInst].concat(_toConsumableArray(args)));

    this.canvas.tabIndex = 0;
    this.canvas.addEventListener('keydown', function (e) {
      if (e.key == ' ' || e.key == '/' || e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
        e.preventDefault();
      }
    });
    this.canvas.addEventListener('mouseover', function () {
      _this13.mouse.isOnCanvas = true;
      _this13.mouse.active = true;
    });
    this.canvas.addEventListener('mouseleave', function () {
      _this13.mouse.isOnCanvas = false;
    });
    this.canvas.addEventListener('touchstart', function (e) {
      e.preventDefault();
    });
    this.world.resize();
    if (!userDisabledP5Errors) p5.disableFriendlyErrors = false;
    /* prevent callout to copy image, etc when tap to hold */

    /* prevent webkit from resizing text to fit */

    /* prevent copy paste, to allow, change 'none' to 'text' */

    var style = "\ncanvas { \n\toutline: none;\n\t-webkit-touch-callout: none;\n\t-webkit-text-size-adjust: none;\n\t-webkit-user-select: none;\n\toverscroll-behavior: none;\n}\nmain{\n\toverscroll-behavior: none;\n}";

    if (isFullScreen) {
      style = 'html,\nbody,\n' + style;
      style += "\nhtml, body {\n\tmargin: 0;\n\tpadding: 0;\n\toverflow: hidden;\n}\nmain {\n\tmargin: auto;\n\tdisplay: flex;\n\talign-content: center;\n\tjustify-content: center;\n}";
    }

    if (pixelated) {
      style += "\ncanvas {\n\timage-rendering: pixelated;\n\twidth: ".concat(w, "px!important;\n\theight: ").concat(h, "px!important;\n}");
    }

    var styleElem = document.createElement('style');
    styleElem.innerHTML = style;
    document.head.appendChild(styleElem);
    var idx = navigator.userAgent.indexOf('iPhone OS');

    if (idx > -1) {
      var version = navigator.userAgent.substring(idx + 10, idx + 12);
      this.p5play.version = version;

      if (version < 16) {
        pInst.pixelDensity(1);
      }

      this.p5play.os.platform = 'iOS';
      this.p5play.os.version = version;
    } else if (navigator.userAgentData !== undefined) {
      this.p5play.os.platform = navigator.userAgentData.platform;
    }

    if (pixelated) {
      pInst.pixelDensity(1);
      pInst.noSmooth();
    }

    return can;
  };

  function Canvas() {
    return pInst.createCanvas.apply(pInst, arguments);
  }

  var _background = this.background;
  /**
   * Just like the p5.js background function except it also accepts
   * a color pallette code.
   *
   * @method background
   */

  this.background = function () {
    var args = arguments;
    var c;

    if (args.length == 1 && (typeof args[0] == 'string' || args[0] instanceof p5.Color)) {
      c = this.colorPal(args[0]);
    }

    if (c !== undefined) _background.call(this, c);else _background.call.apply(_background, [this].concat(_toConsumableArray(args)));
  };

  var _fill = this.fill;
  /**
   * Just like the p5.js fill function except it also accepts
   * a color pallette code.
   *
   * @method fill
   */

  this.fill = function () {
    var args = arguments;
    var c;

    if (args.length == 1) {
      c = this.colorPal(args[0]);
    }

    if (c !== undefined) _fill.call(this, c);else _fill.call.apply(_fill, [this].concat(_toConsumableArray(args)));
  };

  var _stroke = this.stroke;
  /**
   * Just like the p5.js stroke function except it also accepts
   * a color pallette code.
   *
   * @method stroke
   */

  this.stroke = function () {
    var args = arguments;
    var c;

    if (args.length == 1) {
      c = this.colorPal(args[0]);
    }

    if (c !== undefined) _stroke.call(this, c);else _stroke.call.apply(_stroke, [this].concat(_toConsumableArray(args)));
  }; // images is a cache of loaded/loading images, to prevent making
  // the same loadImage fetch requests multiple times (inefficient)


  this.p5play.images = {
    onLoad: function onLoad(img) {} // called anytime an image is fully loaded

  };
  var _loadImage = this.loadImage;
  /**
   * Just like the p5.js loadImage function except it also caches images
   * so that they are only loaded once. Multiple calls to loadImage with
   * the same path will return the same image object. It also adds the
   * image's url as a property of the image object.
   *
   * @method loadImage
   * @param {string} url
   * @param {number} [width]
   * @param {number} [height]
   * @param {function} [callback]
   */

  this.loadImg = this.loadImage = function () {
    var args = arguments;
    var url = args[0];
    var img = pInst.p5play.images[url];
    var cb;

    if (typeof args[args.length - 1] == 'function') {
      cb = args[args.length - 1];
    }

    if (img) {
      // if not finished loading, add callback to the list
      if (img.width == 1 && img.height == 1 || !img.pixels.length) {
        if (cb) {
          img.cbs.push(cb);
          img.calls++;
        } else pInst._decrementPreload();
      } else {
        if (cb) cb(); // if already loaded, run the callback immediately

        pInst._decrementPreload();
      }

      return img;
    }

    var _cb = function _cb(_img) {
      // if (!_img.pixels.length) {
      // 	log('hi');
      // 	_loadImage.call(pInst, url, _cb);
      // 	return;
      // }
      _img.w = _img.width;
      _img.h = _img.height;

      var _iterator46 = _createForOfIteratorHelper(_img.cbs),
          _step46;

      try {
        for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
          var _cb2 = _step46.value;

          _cb2();
        }
      } catch (err) {
        _iterator46.e(err);
      } finally {
        _iterator46.f();
      }

      for (var i = 1; i < _img.calls; i++) {
        pInst._decrementPreload();
      } // delete _img.calls;
      // delete _img.cbs;


      _img.cbs = [];
      pInst.p5play.images.onLoad(img);
    };

    img = _loadImage.call(pInst, url, _cb);
    img.cbs = [];
    img.calls = 1;
    if (cb) img.cbs.push(cb);
    img.url = url;
    pInst.p5play.images[url] = img;
    return img;
  };

  var errorMessages = {
    generic: ['Ah! I found an error', 'Oh no! Something went wrong', 'Oof! Something went wrong', 'Houston, we have a problem', 'Whoops, having trouble here'],
    Sprite: {
      constructor: {
        base: "Sorry I'm unable to make a new Sprite",
        0: "What is $0 for? If you're trying to specify the x position of the sprite, please specify the y position as well.",
        1: "If you're trying to specify points for a chain Sprite, please use an array of position arrays:\n$0"
      },
      hw: "I can't change the halfWidth of a Sprite directly, change the sprite's width instead.",
      hh: "I can't change the halfHeight of a Sprite directly, change the sprite's height instead.",
      rotate: 'The angle of rotation must be a number.',
      changeAnimation: "I can't find any animation named \"$0\".",
      collide: {
        0: "I can't make that sprite collide with $0. Sprites can only collide with another sprite or a group.",
        1: 'The collision callback has to be a function.',
        2: "You're trying to check for an collision with a sprite or group that doesn't exist!"
      },
      overlap: {
        0: "I can't make that sprite overlap with $0. Sprites can only overlap with another sprite or a group.",
        1: 'The overlap callback has to be a function.',
        2: "You're trying to check for an overlap with a sprite or group that doesn't exist!"
      }
    },
    SpriteAnimation: {
      constructor: {
        base: "Hey so, I tried to make a new SpriteAnimation but couldn't",
        0: "I don't know how to display this type of image: \"$0\". I can only use \".png\" image files.",
        1: 'The name of the animation must be the first input parameter.'
      }
    },
    Group: {
      constructor: {
        base: "Hmm awkward! Well it seems I can't make that new Group you wanted"
      }
    }
  };
  errorMessages.Group.collide = errorMessages.Sprite.collide;
  errorMessages.Group.overlap = errorMessages.Sprite.overlap;
  /**
   * A FriendlyError is a custom error class that extends the native JS Error class.
   *
   * @private FriendlyError
   * @param {String} func is the name of the function the error was thrown in
   * @param {Number} errorNum is the error's code number
   * @param {Array} e is an array with references to the cause of the error
   */

  var FriendlyError = /*#__PURE__*/function (_Error) {
    _inherits(FriendlyError, _Error);

    var _super6 = _createSuper(FriendlyError);

    function FriendlyError(func, errorNum, e) {
      var _this14;

      _classCallCheck(this, FriendlyError);

      _this14 = _super6.call(this);

      if (typeof func != 'string') {
        e = errorNum;
        errorNum = func;
        func = _this14.stack.match(/\n\s*at ([^\(]*)/)[1];
        func = func.slice(0, -1);
      }

      if (typeof errorNum != 'number') {
        e = errorNum;
        errorNum = undefined;
      }

      if (func.slice(0, 3) == 'new') func = func.slice(4);
      func = func.split('.');
      var className = func[0];
      func = func[1] || 'constructor';

      var ln = _this14.stack.match(/\/([^p\/][^5][^\/:]*:[^\/:]+):/);

      if (ln) {
        ln = ln[1].split(':');
        ln = ' in ' + ln[0] + ' at line ' + ln[1] + '. ';
      } else ln = '.';

      e = e || [];
      var m = errorMessages[className][func];
      var msg;
      if (m.base) msg = m.base + ln;else msg = errorMessages.generic[Math.floor(Math.random() * errorMessages.generic.length)] + ln;
      if (errorNum !== undefined) m = m[errorNum];
      m = m.replace(/\$([0-9]+)/g, function (m, n) {
        return e[n];
      });
      msg += m;

      p5._friendlyError(msg, func);

      return _this14;
    }

    return _createClass(FriendlyError);
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  this.Sprite = Sprite;
  this.SpriteAnimation = SpriteAnimation;
  this.Group = Group;
  this.World = World;
  this.Canvas = Canvas;
  /**
   * A group of all the sprites.
   *
   * @property allSprites
   */

  this.allSprites = new Group();
  this.allSprites.autoCull = true;
  this.allSprites.tileSize = 1;
  /**
   * The planck physics world. Use this to change gravity and offset the
   * sprite's coordinate system.
   *
   * @property world
   */

  this.world = new World();
  /**
   * Equal to the p5.js frameCount, the amount of times the draw() function has
   * been called.
   *
   * @property frame
   */

  this.frame = 0;
  /**
   * The default camera. Use this to pan and zoom the camera.
   *
   * @property camera
   */

  this.camera = new Camera();
  /**
   * Get user input from the mouse.
   * Stores the state of the left, center, or right mouse buttons.
   *
   * @property mouse
   */

  /**
   * Get user input from the keyboard.
   *
   * @property kb
   */

  /**
   * Alias for kb.
   *
   * @property keyboard
   */

  /**
   * Get user input from game controllers.
   *
   * @property contro
   */

  /**
   * Look at the Input reference pages before reading these docs.
   *
   * https://p5play.org/learn/input_devices.html
   *
   * Root class for storing the state of inputs (mouse, keyboard,
   * gamepads).
   *
   * -3 means input was released after being held, pressed for 12 frames
   * -2 means input was pressed and released on the same frame
   * -1 means input was released
   * 0 means input is not pressed
   * 1 means input was pressed
   * >1 means input is still being pressed
   * 12 means input was held
   * >12 means input is being held
   *
   * @class InputDevice
   */

  var InputDevice = /*#__PURE__*/function () {
    function InputDevice() {
      _classCallCheck(this, InputDevice);

      /**
       * The amount of frames an input must be pressed to be considered held.
       * Default is 12.
       *
       * @property holdThreshold
       * @type {number}
       */
      this.holdThreshold = 12;
    }
    /**
     * Initializes the input's values to zero.
     *
     * @private init
     */


    _createClass(InputDevice, [{
      key: "init",
      value: function init(inputs) {
        var _iterator47 = _createForOfIteratorHelper(inputs),
            _step47;

        try {
          for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
            var inp = _step47.value;
            this[inp] = 0;
          }
        } catch (err) {
          _iterator47.e(err);
        } finally {
          _iterator47.f();
        }
      }
      /**
       * Attempt to auto-correct the user's input. Inheriting classes
       * override this method.
       *
       * @private ac
       */

    }, {
      key: "ac",
      value: function ac(inp) {
        return inp;
      }
      /**
       * @method presses
       * @param {string} inp
       * @returns {boolean} true on the first frame that the user presses the input
       */

    }, {
      key: "presses",
      value: function presses(inp) {
        var _inp;

        (_inp = inp) !== null && _inp !== void 0 ? _inp : inp = this.default;
        if (this[inp] === undefined) inp = this.ac(inp);
        return this[inp] == 1 || this[inp] == -2;
      }
      /**
       * @method pressing
       * @param {string} inp
       * @returns {number} the amount of frames the user has been pressing the input
       */

    }, {
      key: "pressing",
      value: function pressing(inp) {
        var _inp2;

        (_inp2 = inp) !== null && _inp2 !== void 0 ? _inp2 : inp = this.default;
        if (this[inp] === undefined) inp = this.ac(inp);
        if (this[inp] == -2) return 1;
        return this[inp] > 0 ? this[inp] : 0;
      }
      /**
       * @method pressed
       * @param {string} inp
       * @returns {boolean} true on the first frame that the user released the input
       */

    }, {
      key: "pressed",
      value: function pressed(inp) {
        return this.released(inp);
      }
      /**
       * @method holds
       * @param {string} inp
       * @returns {boolean} true on the first frame that the user holds the input
       */

    }, {
      key: "holds",
      value: function holds(inp) {
        var _inp3;

        (_inp3 = inp) !== null && _inp3 !== void 0 ? _inp3 : inp = this.default;
        if (this[inp] === undefined) inp = this.ac(inp);
        return this[inp] == this.holdThreshold;
      }
      /**
       * @method holding
       * @param {string} inp
       * @returns {number} the amount of frames the user has been holding the input
       */

    }, {
      key: "holding",
      value: function holding(inp) {
        var _inp4;

        (_inp4 = inp) !== null && _inp4 !== void 0 ? _inp4 : inp = this.default;
        if (this[inp] === undefined) inp = this.ac(inp);
        return this[inp] >= this.holdThreshold ? this[inp] : 0;
      }
      /**
       * @method held
       * @param {string} inp
       * @returns {boolean} true on the first frame that the user released a held input
       */

    }, {
      key: "held",
      value: function held(inp) {
        var _inp5;

        (_inp5 = inp) !== null && _inp5 !== void 0 ? _inp5 : inp = this.default;
        if (this[inp] === undefined) inp = this.ac(inp);
        return this[inp] == -3;
      }
      /**
       * @method released
       * @param {string} inp
       * @returns {boolean} true on the first frame that the user released the input
       */

    }, {
      key: "released",
      value: function released(inp) {
        var _inp6;

        (_inp6 = inp) !== null && _inp6 !== void 0 ? _inp6 : inp = this.default;
        if (this[inp] === undefined) inp = this.ac(inp);
        return this[inp] <= -1;
      }
    }, {
      key: "releases",
      value: function releases(inp) {
        return this.released(inp);
      }
    }]);

    return InputDevice;
  }();

  var Mouse = /*#__PURE__*/function (_InputDevice) {
    _inherits(Mouse, _InputDevice);

    var _super7 = _createSuper(Mouse);

    function Mouse() {
      var _this15;

      _classCallCheck(this, Mouse);

      _this15 = _super7.call(this);

      var _this = _assertThisInitialized(_this15); // this.x and this.y store the actual position values of the mouse


      _this15._position = {
        get x() {
          return _this.x;
        },

        set x(val) {
          _this.x = val;
        },

        get y() {
          return _this.y;
        },

        set y(val) {
          _this.y = val;
        }

      };
      var inputs = ['x', 'y', 'left', 'center', 'right'];

      _this15.init(inputs);

      _this15.default = 'left';
      _this15.draggable = false;
      _this15.isOnCanvas = false;
      _this15.active = false;
      /**
       * The mouse's x position.
       * @property x
       * @type {number}
       */

      _this15.x;
      /**
       * The mouse's y position.
       * @property y
       * @type {number}
       */

      _this15.y;
      return _this15;
    }
    /**
     * The mouse's position.
     * @property pos
     */


    _createClass(Mouse, [{
      key: "pos",
      get: function get() {
        return this._position;
      }
      /**
       * The mouse's position. Alias for pos.
       * @property position
       */

    }, {
      key: "position",
      get: function get() {
        return this._position;
      }
    }, {
      key: "ac",
      value: function ac(inp) {
        if (inp.slice(0, 4)) inp = 'left';else if (inp.slice(0, 5) == 'right') inp = 'right';else if (inp.slice(0, 6) == 'middle') inp = 'center';else inp = inp.toLowerCase();
        return inp;
      }
      /**
       * @method dragging
       * @param {string} inp
       * @returns {number} the amount of frames the user has been dragging the input
       */

    }, {
      key: "dragging",
      value: function dragging(inp) {
        var _inp7;

        (_inp7 = inp) !== null && _inp7 !== void 0 ? _inp7 : inp = this.default;
        this.draggable = true;
        return this[inp] >= this.holdThreshold ? this[inp] : 0;
      }
    }]);

    return Mouse;
  }(InputDevice);

  this.mouse = new Mouse();

  var SpriteMouse = /*#__PURE__*/function (_Mouse) {
    _inherits(SpriteMouse, _Mouse);

    var _super8 = _createSuper(SpriteMouse);

    function SpriteMouse() {
      var _this16;

      _classCallCheck(this, SpriteMouse);

      _this16 = _super8.call(this);
      _this16.hover = 0;
      return _this16;
    }
    /**
     * @method hovers
     * @returns {boolean} true on the first frame that the mouse is over the sprite
     */


    _createClass(SpriteMouse, [{
      key: "hovers",
      value: function hovers() {
        return this.hover == 1;
      }
      /**
       * @method hovering
       * @returns {number} the amount of frames the mouse has been over the sprite
       */

    }, {
      key: "hovering",
      value: function hovering() {
        return this.hover > 0 ? this.hover : 0;
      }
      /**
       * @method hovered
       * @returns {boolean} true on the first frame that the mouse is no longer over the sprite
       */

    }, {
      key: "hovered",
      value: function hovered() {
        return this.hover == -1;
      }
    }]);

    return SpriteMouse;
  }(Mouse);

  var _onmousedown = this._onmousedown;

  var __onmousedown = function __onmousedown(btn) {
    this.mouse[btn]++;
    this.mouse.active = true;
    var ms;

    if (this.p5play.mouseSprites.length) {
      ms = this.p5play.mouseSprites[0];
      ms.mouse[btn] = 1; // old mouse sprite didn't have the mouse released on it
      // so it just gets set to 0 (not pressed)

      if (this.p5play.mouseSprite) {
        this.p5play.mouseSprite.mouse[btn] = 0;

        if (btn == 'left') {
          this.p5play.mouseSprite.mouse.draggable = false;
        }
      }

      this.p5play.mouseSprite = ms;
    }
  };

  this._onmousedown = function (e) {
    var btn = 'left';
    if (e.button === 1) btn = 'center';else if (e.button === 2) btn = 'right';

    __onmousedown.call(this, btn);

    _onmousedown.call(this, e);
  };

  var _ontouchstart = this._ontouchstart;

  this._ontouchstart = function (e) {
    __onmousedown.call(this, 'left');

    _ontouchstart.call(this, e);
  };

  var _onmouseup = this._onmouseup;

  var __onmouseup = function __onmouseup(btn) {
    if (this.mouse[btn] >= this.mouse.holdThreshold) {
      this.mouse[btn] = -3;
    } else if (this.mouse[btn] > 1) this.mouse[btn] = -1;else this.mouse[btn] = -2;

    if (this.p5play.mouseSprite) {
      if (this.p5play.mouseSprite.mouse.hover > 1) {
        if (this.p5play.mouseSprite.mouse[btn] >= this.mouse.holdThreshold) {
          this.p5play.mouseSprite.mouse[btn] = -3;
        } else if (this.p5play.mouseSprite.mouse[btn] > 1) {
          this.p5play.mouseSprite.mouse[btn] = -1;
        } else {
          this.p5play.mouseSprite.mouse[btn] = -2;
        }
      } else {
        this.p5play.mouseSprite.mouse[btn] = 0;
        this.p5play.mouseSprite.mouse.draggable = false;
      }
    }
  };

  this._onmouseup = function (e) {
    var btn = 'left';
    if (e.button === 1) btn = 'center';else if (e.button === 2) btn = 'right';

    __onmouseup.call(this, btn);

    _onmouseup.call(this, e);
  };

  var _ontouchend = this._ontouchend;

  this._ontouchend = function (e) {
    __onmouseup.call(this, 'left');

    _ontouchend.call(this, e);
  };

  var KeyBoard = /*#__PURE__*/function (_InputDevice2) {
    _inherits(KeyBoard, _InputDevice2);

    var _super9 = _createSuper(KeyBoard);

    function KeyBoard() {
      var _this17;

      _classCallCheck(this, KeyBoard);

      _this17 = _super9.call(this);
      _this17.default = ' ';
      return _this17;
    }

    _createClass(KeyBoard, [{
      key: "ac",
      value: function ac(inp) {
        if (inp.length == 1) return inp.toLowerCase();

        if (!isNaN(inp)) {
          if (inp == 38) return 'ArrowUp';
          if (inp == 40) return 'ArrowDown';
          if (inp == 37) return 'ArrowLeft';
          if (inp == 39) return 'ArrowRight';
          throw new Error('Use key names with the keyboard input functions, not key codes! If you are trying to detect if the user pressed a number key make it a string. For example: "5"');
        }

        if (inp == 'space' || inp == 'spacebar') return ' ';
        return inp[0].toUpperCase() + inp.slice(1).toLowerCase();
      }
    }, {
      key: "space",
      get: function get() {
        return this[' '];
      }
    }, {
      key: "spacebar",
      get: function get() {
        return this[' '];
      }
    }]);

    return KeyBoard;
  }(InputDevice);

  this.kb = new KeyBoard();
  this.keyboard = this.kb;

  if (navigator.keyboard) {
    var keyboard = navigator.keyboard;

    if (window == window.top) {
      keyboard.getLayoutMap().then(function (keyboardLayoutMap) {
        var key = keyboardLayoutMap.get('KeyW');
        if (key != 'w') _this12.p5play.standardizeKeyboard = true;
      });
    } else {
      this.p5play.standardizeKeyboard = true;
    }
  } else {
    // Firefox doesn't have navigator.keyboard
    // so just make it use key codes
    this.p5play.standardizeKeyboard = true;
  }
  /**
   * Obsolete: Use kb.pressing(key) instead.
   *
   * @obsolete keyIsDown
   * @param {String} key
   */


  this.keyIsDown = function (keyCode) {
    throw new Error("The p5.js keyIsDown function is outdated and can't be used in p5.play. Trust me, you'll see that the p5.play kb.pressing function is much better. It uses key name strings that are easier to write and easier to read! https://p5play.org/learn/input_devices.html The p5.js keyIsDown function relies on key codes and custom constants for key codes, which are not only hard to remember but were also deprecated in the JavaScript language standards over six years ago and shouldn't be used in new projects. More info: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode");
  };
  /**
   * @private _getKeyFromCode
   * @param {*} e keyboard event
   * @returns key name
   */


  function _getKeyFromCode(e) {
    var code = e.code;

    if (code.length == 4 && code.slice(0, 3) == 'Key') {
      return code[3].toLowerCase();
    }

    return e.key;
  }

  var simpleKeyControls = {
    w: 'up',
    s: 'down',
    a: 'left',
    d: 'right',
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
    i: 'up2',
    k: 'down2',
    j: 'left2',
    l: 'right2'
  };
  var _onkeydown = this._onkeydown;

  this._onkeydown = function (e) {
    var key = e.key;

    if (this.p5play.standardizeKeyboard) {
      key = _getKeyFromCode(e);
    }

    var keys = [key];
    var k = simpleKeyControls[key];
    if (k) keys.push(k);

    for (var _i15 = 0, _keys = keys; _i15 < _keys.length; _i15++) {
      var _k = _keys[_i15];

      if (!this.kb[_k] || this.kb[_k] < 0) {
        this.kb[_k] = 1;
      }
    }

    _onkeydown.call(this, e);
  };

  var _onkeyup = this._onkeyup;

  this._onkeyup = function (e) {
    var key = e.key;

    if (this.p5play.standardizeKeyboard) {
      key = _getKeyFromCode(e);
    }

    var keys = [key];
    var k = simpleKeyControls[key];
    if (k) keys.push(k);

    for (var _i16 = 0, _keys2 = keys; _i16 < _keys2.length; _i16++) {
      var _k2 = _keys2[_i16];

      if (this.kb[_k2] >= this.kb.holdThreshold) {
        this.kb[_k2] = -3;
      } else if (this.kb[_k2] > 1) this.kb[_k2] = -1;else this.kb[_k2] = -2;
    }

    _onkeyup.call(this, e);
  };

  var Contro = /*#__PURE__*/function (_InputDevice3) {
    _inherits(Contro, _InputDevice3);

    var _super10 = _createSuper(Contro);

    function Contro(gp) {
      var _this18;

      _classCallCheck(this, Contro);

      _this18 = _super10.call(this);
      var inputs = ['a', 'b', 'x', 'y', 'l', 'r', 'lt', 'rt', 'select', 'start', 'up', 'down', 'left', 'right', 'leftTrigger', 'rightTrigger'];

      _this18.init(inputs);

      _this18.leftStick = {
        x: 0,
        y: 0,
        btn: 0
      };
      _this18.rightStick = {
        x: 0,
        y: 0,
        btn: 0
      };
      _this18._btns = {
        a: 0,
        b: 1,
        x: 2,
        y: 3,
        l: 4,
        r: 5,
        lt: 6,
        rt: 7,
        select: 8,
        start: 9,
        leftStickButton: 10,
        rightStickButton: 11,
        up: 12,
        down: 13,
        left: 14,
        right: 15
      };
      _this18._axes = {
        leftStick: {
          x: 0,
          y: 1
        },
        rightStick: {
          x: 2,
          y: 3
        },
        leftTrigger: 4,
        rightTrigger: 5
      }; // corrects button mapping for GuliKit gamepads
      // which have a Nintendo Switch style button layout
      // https://www.aliexpress.com/item/1005003624801819.html

      if (gp.id.includes('GuliKit')) {
        _this18._btns.a = 1;
        _this18._btns.b = 0;
        _this18._btns.x = 3;
        _this18._btns.y = 2;
      }

      log(gp);
      _this18.gamepad = gp;
      _this18.id = gp.id;
      return _this18;
    }

    _createClass(Contro, [{
      key: "ac",
      value: function ac(inp) {
        return inp.toLowerCase();
      }
    }, {
      key: "_update",
      value: function _update() {
        this.gamepad = navigator.getGamepads()[this.gamepad.index];
        if (!this.gamepad) return;
        var pad = this.gamepad; // buttons

        for (var name in this._btns) {
          var idx = this._btns[name];
          if (pad.buttons[idx].pressed) this[name]++;else this[name] = 0;
        } // sticks


        this.leftStick.x = pad.axes[this._axes.leftStick.x];
        this.leftStick.y = pad.axes[this._axes.leftStick.y];
        this.rightStick.x = pad.axes[this._axes.rightStick.x];
        this.rightStick.y = pad.axes[this._axes.rightStick.y]; // triggers

        if (pad.axes[this._axes.leftTrigger] !== undefined) {
          this.leftTrigger = pad.axes[this._axes.leftTrigger];
          this.rightTrigger = pad.axes[this._axes.rightTrigger];
        } else {
          this.leftTrigger = pad.buttons[this._btns.lt].value;
          this.rightTrigger = pad.buttons[this._btns.rt].value;
        }

        return true; // update completed
      }
    }]);

    return Contro;
  }(InputDevice);

  var Contros = /*#__PURE__*/function (_Array3) {
    _inherits(Contros, _Array3);

    var _super11 = _createSuper(Contros);

    function Contros() {
      var _navigator;

      var _this19;

      _classCallCheck(this, Contros);

      _this19 = _super11.call(this);

      var _this = _assertThisInitialized(_this19);

      window.addEventListener('gamepadconnected', function (e) {
        _this._addContro(e.gamepad);
      }); // TODO
      // window.addEventListener('gamepaddisconnected', (e) => {
      // 	_this._removeContro(e.gamepad);
      // });

      _this19.default = 'a';
      var methods = ['presses', 'pressing', 'pressed', 'holds', 'holding', 'held', 'released'];

      var _loop5 = function _loop5() {
        var m = _methods[_i17];

        _this19[m] = function (inp) {
          if (_this19[0]) return _this19[0][m](inp);
        };
      };

      for (var _i17 = 0, _methods = methods; _i17 < _methods.length; _i17++) {
        _loop5();
      }

      var inputs = ['a', 'b', 'x', 'y', 'l', 'r', 'lt', 'rt', 'select', 'start', 'leftStickButton', 'rightStickButton', 'up', 'down', 'left', 'right'];

      var _loop6 = function _loop6() {
        var inp = _inputs[_i18];
        Object.defineProperty(_assertThisInitialized(_this19), inp, {
          get: function get() {
            if (_this[0]) return _this[0][inp];
            return 0;
          }
        });
      };

      for (var _i18 = 0, _inputs = inputs; _i18 < _inputs.length; _i18++) {
        _loop6();
      }

      var props = ['leftStick', 'rightStick'];

      var _loop7 = function _loop7() {
        var prop = _props3[_i19];
        _this19[prop] = {};

        var _loop8 = function _loop8() {
          var axis = _arr[_i20];
          Object.defineProperty(_this19[prop], axis, {
            get: function get() {
              if (_this[0]) return _this[0][prop][axis];
              return 0;
            }
          });
        };

        for (var _i20 = 0, _arr = ['x', 'y']; _i20 < _arr.length; _i20++) {
          _loop8();
        }
      };

      for (var _i19 = 0, _props3 = props; _i19 < _props3.length; _i19++) {
        _loop7();
      } // test if the broswer supports the HTML5 Gamepad API
      // all modern browsers do, this is really just to prevent
      // p5.play's Jest tests from failing


      if (!((_navigator = navigator) !== null && _navigator !== void 0 && _navigator.getGamepads)) return _possibleConstructorReturn(_this19); // if the page was not reloaded, but p5.play sketch was,
      // then gamepads could be already connected
      // so they need to be added as Contro objects

      var gps = navigator.getGamepads();

      var _iterator48 = _createForOfIteratorHelper(gps),
          _step48;

      try {
        for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
          var gp = _step48.value;
          if (gp) _this19._addContro(gp);
        }
      } catch (err) {
        _iterator48.e(err);
      } finally {
        _iterator48.f();
      }

      return _this19;
    }

    _createClass(Contros, [{
      key: "_addContro",
      value: function _addContro(gp) {
        if (!gp) return;
        log('controller ' + this.length + ' connected: ' + gp.id);
        this.push(new Contro(gp));
      }
      /**
       * Updates the state of all controllers.
       */

    }, {
      key: "_update",
      value: function _update() {
        var _iterator49 = _createForOfIteratorHelper(this),
            _step49;

        try {
          for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
            var c = _step49.value;

            c._update();
          }
        } catch (err) {
          _iterator49.e(err);
        } finally {
          _iterator49.f();
        }
      }
    }]);

    return Contros;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  this.contro = new Contros();
  this.controllers = this.contro;
}); // called before each p5.js draw function call

p5.prototype.registerMethod('pre', function () {
  if (this.frameCount == 1) {
    this.camera.x = this.world.hw;
    this.camera.y = this.world.hh;
    this.camera.init = true; // this stops the right click menu from appearing

    this.canvas.addEventListener('contextmenu', function (event) {
      return event.preventDefault();
    });
  }

  this.mouse.x = (this.mouseX - this.world.hw) / this.camera.zoom + this.camera.x;
  this.mouse.y = (this.mouseY - this.world.hh) / this.camera.zoom + this.camera.y;
  this.camera.mouse.x = this.mouseX;
  this.camera.mouse.y = this.mouseY;

  this.contro._update();
}); // called after each p5.js draw function call

p5.prototype.registerMethod('post', function p5playPostDraw() {
  this.frame = this.frameCount;

  if (this.p5play.autoDrawSprites) {
    this.camera.on();
    this.allSprites.draw();
    this.camera.off();
    this.p5play.autoDrawSprites = true;
  }

  if (this.p5play.autoUpdateSprites) {
    this.updateSprites();
    this.p5play.autoUpdateSprites = true;
  }

  if (this.allSprites.autoCull) {
    this.allSprites.cull(10000);
  }

  for (var _i21 = 0, _arr2 = ['left', 'center', 'right']; _i21 < _arr2.length; _i21++) {
    var btn = _arr2[_i21];
    if (this.mouse[btn] < 0) this.mouse[btn] = 0;else if (this.mouse[btn] > 0) this.mouse[btn]++;

    if (this.p5play.mouseSprite) {
      if (this.p5play.mouseSprite.mouse[btn] < 0) {
        this.p5play.mouseSprite.mouse[btn] = 0;
      }
    }
  }

  for (var k in this.kb) {
    if (k == 'holdThreshold') continue;
    if (this.kb[k] < 0) this.kb[k] = 0;else if (this.kb[k] > 0) this.kb[k]++;
  }

  if (this.p5play.mouseTracking) {
    if (this.p5play.mouseSprite) {
      var val = 0;

      for (var _i22 = 0, _arr3 = ['left', 'center', 'right']; _i22 < _arr3.length; _i22++) {
        var _btn = _arr3[_i22];
        val += this.p5play.mouseSprite.mouse[_btn];
      }

      if (val == 0) this.p5play.mouseSprite = null;
    }

    var sprites = this.getSpritesAt(this.mouse.x, this.mouse.y);
    sprites.sort(function (a, b) {
      return (a.layer - b.layer) * -1;
    });
    var uiSprites = this.getSpritesAt(this.camera.mouse.x, this.camera.mouse.y, this.allSprites, false);
    uiSprites.sort(function (a, b) {
      return (a.layer - b.layer) * -1;
    });
    sprites = sprites.concat(uiSprites);
    var ms;

    if (this.mouse.pressing('left') || this.mouse.pressing('center') || this.mouse.pressing('right')) {
      var _this$p5play$mouseSpr;

      // mouse sprite is not draggable
      if (!((_this$p5play$mouseSpr = this.p5play.mouseSprite) !== null && _this$p5play$mouseSpr !== void 0 && _this$p5play$mouseSpr.mouse.draggable)) {
        // if sprite is being dragged,
        // it should be dragged behind sprites on higher layers
        var _iterator50 = _createForOfIteratorHelper(sprites),
            _step50;

        try {
          for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
            var s = _step50.value;

            if (s == this.p5play.mouseSprite) {
              ms = s;
              break;
            }
          }
        } catch (err) {
          _iterator50.e(err);
        } finally {
          _iterator50.f();
        }
      } else {
        ms = this.p5play.mouseSprite;
      } // if mouse is pressing the sprite


      if (ms) {
        ms.mouse.left = this.mouse.left;
        ms.mouse.center = this.mouse.center;
        ms.mouse.right = this.mouse.right;
        ms.mouse.x = ms.x - this.mouse.x;
        ms.mouse.y = ms.y - this.mouse.y;
      } else if (this.p5play.mouseSprite) {
        this.p5play.mouseSprite.mouse.left = 0;
        this.p5play.mouseSprite.mouse.center = 0;
        this.p5play.mouseSprite.mouse.right = 0;
        this.p5play.mouseSprite.mouse.draggable = false;
      }
    }

    var _iterator51 = _createForOfIteratorHelper(sprites),
        _step51;

    try {
      for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
        var _s4 = _step51.value;
        _s4.mouse.hover++;
      }
    } catch (err) {
      _iterator51.e(err);
    } finally {
      _iterator51.f();
    }

    var _iterator52 = _createForOfIteratorHelper(this.p5play.mouseSprites),
        _step52;

    try {
      for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
        var _this$p5play$mouseSpr2;

        var _s5 = _step52.value;

        if ((!((_this$p5play$mouseSpr2 = this.p5play.mouseSprite) !== null && _this$p5play$mouseSpr2 !== void 0 && _this$p5play$mouseSpr2.mouse.draggable) || _s5 != ms) && !sprites.includes(_s5)) {
          _s5.mouse.hover = -1;
          _s5.mouse.left = 0;
          _s5.mouse.center = 0;
          _s5.mouse.right = 0;
          _s5.mouse.draggable = false;
        }
      }
    } catch (err) {
      _iterator52.e(err);
    } finally {
      _iterator52.f();
    }

    this.p5play.mouseSprites = sprites;
  }

  this.camera.off();
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56943" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","p5.play.js"], null)
//# sourceMappingURL=/p5.play.30a08ba6.js.map