System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, _dec, _class, _crd, ccclass, property, BingPerManeger;

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

      _cclegacy._RF.push({}, "5bfeeoLSiNOZ7kAw8X2SFl8", "BingPerManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BingPerManeger", BingPerManeger = (_dec = ccclass('BingPerManeger'), _dec(_class = class BingPerManeger extends Component {
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
          if (!this.arrived) {
            var node = this.node.parent;
            var y = node.position.y;
            var x = node.position.x;
            x = x - 20 * deltaTime;
            node.setPosition(x, y, 0);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name == "Kong_Per") {
            //攻击态；
            this.arrived = 1;
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        underFire(Collider) {
          //士兵不会受到空降兵的攻击，但是被子弹达到会直接死掉；
          var harmedValuePao = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.HarmValue;
          var harmedValueDan = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.HarmValue;
          var harmedValueJian = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.HarmValue;
          var defendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyQuickAttack.DefendValue;

          if (Collider.node.name == "PaoBulletPer") {
            if (this.currentLivingValue - harmedValuePao * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValuePao * (1 - defendValue); // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.DijiDeathLivSysMag.livingValue);
            }
          }

          if (Collider.node.name == "GuangZiBulletPer") {
            if (this.currentLivingValue - harmedValueJian * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValueJian * (1 - defendValue); // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.DijiDeathLivSysMag.livingValue);
            }
          }

          if (Collider.node.name == "DanPerfabs") {
            if (this.currentLivingValue - harmedValueDan * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValueDan * (1 - defendValue); // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.DijiDeathLivSysMag.livingValue);
            }
          }

          if (Collider.node.name == "FengyiBulletPer") {
            if (this.DijiDeathLivSysMag.livingValue - 30 <= 0) {
              this.node.parent.destroy();
            } else {
              this.DijiDeathLivSysMag.livingValue -= 30; // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.DijiDeathLivSysMag.livingValue / 100);
            }
          }

          if (Collider.node.name == "shenmu") {
            this.node.parent.destroy();
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5b57a2cada8dba078290f34aae06f0465043b0b.js.map