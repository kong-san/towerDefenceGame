System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, resources, SpriteFrame, Layers, find, Vec2, BoxCollider2D, infoManeger, PaoState, toolPyManeger, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, selectToolManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinfoManeger(extras) {
    _reporterNs.report("infoManeger", "./infoManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaoState(extras) {
    _reporterNs.report("PaoState", "./PaoState", _context.meta, extras);
  }

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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Layers = _cc.Layers;
      find = _cc.find;
      Vec2 = _cc.Vec2;
      BoxCollider2D = _cc.BoxCollider2D;
    }, function (_unresolved_2) {
      infoManeger = _unresolved_2.infoManeger;
    }, function (_unresolved_3) {
      PaoState = _unresolved_3.PaoState;
    }, function (_unresolved_4) {
      toolPyManeger = _unresolved_4.toolPyManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c772fUcHlO0JkJwKwUQtoq", "selectToolManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'resources', 'SpriteFrame', 'Layers', 'find', 'Vec2', 'BoxCollider2D', 'Collider2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("selectToolManeger", selectToolManeger = (_dec = ccclass('selectToolManeger'), _dec(_class = (_class2 = class selectToolManeger extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tooltype", _descriptor, this);

          _initializerDefineProperty(this, "toolname", _descriptor2, this);

          _initializerDefineProperty(this, "selectStep", _descriptor3, this);

          _initializerDefineProperty(this, "targetBlock", _descriptor4, this);
        }

        start() {
          this.node.on(Node.EventType.MOUSE_UP, event => {
            find("Canvas/infobox").getComponent(_crd && infoManeger === void 0 ? (_reportPossibleCrUseOfinfoManeger({
              error: Error()
            }), infoManeger) : infoManeger).setInfoBox(this.tooltype);
          }, this);
        }

        update(deltaTime) {
          this.node.on(Node.EventType.TOUCH_MOVE, this.SelectToolAndMove, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.SelectToolAndCancel, this);
        }

        SelectToolAndMove(event) {
          if (this.node.parent.parent.parent.getChildByName(this.toolname)) {
            console.log('炮节点已存在，正在移动');
            let currentNode = this.node.parent.parent.parent.getChildByName(this.toolname);
            let pos = new Vec2();
            let shit = pos.set(event.getUILocation());
            let x = shit.x - 800;
            let y = shit.y - 450; //转换为UI坐标
            // pos=currentNode.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
            // console.log(pos);

            currentNode.setPosition(x, y, 0); // this.node.parent.parent.getChildByName('pao1').destroy();
          } else {
            //TODO:同时使用多个炮的时候可能会造成冲突
            let node = new Node(this.toolname);
            node.addComponent(Sprite);
            let spriteFramePath = 'pao/spriteFrame';

            if (this.toolname == "pao") {
              spriteFramePath = "sanshepao/spriteFrame";
            } else if (this.toolname == "dan") {
              spriteFramePath = "zhuizongdan/spriteFrame";
            } else if (this.toolname == "guangzi" || "jian") {
              spriteFramePath = "guangzijian/spriteFrame";
            } else {
              spriteFramePath = 'pao/spriteFrame';
            }

            resources.load(spriteFramePath, SpriteFrame, (_err, spriteFrame) => {
              node.getComponent(Sprite).spriteFrame = spriteFrame; //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
              //2d摄像头可见的是UI_2D和UI_3D

              node.layer = Layers.Enum.UI_2D;
              node.setScale(0.3, 0.3, 1); //添加碰撞组件

              node.addComponent(BoxCollider2D);
              node.getComponent(BoxCollider2D).group = 4;
              console.log(node.getComponent(BoxCollider2D));
              node.addComponent(_crd && toolPyManeger === void 0 ? (_reportPossibleCrUseOftoolPyManeger({
                error: Error()
              }), toolPyManeger) : toolPyManeger);
              console.log('炮创建成功');
            }); //放在战斗组，目前还没定义战斗组，所有放在顶层；

            node.parent = this.node.parent.parent.parent;
          }
        }

        SelectToolAndCancel(event) {
          console.log('已取消触摸事件');
          let nodePao = this.node.parent.parent.parent.getChildByName(this.toolname);
          let step = this.selectStep;
          console.log("step:", step);

          if (!(step == 2)) {
            console.log('离开碰撞且取消触摸事件');
            nodePao.destroy();
          } else {
            // nodePao.parent = find()
            let parentName = nodePao.getComponent(_crd && PaoState === void 0 ? (_reportPossibleCrUseOfPaoState({
              error: Error()
            }), PaoState) : PaoState).ToolStateManeger.master;
            console.log('这个node从属于', nodePao.getComponent(_crd && PaoState === void 0 ? (_reportPossibleCrUseOfPaoState({
              error: Error()
            }), PaoState) : PaoState).ToolStateManeger.master);
            console.log(nodePao.parent.getChildByName("left").getChildByName(parentName)); //TODO:增加逻辑；若该组件下面挂在了一个tool了，就不允许再创建新的tool；

            let NewNode = this.NewPao();
            NewNode.parent = this.node.parent.parent.parent.getChildByName("left").getChildByName(parentName);
            NewNode.active = true;
            nodePao.destroy(); // nodePao.setPosition(100,100,0)
            // console.log(nodePao.parent);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tooltype", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toolname", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "null";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selectStep", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "targetBlock", [property], {
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
//# sourceMappingURL=29ea378ae05c3ccd789a25dbd906b7b828b75d92.js.map