System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, diji;

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

      _cclegacy._RF.push({}, "88b6ddza6xHgJ3C0peQ2cgl", "diji", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("diji", diji = (_dec = ccclass('diji'), _dec(_class = class diji extends Component {
        start() {}

        update(deltaTime) {
          var node = this.node;
          var y = node.position.y;
          var x = node.position.x;
          console.log(y);
          x = x + 40 * deltaTime;
          node.setPosition(x, y, 0);
          console.log(y); // node.setRotation(,10*deltaTime,);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bcb753154a6d5a65bce237146c4f20184ab89b9b.js.map