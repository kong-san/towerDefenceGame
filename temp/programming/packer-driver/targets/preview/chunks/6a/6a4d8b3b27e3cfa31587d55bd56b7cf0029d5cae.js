System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, SpriteFrame, resources, director, _dec, _class, _crd, ccclass, property, pao;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8f66oyEjZOnLxBtCNLLol1", "pao", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'resources', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pao", pao = (_dec = ccclass('pao'), _dec(_class = class pao extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, event => {
            console.log('Mouse down');
            var node = new Node('infoBox');
            node.addComponent(Sprite); // node.getComponent(Sprite).spriteFrame = new SpriteFrame(url.raw("resources/game/wenzikuang"))

            node.setPosition(100, 100, 0);
            resources.load('wenzikuang/spriteFrame', SpriteFrame, (_err, spriteFrame) => {
              node.getComponent(Sprite).spriteFrame = spriteFrame;
              console.log('文字框创建成功');
            });
            director.getScene().addChild(node); // node.parent = this.node;
          }, this);
        }

        onload() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6a4d8b3b27e3cfa31587d55bd56b7cf0029d5cae.js.map