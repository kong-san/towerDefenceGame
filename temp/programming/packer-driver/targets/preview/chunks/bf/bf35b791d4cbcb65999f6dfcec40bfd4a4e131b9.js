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
        constructor() {
          super(...arguments);
          this.message = ["神木使者，你终于来了……敌族火族窥伺我族<神木>已久，得不到就想销毁它。派出了火族的大军正在来的路上。", "还好使者来的及时，只有使者才能驱动神木之力，建筑塔防，拯救神木。", "我给你介绍一下塔防的建筑吧。", "这是散射炮，可以朝着敌军的方向发射子弹", "这是追踪弹，可以锁定目标敌机执行打击", "这是光子箭，可以发射光子束打击敌军", "拖动这些建筑就可以生效啦。", "这是扩建功能,去建造更多的<神木卫阵>吧", "这是召唤风翼军，风翼军是个很强的兵种", "这是召唤卫木精灵"];
        }

        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.talkContinue, this);
        }

        update(deltaTime) {}

        talkContinue() {
          find("Canvas/talk/message");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf35b791d4cbcb65999f6dfcec40bfd4a4e131b9.js.map