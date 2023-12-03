System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, Vec2, DanPerManeger, diji, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, BulletPerManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDanPerManeger(extras) {
    _reporterNs.report("DanPerManeger", "./DanperManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdiji(extras) {
    _reporterNs.report("diji", "./diji", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      DanPerManeger = _unresolved_2.DanPerManeger;
    }, function (_unresolved_3) {
      diji = _unresolved_3.diji;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0aac63Z7r1BnIAHmf961l4h", "BulletPerManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'BoxCollider2D', 'director', 'Sprite', 'Color', 'resources', 'SpriteFrame', 'Layers', 'find', 'Vec3', 'Vec2']);

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

          _initializerDefineProperty(this, "shenmuTarget", _descriptor5, this);

          _initializerDefineProperty(this, "angle", _descriptor6, this);
        }

        onLoad() {
          //绘制物理信息
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        start() {
          var collider = this.node.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        update(deltaTime) {
          var x = this.node.position.x;
          var y = this.node.position.y;
          this.bulletAttack(deltaTime);

          if (x > 800 || x < -800 || y > 450 || y < -450) {
            this.isOverScreen = true;
            this.node.destroy();
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          this.istarget = true;
          this.node.destroy(); // this.node.destroy()
        } // onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // }
        // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // }
        // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // }


        ifTarget() {
          return this.istarget;
        }

        bulletAttack(deltaTime) {
          if (this.bulletType == 1) {
            this.PaoBullet(deltaTime);
          }

          if (this.bulletType == 2) {
            this.DanBullet(deltaTime);
          }

          if (this.bulletType == 3) {
            this.GuangZiBullet(deltaTime);
          }

          if (this.bulletType == 4) {
            this.FengYiBullet(deltaTime);
          }

          if (this.bulletType == 11) {
            this.EmenyBullet(deltaTime);
          }
        }

        PaoBullet(deltaTime) {
          var x = this.node.position.x;
          var y = this.node.position.y;

          if (this.node.parent.parent.parent.parent.name == "right") {
            x = x + this.speed * Math.cos(this.angle) * deltaTime;
            y = y + this.speed * Math.sin(this.angle) * deltaTime;
          } else {
            x = x - this.speed * Math.cos(this.angle) * deltaTime;
            y = y + this.speed * Math.sin(this.angle) * deltaTime;
          }

          this.node.setPosition(x, y, 0);
        }

        FengYiBullet(deltaTime) {
          var x = this.node.position.x;
          var y = this.node.position.y;
          x = x - this.speed * deltaTime;
          this.node.setPosition(x, y, 0); // y = y + this.speed * deltaTime;
        }

        EmenyBullet(deltaTime) {
          var x = this.node.position.x;
          var y = this.node.position.y;

          if (this.node.parent.getComponent(_crd && diji === void 0 ? (_reportPossibleCrUseOfdiji({
            error: Error()
          }), diji) : diji).targetArray.length > 0) {
            x = x + this.speed * deltaTime;
          } else {
            x = x + this.speed * deltaTime;
            y = y - this.speed * deltaTime;
          }

          this.node.setPosition(x, y, 0);
        }

        DanBullet(deltaTime) {
          var x1 = this.node.position.x;
          var y1 = this.node.position.y;

          if (this.node.parent.getComponent(_crd && DanPerManeger === void 0 ? (_reportPossibleCrUseOfDanPerManeger({
            error: Error()
          }), DanPerManeger) : DanPerManeger).currenTarget.isValid) {
            this.angle = this.getAngle(this.node.worldPosition, this.node.parent.getComponent(_crd && DanPerManeger === void 0 ? (_reportPossibleCrUseOfDanPerManeger({
              error: Error()
            }), DanPerManeger) : DanPerManeger).currenTarget.worldPosition);
          } else {
            this.node.destroy();
          }

          if (this.node.parent.parent.parent.parent.name == "right") {
            x1 = x1 + this.speed * Math.cos(this.angle) * deltaTime;
            y1 = y1 + this.speed * Math.sin(this.angle) * deltaTime;
          } else {
            x1 = x1 - this.speed * Math.cos(this.angle) * deltaTime;
            y1 = y1 + this.speed * Math.sin(this.angle) * deltaTime;
          }

          this.node.setPosition(x1, y1, 0);
        }

        GuangZiBullet(deltaTime) {
          var x = this.node.position.x;
          var y = this.node.position.y;

          if (this.node.parent.parent.parent.parent.name == "right") {
            x = x + this.speed * Math.cos(this.angle) * deltaTime;
            y = y + this.speed * Math.sin(this.angle) * deltaTime;
          } else {
            x = x - this.speed * Math.cos(this.angle) * deltaTime;
            y = y + this.speed * Math.sin(this.angle) * deltaTime;
          }

          this.node.setPosition(x, y, 0);
        } //remember to use world position


        getAngle(start, end) {
          var dx = start.x - end.x;
          var dy = start.y - end.y;
          var dir = new Vec2(dx, dy);
          var angle = dir.signAngle(new Vec2(1, 0)); // let degreen = angle / Math.PI * 180 ;

          return angle;
        }

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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "shenmuTarget", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "angle", [property], {
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
//# sourceMappingURL=59dd395d561df948cf8649d2fa26d3b6437cef39.js.map