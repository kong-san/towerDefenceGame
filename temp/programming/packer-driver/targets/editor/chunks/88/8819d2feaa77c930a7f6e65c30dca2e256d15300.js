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
        // public cloudArrived = false;
        start() {
          // this.node.parent.parent.getChildByName("next").active = true;
          if (this.node.name = "next") {
            this.node.active = true;
            this.node.on(Node.EventType.TOUCH_START, this.next, this);
          }
        }

        update(deltaTime) {// if(this.node.parent.name == "left"){
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
          //             that.cloudArrived = true;
          //             that.node.parent.parent.getChildByName("next").active = true;
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
          // if(this.node.name == "middle"){
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
//# sourceMappingURL=8819d2feaa77c930a7f6e65c30dca2e256d15300.js.map