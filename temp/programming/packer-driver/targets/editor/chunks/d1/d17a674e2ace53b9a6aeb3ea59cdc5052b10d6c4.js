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
          this.leftScroll = void 0;
          this.rightScroll = void 0;
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        }

        update(deltaTime) {}

        onDestroy() {
          this.node.off(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.off(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        }

        touchStart(event) {
          this.touchStartPos = event.getLocation();
        }

        touchCancel(event) {
          console.log("停止触摸");
          this.touchStartPos = event.getLocation();
        }

        touchMove(event) {
          console.log("正在触摸移动");

          if (this.touchStartPos == null) {
            return;
          }

          let distance = Math.abs(event.getLocation().x - this.touchStartPos.x);
          console.log("滑动距离为：", distance);

          if (event.getLocation().x < this.touchStartPos.x) {
            console.log("向左滑动");

            if (this.leftScroll + 10 < 101) {
              let x = this.node.position.x;
              let y = this.node.position.y;
              this.node.setPosition(x - 10, y, 0);
              this.leftScroll += 10;
            } else {}
          }

          if (event.getLocation().x > this.touchStartPos.x) {
            console.log("向右滑动");

            if (this.rightScroll + 10 < 101) {
              let x = this.node.position.x;
              let y = this.node.position.y;
              this.node.setPosition(x + 10, y, 0);
              this.rightScroll += 10;
            } else {}
          }
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

          if (event.getLocation().x > this.touchStartPos.x) {
            console.log("向右滑动");
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d17a674e2ace53b9a6aeb3ea59cdc5052b10d6c4.js.map