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
        //0为被选择；1为产生碰撞
        //从属于哪个node;
        constructor(step, master) {
          this.step = void 0;
          this.master = void 0;
          this.step = step;
          this.master = master;
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16d9abca426a696454a388bbc9c7709ba5ff2f26.js.map