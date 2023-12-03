System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, find, ProgressBar, combatConfigManeger, livingSystemManeger, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ShenMuManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcombatConfigManeger(extras) {
    _reporterNs.report("combatConfigManeger", "./combatConfigManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOflivingSystemManeger(extras) {
    _reporterNs.report("livingSystemManeger", "./livingSystemManeger", _context.meta, extras);
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
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      find = _cc.find;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      combatConfigManeger = _unresolved_2.combatConfigManeger;
    }, function (_unresolved_3) {
      livingSystemManeger = _unresolved_3.livingSystemManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6b3daqKsftKB7uTG+72WA4B", "ShenMuManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'BoxCollider2D', 'director', 'Sprite', 'Color', 'resources', 'SpriteFrame', 'Layers', 'find', 'Prefab', 'instantiate', 'Vec2', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShenMuManeger", ShenMuManeger = (_dec = ccclass('ShenMuManeger'), _dec2 = property(_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
        error: Error()
      }), livingSystemManeger) : livingSystemManeger), _dec(_class = (_class2 = class ShenMuManeger extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "ShenMuLivSysMag", _descriptor, this);

          _initializerDefineProperty(this, "currentLivingValue", _descriptor2, this);

          this.ShenMuConfig = void 0;
          this.growSpeed = void 0;
        }

        onLoad() {
          // director.enable = true;
          //绘制物理信息
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape; // let that = this;
          // 升级的速度;
        }

        start() {
          this.ShenMuConfig = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SHENMU;
          this.initialShenMu(); //注册单个碰撞体的回调函数

          var collider = this.node.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          console.log("我是神木");
          console.log(otherCollider.node.name);
          this.underFire(otherCollider);
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        onPreSolve(selfCollider, otherCollider, contact) {}

        onPostSolve(selfCollider, otherCollider, contact) {}

        update(deltaTime) {
          var that = this;
          var nextFLag = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).nextFLag;

          var callback = function callback() {
            if (that.currentLivingValue < that.ShenMuLivSysMag.livingValue) {
              that.currentLivingValue += that.growSpeed * deltaTime;
              that.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (that.currentLivingValue / that.ShenMuLivSysMag.livingValue);
            } // 这里的 this 指向 component


            if (that.currentLivingValue >= that.ShenMuLivSysMag.livingValue) {
              console.log("通关成功，进入下一关");
              find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).nextPage();
              that.unscheduleAllCallbacks();
            }
          };

          if (!nextFLag) {
            this.schedule(callback, 3);
          }
        }

        destroyThisNode() {
          this.node.destroy();
        }

        initialShenMu() {
          this.ShenMuLivSysMag = new (_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
            error: Error()
          }), livingSystemManeger) : livingSystemManeger)(this.ShenMuConfig.LivingValue, 0, this.ShenMuConfig.DefendValue, 0, 0); //初始状态都有百分之五的进度。

          this.currentLivingValue = this.ShenMuLivSysMag.livingValue * 0.05; //生长速度

          this.growSpeed = this.ShenMuConfig.getShenMuGrowSpeed();
          this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.ShenMuLivSysMag.livingValue);
          console.log("神木初始化成功");
        }

        underFire(Collider) {
          //判断是被谁攻击的
          var harmedValue1 = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.HarmValue;
          var harmedValue2 = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyQuickAttack.HarmValue;
          var defendValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SHENMU.DefendValue; //目前为默认减少10;

          if (Collider.node.name == "Bullet_Pre") {
            console.log("神木受到攻击");

            if (this.currentLivingValue - harmedValue1 * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValue1; // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.ShenMuLivSysMag.livingValue);
            }
          }

          if (Collider.node.name == "Emeny2_Pre") {
            console.log("神木受到对方战机的攻击");

            if (this.currentLivingValue - harmedValue2 * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValue2; // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.ShenMuLivSysMag.livingValue);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ShenMuLivSysMag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "currentLivingValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4229156a8ac74d38ada2378395450cfd05112cd8.js.map