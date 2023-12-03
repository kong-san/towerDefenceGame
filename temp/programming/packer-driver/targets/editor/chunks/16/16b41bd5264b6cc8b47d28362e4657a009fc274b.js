System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, combatConfigManeger, _dec, _class, _crd, ccclass, property, tryAgain;

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

      _cclegacy._RF.push({}, "33460UcxWlBDpmQkA2vWdGS", "tryAgain", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("tryAgain", tryAgain = (_dec = ccclass('tryAgain'), _dec(_class = class tryAgain extends Component {
        start() {
          this.node.on(Node.EventType.TOUCH_START, this.tryAgain, this);
        }

        update(deltaTime) {}

        tryAgain() {
          find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
            error: Error()
          }), combatConfigManeger) : combatConfigManeger).againRound();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16b41bd5264b6cc8b47d28362e4657a009fc274b.js.map