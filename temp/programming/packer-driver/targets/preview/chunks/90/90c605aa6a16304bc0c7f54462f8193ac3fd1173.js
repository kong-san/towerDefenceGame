System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, middleManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b672Pge4FH5bTOf97Wx25G", "middleManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("middleManeger", middleManeger = (_dec = ccclass('middleManeger'), _dec(_class = class middleManeger extends Component {
        constructor() {
          super(...arguments);
          this.cloudArrived = false;
        }

        start() {}

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
                that.cloudArrived = true;
                that.node.parent.parent.getChildByName("next").active = true;
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
          } // if(this.node.name == "middle"){
          //     if(this.cloudArrived && this.node){
          //         this.node.active = true;
          //     }
          // }

        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=90c605aa6a16304bc0c7f54462f8193ac3fd1173.js.map