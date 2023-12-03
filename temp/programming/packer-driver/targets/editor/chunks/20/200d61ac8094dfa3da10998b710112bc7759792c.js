System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, resources, Sprite, SpriteFrame, Layers, Label, _dec, _class, _class2, _descriptor, _crd, ccclass, property, infoManeger;

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
      Node = _cc.Node;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Layers = _cc.Layers;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16c996/9ohPN4VlMFWskfBg", "infoManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Sprite', 'SpriteFrame', 'Layers', 'find', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("infoManeger", infoManeger = (_dec = ccclass('infoManeger'), _dec(_class = (_class2 = class infoManeger extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "currentType", _descriptor, this);

          this.SanShePaoInfo = {
            "name": "散射炮",
            "describe": "使用该建筑可以发射出不同角度的炮弹，攻击敌人；"
          };
          this.ZhuiJiDanInfo = {
            "name": "追踪弹",
            "describe": "该建筑可以锁定目标并实施打击直到该目标陨灭"
          };
          this.GuangZiJianInfo = {
            "name": "光子箭",
            "describe": "该建筑具有快速和攻击力强的特点，将会释放出光子流攻击敌机"
          };
        }

        start() {}

        update(deltaTime) {}

        setInfoBox(toolType) {
          if (toolType == this.currentType) {
            this.currentType = 0;
            this.node.getChildByName("infoBoxsub").destroy();
          } else {
            if (this.currentType == 0) {
              let node = new Node('infoBoxsub');
              node.addComponent(Sprite); // node.getComponent(Sprite).spriteFrame = new SpriteFrame(url.raw("resources/game/wenzikuang"))

              node.setPosition(0, 0, 0);
              resources.load('wenzikuang/spriteFrame', SpriteFrame, (_err, spriteFrame) => {
                node.getComponent(Sprite).spriteFrame = spriteFrame; //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
                //2d摄像头可见的是UI_2D和UI_3D

                node.layer = Layers.Enum.UI_2D;
                let nameLabel = new Node("nameLabel");
                nameLabel.addComponent(Label);
                let describeLabel = new Node("describeLabel");
                describeLabel.addComponent(Label);
                node.addChild(nameLabel);
                node.addChild(describeLabel);
                console.log(node);
                console.log('文字框创建成功');
              }); // director.getScene().addChild(node);
              // node.parent=this.node.parent.parent;

              node.parent = this.node;
              this.currentType = toolType;
            } else {
              this.currentType = toolType;
              this.refreshInfo(this.currentType, this.node.getChildByName("infoBoxsub"));
            }
          }
        }

        refreshInfo(toolType, node) {
          if (toolType == 1) {
            console.log("文字信息打印");
            node.getChildByName("nameLabel").getComponent(Label).string = this.SanShePaoInfo.name;
            node.getChildByName("describeLabel").getComponent(Label).string = this.SanShePaoInfo.describe;
          }

          if (toolType == 2) {
            node.getChildByName("nameLabel").getComponent(Label).string = this.ZhuiJiDanInfo.name;
            node.getChildByName("describeLabel").getComponent(Label).string = this.ZhuiJiDanInfo.describe;
          }

          if (toolType == 3) {
            node.getChildByName("nameLabel").getComponent(Label).string = this.GuangZiJianInfo.name;
            node.getChildByName("describeLabel").getComponent(Label).string = this.GuangZiJianInfo.describe;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=200d61ac8094dfa3da10998b710112bc7759792c.js.map