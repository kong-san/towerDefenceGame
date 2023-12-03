System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, instantiate, resources, Prefab, Layers, NodePool, Vec2, BulletPerManeger, dijiTargetManeger, _dec, _class, _crd, ccclass, property, diji;

  function _reportPossibleCrUseOfBulletPerManeger(extras) {
    _reporterNs.report("BulletPerManeger", "./BulletPerManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdijiTargetManeger(extras) {
    _reporterNs.report("dijiTargetManeger", "./dijiTargetManeger", _context.meta, extras);
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
    }, function (_unresolved_2) {
      BulletPerManeger = _unresolved_2.BulletPerManeger;
    }, function (_unresolved_3) {
      dijiTargetManeger = _unresolved_3.dijiTargetManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88b6ddza6xHgJ3C0peQ2cgl", "diji", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact', 'instantiate', 'resources', 'Prefab', 'Layers', 'Vec3', 'NodePool', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("diji", diji = (_dec = ccclass('diji'), _dec(_class = class diji extends Component {
        constructor(...args) {
          super(...args);
          this.bulletArray = [];
          this.hasEmeny = true;
          this.targetArray = null;
          this.bulletPool = void 0;
        }

        start() {
          let that = this;
          this.bulletPool = new NodePool();
          this.schedule(function () {
            this.hasEmeny = this.node.parent.getComponent(_crd && dijiTargetManeger === void 0 ? (_reportPossibleCrUseOfdijiTargetManeger({
              error: Error()
            }), dijiTargetManeger) : dijiTargetManeger).hasEmeny;

            if (this.hasEmeny) {
              this.targetArray = this.node.parent.getComponent(_crd && dijiTargetManeger === void 0 ? (_reportPossibleCrUseOfdijiTargetManeger({
                error: Error()
              }), dijiTargetManeger) : dijiTargetManeger).emenyArray;
              console.log('target number is ', this.targetArray.length);
              console.log('createBullet');
              that.createBullet(); // if(that.bulletPool.size()>5){
              //     that.bulletPool.clear()
              // }
            }
          }, 1);
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
          let x = node.position.x;

          if (x > -200) {//敌军飞机不超过神木；
          } else {
            x = x + 40 * deltaTime;
            y = y - 10 * deltaTime;
            node.setPosition(x, y, 0);
          }

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
            }

            let y = bulletNode.position.y;
            let x = bulletNode.position.x;

            if (this.targetArray.length > 0) {
              let targetPos = this.targetArray[1];
              let angle = this.getAngle(bulletNode.position, targetPos);
              x = x + 500 * Math.cos(angle) * deltaTime;
              y = y - 500 * Math.sin(angle) * deltaTime; // let distanceX = this.bulletArray[0].x - x;
              // let distanceY = this.bulletArray[0].y - y;
              // let cosx = 500 * distanceX
              // x = x + 500 * deltaTime;
              // y = y - 500 * deltaTime;

              bulletNode.setPosition(x, y, 0);
            } // TODO:出屏幕后销毁

          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {// 只在两个碰撞体开始接触时被调用一次
          // this.hasEmeny = true;
          // this.targetArray.push(otherCollider.node.position)
          // console.log("maybe a information about position",otherCollider.node.position)
          // console.log('I am emeny onBeginContact');
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e2a010322d3b9d26ae21d756c72cc2c9530fa549.js.map