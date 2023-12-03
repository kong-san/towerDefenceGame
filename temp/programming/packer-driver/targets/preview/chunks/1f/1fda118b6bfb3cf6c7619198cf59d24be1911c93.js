System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, AudioSource, find, Canvas, _dec, _class, _crd, ccclass, property, loadManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
      AudioSource = _cc.AudioSource;
      find = _cc.find;
      Canvas = _cc.Canvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca229P/B21K+be/7YZlTBWu", "loadManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Scene', 'director', 'AudioSource', 'find', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loadManeger", loadManeger = (_dec = ccclass('loadManeger'), _dec(_class = class loadManeger extends Component {
        start() {
          if (this.node.name == "begin") {
            director.preloadScene("preIntroduce", function () {
              console.log('Next scene preloaded');
            });
            this.node.on(Node.EventType.MOUSE_DOWN, this.begin, this);
          }

          if (this.node.name == 'beginbox') {
            console.log('begin...............');
            var y = this.node.position.y;
            this.node.setPosition(-400, y, 0);
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
                that.node.parent.getChildByName("begin").active = true;
              } else if (x < 400) {
                x = x + 50 * deltaTime;
                that.node.setPosition(x, y, 0);
              } else {
                // that.cloudArrived = true;
                that.node.parent.getChildByName("begin").active = true;
              }
            }, 0.8);
          } // if(this.node.parent.name == "left"){
          //     let that = this;
          //     this.schedule(function(){
          //         let x = that.node.position.x;
          //         let y = that.node.position.y;
          //         if(x<0 && x+50>0){
          //             that.node.setPosition(0,y,0)
          //         }else if(x<0){
          //             x = x + 50*deltaTime;
          //             that.node.setPosition(x,y,0)
          //         }else{
          //             // that.cloudArrived = true;
          //             that.node.parent.parent.getChildByName("begin").active = true;
          //         }
          //     },1)
          // }
          // if(this.node.parent.name == "right"){
          //     let that = this;
          //     this.schedule(function(){
          //         let x = that.node.position.x;
          //         let y = that.node.position.y;
          //         // if(x>0 && x-50>0){
          //         //     that.node.setPosition(0,y,0)
          //         // }else 
          //         if(x>0){
          //             x = x - 50*deltaTime;
          //             that.node.setPosition(x,y,0)
          //         }else{
          //             // that.cloudArrived = true;
          //         }
          //     },1)
          // }

        }

        begin() {
          find(Canvas);
          this.node.getComponent(AudioSource).play;
          this.schedule(function () {
            director.loadScene("preIntroduce");
          }, 0.8);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fda118b6bfb3cf6c7619198cf59d24be1911c93.js.map