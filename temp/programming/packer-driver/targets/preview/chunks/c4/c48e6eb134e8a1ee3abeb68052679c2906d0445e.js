System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, resources, SpriteFrame, Layers, _dec, _class, _crd, ccclass, property, test;

  return {
    setters: [function (_cc) {
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbdc8wjkERIW55+VtaOtKy2", "test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'resources', 'SpriteFrame', 'Layers']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("test", test = (_dec = ccclass('test'), _dec(_class = class test extends Component {
        constructor() {
          super(...arguments);
          this.bulletArray = [];
        }

        start() {
          // let bulletArray = [] ;
          var that = this;
          this.schedule(function () {
            that.createBullet(that);
          }, 50);
        }

        update(deltaTime) {
          console.log(this.bulletArray.length);

          for (var i = 0; i < this.bulletArray.length; i++) {}
        }

        createBullet(that) {
          var node = new Node();
          node.addComponent(Sprite);
          resources.load('zidan1/spriteFarme', SpriteFrame, (_err, sproteFarme) => {
            node.layer = Layers.Enum.UI_2D;
          });
          that.bulletArray.push(node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c48e6eb134e8a1ee3abeb68052679c2906d0445e.js.map