System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, instantiate, resources, Prefab, Layers, NodePool, Vec2, ProgressBar, find, combatConfigManeger, livingSystemManeger, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, dijiDeathPerManeger;

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
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      Layers = _cc.Layers;
      NodePool = _cc.NodePool;
      Vec2 = _cc.Vec2;
      ProgressBar = _cc.ProgressBar;
      find = _cc.find;
    }, function (_unresolved_2) {
      combatConfigManeger = _unresolved_2.combatConfigManeger;
    }, function (_unresolved_3) {
      livingSystemManeger = _unresolved_3.livingSystemManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5609IEFu1OXp8iRTOzujoN", "dijiDeathPerManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact', 'instantiate', 'resources', 'Prefab', 'Layers', 'Vec3', 'NodePool', 'Vec2', 'ProgressBar', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dijiDeathPerManeger", dijiDeathPerManeger = (_dec = ccclass('dijiDeathPerManeger'), _dec2 = property(_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
        error: Error()
      }), livingSystemManeger) : livingSystemManeger), _dec(_class = (_class2 = class dijiDeathPerManeger extends Component {
        constructor(...args) {
          super(...args);
          this.bulletArray = [];
          this.hasEmeny = true;
          this.targetArray = null;
          this.bulletPool = void 0;

          _initializerDefineProperty(this, "DijiDeathLivSysMag", _descriptor, this);

          this.forwardSpeed = void 0;
          this.currentLivingValue = void 0;
        }

        start() {
          this.initialDijiDeath();
          let that = this;
          this.bulletPool = new NodePool(); // this.schedule(function(){
          //     this.hasEmeny = this.node.parent.getComponent(dijiTargetManeger).hasEmeny;
          //     if(this.hasEmeny){
          //         this.targetArray = this.node.parent.getComponent(dijiTargetManeger).emenyArray;
          //         // console.log('target number is ',this.targetArray.length)
          //         console.log('createBullet')
          //         that.createBullet();
          //         // if(that.bulletPool.size()>5){
          //         //     that.bulletPool.clear()
          //         // }
          //     }
          // },1)

          console.log('emeny information');
          let collider = this.node.getComponent(Collider2D); // console.log(collider);
          // console.log(collider);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        onLoad() {
          // director.enable = true;
          //绘制物理信息
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        update(deltaTime) {
          let node = this.node.parent;
          let y = node.position.y;
          let x = node.position.x; // if(x > -200){
          //     //敌军飞机不超过神木；
          // }else{

          x = x + 100 * deltaTime; // y = y - 10 * deltaTime;

          node.setPosition(x, y, 0); // }
        }

        initialDijiDeath() {
          let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyQuickAttack.AttackSpeed;
          let LivingValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyQuickAttack.LivingValue;
          let DefendValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyQuickAttack.DefendValue;
          let HarmValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyQuickAttack.HarmValue;
          this.DijiDeathLivSysMag = new (_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
            error: Error()
          }), livingSystemManeger) : livingSystemManeger)(LivingValue, HarmValue, DefendValue, 12, AttackSpeed);
          this.forwardSpeed = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyQuickAttack.forwardSpeed;
          this.currentLivingValue = LivingValue;
          console.log("神木初始化成功");
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          // this.hasEmeny = true;
          // this.targetArray.push(otherCollider.node.position)
          // console.log("maybe a information about position",otherCollider.node.position)
          // console.log('I am emeny onBeginContact');
          this.underFire(otherCollider);
        }

        onEndContact(selfCollider, otherCollider, contact) {// 只在两个碰撞体结束接触时被调用一次
          // console.log('Work onEndContact');
        }

        onPreSolve(selfCollider, otherCollider, contact) {// 每次将要处理碰撞体接触逻辑时被调用
          // console.log('Work onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {// 每次处理完碰撞体接触逻辑时被调用
          // console.log('Work onPostSolve');
        }

        getAngle(start, end) {
          let dx = start.x - end.x;
          let dy = start.y - end.y;
          let dir = new Vec2(dx, dy);
          let angle = dir.signAngle(new Vec2(1, 0));
          let degreen = angle / Math.PI * 180;
          return -degreen;
        }

        underFire(Collider) {
          let harmedValuePao = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.HarmValue;
          let harmedValueDan = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).ZhuiZongDan.HarmValue;
          let harmedValueJian = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).GuangZiJian.HarmValue;
          let defendValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyQuickAttack.DefendValue;

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

          if (Collider.node.name == "GuangZiBulletPer") {
            if (this.currentLivingValue - harmedValueJian * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValueJian * (1 - defendValue); // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

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

        createBullet() {
          // let node = new Node();
          // node.addComponent(Sprite);
          let that = this;
          resources.load("perfabs/Bullet_Pre", Prefab, (err, Prefab) => {
            if (!Prefab) {// console.log('子弹预制体为空')
            } else {
              // console.log('预制体制作完成')
              let node = instantiate(Prefab);

              if (!node) {// console.log('没有节点')
              } else {
                // console.log(node)
                // let pos = new Vec2();
                node.layer = Layers.Enum.UI_2D;
                let x = that.node.position.x + 400;
                let y = that.node.position.x + 225; // let shit = pos.set(x,y)
                // x = shit.x - 800;                   
                // y = shit.y - 450;
                // console.log(x,y)

                node.setPosition(0, 0, 0);
                that.node.addChild(node);
                that.bulletArray.push(node);
              }
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "DijiDeathLivSysMag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ba6bc3e10119e4c6c22a582f03877a784c730c6.js.map