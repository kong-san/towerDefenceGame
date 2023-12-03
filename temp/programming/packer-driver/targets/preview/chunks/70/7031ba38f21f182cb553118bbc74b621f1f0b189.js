System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, _dec, _class, _crd, ccclass, property, KongperManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50881zXKXVF+I8HFDng/U4K", "KongperManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("KongperManeger", KongperManeger = (_dec = ccclass('KongperManeger'), _dec(_class = class KongperManeger extends Component {
        constructor() {
          super(...arguments);
          this.arrived = 0;
        }

        start() {
          var collider = this.node.getComponent(Collider2D); // console.log(collider);
          // console.log(collider);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this); // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        onload() {
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        update(deltaTime) {
          var node = this.node.parent;
          var y = node.position.y;
          var x = node.position.x;

          if (!this.arrived) {
            y = y - 100 * deltaTime;
            node.setPosition(x, y, 0);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          this.arrived = 1;
          var node = this.node.parent;
          var y = node.position.y;
          var x = node.position.x;
          node.setPosition(x, y - 50, 0);
        }

        onEndContact(selfCollider, otherCollider, contact) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7031ba38f21f182cb553118bbc74b621f1f0b189.js.map