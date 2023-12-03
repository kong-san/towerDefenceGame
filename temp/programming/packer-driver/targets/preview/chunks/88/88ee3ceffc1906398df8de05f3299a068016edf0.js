System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, resources, SpriteFrame, Layers, find, Vec2, infoManeger, _dec, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, selectToolManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinfoManeger(extras) {
    _reporterNs.report("infoManeger", "./infoManeger", _context.meta, extras);
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
    }, function (_unresolved_2) {
      infoManeger = _unresolved_2.infoManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c772fUcHlO0JkJwKwUQtoq", "selectToolManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'resources', 'SpriteFrame', 'Layers', 'find', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("selectToolManeger", selectToolManeger = (_dec = ccclass('selectToolManeger'), _dec(_class = (_class2 = class selectToolManeger extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tooltype", _descriptor, this);

          _initializerDefineProperty(this, "toolname", _descriptor2, this);
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
          if (this.node.parent.parent.parent.getChildByName('pao1')) {
            console.log('炮节点已存在，正在移动');
            var currentNode = this.node.parent.parent.parent.getChildByName('pao1');
            var pos = new Vec2();
            var shit = pos.set(event.getUILocation());
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
              node.addComponent(toolPyManeger);
              node.addComponent(PaoState); // node.setPosition(event.touch.point.x)
              // console.log(node);
              // console.log(event.touch._point.x);
              // node.active = false;

              console.log('炮创建成功');
            }); //放在战斗组，目前还没定义战斗组，所有放在顶层；

            node.parent = this.node.parent.parent.parent; // let x = event.touch._point['x'];
            // let y = event.touch._point['y'];
            // node.setPosition(x,y,0);
          }
        }

        SelectToolAndCancel(event) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tooltype", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toolname", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=88ee3ceffc1906398df8de05f3299a068016edf0.js.map