System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, BulletPerManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0aac63Z7r1BnIAHmf961l4h", "BulletPerManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'BoxCollider2D', 'director', 'Sprite', 'Color', 'resources', 'SpriteFrame', 'Layers', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BulletPerManeger", BulletPerManeger = (_dec = ccclass('BulletPerManeger'), _dec(_class = (_class2 = class BulletPerManeger extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isOverScreen", _descriptor, this);

          _initializerDefineProperty(this, "istarget", _descriptor2, this);

          _initializerDefineProperty(this, "speed", _descriptor3, this);

          _initializerDefineProperty(this, "bulletType", _descriptor4, this);

          _initializerDefineProperty(this, "angle", _descriptor5, this);
        }

        onLoad() {
          //绘制物理信息
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        start() {
          //注册单个碰撞体的回调函数
          console.log('tool information');
          var collider = this.node.getComponent(Collider2D); // console.log(collider);
          // console.log(collider);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        update(deltaTime) {
          var x = this.node.position.x;
          var y = this.node.position.y;
          this.bulletAttack(deltaTime);

          if (x > 800 || x < -800 || y > 450 || y < -450) {
            this.isOverScreen = true;
            console.log('this bullet over screen');
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          // console.log('Bullet BOOMBOOM');
          // console.log("i am bullet , my target is",otherCollider)
          this.istarget = true; // this.node.destroy()
        }

        onEndContact(selfCollider, otherCollider, contact) {// 只在两个碰撞体结束接触时被调用一次
          // console.log('Bullet ENDEND');
          // this.node.destroy()
        }

        onPreSolve(selfCollider, otherCollider, contact) {// 每次将要处理碰撞体接触逻辑时被调用
          // console.log('Bullet and Emeny Work onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {
          // 每次处理完碰撞体接触逻辑时被调用
          console.log('Bullet and Emeny Work onPostSolve');
        }

        ifTarget() {
          return this.istarget;
        }

        bulletAttack(deltaTime) {
          if (this.bulletType == 1) {
            this.PaoBullet(deltaTime);
          }

          if (this.bulletType == 11) {
            this.EmenyBullet(deltaTime);
          }
        }

        PaoBullet(deltaTime) {
          var x = this.node.position.x;
          var y = this.node.position.y;
          console.log("子弹的角度是", this.angle);
          x = x + this.speed * Math.sin(this.angle) * deltaTime;
          y = y + this.speed * Math.cos(this.angle) * deltaTime;
          this.node.setPosition(x, y, 0);
        }

        EmenyBullet(deltaTime) {
          var x = this.node.position.x;
          var y = this.node.position.y;
          x = x + this.speed * deltaTime;
          y = y - this.speed * deltaTime;
          this.node.setPosition(x, y, 0);
        } // DanBullet(deltaTime){
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isOverScreen", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "istarget", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bulletType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "angle", [property], {
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
//# sourceMappingURL=b3e396871ff10bb73ff3ff443bd288aed9e9c224.js.map