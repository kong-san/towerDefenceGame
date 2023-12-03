System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, director, Prefab, instantiate, Layers, find, _dec, _class, _crd, ccclass, property, loadManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      director = _cc.director;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Layers = _cc.Layers;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca229P/B21K+be/7YZlTBWu", "loadManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Scene', 'director', 'Prefab', 'instantiate', 'Layers', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loadManeger", loadManeger = (_dec = ccclass('loadManeger'), _dec(_class = class loadManeger extends Component {
        start() {
          // if(this.node.name = "begin"){
          //     director.preloadScene("preIntroduce", function () {
          //         console.log('Next scene preloaded');
          //     });
          //     this.node.on(Node.EventType.MOUSE_DOWN,this.begin,this)
          // }
          if (this.node.name == 'beginbox') {
            console.log('begin...............');
            resources.load("perfabs/WeiPerfabs", Prefab, (err, Prefab) => {
              if (!Prefab) {} else {
                console.log('sucess...............');
                var node = instantiate(Prefab);
                console.log(node);
                node.layer = Layers.Enum.UI_2D;
                node.setScale(-2, 2, 2);
                node.name = "sub";
                node.setPosition(0, 0, 0); // let num = this.randomNum(-50,50)
                // node.setPosition(-num,0,0);

                node.active = true;
                node.parent = find("Canvas/middle/beginbox");
                console.log(node.parent);
              }
            });
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
          director.loadScene("preIntroduce");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f8d10f019f3256f9228b2de19de974c78cab5e10.js.map