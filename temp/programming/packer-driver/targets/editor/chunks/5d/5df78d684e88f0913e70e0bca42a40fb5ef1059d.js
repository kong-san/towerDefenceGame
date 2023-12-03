System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, EPhysics2DDrawFlags, Contact2DType, Collider2D, ToolStateManeger, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, toolPyManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfToolStateManeger(extras) {
    _reporterNs.report("ToolStateManeger", "./ToolStateManeger", _context.meta, extras);
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
      Contact2DType = _cc.Contact2DType;
      Collider2D = _cc.Collider2D;
    }, function (_unresolved_2) {
      ToolStateManeger = _unresolved_2.ToolStateManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80fa5/SezVFSI+m8aPccn77", "toolPyManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'Contact2DType', 'Collider2D', 'IPhysics2DContact', 'Sprite', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("toolPyManeger", toolPyManeger = (_dec = ccclass('toolPyManeger'), _dec2 = property(_crd && ToolStateManeger === void 0 ? (_reportPossibleCrUseOfToolStateManeger({
        error: Error()
      }), ToolStateManeger) : ToolStateManeger), _dec(_class = (_class2 = class toolPyManeger extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ToolStateManeger", _descriptor, this);
        }

        onLoad() {
          // director.enable = true;
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        start() {
          //绘制物理信息
          this.ToolStateManeger = new (_crd && ToolStateManeger === void 0 ? (_reportPossibleCrUseOfToolStateManeger({
            error: Error()
          }), ToolStateManeger) : ToolStateManeger)(0, "null"); // this.ToolStateManeger = find
          //注册单个碰撞体的回调函数

          let collider = this.node.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          }
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (!otherCollider.node.children.length) {
            this.ToolStateManeger.step = 1;
            this.ToolStateManeger.master = otherCollider.node.name;
          } else {}
        }

        onEndContact(selfCollider, otherCollider, contact) {
          this.ToolStateManeger.step = 0;
          this.ToolStateManeger.master = "null";
        }

        onPreSolve(selfCollider, otherCollider, contact) {}

        onPostSolve(selfCollider, otherCollider, contact) {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ToolStateManeger", [_dec2], {
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
//# sourceMappingURL=5df78d684e88f0913e70e0bca42a40fb5ef1059d.js.map