System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, resources, Layers, Prefab, instantiate, ProgressBar, NodePool, BulletPerManeger, livingSystemManeger, targetManeger, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GuangziPerManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBulletPerManeger(extras) {
    _reporterNs.report("BulletPerManeger", "./BulletPerManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOflivingSystemManeger(extras) {
    _reporterNs.report("livingSystemManeger", "./livingSystemManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOftargetManeger(extras) {
    _reporterNs.report("targetManeger", "./targetManeger", _context.meta, extras);
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
      resources = _cc.resources;
      Layers = _cc.Layers;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      ProgressBar = _cc.ProgressBar;
      NodePool = _cc.NodePool;
    }, function (_unresolved_2) {
      BulletPerManeger = _unresolved_2.BulletPerManeger;
    }, function (_unresolved_3) {
      livingSystemManeger = _unresolved_3.livingSystemManeger;
    }, function (_unresolved_4) {
      targetManeger = _unresolved_4.targetManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b2006jJUBHz5CR9wyZjxIj", "GuangziPerManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'BoxCollider2D', 'director', 'Sprite', 'Color', 'resources', 'SpriteFrame', 'Layers', 'find', 'Prefab', 'instantiate', 'Vec2', 'ProgressBar', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GuangziPerManeger", GuangziPerManeger = (_dec = ccclass('GuangziPerManeger'), _dec2 = property(_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
        error: Error()
      }), livingSystemManeger) : livingSystemManeger), _dec(_class = (_class2 = class GuangziPerManeger extends Component {
        constructor() {
          super(...arguments);
          this.bulletArray = [];
          this.hasEmeny = true;
          this.bulletPool = new NodePool();
          this.targetArray = new Array();

          _initializerDefineProperty(this, "GuangziLivSysMag", _descriptor, this);
        }

        onLoad() {
          // director.enable = true;
          //绘制物理信息
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        start() {
          this.initialDan(); // 批量生成子弹

          var that = this;
          var flag = false;
          this.schedule(function () {
            that.hasEmeny = that.node.parent.getComponent(_crd && targetManeger === void 0 ? (_reportPossibleCrUseOftargetManeger({
              error: Error()
            }), targetManeger) : targetManeger).hasEmeny;

            if (that.hasEmeny) {
              that.targetArray = that.node.parent.getComponent(_crd && targetManeger === void 0 ? (_reportPossibleCrUseOftargetManeger({
                error: Error()
              }), targetManeger) : targetManeger).emenyArray;
              flag = false;

              for (var i = 0; i < that.targetArray.length; i++) {
                if (that.targetArray[i].isValid) {
                  flag = true;
                }
              }

              if (!flag) {
                that.hasEmeny = false;
                that.node.parent.getComponent(_crd && targetManeger === void 0 ? (_reportPossibleCrUseOftargetManeger({
                  error: Error()
                }), targetManeger) : targetManeger).hasEmeny = false;
              }

              console.log('createBullet');
              that.createBullet();
            }
          }, 1); //注册单个碰撞体的回调函数
          // console.log('tool information')

          var collider = this.node.getComponent(Collider2D); // console.log(collider);
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

        onEndContact(selfCollider, otherCollider, contact) {// 只在两个碰撞体结束接触时被调用一次
          // console.log('PAO onEndContact');
          // this.hasEmeny = false;
        }

        onPreSolve(selfCollider, otherCollider, contact) {
          // 每次将要处理碰撞体接触逻辑时被调用
          console.log('PAO onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {// 每次处理完碰撞体接触逻辑时被调用
          // console.log('PAO onPostSolve');
        }

        update(deltaTime) {
          console.log(this.bulletArray.length); //获取攻击速度

          var speed = this.GuangziLivSysMag.attackSpeed;

          for (var i = 0; i < this.bulletArray.length; i++) {
            var bulletNode = this.bulletArray[i];
            var istarget = bulletNode.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
              error: Error()
            }), BulletPerManeger) : BulletPerManeger).istarget;
            var isOverScreen = bulletNode.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
              error: Error()
            }), BulletPerManeger) : BulletPerManeger).isOverScreen; // console.log("是否命中",istarget)

            if (istarget || isOverScreen) {
              // bulletNode.destroy()
              this.bulletPool.put(bulletNode);
            }

            var y = bulletNode.position.y;
            var x = bulletNode.position.x;
            x = x - speed * deltaTime;
            y = y + speed * deltaTime;
            bulletNode.setPosition(x, y, 0); //TODO:出屏幕后销毁
          }
        }

        destroyThisNode() {
          this.node.destroy();
        }

        initialGuangzi() {
          this.GuangziLivSysMag = new (_crd && livingSystemManeger === void 0 ? (_reportPossibleCrUseOflivingSystemManeger({
            error: Error()
          }), livingSystemManeger) : livingSystemManeger)(100, 10, 10, 2, 300); // let that = this;
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
          if (Collider.node.name == "Bullet_Pre") {
            // console.log("我军受到攻击")
            if (this.GuangziLivSysMag.livingValue - 80 <= 0) {
              this.node.parent.destroy();
            } else {
              this.GuangziLivSysMag.livingValue -= 80; // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)

              this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.DanLivSysMag.livingValue / 100);
            }
          }
        } //生成子弹


        createBullet() {
          // let node = new Node();
          // node.addComponent(Sprite);
          var that = this;
          resources.load("perfabs/GuangZiBulletPer", Prefab, (err, Prefab) => {
            if (!Prefab) {
              console.log('子弹预制体为空');
            } else {
              console.log('预制体制作完成');
              var node = instantiate(Prefab);

              if (!node) {
                console.log('没有节点');
              } else {
                // console.log(node)
                // let pos = new Vec2();
                node.layer = Layers.Enum.UI_2D;
                var x = that.node.position.x + 400;
                var y = that.node.position.x + 225; // let shit = pos.set(x,y)
                // x = shit.x - 800;                   
                // y = shit.y - 450;

                console.log(x, y);
                node.setPosition(0, 0, 0);
                that.node.addChild(node);
                that.bulletArray.push(node);
              }
            }
          }); // resources.load('zidan1/spriteFrame',SpriteFrame,(_err,sproteFarme)=>{
          //     node.getComponent(Sprite).spriteFrame = sproteFarme;
          //     node.layer = Layers.Enum.UI_2D;
          //     console.log(find("left"))
          //     console.log(this.node)
          //     node.parent = this.node;
          //     console.log(node);
          //     // node.parent = find("left").getChildByName("rightUp").getChildByName("pao")
          // })
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "GuangziLivSysMag", [_dec2], {
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
//# sourceMappingURL=97f60c84604dd707d51a1900ac00f88151ba5e8a.js.map