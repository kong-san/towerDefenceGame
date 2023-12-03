System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ToolStateManeger, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PaoState;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfToolStateManeger(extras) {
    _reporterNs.report("ToolStateManeger", "./ToolStateManeger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      ToolStateManeger = _unresolved_2.ToolStateManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bbcd4J74JP5aZr9N31vZMF", "PaoState", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PaoState", PaoState = (_dec = ccclass('PaoState'), _dec2 = property(_crd && ToolStateManeger === void 0 ? (_reportPossibleCrUseOfToolStateManeger({
        error: Error()
      }), ToolStateManeger) : ToolStateManeger), _dec(_class = (_class2 = class PaoState extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ToolStateManeger", _descriptor, this);
        }

        start() {
          console.log('node 中的 toolStateManeger创建成功');
          this.ToolStateManeger = new (_crd && ToolStateManeger === void 0 ? (_reportPossibleCrUseOfToolStateManeger({
            error: Error()
          }), ToolStateManeger) : ToolStateManeger)(1, 0, "null");
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ToolStateManeger", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e2f9c09dd8baca64705e253d19972dd1c5022ab3.js.map