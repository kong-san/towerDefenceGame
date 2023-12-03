System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, SpriteFrame, resources, Layers, Vec2, BoxCollider2D, toolPyManeger, _dec, _class, _crd, ccclass, property, pao;

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
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
      Layers = _cc.Layers;
      Vec2 = _cc.Vec2;
      BoxCollider2D = _cc.BoxCollider2D;
    }, function (_unresolved_2) {
      toolPyManeger = _unresolved_2.toolPyManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8f66oyEjZOnLxBtCNLLol1", "pao", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'resources', 'director', 'Layers', 'Scene', 'UITransform', 'Vec3', 'Vec2', 'BoxCollider2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pao", pao = (_dec = ccclass('pao'), _dec(_class = class pao extends Component {
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
              var node = new Node('infoBox');
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
              var currentNode = this.node.parent.parent.parent.getChildByName('pao1'); // console.log(event.getLocationX(),event.getLocationY());
              //触摸点的世界坐标

              var pos = new Vec2();
              var shit = pos.set(event.getUILocation()); // let pos = new Vec3(event.touch._point['x'],event.touch._point['y'],0);

              var x = shit.x - 800;
              var y = shit.y - 450; //转换为UI坐标
              // pos=currentNode.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
              // console.log(pos);

              currentNode.setPosition(x, y, 0); // this.node.parent.parent.getChildByName('pao1').destroy();
            } else {
              //TODO:同时使用多个炮的时候可能会造成冲突
              var node = new Node('pao1');
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
                }), toolPyManeger) : toolPyManeger); // node.setPosition(event.touch.point.x)
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
          console.log('已取消触摸事件'); // this.node.parent.parent.parent.getChildByName('pao1').destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cb8ad58046be7ca20bf9abfcb81e2cc8c3492fa8.js.map