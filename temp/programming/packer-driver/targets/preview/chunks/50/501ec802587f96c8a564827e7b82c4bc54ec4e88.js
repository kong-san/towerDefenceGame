System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, instantiate, resources, Prefab, Layers, NodePool, Vec2, ProgressBar, find, Label, BulletPerManeger, combatConfigManeger, dijiTargetManeger, livingSystemManeger, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, diji;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBulletPerManeger(extras) {
    _reporterNs.report("BulletPerManeger", "./BulletPerManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcombatConfigManeger(extras) {
    _reporterNs.report("combatConfigManeger", "./combatConfigManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdijiTargetManeger(extras) {
    _reporterNs.report("dijiTargetManeger", "./dijiTargetManeger", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BulletPerManeger = _unresolved_2.BulletPerManeger;
    }, function (_unresolved_3) {
      combatConfigManeger = _unresolved_3.combatConfigManeger;
    }, function (_unresolved_4) {
      dijiTargetManeger = _unresolved_4.dijiTargetManeger;
    }, function (_unresolved_5) {
      livingSystemManeger = _unresolved_5.livingSystemManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88b6ddza6xHgJ3C0peQ2cgl", "diji", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact', 'instantiate', 'resources', 'Prefab', 'Layers', 'Vec3', 'NodePool', 'Vec2', 'ProgressBar', 'find', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("diji", diji = (_dec = ccclass('diji'), _dec2 = property(_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
        error: Error()
      }), livingSystemManeger) : livingSystemManeger), _dec(_class = (_class2 = class diji extends Component {
        constructor() {
          super(...arguments);
          this.bulletArray = [];
          this.hasEmeny = true;
          this.targetArray = null;
          this.bulletPool = void 0;

          _initializerDefineProperty(this, "DijiLivSysMag", _descriptor, this);

          this.forwardSpeed = void 0;
          this.currentLivingValue = void 0;
          this.endGameFlag = false;
        }

        start() {
          this.initialDiji();
          var that = this;
          this.bulletPool = new NodePool();
          this.schedule(function () {
            this.hasEmeny = this.node.parent.getComponent(_crd && dijiTargetManeger === void 0 ? (_reportPossibleCrUseOfdijiTargetManeger({
              error: Error()
            }), dijiTargetManeger) : dijiTargetManeger).hasEmeny;

            if (this.hasEmeny) {
              this.targetArray = this.node.parent.getComponent(_crd && dijiTargetManeger === void 0 ? (_reportPossibleCrUseOfdijiTargetManeger({
                error: Error()
              }), dijiTargetManeger) : dijiTargetManeger).emenyArray; // console.log('target number is ',this.targetArray.length)
              // console.log('createBullet')

              if (that.endGameFlag) {} else {
                that.createBullet();
              } // if(that.bulletPool.size()>5){
              //     that.bulletPool.clear()
              // }

            }
          }, 1);
          console.log('emeny information');
          var collider = this.node.getComponent(Collider2D); // console.log(collider);
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
          var node = this.node.parent;
          var y = node.position.y;
          var x = node.position.x; // if(x > 600){
          //     //敌军飞机不超过神木；
          // }else{
          //     x = x + this.forwardSpeed * deltaTime;
          //     // y = y - 10 * deltaTime;
          //     node.setPosition(x,y,0);
          // }

          if (this.node.parent.parent.name == "EmenyBox") {
            if (x > 600) {//敌军飞机不超过神木；
            } else {
              x = x + this.forwardSpeed * deltaTime; // y = y - 10 * deltaTime;

              node.setPosition(x, y, 0);
            }
          }

          if (this.node.parent.parent.name == "EmenyBoxR") {
            if (x > 600) {//敌军飞机不超过神木；
            } else {
              x = x - this.forwardSpeed * deltaTime; // y = y - 10 * deltaTime;

              node.setPosition(x, y, 0);
            }
          } // for(let i=0;i<this.bulletArray.length;i++){
          //     let bulletNode = this.bulletArray[i];
          //     let istarget = bulletNode.getComponent(BulletPerManeger).istarget;
          //     let isOverScreen = bulletNode.getComponent(BulletPerManeger).isOverScreen;
          //     // console.log("是否命中",istarget)
          //     if(istarget || isOverScreen){
          //         // bulletNode.destroy()
          //         this.bulletPool.put(bulletNode);
          //     }
          // let y = bulletNode.position.y;
          // let x = bulletNode.position.x;
          // if(this.targetArray.length>0){
          // x = x + this.DijiLivSysMag.attackSpeed * deltaTime;
          // this.shenmuTarget = true;
          // }else{
          // this.shenmuTarget = false;
          // }
          // else{
          //     if(i%3 == 1){
          //         x = x + this.DijiLivSysMag.attackSpeed * Math.cos(60 *Math.PI / 180 ) * deltaTime;
          //         y = y - this.DijiLivSysMag.attackSpeed * Math.sin(60 *Math.PI / 180 ) * deltaTime;
          //     }else if (i%3 == 2){
          //         x = x + this.DijiLivSysMag.attackSpeed * Math.cos(70 *Math.PI / 180 ) * deltaTime;
          //         y = y - this.DijiLivSysMag.attackSpeed * Math.sin(70 *Math.PI / 180 ) * deltaTime;
          //     }else{
          //         x = x + this.DijiLivSysMag.attackSpeed * Math.cos(80 *Math.PI / 180 ) * deltaTime;
          //         y = y - this.DijiLivSysMag.attackSpeed * Math.sin(80 *Math.PI / 180 ) * deltaTime;
          //     }
          // }
          // bulletNode.setPosition(x,y,0)
          // }
          // TODO:出屏幕后销毁
          // }

        }

        initialDiji() {
          var AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.AttackSpeed;
          var LivingValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.LivingValue;
          var DefendValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.DefendValue;
          var HarmValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.HarmValue;
          var level = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.GradeValue;
          this.node.parent.getChildByName("level").getComponent(Label).string = "L" + level;
          this.DijiLivSysMag = new (_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
            error: Error()
          }), livingSystemManeger) : livingSystemManeger)(LivingValue, HarmValue, DefendValue, 11, AttackSpeed);
          this.forwardSpeed = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.forwardSpeed;
          this.currentLivingValue = LivingValue;
          console.log("敌机初始化成功");
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          this.underFire(otherCollider);
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        onPreSolve(selfCollider, otherCollider, contact) {}

        onPostSolve(selfCollider, otherCollider, contact) {}

        getAngle(start, end) {
          var dx = start.x - end.x;
          var dy = start.y - end.y;
          var dir = new Vec2(dx, dy);
          var angle = dir.signAngle(new Vec2(1, 0));
          var degreen = angle / Math.PI * 180;
          return -degreen;
        }

        underFire(Collider) {
          //判断是被谁攻击的
          //目前为默认减少10;
          var harmedValuePao = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.HarmValue;
          var harmedValueDan = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).ZhuiZongDan.HarmValue;
          var harmedValueJian = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).GuangZiJian.HarmValue;
          var harmedValueFeng = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).FengYiJun.HarmValue;
          var defendValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.DefendValue;

          if (Collider.node.name == "PaoBulletPer") {
            if (this.currentLivingValue - harmedValuePao * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValuePao * (1 - defendValue); // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.DijiLivSysMag.livingValue);
            }
          }

          if (Collider.node.name == "GuangZiBulletPer") {
            if (this.currentLivingValue - harmedValueJian * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValueJian * (1 - defendValue); // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.DijiLivSysMag.livingValue);
            }
          }

          if (Collider.node.name == "FengyiBulletPer") {
            if (this.currentLivingValue - harmedValueFeng * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValueFeng * (1 - defendValue); // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.DijiLivSysMag.livingValue);
            }
          }

          if (Collider.node.name == "DanPerfabs") {
            if (this.currentLivingValue - harmedValueDan * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValueDan * (1 - defendValue); // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.DijiLivSysMag.livingValue);
            }
          }
        }

        createBullet() {
          // let node = new Node();
          // node.addComponent(Sprite);
          var that = this;
          resources.load("perfabs/Bullet_Pre", Prefab, (err, Prefab) => {
            if (!Prefab) {// console.log('子弹预制体为空')
            } else {
              // console.log('预制体制作完成')
              var node = instantiate(Prefab);

              if (!node) {// console.log('没有节点')
              } else {
                // console.log(node)
                // let pos = new Vec2();
                node.layer = Layers.Enum.UI_2D;
                var x = that.node.position.x + 400;
                var y = that.node.position.x + 225;
                node.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
                  error: Error()
                }), BulletPerManeger) : BulletPerManeger).speed = that.DijiLivSysMag.attackSpeed;
                node.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
                  error: Error()
                }), BulletPerManeger) : BulletPerManeger).bulletType = 11; // let shit = pos.set(x,y)
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "DijiLivSysMag", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=501ec802587f96c8a564827e7b82c4bc54ec4e88.js.map