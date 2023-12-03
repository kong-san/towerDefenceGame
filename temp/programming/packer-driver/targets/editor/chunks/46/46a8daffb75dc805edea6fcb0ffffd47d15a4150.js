System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, _dec, _class, _crd, ccclass, property, scrollControl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e882a2EgVpKFaiF3SKX+4Rk", "scrollControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("scrollControl", scrollControl = (_dec = ccclass('scrollControl'), _dec(_class = class scrollControl extends Component {
        constructor(...args) {
          super(...args);
          this.touchStartPos = void 0;
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
        }

        update(deltaTime) {}

        touchStart(event) {
          this.touchStartPos = event.getLocation();
        }

        touchEnd(event) {
          if (this.touchStartPos == null) {
            return;
          }

          let distance = Math.abs(event.getLocation().x - this.touchStartPos.x);
          console.log("滑动距离为：", distance);

          if (event.getLocation().x < this.touchStartPos.x) {
            console.log("向左滑动");
          }

          if (event.getLocation().x < this.touchStartPos.x) {
            console.log("向右滑动");
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46a8daffb75dc805edea6fcb0ffffd47d15a4150.js.map