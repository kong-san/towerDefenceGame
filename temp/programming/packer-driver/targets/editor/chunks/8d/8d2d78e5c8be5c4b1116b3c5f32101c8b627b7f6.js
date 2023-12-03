System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, middleManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b672Pge4FH5bTOf97Wx25G", "middleManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("middleManeger", middleManeger = (_dec = ccclass('middleManeger'), _dec(_class = class middleManeger extends Component {
        start() {}

        update(deltaTime) {
          if (this.node.parent.name == "left") {
            let that = this;
            this.schedule(function () {
              let x = that.node.position.x;
              let y = that.node.position.y;

              if (x < 0 && x + 30 > 0) {
                that.node.setPosition(0, y, 0);
              } else if (x < 0) {
                x = x + 30 * deltaTime;
                that.node.setPosition(x, y, 0);
              }
            }, 5);
          }

          if (this.node.parent.name == "right") {}
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d2d78e5c8be5c4b1116b3c5f32101c8b627b7f6.js.map