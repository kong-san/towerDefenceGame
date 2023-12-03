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
        constructor(...args) {
          super(...args);
          this.message = ["神木使者，你终于来了……敌族火族窥伺我族<神木>已久，得不到就想销毁它。派出了火族的大军正在来的路上。", "还好使者来的及时，只有使者才能驱动神木之力，建筑塔防，拯救神木。", "我给你介绍一下塔防的建筑吧。", "这是散射炮，可以朝着敌军的方向发射子弹", "这是追踪弹，可以锁定目标敌机执行打击", "这是光子箭，可以发射光子束打击敌军", "拖动这些建筑就可以生效啦。", "这是扩建功能,去建造更多的<神木卫阵>吧", "这是召唤<风翼军>，风翼军是很强的兵种", "这是召唤神兵精灵，就是我，保卫我们的建筑不受敌军空降兵的破坏。", "对了，敌军分为三种，一种是普通战机、一种是战陨机、一种是空降兵", "普通战机携带子弹会攻击我方建筑，战陨机速度很快会直接攻击神木，空降兵则专门破坏我方建筑", "尊敬的使者一定要小心！根据情报，火族的进攻有十种阵营，越到后面，难度将越大，神木的存活就靠使者了，我们都相信你！", ""];
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
//# sourceMappingURL=883e0644b8187ceb62f0c0be5be7cace592eb53e.js.map