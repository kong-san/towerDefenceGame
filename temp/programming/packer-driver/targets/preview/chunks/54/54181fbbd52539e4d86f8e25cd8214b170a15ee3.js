System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, resources, Prefab, instantiate, Layers, find, _dec, _class, _crd, ccclass, property, createFengManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Layers = _cc.Layers;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14658IFmYFBOqbs6Hj3EVLC", "createFengManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Prefab', 'instantiate', 'Layers', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("createFengManeger", createFengManeger = (_dec = ccclass('createFengManeger'), _dec(_class = class createFengManeger extends Component {
        constructor() {
          super(...arguments);
          this.currentBlockNum = void 0;
        }

        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.addFeng, this);
        }

        update(deltaTime) {}

        addFeng() {
          this.createFeng();
        }

        createFeng() {
          var that = this;
          resources.load("perfabs/left", Prefab, (err, Prefab) => {
            if (!Prefab) {// console.log('子弹预制体为空')
            } else {
              var node = instantiate(Prefab);
              node.layer = Layers.Enum.UI_2D;
              node.setPosition(0, 0, 0);
              node.parent = find("Canvas/FengBox");
            }
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54181fbbd52539e4d86f8e25cd8214b170a15ee3.js.map