System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, SpriteFrame, resources, Layers, Vec2, BoxCollider2D, Collider2D, PaoState, toolPyManeger, ToolStateManeger, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, pao;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPaoState(extras) {
    _reporterNs.report("PaoState", "./PaoState", _context.meta, extras);
  }

  function _reportPossibleCrUseOftoolPyManeger(extras) {
    _reporterNs.report("toolPyManeger", "./toolPyManeger", _context.meta, extras);
  }

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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
      Layers = _cc.Layers;
      Vec2 = _cc.Vec2;
      BoxCollider2D = _cc.BoxCollider2D;
      Collider2D = _cc.Collider2D;
    }, function (_unresolved_2) {
      PaoState = _unresolved_2.PaoState;
    }, function (_unresolved_3) {
      toolPyManeger = _unresolved_3.toolPyManeger;
    }, function (_unresolved_4) {
      ToolStateManeger = _unresolved_4.ToolStateManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8f66oyEjZOnLxBtCNLLol1", "pao", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'resources', 'director', 'Layers', 'Scene', 'UITransform', 'Vec3', 'Vec2', 'BoxCollider2D', 'Collider', 'Collider2D', 'Contact2DType', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pao", pao = (_dec = ccclass('pao'), _dec2 = property(_crd && ToolStateManeger === void 0 ? (_reportPossibleCrUseOfToolStateManeger({
        error: Error()
      }), ToolStateManeger) : ToolStateManeger), _dec(_class = (_class2 = class pao extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ToolStateManeger", _descriptor, this);
        }

        start() {
          //TODO：需要将该点击监听独立为一个函数，被多个道具节点所调用。
          this.node.on(Node.EventType.MOUSE_UP, event => {
            //判断是否已经存在文字框，避免重复创建文字框组件;
            if (this.node.parent.parent.getChildByName('infoBox')) {
              //TODO：当当前显示的内容为其他道具时，需要动态渲染文字框内的内容。
              //TODO: 当前显示的内容为本道具时，销毁文字框。
              console.log('文字框节点已存在，正在销毁');
              this.node.parent.parent.getChildByName('infoBox').destroy();
            } else {
              console.log('Mouse down');
              let node = new Node('infoBox');
              node.addComponent(Sprite); // node.getComponent(Sprite).spriteFrame = new SpriteFrame(url.raw("resources/game/wenzikuang"))

              node.setPosition(-500, 10, 0);
              resources.load('wenzikuang/spriteFrame', SpriteFrame, (_err, spriteFrame) => {
                node.getComponent(Sprite).spriteFrame = spriteFrame; //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
                //2d摄像头可见的是UI_2D和UI_3D

                node.layer = Layers.Enum.UI_2D;
                console.log(node);
                console.log('文字框创建成功');
              }); // director.getScene().addChild(node);

              node.parent = this.node.parent.parent; // this.node.addChild(node);
            }
          }, this);
        }

        update(deltaTime) {
          this.node.on(Node.EventType.TOUCH_MOVE, event => {
            if (this.node.parent.parent.parent.getChildByName('pao1')) {
              // console.log('炮节点已存在，正在移动')
              let currentNode = this.node.parent.parent.parent.getChildByName('pao1'); // console.log(event.getLocationX(),event.getLocationY());
              //触摸点的世界坐标

              let pos = new Vec2();
              let shit = pos.set(event.getUILocation()); // let pos = new Vec3(event.touch._point['x'],event.touch._point['y'],0);

              let x = shit.x - 800;
              let y = shit.y - 450; //转换为UI坐标
              // pos=currentNode.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
              // console.log(pos);

              currentNode.setPosition(x, y, 0); // this.node.parent.parent.getChildByName('pao1').destroy();
            } else {
              //TODO:同时使用多个炮的时候可能会造成冲突
              let node = new Node('pao1');
              node.addComponent(Sprite);
              resources.load('pao/spriteFrame', SpriteFrame, (_err, spriteFrame) => {
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
                node.addComponent(_crd && PaoState === void 0 ? (_reportPossibleCrUseOfPaoState({
                  error: Error()
                }), PaoState) : PaoState); // node.setPosition(event.touch.point.x)
                // console.log(node);
                // console.log(event.touch._point.x);
                // node.active = false;

                console.log('炮创建成功');
              }); //放在战斗组，目前还没定义战斗组，所有放在顶层；

              node.parent = this.node.parent.parent.parent; // let x = event.touch._point['x'];
              // let y = event.touch._point['y'];
              // node.setPosition(x,y,0);
            }
          }, this);
          this.node.on(Node.EventType.TOUCH_END, this.nodeTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.nodeTouchCancel, this);
        }

        nodeTouchEnd(event) {
          console.log('已松开鼠标');
        }

        nodeTouchCancel(event) {
          console.log('已取消触摸事件');
          let nodePao = this.node.parent.parent.parent.getChildByName('pao1');
          console.log(nodePao.getComponent(Collider2D));
          let step = nodePao.getComponent(_crd && PaoState === void 0 ? (_reportPossibleCrUseOfPaoState({
            error: Error()
          }), PaoState) : PaoState).ToolStateManeger.step;
          console.log("step:", step);

          if (!step) {
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
            console.log(nodePao.parent.getChildByName("left").getChildByName(parentName));
            let NewNode = this.NewPao();
            NewNode.parent = nodePao.parent.getChildByName("left").getChildByName(parentName); // nodePao.setPosition(100,100,0)
            // console.log(nodePao.parent);
          }
        }

        NewPao() {
          let node = new Node('pao1');
          node.addComponent(Sprite);
          resources.load('pao/spriteFrame', SpriteFrame, (_err, spriteFrame) => {
            node.getComponent(Sprite).spriteFrame = spriteFrame; //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
            //2d摄像头可见的是UI_2D和UI_3D

            node.layer = Layers.Enum.UI_2D;
            node.setScale(0.3, 0.3, 1); //添加碰撞组件
            // node.addComponent(BoxCollider2D);
            // node.getComponent(BoxCollider2D).group = 4;
            // console.log(node.getComponent(BoxCollider2D))

            node.addComponent(_crd && toolPyManeger === void 0 ? (_reportPossibleCrUseOftoolPyManeger({
              error: Error()
            }), toolPyManeger) : toolPyManeger);
            node.addComponent(_crd && PaoState === void 0 ? (_reportPossibleCrUseOfPaoState({
              error: Error()
            }), PaoState) : PaoState); // node.setPosition(event.touch.point.x)
            // console.log(node);
            // console.log(event.touch._point.x);
            // node.active = false;

            console.log('炮开始工作');
          });
          return node;
        }

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
//# sourceMappingURL=2dee4261feeabbd1bf8483c4c520003715037f9b.js.map