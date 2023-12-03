System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, error, resources, Prefab, instantiate, Layers, find, GlobalLivingClass, SanShePao, ZhuiZongDan, GuangZiJian, EmenyNormal, EmenyQuickAttack, _dec, _class, _crd, ccclass, property, combatConfigManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      error = _cc.error;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Layers = _cc.Layers;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b395yu0ZZNBJKdTY9gRk5p", "combatConfigManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'error', 'resources', 'Prefab', 'instantiate', 'Layers', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("combatConfigManeger", combatConfigManeger = (_dec = ccclass('combatConfigManeger'), _dec(_class = class combatConfigManeger extends Component {
        constructor(...args) {
          super(...args);
          this.RoundEmenyConfig = new Array(10);
        }

        start() {
          this.InitialRoundEmenyConfig();
        }

        update(deltaTime) {}

        InitialRoundEmenyConfig() {
          //配置每轮的飞机信息
          this.RoundEmenyConfig[0] = [2, 0, 0];
          this.RoundEmenyConfig[1] = [2, 1, 0];
          this.RoundEmenyConfig[2] = [2, 2, 3];
          this.RoundEmenyConfig[3] = [3, 1, 5];
          this.RoundEmenyConfig[4] = [4, 2, 5];
          this.RoundEmenyConfig[5] = [4, 2, 10];
          this.RoundEmenyConfig[6] = [5, 3, 7];
          this.RoundEmenyConfig[7] = [7, 2, 8];
          this.RoundEmenyConfig[8] = [7, 4, 10];
          this.RoundEmenyConfig[9] = [8, 8, 13];
        }

        createSingleRoundEmeny() {
          let that = this;
          resources.load("perfabs/left", Prefab, (err, Prefab) => {
            if (!Prefab) {// console.log('子弹预制体为空')
            } else {
              let node = instantiate(Prefab);
              node.layer = Layers.Enum.UI_2D;
              let x = that.currentBlockNum * 110;
              node.setPosition(-x, 0, 0);
              node.parent = find("Canvas/EmenyBox");
              that.currentBlockNum += 1;
            }
          });
        }

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
        } //获取生命属性信息：生命值、防御值、伤害值、等级、升级损耗


        getLivingProperty() {
          let LivingPropertyObject = {
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
          //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型;升级损耗
          super(600, 0.1, 80, 5, 0.05, 1, 2, 80);
        }

        updateManeger() {
          if (this.GradeValue == 10) {
            error("已满级，不要偏心哦");
            return;
          } else {
            //提升生命值的5%
            this.LivingValue += this.LivingValue * 0.03; //提升防御值的5%

            this.DefendValue += this.DefendValue * 0.04; //提升伤害值的6%

            this.HarmValue += this.HarmValue * 0.05; //等级+1

            this.GradeValue += 1;
          }
        } //获取生命属性信息：生命值、防御值、伤害值、等级


        getLivingProperty() {
          let LivingPropertyObject = {
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
      GuangZiJian = class GuangZiJian extends GlobalLivingClass {
        constructor() {
          //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型;升级损耗
          super(400, 0.3, 100, 2, 0.08, 1, 3, 100);
        }

        updateManeger() {
          if (this.GradeValue == 10) {
            error("已满级，不要偏心哦");
            return;
          } else {
            //提升生命值的5%
            this.LivingValue += this.LivingValue * 0.05; //提升防御值的5%

            this.DefendValue += this.DefendValue * 0.03; //提升伤害值的6%

            this.HarmValue += this.HarmValue * 0.05; //等级+1

            this.GradeValue += 1;
          }
        } //获取生命属性信息：生命值、防御值、伤害值、等级


        getLivingProperty() {
          let LivingPropertyObject = {
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
      EmenyNormal = class EmenyNormal extends GlobalLivingClass {
        constructor() {
          super(500, 0.08, 80, 4, 0, 1, 11, 0);
          this.forwardSpeed = void 0;
          this.forwardSpeed = 100;
        }

        updateManeger(roundTime) {
          let LivingUpdateRange = [0.01, 0.03];
          let DefendUpdateRange = [0.03, 0.1];
          let HarmUpdateRange = [0.05, 0.1];
          let LivingUpdateValue;
          let DefendUpdateValue;
          let HarmUpdateValue;
          let minRound = 2;
          let maxRound = 8;

          if (roundTime < minRound) {
            LivingUpdateValue = LivingUpdateRange[1];
            DefendUpdateValue = DefendUpdateRange[1];
            HarmUpdateValue = HarmUpdateRange[1];
          } else if (roundTime > maxRound) {
            LivingUpdateValue = LivingUpdateRange[0];
            DefendUpdateValue = DefendUpdateRange[0];
            HarmUpdateValue = HarmUpdateRange[0];
          } else {
            let livingRange = LivingUpdateRange[1] - LivingUpdateRange[0];
            let defendRange = DefendUpdateRange[1] - DefendUpdateRange[0];
            let harmRange = HarmUpdateRange[1] - HarmUpdateRange[0];
            let ratio = (roundTime - minRound) / (maxRound - minRound);
            LivingUpdateValue = ratio * livingRange + LivingUpdateRange[0];
            DefendUpdateValue = ratio * defendRange + DefendUpdateRange[0];
            HarmUpdateValue = ratio * harmRange + HarmUpdateRange[0];
          }

          this.LivingValue += this.LivingValue * LivingUpdateValue;
          this.DefendValue += this.DefendValue * DefendUpdateValue;
          this.HarmValue += this.HarmValue * HarmUpdateValue; //等级+1

          this.GradeValue += 1;
        }

      };
      EmenyQuickAttack = class EmenyQuickAttack extends GlobalLivingClass {
        constructor() {
          super(500, 0.05, 200, 0, 0, 1, 12, 0);
          this.forwardSpeed = void 0;
          this.forwardSpeed = 400;
        }

        updateManeger() {
          //每次调用就会直接增加
          this.HarmValue += 50;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0cdd221bcd3b7a4e96e8991236188b5f0cbf0df4.js.map