System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, Animation, find, ProgressBar, combatConfigManeger, _dec, _class, _crd, ccclass, property, KongperManeger;

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
      Animation = _cc.Animation;
      find = _cc.find;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      combatConfigManeger = _unresolved_2.combatConfigManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50881zXKXVF+I8HFDng/U4K", "KongperManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact', 'Animation', 'find', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("KongperManeger", KongperManeger = (_dec = ccclass('KongperManeger'), _dec(_class = class KongperManeger extends Component {
        constructor() {
          super(...arguments);
          this.arrived = 0;
          this.currentLivingValue = void 0;
          this.AttackSpeed = 0;
          this.HarmValue = 0;
          this.livingValue = 0;
          this.currentTarget = new Array();
        }

        start() {
          this.initialKong();
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
          } else if (this.arrived != 2) {
            y = node.position.y;
            x = node.position.x;
            x = x + 20 * deltaTime; // this.arrived = 2;

            node.setPosition(x, y, 0);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (!this.arrived) {
            this.arrived = 1;
            var node = this.node.parent;
            var y = node.position.y;
            var x = node.position.x;
            node.setPosition(x, y - 70, 0);
            var anim = this.node.getComponent(Animation);
            anim.play("di");
          }

          if (otherCollider.node.name == "Pao_Pre" || otherCollider.node.name == "Dan_Pre" || otherCollider.node.name == "GuangZi_Pre" || otherCollider.node.name == "Wei_Per") {
            //攻击态；
            this.arrived = 2;
            this.underFire(otherCollider);
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        initialKong() {
          var AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).Kong.AttackSpeed; //5s

          var LivingValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).Kong.LivingValue; //100

          var HarmValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).Kong.HarmValue; //5%

          this.livingValue = LivingValue;
          this.currentLivingValue = LivingValue;
          this.HarmValue = HarmValue;
          this.AttackSpeed = AttackSpeed;
          console.log("空降兵初始化成功");
        }

        underFire(Collider) {
          var harmedValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).Bing.HarmValue;
          var that = this;

          if (Collider.node.name == "Wei_Per") {
            this.schedule(function () {
              if (Collider.node.isValid) {
                console.log("受到神兵攻击");

                if (that.currentLivingValue - harmedValue * that.livingValue <= 0) {
                  that.node.parent.destroy();
                } else {
                  that.currentLivingValue -= harmedValue * that.livingValue; // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

                  that.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.6 * (that.currentLivingValue / that.livingValue);
                }
              }
            }, 5);
          }
        }

        attack() {
          var currentTargetNode;
          this.schedule(function () {
            //目标攻击列表非空
            if (this.currentTarget.length) {
              for (var i = 0; i < this.currentTarget.length; i++) {
                if (this.currentTarget[i].isValid) {
                  this.currentTargetNode = this.currentTarget[i];
                }
              }
            }
          }, 5);
        }

        whichComponent(nodeName) {
          if (nodeName == "Pao_Pre") {
            return "PaoPerManeger";
          } else if (nodeName == "Dan_Pre") {
            return "Danpermaneger";
          } else if (nodeName == "Guangzi_Pre") {
            return "GuangziPerManeger";
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b5b1895f1914d24ab4e303e0da81738b03b6e485.js.map