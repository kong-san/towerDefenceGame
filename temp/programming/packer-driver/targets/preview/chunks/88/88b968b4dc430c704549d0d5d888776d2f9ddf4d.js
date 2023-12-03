System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, Sprite, Color, find, Prefab, resources, instantiate, Layers, toolPyManeger, _dec, _class, _crd, ccclass, property, locationPyManeger;

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

      _export("locationPyManeger", locationPyManeger = (_dec = ccclass('locationPyManeger'), _dec(_class = class locationPyManeger extends Component {
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
          selfCollider.node.getComponent(Sprite).color = Color.GREEN;
        }

        onEndContact(selfCollider, otherCollider, contact) {
          var selectNode = find("Canvas/selectToolBox").getChildByName(otherCollider.node.name);
          var step = selectNode.getComponent(_crd && toolPyManeger === void 0 ? (_reportPossibleCrUseOftoolPyManeger({
            error: Error()
          }), toolPyManeger) : toolPyManeger).ToolStateManeger.step; //

          if (step == 2) {
            //确认放置
            this.createNode(otherCollider.node.name);
          }
        }

        onPreSolve(selfCollider, otherCollider, contact) {}

        onPostSolve(selfCollider, otherCollider, contact) {}

        update(deltaTime) {}

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
          } else if (toolname == "dan") {} else if (toolname == "guangzi" || "jian") {} else {}
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88b968b4dc430c704549d0d5d888776d2f9ddf4d.js.map