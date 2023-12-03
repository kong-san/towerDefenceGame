System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, _dec, _class, _crd, ccclass, property, talkManeger;

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

      _cclegacy._RF.push({}, "90636ZT31NJN4CT1SAwLR/p", "talkManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("talkManeger", talkManeger = (_dec = ccclass('talkManeger'), _dec(_class = class talkManeger extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.talkContinue, this);
        }

        update(deltaTime) {}

        talkContinue() {
          find("Canvas/talk/");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6d526f416b7031e46f626545fa0eba271e52885.js.map