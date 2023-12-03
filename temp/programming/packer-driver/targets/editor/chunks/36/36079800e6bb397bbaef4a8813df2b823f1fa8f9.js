System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, resources, Prefab, instantiate, Layers, find, _dec, _class, _crd, ccclass, property, createSoldier;

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

      _cclegacy._RF.push({}, "24f37P8IApIy4K/zEhLwO8r", "createSoldier", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Prefab', 'instantiate', 'Layers', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("createSoldier", createSoldier = (_dec = ccclass('createSoldier'), _dec(_class = class createSoldier extends Component {
        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.addSoldier, this);
        }

        update(deltaTime) {}

        addSoldier() {
          console.log("召唤神兵");
          this.createSoldier();
        }

        createSoldier() {
          let that = this;

          if (this.node.parent.name == "createComponent") {
            resources.load("perfabs/WeiPerfabs", Prefab, (err, Prefab) => {
              if (!Prefab) {} else {
                let node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                let num = this.randomNum(-50, 50);
                node.setPosition(-num, 0, 0);
                node.active = true;
                node.parent = find("Canvas/WeiBox");
              }
            });
          }

          if (this.node.parent.name == "createComponentR") {
            resources.load("perfabs/WeiPerfabs", Prefab, (err, Prefab) => {
              if (!Prefab) {} else {
                let node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                node.setScale(-1, 1, 1);
                node.getChildByName("level").setScale(-1, 1, 1);
                node.getChildByName("");
                let num = this.randomNum(-50, 50);
                node.setPosition(-num, 0, 0);
                node.active = true;
                node.parent = find("Canvas/WeiBox");
              }
            });
          }
        }

        randomNum(lower, upper) {
          return Math.floor(Math.random() * (upper - lower)) + lower;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=36079800e6bb397bbaef4a8813df2b823f1fa8f9.js.map