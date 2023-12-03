System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, livingSystemManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cb50bh76pFUoafGKKPJOtn", "livingSystemManeger", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("livingSystemManeger", livingSystemManeger = (_dec = ccclass('livingSystemManeger'), _dec(_class = class livingSystemManeger {
        //生命值
        //等级值
        //伤害值
        //承伤能力
        //生命类型
        //攻击速度
        //状态；0为休息；1为攻击
        //目标数组
        checkTarget() {
          let isTargetNull = true;

          if (!this.targetArray.length) {
            isTargetNull = false;
          }

          return isTargetNull;
        }

        updateManeger(liveUpd, harmUpd, defendUpd, atcSpdUpd) {
          let isSuccess = false;

          if (this.gradeValue <= 10) {
            this.livingValue += liveUpd;
            this.gradeValue += harmUpd;
            this.defendValue += defendUpd;
            this.attackSpeed += atcSpdUpd;
            this.gradeValue++;
            isSuccess = true; // console.log('升级成功，当前等级为',this.gradeValue)
          } else {// console.log('等级已到10级，请给其他的设备一点注意力')
          }

          return isSuccess;
        }

        constructor(livingValue, harmValue, defendValue, livingType, attackSpeed) {
          this.livingValue = void 0;
          this.gradeValue = void 0;
          this.harmValue = void 0;
          this.defendValue = void 0;
          this.livingType = void 0;
          this.attackSpeed = void 0;
          this.currentState = void 0;
          this.targetArray = void 0;
          this.livingType = livingType;
          this.livingValue = livingValue;
          this.harmValue = harmValue;
          this.defendValue = defendValue;
          this.attackSpeed = attackSpeed;
          this.gradeValue = 1; //默认为1

          this.currentState = false; //默认为休息态

          this.targetArray = null; //默认为空
        } // start() {
        // }
        // update(deltaTime: number) {
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=84b5179a9ad3083fb53319145e831caf54f95515.js.map