System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, resources, Layers, find, Prefab, instantiate, Vec2, ProgressBar, NodePool, Label, BulletPerManeger, combatConfigManeger, livingSystemManeger, targetManeger, updateComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PaoPerManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBulletPerManeger(extras) {
    _reporterNs.report("BulletPerManeger", "./BulletPerManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcombatConfigManeger(extras) {
    _reporterNs.report("combatConfigManeger", "./combatConfigManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOflivingSystemManeger(extras) {
    _reporterNs.report("livingSystemManeger", "./livingSystemManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOftargetManeger(extras) {
    _reporterNs.report("targetManeger", "./targetManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfupdateComponent(extras) {
    _reporterNs.report("updateComponent", "./updateComponent", _context.meta, extras);
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
      Node = _cc.Node;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      resources = _cc.resources;
      Layers = _cc.Layers;
      find = _cc.find;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec2 = _cc.Vec2;
      ProgressBar = _cc.ProgressBar;
      NodePool = _cc.NodePool;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BulletPerManeger = _unresolved_2.BulletPerManeger;
    }, function (_unresolved_3) {
      combatConfigManeger = _unresolved_3.combatConfigManeger;
    }, function (_unresolved_4) {
      livingSystemManeger = _unresolved_4.livingSystemManeger;
    }, function (_unresolved_5) {
      targetManeger = _unresolved_5.targetManeger;
    }, function (_unresolved_6) {
      updateComponent = _unresolved_6.updateComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f85cXxDFJNIIFh82uZGHIs", "PaoPerManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'BoxCollider2D', 'director', 'Sprite', 'Color', 'resources', 'SpriteFrame', 'Layers', 'find', 'Prefab', 'instantiate', 'Vec2', 'ProgressBar', 'NodePool', 'Label', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PaoPerManeger", PaoPerManeger = (_dec = ccclass('PaoPerManeger'), _dec2 = property(_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
        error: Error()
      }), livingSystemManeger) : livingSystemManeger), _dec(_class = (_class2 = class PaoPerManeger extends Component {
        constructor(...args) {
          super(...args);
          this.bulletArray = [];
          this.hasEmeny = true;
          this.bulletPool = new NodePool();
          this.targetArray = new Array();
          this.currentLivingValue = void 0;
          this.newBullet = void 0;
          this.angle = void 0;
          this.currenTarget = new Node();

          _initializerDefineProperty(this, "SanShePaoLivSysMag", _descriptor, this);
        }

        onLoad() {
          // director.enable = true;
          //绘制物理信息
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        start() {
          this.initialSanshePao(); // 批量生成子弹

          let that = this;
          let flag = false;
          this.node.on(Node.EventType.MOUSE_DOWN, this.clickTool, this);
          this.schedule(function () {
            that.hasEmeny = that.node.parent.getComponent(_crd && targetManeger === void 0 ? (_reportPossibleCrUseOftargetManeger({
              error: Error()
            }), targetManeger) : targetManeger).hasEmeny;

            if (that.hasEmeny) {
              that.targetArray = that.node.parent.getComponent(_crd && targetManeger === void 0 ? (_reportPossibleCrUseOftargetManeger({
                error: Error()
              }), targetManeger) : targetManeger).emenyArray;
              flag = false; // that.currenTarget = that.targetArray[0];

              for (let i = 0; i < that.targetArray.length; i++) {
                if (that.targetArray[i].isValid) {
                  if (!that.currenTarget.isValid) {
                    that.currenTarget = that.targetArray[i];
                  }

                  flag = true;
                }
              }

              if (!flag) {
                that.hasEmeny = false;
                that.node.parent.getComponent(_crd && targetManeger === void 0 ? (_reportPossibleCrUseOftargetManeger({
                  error: Error()
                }), targetManeger) : targetManeger).hasEmeny = false;
              }

              that.createBullet();
            }

            if (that.currenTarget.isValid) {
              that.angle = that.getAngle(that.node.position, that.currenTarget.position);
            }
          }, 1); //注册单个碰撞体的回调函数
          // console.log('tool information')

          let collider = this.node.getComponent(Collider2D); // console.log(collider);
          // console.log(collider);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          this.underFire(otherCollider);
        }

        onEndContact(selfCollider, otherCollider, contact) {}

        onPreSolve(selfCollider, otherCollider, contact) {
          // 每次将要处理碰撞体接触逻辑时被调用
          console.log('PAO onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {// 每次处理完碰撞体接触逻辑时被调用
          // console.log('PAO onPostSolve');
        }

        update(deltaTime) {
          // console.log(this.bulletArray.length);
          //获取攻击速度
          // let speed = this.SanShePaoLivSysMag.attackSpeed;
          for (let i = 0; i < this.bulletArray.length; i++) {
            let bulletNode = this.bulletArray[i];
            let istarget = bulletNode.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
              error: Error()
            }), BulletPerManeger) : BulletPerManeger).istarget;
            let isOverScreen = bulletNode.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
              error: Error()
            }), BulletPerManeger) : BulletPerManeger).isOverScreen; // console.log("是否命中",istarget)

            if (istarget || isOverScreen) {
              // bulletNode.destroy()
              this.bulletPool.put(bulletNode);
            } // let y = bulletNode.position.y;
            // let x = bulletNode.position.x;
            // x = x - speed * deltaTime;
            // y = y + speed * deltaTime;
            // //left
            // if(this.node.parent.parent.parent.name == "left"){
            // }
            // //right
            // if(this.node.parent.parent.name == "right"){
            //     x = x + speed * deltaTime;
            //     y = y + speed * deltaTime;
            // }
            // bulletNode.setPosition(x,y,0);
            //TODO:出屏幕后销毁

          }
        }

        refreshData() {
          let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.AttackSpeed;
          let LivingValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.LivingValue;
          let DefendValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.DefendValue;
          let HarmValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.HarmValue;
          let level = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.GradeValue;
          this.SanShePaoLivSysMag.defendValue = DefendValue;
          this.SanShePaoLivSysMag.gradeValue = level;
          this.SanShePaoLivSysMag.attackSpeed = AttackSpeed;
          this.SanShePaoLivSysMag.harmValue = HarmValue; //获取差值

          let subValue = LivingValue - this.SanShePaoLivSysMag.livingValue;
          this.SanShePaoLivSysMag.livingValue = LivingValue; //把差值加上

          this.currentLivingValue += subValue;
          this.node.parent.getChildByName("level").getComponent(Label).string = "L" + level;
        }

        destroyThisNode() {
          this.node.destroy();
        }

        initialSanshePao() {
          let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.AttackSpeed;
          let LivingValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.LivingValue;
          let DefendValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.DefendValue;
          let HarmValue = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.HarmValue;
          let level = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePao.GradeValue;
          this.node.parent.getChildByName("level").getComponent(Label).string = "L" + level;
          this.SanShePaoLivSysMag = new (_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
            error: Error()
          }), livingSystemManeger) : livingSystemManeger)(LivingValue, HarmValue, DefendValue, level, AttackSpeed);
          this.currentLivingValue = LivingValue;
          find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).SanShePaoList.push(this.node); // let that = this;
          // resources.load("sanshe/SpriteFrame",SpriteFrame,(err,SpriteFrame)=>{
          //     if (!SpriteFrame) {
          //         console.log('散射炮精灵图为空')
          //     }else{
          //         console.log('散射跑精灵图加载完成')
          //         this.node.getComponent(Sprite).spriteFrame = SpriteFrame;
          //         this.no
          //     }
          // })

          console.log("散射炮初始化成功");
        }

        underFire(Collider) {
          //判断是被谁攻击的
          //目前为默认减少10;
          let harmedValueEmeny = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).EmenyNormal.HarmValue;
          let defendValue = this.SanShePaoLivSysMag.defendValue;

          if (Collider.node.name == "Bullet_Pre") {
            // console.log("我军受到攻击")
            if (this.currentLivingValue - harmedValueEmeny * (1 - defendValue) <= 0) {
              this.node.parent.destroy();
            } else {
              this.currentLivingValue -= harmedValueEmeny * (1 - defendValue); // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.SanShePaoLivSysMag.livingValue);
            }
          }
        }

        underAttack(harmedValue) {
          let defendValue = this.SanShePaoLivSysMag.defendValue;

          if (this.currentLivingValue - harmedValue * this.SanShePaoLivSysMag.livingValue * (1 - defendValue) <= 0) {
            this.node.parent.destroy();
          } else {
            this.currentLivingValue -= harmedValue * this.SanShePaoLivSysMag.livingValue * (1 - defendValue);
            this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue / this.SanShePaoLivSysMag.livingValue);
          }
        } //生成子弹


        createBullet() {
          // let node = new Node();
          // node.addComponent(Sprite);
          let that = this;
          resources.load("perfabs/PaoBulletPer", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              let node = instantiate(Prefab);

              if (!node) {} else {
                node.layer = Layers.Enum.UI_2D;
                let x = that.node.position.x + 400;
                let y = that.node.position.x + 225; //速度；

                node.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
                  error: Error()
                }), BulletPerManeger) : BulletPerManeger).speed = that.SanShePaoLivSysMag.attackSpeed; //种类

                node.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
                  error: Error()
                }), BulletPerManeger) : BulletPerManeger).bulletType = 1; //角度

                node.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
                  error: Error()
                }), BulletPerManeger) : BulletPerManeger).angle = that.angle;
                node.setPosition(0, 0, 0);
                that.node.addChild(node);
                that.bulletArray.push(node);
              }
            }
          });
        }

        getAngle(start, end) {
          let dx = start.x - end.x;
          let dy = start.y - end.y;
          let dir = new Vec2(dx, dy);
          let angle = dir.signAngle(new Vec2(0, 1)); // let degreen = angle / Math.PI * 180 ;

          return -angle;
        }

        clickTool() {
          console.log("点击了散射炮");
          find("Canvas/createComponent").active = false;
          find("Canvas/updateComponent").active = true;
          find("Canvas/updateComponent").getChildByName("destory").getComponent(_crd && updateComponent === void 0 ? (_reportPossibleCrUseOfupdateComponent({
            error: Error()
          }), updateComponent) : updateComponent).targetNode = this.node.parent;
          find("Canvas/updateComponent").getChildByName("update").getComponent(_crd && updateComponent === void 0 ? (_reportPossibleCrUseOfupdateComponent({
            error: Error()
          }), updateComponent) : updateComponent).targetNode = this.node;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SanShePaoLivSysMag", [_dec2], {
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
//# sourceMappingURL=c7ca73c062a6bf471b7f5e54361364b07f17a5a3.js.map