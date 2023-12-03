System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SanShePao, _dec, _class, _crd, ccclass, property, combatConfigManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b395yu0ZZNBJKdTY9gRk5p", "combatConfigManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("combatConfigManeger", combatConfigManeger = (_dec = ccclass('combatConfigManeger'), _dec(_class = class combatConfigManeger {
        start() {}

        update(deltaTime) {}

      }) || _class));

      SanShePao = class SanShePao {
        constructor() {
          this.LivingValue = void 0;
          this.DefendValue = void 0;
          this.HarmValue = void 0;
          this.AttackSpeed = void 0;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a620cb92e4c9fcaac69044c63bfc11e7bcafae78.js.map