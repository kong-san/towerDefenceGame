System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, updateComponent, _dec, _class, _crd, ccclass, property, sureComponent;

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

      _export("sureComponent", sureComponent = (_dec = ccclass('sureComponent'), _dec(_class = class sureComponent extends Component {
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
          find("Canvas/sureComponent").active = false;
        }

        sure() {
          find("Canvas/updateComponent").getComponent(_crd && updateComponent === void 0 ? (_reportPossibleCrUseOfupdateComponent({
            error: Error()
          }), updateComponent) : updateComponent).updateNode();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e6e8f809ee91584c23f69a856dc72896f19ca426.js.map