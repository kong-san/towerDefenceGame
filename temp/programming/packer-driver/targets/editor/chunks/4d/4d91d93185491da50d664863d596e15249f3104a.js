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

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("livingSystemManeger", livingSystemManeger = (_dec = ccclass('livingSystemManeger'), _dec(_class = class livingSystemManeger {
        constructor() {
          this.livingValue = void 0;
          this.gradeValue = void 0;
          this.harmValue = void 0;
          this.defendValue = void 0;
          this.livingType = void 0;
          this.attackSpeed = void 0;
          this.currentState = void 0;
          this.targetArray = void 0;
        }

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
            isSuccess = true;
            console.log('升级成功，当前等级为', this.gradeValue);
          } else {
            console.log('等级已到10级，请给其他的设备一点注意力');
          }

          return isSuccess;
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4d91d93185491da50d664863d596e15249f3104a.js.map