System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, combatConfigManeger, _dec, _class, _crd, ccclass, property, middleManeger;

  function _reportPossibleCrUseOfcombatConfigManeger(extras) {
    _reporterNs.report("combatConfigManeger", "./combatConfigManeger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      find = _cc.find;
    }, function (_unresolved_2) {
      combatConfigManeger = _unresolved_2.combatConfigManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b672Pge4FH5bTOf97Wx25G", "middleManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("middleManeger", middleManeger = (_dec = ccclass('middleManeger'), _dec(_class = class middleManeger extends Component {
        constructor(...args) {
          super(...args);
          this.cloudArrived = false;
        }

        start() {
          if (this.node.name = "next") {
            this.node.on(Node.EventType.MOUSE_DOWN, this.next, this);
          }
        }

        update(deltaTime) {
          if (this.node.parent.name == "left") {
            let that = this;
            this.schedule(function () {
              let x = that.node.position.x;
              let y = that.node.position.y;

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
            let that = this;
            this.schedule(function () {
              let x = that.node.position.x;
              let y = that.node.position.y; // if(x>0 && x-50>0){
              //     that.node.setPosition(0,y,0)
              // }else 

              if (x > 0) {
                x = x - 50 * deltaTime;
                that.node.setPosition(x, y, 0);
              } else {// that.cloudArrived = true;
              }
            }, 1);
          } // if(this.node.name == "middle"){
          //     if(this.cloudArrived && this.node){
          //         this.node.active = true;
          //     }
          // }

        }

        next() {
          find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).nextFLag = true;
          find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).nextRound();
          this.node.parent.active = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6d96f860497701bbbed5274699e4a3d0d3f082ca.js.map