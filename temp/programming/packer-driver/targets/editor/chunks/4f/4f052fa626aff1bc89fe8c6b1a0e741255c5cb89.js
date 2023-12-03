System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, GlobalLivingClass, SanShePao, _dec, _class, _crd, ccclass, property, combatConfigManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b395yu0ZZNBJKdTY9gRk5p", "combatConfigManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'error']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("combatConfigManeger", combatConfigManeger = (_dec = ccclass('combatConfigManeger'), _dec(_class = class combatConfigManeger {
        start() {}

        update(deltaTime) {}

      }) || _class));

      GlobalLivingClass = class GlobalLivingClass {
        constructor(LivingValue, DefendValue, HarmValue, AttackSpeed, CostPower, GradeValue, LivingType) {
          this.LivingValue = void 0;
          this.DefendValue = void 0;
          this.HarmValue = void 0;
          this.AttackSpeed = void 0;
          this.CostPower = void 0;
          this.GradeValue = void 0;
          this.LivingType = void 0;
          this.LivingValue = LivingValue;
          this.DefendValue = DefendValue;
          this.HarmValue = HarmValue;
          this.AttackSpeed = AttackSpeed;
          this.CostPower = CostPower;
          this.GradeValue = GradeValue;
          this.LivingType = LivingType;
        }

      };
      SanShePao = class SanShePao extends GlobalLivingClass {
        constructor() {
          super(500, 0.05, 60, 3, 0.03, 1, 1);
        }

        updateManeger() {
          if (this.GradeValue == 10) {
            error("已满级，不要偏心哦");
            return;
          } else {}
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f052fa626aff1bc89fe8c6b1a0e741255c5cb89.js.map