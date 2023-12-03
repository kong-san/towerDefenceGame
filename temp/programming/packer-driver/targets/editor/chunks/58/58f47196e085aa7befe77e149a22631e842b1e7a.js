System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, updateComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, sureComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfupdateComponent(extras) {
    _reporterNs.report("updateComponent", "./updateComponent", _context.meta, extras);
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
      Node = _cc.Node;
      find = _cc.find;
    }, function (_unresolved_2) {
      updateComponent = _unresolved_2.updateComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ea5fmZZVhPn7MAPB9rr7rt", "sureComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sureComponent", sureComponent = (_dec = ccclass('sureComponent'), _dec2 = property(Node), _dec(_class = (_class2 = class sureComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "targetNode", _descriptor, this);
        }

        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.clickIcon, this);
        }

        update(deltaTime) {}

        clickIcon() {
          if (this.node.name == "cancel") {
            this.cancel();
          }

          if (this.node.name == "sure") {
            this.sure();
          }
        }

        cancel() {
          //取消选择
          find("Canvas/updateComponent").active = true;
          find("Canvas/updateComponent/update").getComponent(_crd && updateComponent === void 0 ? (_reportPossibleCrUseOfupdateComponent({
            error: Error()
          }), updateComponent) : updateComponent).targetNode = this.targetNode;
          find("Canvas/updateComponent/destory").getComponent(_crd && updateComponent === void 0 ? (_reportPossibleCrUseOfupdateComponent({
            error: Error()
          }), updateComponent) : updateComponent).targetNode = this.targetNode.parent;
          find("Canvas/sureComponent").active = false;
        }

        sure() {
          find("Canvas/updateComponent").active = true;
          find("Canvas/updateComponent/update").getComponent(_crd && updateComponent === void 0 ? (_reportPossibleCrUseOfupdateComponent({
            error: Error()
          }), updateComponent) : updateComponent).targetNode = this.targetNode;
          find("Canvas/updateComponent/destory").getComponent(_crd && updateComponent === void 0 ? (_reportPossibleCrUseOfupdateComponent({
            error: Error()
          }), updateComponent) : updateComponent).targetNode = this.targetNode;
          find("Canvas/updateComponent/update").getComponent(_crd && updateComponent === void 0 ? (_reportPossibleCrUseOfupdateComponent({
            error: Error()
          }), updateComponent) : updateComponent).updateNode();
          find("Canvas/sureComponent").active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58f47196e085aa7befe77e149a22631e842b1e7a.js.map