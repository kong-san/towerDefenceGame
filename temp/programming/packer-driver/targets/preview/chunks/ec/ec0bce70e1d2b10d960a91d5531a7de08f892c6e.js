System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, error, resources, Prefab, instantiate, Layers, find, Label, ShenMuManeger, GlobalLivingClass, SanShePao, ZhuiZongDan, GuangZiJian, FengYiJun, EmenyNormal, EmenyQuickAttack, SHENMU, Bing, Kong, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, combatConfigManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfShenMuManeger(extras) {
    _reporterNs.report("ShenMuManeger", "./ShenMuManeger", _context.meta, extras);
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
      error = _cc.error;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Layers = _cc.Layers;
      find = _cc.find;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      ShenMuManeger = _unresolved_2.ShenMuManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b395yu0ZZNBJKdTY9gRk5p", "combatConfigManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'error', 'resources', 'Prefab', 'instantiate', 'Layers', 'find', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("combatConfigManeger", combatConfigManeger = (_dec = ccclass('combatConfigManeger'), _dec(_class = (_class2 = class combatConfigManeger extends Component {
        constructor() {
          super(...arguments);
          this.RoundEmenyConfig = new Array();

          _initializerDefineProperty(this, "roundTime", _descriptor, this);

          _initializerDefineProperty(this, "roundNum", _descriptor2, this);

          _initializerDefineProperty(this, "nextFLag", _descriptor3, this);

          _initializerDefineProperty(this, "roundTimeShow", _descriptor4, this);

          _initializerDefineProperty(this, "endGameFlag", _descriptor5, this);

          _initializerDefineProperty(this, "askRequest", _descriptor6, this);

          this.SanShePao = new SanShePao();
          this.ZhuiZongDan = new ZhuiZongDan();
          this.GuangZiJian = new GuangZiJian();
          this.EmenyNormal = new EmenyNormal();
          this.EmenyQuickAttack = new EmenyQuickAttack();
          this.SHENMU = new SHENMU();
          this.Bing = new Bing();
          this.Kong = new Kong();
          this.FengYiJun = new FengYiJun();
          this.SanShePaoList = new Array();
          this.ZhuiZongDanList = new Array();
          this.GuangZiJianList = new Array();
          this.FengYiJunList = new Array();
        }

        start() {
          if (!this.nextFLag) {}

          this.roundNum = 0;
          find("Canvas/EmenyBox").active = true;
          console.log("全局配置，正在生成");
          this.roundTime = 1;
          this.InitialRoundEmenyConfig();
          var that = this;
          this.schedule(function () {
            // 这里的 this 指向 component
            if (!that.nextFLag && !that.endGameFlag) {
              //大于10关对敌机数量进行配置。
              if (that.roundTime > 10) {
                var num = that.roundTime - 1;
                that.RoundEmenyConfig[that.roundTime - 1] = [num, num - 1, num + 2];
              }

              console.log(that.RoundEmenyConfig[that.roundTime - 1]);
              that.createSingleRoundEmeny(that.roundTime);
              that.createSingleRoundEmenyRight(that.roundTime);
              that.roundNum++;
            } else {}
          }, 10);
        }

        update(deltaTime) {
          this.showRoundTime(deltaTime);
        }

        showRoundTime(dt) {
          var node = find("Canvas/model");
          node.getChildByName("info").getComponent(Label).string = "第" + this.roundTime + "关";

          if (!this.roundTimeShow) {
            node.active = true;
            this.schedule(() => {
              node.active = false;
              this.roundTimeShow = true;
            }, 0, 0, 2);
          }
        }

        endGame() {
          var node = find("Canvas/gameOver");
          node.active = true;
          this.endGameFlag = true;
          var nodeList = find("Canvas/EmenyBox").children; // for(let i =0;i<nodeList.length;i++){
          //     if(nodeList[i].isValid){
          //         nodeList[i].getChildByName("Emeny_Pre").getComponent(diji).endGameFlag = true;
          //     }
          // }
        }

        againRound() {
          this.endGameFlag = false;
          find("Canvas/ShenMu").getChildByName("shenmu").getComponent(_crd && ShenMuManeger === void 0 ? (_reportPossibleCrUseOfShenMuManeger({
            error: Error()
          }), ShenMuManeger) : ShenMuManeger).refresh();
          var node = find("Canvas/gameOver");
          node.active = false;
          this.roundTimeShow = false;
          this.cleanCombat();
        }

        nextPage() {
          this.cleanCombat();
          this.nextFLag = true;
          this.schedule(function () {
            console.log("error>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            find("Canvas/middle").active = true; // find("Canvas/ShenMu").getChildByName("shenmu").getComponent(ShenMuManeger).refresh();
          }, 2, 0, 0);
        }

        nextRound() {
          this.roundTime++;
          this.roundNum = 0;
          this.EmenyNormal.updateManeger(this.roundNum);
          this.EmenyQuickAttack.updateManeger();
          this.Kong.updateManeger();
          console.log("战斗中心控制刷新");
          find("Canvas/ShenMu").getChildByName("shenmu").getComponent(_crd && ShenMuManeger === void 0 ? (_reportPossibleCrUseOfShenMuManeger({
            error: Error()
          }), ShenMuManeger) : ShenMuManeger).refresh(); //清扫战场

          this.nextFLag = false;
          this.roundTimeShow = false;
          this.askRequest = false;
        }

        cleanCombat() {
          var nodeList = find("Canvas/EmenyBox").children;
          var nodeListR = find("Canvas/EmenyBoxR").children;
          var KongL = find("Canvas/KongBoxL").children;
          var KongR = find("Canvas/KongBoxR").children;

          for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i].isValid) {
              nodeList[i].destroy();
            }
          }

          for (var _i = 0; _i < nodeListR.length; _i++) {
            if (nodeListR[_i].isValid) {
              nodeListR[_i].destroy();
            }
          }

          for (var _i2 = 0; _i2 < KongL.length; _i2++) {
            if (KongL[_i2].isValid) {
              KongL[_i2].destroy();
            }
          }

          for (var _i3 = 0; _i3 < KongR.length; _i3++) {
            if (KongR[_i3].isValid) {
              KongR[_i3].destroy();
            }
          }
        }

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

        createSingleRoundEmeny(currentRound) {
          var that = this;
          resources.load("perfabs/Emeny2Perfabs", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              // console.log("数量为",that.RoundEmenyConfig[currentRound-1][1])
              // for(let i=0;i<that.RoundEmenyConfig[currentRound-1][1];i++){
              //     that.schedule(function(){
              //     let node = instantiate(Prefab)
              //     node.layer = Layers.Enum.UI_2D;
              //     node.setPosition(0,0,0);
              //     node.parent = find("Canvas/EmenyBox");
              //     node.active = true;
              //     },0,1,1)
              // }
              if (that.RoundEmenyConfig[currentRound - 1][1] > 0) {
                that.schedule(function () {
                  var node = instantiate(Prefab);
                  node.layer = Layers.Enum.UI_2D;
                  node.setPosition(0, 0, 0);
                  node.parent = find("Canvas/EmenyBox");
                  node.active = true;
                }, 1, that.RoundEmenyConfig[currentRound - 1][1] - 1, 0);
              }
            }
          });
          resources.load("perfabs/Emeny1Perfabs", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              // console.log("数量为",that.RoundEmenyConfig[currentRound-1][0])
              // for(let i=0;i<that.RoundEmenyConfig[currentRound-1][0];i++){
              //     that.schedule(function(){
              //         let node = instantiate(Prefab)
              //         node.layer = Layers.Enum.UI_2D;
              //         node.setPosition(0,0,0);
              //         node.parent = find("Canvas/EmenyBox");
              //         node.active = true;
              //     },0,1,1)
              // }
              if (that.RoundEmenyConfig[currentRound - 1][0] > 0) {
                that.schedule(function () {
                  var node = instantiate(Prefab);
                  node.layer = Layers.Enum.UI_2D;
                  node.setPosition(0, 0, 0);
                  node.parent = find("Canvas/EmenyBox");
                  node.active = true;
                }, 1, that.RoundEmenyConfig[currentRound - 1][0] - 1, 0);
              } // let node = instantiate(Prefab);
              // node.layer = Layers.Enum.UI_2D;
              // node.setPosition(0,0,0);
              // node.parent = find("Canvas/EmenyBox");

            }
          });
          resources.load("perfabs/KongPerfabs", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              // console.log("数量为",that.RoundEmenyConfig[currentRound-1][2])
              // for(let i=0;i<that.RoundEmenyConfig[currentRound-1][2];i++){
              //     that.schedule(function(){
              //         let node = instantiate(Prefab)
              //         node.layer = Layers.Enum.UI_2D;
              //         node.setPosition(0,0,0);
              //         node.parent = find("Canvas/KongBoxL");
              //         node.active = true;
              //     },1,1,1)
              // }
              if (that.RoundEmenyConfig[currentRound - 1][2] > 0) {
                that.schedule(function () {
                  var node = instantiate(Prefab);
                  node.layer = Layers.Enum.UI_2D;
                  node.setPosition(0, 0, 0);
                  node.parent = find("Canvas/KongBoxL");
                  node.active = true;
                }, 1, that.RoundEmenyConfig[currentRound - 1][2] - 1, 0);
              } // let node = instantiate(Prefab);
              // node.layer = Layers.Enum.UI_2D;
              // node.setPosition(0,0,0);
              // node.parent = find("Canvas/EmenyBox");

            }
          });
        }

        createSingleRoundEmenyRight(currentRound) {
          var that = this;
          resources.load("perfabs/Emeny2Perfabs", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              // console.log("数量为",that.RoundEmenyConfig[currentRound-1][1])
              for (var i = 0; i < that.RoundEmenyConfig[currentRound - 1][1]; i++) {
                that.schedule(function () {
                  var node = instantiate(Prefab); // node.getChildByName("Emeny2_Pre").setScale(-1,1,1)

                  node.setScale(-1, 1, 1);
                  node.getChildByName("level").setScale(-1, 1, 1); // node.getChildByName("ProgressBar").setScale(-1,1,1);

                  node.layer = Layers.Enum.UI_2D;
                  node.setPosition(0, 0, 0);
                  node.parent = find("Canvas/EmenyBoxR");
                  node.active = true;
                }, 1, 1, 0);
              }
            }
          });
          resources.load("perfabs/Emeny1Perfabs", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              // console.log("数量为",that.RoundEmenyConfig[currentRound-1][0])
              for (var i = 0; i < that.RoundEmenyConfig[currentRound - 1][0]; i++) {
                that.schedule(function () {
                  var node = instantiate(Prefab); // node.getChildByName("Emeny2_Pre").setScale(-1,1,1)

                  node.setScale(-1, 1, 1);
                  node.getChildByName("level").setScale(-1, 1, 1); // node.getChildByName("ProgressBar").setScale(-1,1,1);

                  node.layer = Layers.Enum.UI_2D;
                  node.setPosition(0, 0, 0);
                  node.parent = find("Canvas/EmenyBoxR");
                  node.active = true;
                }, 1, 1, 0);
              } // let node = instantiate(Prefab);
              // node.layer = Layers.Enum.UI_2D;
              // node.setPosition(0,0,0);
              // node.parent = find("Canvas/EmenyBox");

            }
          });
          resources.load("perfabs/KongPerfabs", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              console.log("数量为", that.RoundEmenyConfig[currentRound - 1][2]);

              for (var i = 0; i < that.RoundEmenyConfig[currentRound - 1][2]; i++) {
                that.schedule(function () {
                  var node = instantiate(Prefab); // node.getChildByName("Emeny2_Pre").setScale(-1,1,1)

                  node.setScale(-1, 1, 1);
                  node.getChildByName("level").setScale(-1, 1, 1); // node.getChildByName("ProgressBar").setScale(-1,1,1);

                  node.layer = Layers.Enum.UI_2D;
                  node.setPosition(0, 0, 0);
                  node.parent = find("Canvas/KongBoxR");
                  node.active = true;
                }, 1, 1, 0);
              } // let node = instantiate(Prefab);
              // node.layer = Layers.Enum.UI_2D;
              // node.setPosition(0,0,0);
              // node.parent = find("Canvas/EmenyBox");

            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "roundTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roundNum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nextFLag", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "roundTimeShow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "endGameFlag", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "askRequest", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

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
          super(500, 0.05, 60, 300, 0.03, 1, 1, 60);
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
          //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型;升级损耗
          super(600, 0.1, 80, 500, 0.05, 1, 2, 80);
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
      GuangZiJian = class GuangZiJian extends GlobalLivingClass {
        constructor() {
          //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型;升级损耗
          super(400, 0.3, 100, 1200, 0.08, 1, 3, 100);
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
      FengYiJun = class FengYiJun extends GlobalLivingClass {
        constructor() {
          super(180, 0.1, 80, 300, 0.05, 1, 5, 0.05);
        } //升级系统;


      };
      EmenyNormal = class EmenyNormal extends GlobalLivingClass {
        constructor() {
          super(500, 0.08, 80, 400, 0, 1, 11, 0);
          this.forwardSpeed = void 0;
          this.forwardSpeed = 100;
        }

        updateManeger(roundTime) {
          var LivingUpdateRange = [0.01, 0.03];
          var DefendUpdateRange = [0.03, 0.1];
          var HarmUpdateRange = [0.05, 0.1];
          var LivingUpdateValue;
          var DefendUpdateValue;
          var HarmUpdateValue;
          var minRound = 2;
          var maxRound = 8;

          if (roundTime < minRound) {
            LivingUpdateValue = LivingUpdateRange[1];
            DefendUpdateValue = DefendUpdateRange[1];
            HarmUpdateValue = HarmUpdateRange[1];
          } else if (roundTime > maxRound) {
            LivingUpdateValue = LivingUpdateRange[0];
            DefendUpdateValue = DefendUpdateRange[0];
            HarmUpdateValue = HarmUpdateRange[0];
          } else {
            var livingRange = LivingUpdateRange[1] - LivingUpdateRange[0];
            var defendRange = DefendUpdateRange[1] - DefendUpdateRange[0];
            var harmRange = HarmUpdateRange[1] - HarmUpdateRange[0];
            var ratio = (roundTime - minRound) / (maxRound - minRound);
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
          this.forwardSpeed = 160;
        }

        updateManeger() {
          //每次调用就会直接增加
          this.HarmValue += 50;
          this.GradeValue += 1;
        }

      };
      SHENMU = class SHENMU extends GlobalLivingClass {
        constructor() {
          super(1000, 0.05, 0, 0, 0, 1, 0, 0);
          this.growSpeed = void 0;
          this.growSpeed = 50;
        }

        getShenMuGrowSpeed() {
          return this.growSpeed;
        }

        getShenMuLivingValue() {
          return this.LivingValue;
        }

        updateShenMu(value) {
          //将贡献者的1%生命值贡献给神木
          this.LivingValue += value * 0.01;
        }

      };
      Bing = class Bing extends GlobalLivingClass {
        //不能升级
        constructor() {
          //默认生命值100，攻速5s一攻击；伤害值为对方生命值的5%；生成一个需要消耗自生生命值的5%的神力值；
          super(100, 0, 0.05, 5, 0.05, 1, 4, 0);
        }

      };
      Kong = class Kong extends GlobalLivingClass {
        //不能升级
        constructor() {
          //默认生命值100，攻速5s一攻击；伤害值为对方生命值的5%；生成一个需要消耗自生生命值的5%的神力值；
          super(150, 0, 0.03, 4, 0, 1, 4, 0);
        }

        updateManeger() {
          //每次调用就会直接增加
          this.GradeValue += 1;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec0bce70e1d2b10d960a91d5531a7de08f892c6e.js.map