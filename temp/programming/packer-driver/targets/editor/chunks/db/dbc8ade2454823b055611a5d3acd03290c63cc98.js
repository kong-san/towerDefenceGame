System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, _dec, _class, _crd, ccclass, property, sureComponent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      find = _cc.find;
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
          find("Canvas/updateComponent").updateNode();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dbc8ade2454823b055611a5d3acd03290c63cc98.js.map