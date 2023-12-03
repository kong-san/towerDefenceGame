System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, Sprite, Color, find, Prefab, resources, instantiate, Layers, toolPyManeger, _dec, _class, _class2, _descriptor, _crd, ccclass, property, locationPyManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftoolPyManeger(extras) {
    _reporterNs.report("toolPyManeger", "./toolPyManeger", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      find = _cc.find;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      instantiate = _cc.instantiate;
      Layers = _cc.Layers;
    }, function (_unresolved_2) {
      toolPyManeger = _unresolved_2.toolPyManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d051ehEbNlDOrUJAxD4MSjx", "locationPyManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'BoxCollider2D', 'director', 'Sprite', 'Color', 'find', 'Prefab', 'resources', 'instantiate', 'Layers']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("locationPyManeger", locationPyManeger = (_dec = ccclass('locationPyManeger'), _dec(_class = (_class2 = class locationPyManeger extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "targetTool", _descriptor, this);
        }

        onLoad() {
          // director.enable = true;
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        start() {
          //绘制物理信息
          //注册单个碰撞体的回调函数
          console.log('my information');
          var collider = this.node.getComponent(Collider2D);
          console.log(collider); // console.log(collider);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          } // 注册全局碰撞回调函数
          // if (PhysicsSystem2D.instance) {
          //     PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          //     PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          //     PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
          //     PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          // }

        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          if (!this.node.children.length) {
            selfCollider.node.getComponent(Sprite).color = Color.GRAY;
            this.targetTool = otherCollider.node.name;
          }
        }

        onEndContact(selfCollider, otherCollider, contact) {
          //
          // if(step==2){
          //     //确认放置
          //     this.createNode(otherCollider.node.name);
          // }
          this.targetTool = "null";
        }

        onPreSolve(selfCollider, otherCollider, contact) {}

        onPostSolve(selfCollider, otherCollider, contact) {}

        update(deltaTime) {
          if (this.targetTool != "null") {
            var targetToolNode = find("Canvas/selectToolBox").getChildByName(this.targetTool);
            var step = targetToolNode.getComponent(_crd && toolPyManeger === void 0 ? (_reportPossibleCrUseOftoolPyManeger({
              error: Error()
            }), toolPyManeger) : toolPyManeger).ToolStateManeger.step;

            if (step == 2) {
              this.createNode(this.targetTool);
              targetToolNode.getComponent(_crd && toolPyManeger === void 0 ? (_reportPossibleCrUseOftoolPyManeger({
                error: Error()
              }), toolPyManeger) : toolPyManeger).ToolStateManeger.step == 0;
              targetToolNode.destroy();
            }
          }
        }

        createNode(toolname) {
          var that = this;

          if (toolname == "pao") {
            resources.load("perfabs/PaoPerfabs", Prefab, (err, Prefab) => {
              if (!Prefab) {// console.log('子弹预制体为空')
              } else {
                var node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                node.setPosition(0, 0, 0);
                node.parent = that.node;
              }
            });
          } else if (toolname == "dan") {
            resources.load("perfabs/DanPerfabs", Prefab, (err, Prefab) => {
              if (!Prefab) {// console.log('子弹预制体为空')
              } else {
                var node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                node.setPosition(0, 0, 0);
                node.parent = that.node;
              }
            });
          } else if (toolname == "guangzi" || "jian") {
            resources.load("perfabs/GuangziPerfabs", Prefab, (err, Prefab) => {
              if (!Prefab) {// console.log('子弹预制体为空')
              } else {
                var node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                node.setPosition(0, 0, 0);
                node.parent = that.node;
              }
            });
          } else {}
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetTool", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "null";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8319426a55775beba7c24441838c3af192477897.js.map