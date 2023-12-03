System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, dijiTargetManeger;

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
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d69b1dWFpxBCKAC+Q7qdeEA", "dijiTargetManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'Contact2DType', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'IPhysics2DContact', 'instantiate', 'resources', 'Prefab', 'Layers', 'Vec3', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dijiTargetManeger", dijiTargetManeger = (_dec = ccclass('dijiTargetManeger'), _dec(_class = (_class2 = class dijiTargetManeger extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hasEmeny", _descriptor, this);

          _initializerDefineProperty(this, "emenyArray", _descriptor2, this);
        }

        start() {
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

        update(deltaTime) {}

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          this.hasEmeny = true;
          this.emenyArray = new Array();
          var targetPosition = otherCollider.node.getWorldPosition(otherCollider.node.position);
          this.emenyArray.push(targetPosition);
          console.log("我是目标检测器，我发现目标数量：", this.emenyArray.length); // let y = otherCollider.node.position.y;
          // let position = otherCollider.node.convertToWordspaceAR()
          // console.log("出现目标,坐标:",x.x,x.y)
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hasEmeny", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "emenyArray", [property], {
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
//# sourceMappingURL=34a5e807763bfd0fffbe46f120377e127f96b366.js.map