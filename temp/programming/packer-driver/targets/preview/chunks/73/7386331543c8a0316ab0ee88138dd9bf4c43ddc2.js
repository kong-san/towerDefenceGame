System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, _dec, _class, _crd, ccclass, property, loadManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca229P/B21K+be/7YZlTBWu", "loadManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Scene', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loadManeger", loadManeger = (_dec = ccclass('loadManeger'), _dec(_class = class loadManeger extends Component {
        start() {
          if (this.node.name = "begin") {
            // director.preloadScene("scene", function () {
            //     console.log('Next scene preloaded');
            // });
            this.node.on(Node.EventType.MOUSE_DOWN, this.begin, this);
          }
        }

        update(deltaTime) {
          if (this.node.parent.name == "left") {
            var that = this;
            this.schedule(function () {
              var x = that.node.position.x;
              var y = that.node.position.y;

              if (x < 0 && x + 50 > 0) {
                that.node.setPosition(0, y, 0);
              } else if (x < 0) {
                x = x + 50 * deltaTime;
                that.node.setPosition(x, y, 0);
              } else {
                // that.cloudArrived = true;
                that.node.parent.parent.getChildByName("begin").active = true;
              }
            }, 1);
          }

          if (this.node.parent.name == "right") {
            var _that = this;

            this.schedule(function () {
              var x = _that.node.position.x;
              var y = _that.node.position.y; // if(x>0 && x-50>0){
              //     that.node.setPosition(0,y,0)
              // }else 

              if (x > 0) {
                x = x - 50 * deltaTime;

                _that.node.setPosition(x, y, 0);
              } else {// that.cloudArrived = true;
              }
            }, 1);
          }
        }

        begin() {
          director.loadScene("scene");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7386331543c8a0316ab0ee88138dd9bf4c43ddc2.js.map