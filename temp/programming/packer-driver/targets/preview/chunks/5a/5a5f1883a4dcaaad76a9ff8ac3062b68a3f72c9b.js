System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, UITransform, _dec, _class, _crd, ccclass, property, canvas;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2795+mymVB9rRjInsAY8i6", "canvas", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'director', 'PhysicsSystem2D', 'Contact2DType', 'Collider2D', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("canvas", canvas = (_dec = ccclass('canvas'), _dec(_class = class canvas extends Component {
        start() {
          var uiTransform = this.node.getComponent(UITransform);
          uiTransform.setAnchorPoint(0, 0);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a5f1883a4dcaaad76a9ff8ac3062b68a3f72c9b.js.map