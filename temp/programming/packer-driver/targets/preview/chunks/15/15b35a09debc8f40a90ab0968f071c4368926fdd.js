System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, find, ProgressBar, combatConfigManeger, _dec, _class, _crd, ccclass, property, BingPerManeger;

  function _reportPossibleCrUseOfcombatConfigManeger(extras) {
    _reporterNs.report("combatConfigManeger", "./combatConfigManeger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      find = _cc.find;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      combatConfigManeger = _unresolved_2.combatConfigManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bfeeoLSiNOZ7kAw8X2SFl8", "BingPerManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact', 'Animation', 'find', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BingPerManeger", BingPerManeger = (_dec = ccclass('BingPerManeger'), _dec(_class = class BingPerManeger extends Component {
        constructor() {
          super(...arguments);
          this.arrived = 0;
          this.currentLivingValue = void 0;
          this.AttackSpeed = void 0;
          this.HarmValue = void 0;
          this.livingValue = void 0;
        }

        start() {
          this.initialBing();
          var collider = this.node.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
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

            if (this.node.parent.name == "WeiPerfabsRight") {
              if (x < 200) {
                x = x + 20 * deltaTime;
              }
            } else {
              if (x > -200) {
                x = x - 20 * deltaTime;
              }
            }

            node.setPosition(x, y, 0);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (otherCollider.node.name == "Kong_Per") {
            //攻击态；
            this.arrived = 1;
          }

          this.underFire(otherCollider);
        } // onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null){
        // }


        initialBing() {
          var AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).Bing.AttackSpeed; //5s

          var LivingValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).Bing.LivingValue; //100

          var HarmValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).Bing.HarmValue; //5%

          this.livingValue = LivingValue;
          this.currentLivingValue = LivingValue;
          this.HarmValue = HarmValue;
          this.AttackSpeed = AttackSpeed;
        }

        underFire(Collider) {
          var harmedValuePao = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.HarmValue;

          if (Collider.node.name == "Bullet_Pre") {
            if (this.currentLivingValue - harmedValuePao <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValuePao;
              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.7 * (this.currentLivingValue / this.livingValue);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15b35a09debc8f40a90ab0968f071c4368926fdd.js.map