System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, GlobalLivingClass, SanShePao, ZhuiZongDan, _dec, _class, _crd, ccclass, property, combatConfigManeger;

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
        constructor(LivingValue, DefendValue, HarmValue, AttackSpeed, CostPower, GradeValue, LivingType, UpdateCost) {
          this.LivingValue = void 0;
          this.DefendValue = void 0;
          this.HarmValue = void 0;
          this.AttackSpeed = void 0;
          this.CostPower = void 0;
          this.GradeValue = void 0;
          this.LivingType = void 0;
          this.UpdateCost = void 0;
          this.LivingValue = LivingValue;
          this.DefendValue = DefendValue;
          this.HarmValue = HarmValue;
          this.AttackSpeed = AttackSpeed;
          this.CostPower = CostPower;
          this.GradeValue = GradeValue;
          this.LivingType = LivingType;
          this.UpdateCost = UpdateCost;
        }

      };
      SanShePao = class SanShePao extends GlobalLivingClass {
        constructor() {
          //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型
          super(500, 0.05, 60, 3, 0.03, 1, 1, 60);
        }

        updateManeger() {
          if (this.GradeValue == 10) {
            error("已满级，不要偏心哦");
            return;
          } else {
            //提升生命值的5%
            this.LivingValue += this.LivingValue * 0.05; //提升防御值的5%

            this.DefendValue += this.DefendValue * 0.05; //提升伤害值的6%

            this.HarmValue += this.HarmValue * 0.06; //等级+1

            this.GradeValue += 1;
          }
        } //获取生命属性信息：生命值、防御值、伤害值、等级


        getLivingProperty() {
          var LivingPropertyObject = {
            "LivingValue": this.LivingValue,
            "DefendValue": this.DefendValue,
            "HarmValue": this.HarmValue,
            "GradeVale": this.GradeValue
          };
          return LivingPropertyObject;
        }

        getUpdateFrontInfo() {
          return this.UpdateCost;
        }

        getCreateFrontInfo() {
          return this.CostPower;
        }

      };
      ZhuiZongDan = class ZhuiZongDan extends GlobalLivingClass {
        constructor() {
          //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型
          super(500, 0.05, 60, 3, 0.03, 1, 1, 60);
        }

        updateManeger() {
          if (this.GradeValue == 10) {
            error("已满级，不要偏心哦");
            return;
          } else {
            //提升生命值的5%
            this.LivingValue += this.LivingValue * 0.05; //提升防御值的5%

            this.DefendValue += this.DefendValue * 0.05; //提升伤害值的6%

            this.HarmValue += this.HarmValue * 0.06; //等级+1

            this.GradeValue += 1;
          }
        } //获取生命属性信息：生命值、防御值、伤害值、等级


        getLivingProperty() {
          var LivingPropertyObject = {
            "LivingValue": this.LivingValue,
            "DefendValue": this.DefendValue,
            "HarmValue": this.HarmValue,
            "GradeVale": this.GradeValue
          };
          return LivingPropertyObject;
        }

        getUpdateFrontInfo() {
          return this.UpdateCost;
        }

        getCreateFrontInfo() {
          return this.CostPower;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07fb01e8593d94f9a5a288c1d57b220b453db506.js.map