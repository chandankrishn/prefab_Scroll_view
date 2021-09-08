System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ScrollView, _dec, _class, _temp, _crd, ccclass, property, Abc;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ScrollView = _cc.ScrollView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49436yseYJDJYMAWXa/4bQ0", "abc", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Abc
       * DateTime = Tue Sep 07 2021 16:15:14 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = abc.ts
       * FileBasenameNoExtension = abc
       * URL = db://assets/SCRIPT/abc.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Abc", Abc = (_dec = ccclass('Abc'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Abc, _Component);

        function Abc() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "toggle", true);

          _defineProperty(_assertThisInitialized(_this), "abc", true);

          return _this;
        }

        var _proto = Abc.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        _proto.fun = function fun() {
          console.log("hello chandan");
        };

        _proto.update = function update(deltaTime) {
          if (this.abc) {
            this.node.getComponent(ScrollView).scrollToBottom(0.0002 * deltaTime);
            this.abc = false;
          } else {
            this.node.getComponent(ScrollView).scrollToTop(0.0002 * deltaTime);
            this.abc = true;
          }
        };

        return Abc;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=abc.js.map