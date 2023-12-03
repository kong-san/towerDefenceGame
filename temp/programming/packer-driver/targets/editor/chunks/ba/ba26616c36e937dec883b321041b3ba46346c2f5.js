System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, ToolStateManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26efc9AqzlFqaMcoaSGpTTb", "ToolStateManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToolStateManeger", ToolStateManeger = (_dec = ccclass('ToolStateManeger'), _dec(_class = class ToolStateManeger {
        //0为被选择；1为创建；3为死亡;
        constructor(level, step) {
          this.level = void 0;
          this.step = void 0;
          this.level = level;
          this.step = step;
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba26616c36e937dec883b321041b3ba46346c2f5.js.map