System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, loadManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
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
          // if(this.node.name = "begin"){
          //     director.preloadScene("preIntroduce", function () {
          //         console.log('Next scene preloaded');
          //     });
          //     this.node.on(Node.EventType.MOUSE_DOWN,this.begin,this)
          // }
          if (this.node.name == 'beginbox') {
            console.log('begin...............');
          }
        }

        update(deltaTime) {
          if (this.node.name == 'beginbox') {
            var that = this;
            this.schedule(function () {
              var x = that.node.position.x;
              var y = that.node.position.y;

              if (x > 400) {
                that.node.setPosition(400, y, 0);
                that.node.parent.parent.getChildByName("begin").active = true;
              } else if (x < 400) {
                x = x + 50 * deltaTime;
                that.node.setPosition(x, y, 0);
              } else {
                // that.cloudArrived = true;
                that.node.parent.parent.getChildByName("begin").active = true;
              }
            }, 1);
          }

          if (this.node.parent.name == "left") {
            var _that = this;

            this.schedule(function () {
              var x = _that.node.position.x;
              var y = _that.node.position.y;

              if (x < 0 && x + 50 > 0) {
                _that.node.setPosition(0, y, 0);
              } else if (x < 0) {
                x = x + 50 * deltaTime;

                _that.node.setPosition(x, y, 0);
              } else {
                // that.cloudArrived = true;
                _that.node.parent.parent.getChildByName("begin").active = true;
              }
            }, 1);
          }

          if (this.node.parent.name == "right") {
            var _that2 = this;

            this.schedule(function () {
              var x = _that2.node.position.x;
              var y = _that2.node.position.y; // if(x>0 && x-50>0){
              //     that.node.setPosition(0,y,0)
              // }else 

              if (x > 0) {
                x = x - 50 * deltaTime;

                _that2.node.setPosition(x, y, 0);
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
//# sourceMappingURL=0fe9cb392c24970cf24c3b35771a838fdf6a6585.js.map