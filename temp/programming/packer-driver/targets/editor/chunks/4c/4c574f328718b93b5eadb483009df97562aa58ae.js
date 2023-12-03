System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, instantiate, resources, Prefab, Layers, NodePool, BulletPerManeger, _dec, _class, _class2, _descriptor, _crd, ccclass, property, diji;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBulletPerManeger(extras) {
    _reporterNs.report("BulletPerManeger", "./BulletPerManeger", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BulletPerManeger = _unresolved_2.BulletPerManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88b6ddza6xHgJ3C0peQ2cgl", "diji", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact', 'instantiate', 'resources', 'Prefab', 'Layers', 'Vec3', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("diji", diji = (_dec = ccclass('diji'), _dec(_class = (_class2 = class diji extends Component {
        constructor(...args) {
          super(...args);
          this.bulletArray = [];
          this.hasEmeny = true;
          this.targetArray = null;
          this.emenyPool = void 0;

          _initializerDefineProperty(this, "initNum", _descriptor, this);
        }

        start() {
          let that = this;
          this.schedule(function () {
            if (this.hasEmeny) {
              console.log('createBullet');
              that.createBullet();
            }
          }, 1);
          console.log('emeny information');
          let collider = this.node.getComponent(Collider2D); // console.log(collider);

          console.log(collider);

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
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape; //创建对象池

          this.emenyPool = new NodePool();
        }

        update(deltaTime) {
          let node = this.node.parent;
          let y = node.position.y;
          let x = node.position.x;
          x = x + 40 * deltaTime;
          y = y - 10 * deltaTime;
          node.setPosition(x, y, 0);

          for (let i = 0; i < this.bulletArray.length; i++) {
            let bulletNode = this.bulletArray[i];
            let istarget = bulletNode.getComponent(_crd && BulletPerManeger === void 0 ? (_reportPossibleCrUseOfBulletPerManeger({
              error: Error()
            }), BulletPerManeger) : BulletPerManeger).istarget; // console.log("是否命中：",istarget)

            if (istarget) {
              bulletNode.destroy();
            }

            let y = bulletNode.position.y;
            let x = bulletNode.position.x; // let distanceX = this.bulletArray[0].x - x;
            // let distanceY = this.bulletArray[0].y - y;
            // let cosx = 500 * distanceX

            x = x + 500 * deltaTime;
            y = y - 500 * deltaTime;
            bulletNode.setPosition(x, y, 0); //TODO:出屏幕后销毁
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          this.hasEmeny = true; // this.targetArray.push(otherCollider.node.position)
          // console.log("maybe a information about position",otherCollider.node.position)
          // console.log('I am emeny onBeginContact');
        }

        onEndContact(selfCollider, otherCollider, contact) {// 只在两个碰撞体结束接触时被调用一次
          // console.log('Work onEndContact');
        }

        onPreSolve(selfCollider, otherCollider, contact) {// 每次将要处理碰撞体接触逻辑时被调用
          // console.log('Work onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {
          // 每次处理完碰撞体接触逻辑时被调用
          console.log('Work onPostSolve');
        }

        createBullet() {
          // let node = new Node();
          // node.addComponent(Sprite);
          let that = this;
          resources.load("perfabs/Bullet_Pre", Prefab, (err, Prefab) => {
            if (!Prefab) {
              console.log('子弹预制体为空');
            } else {
              console.log('预制体制作完成');
              let node = instantiate(Prefab);

              if (!node) {
                console.log('没有节点');
              } else {
                // console.log(node)
                // let pos = new Vec2();
                node.layer = Layers.Enum.UI_2D;
                let x = that.node.position.x + 400;
                let y = that.node.position.x + 225; // let shit = pos.set(x,y)
                // x = shit.x - 800;                   
                // y = shit.y - 450;

                console.log(x, y);
                node.setPosition(0, 0, 0);
                that.node.addChild(node);
                that.bulletArray.push(node);
              }
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "initNum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c574f328718b93b5eadb483009df97562aa58ae.js.map