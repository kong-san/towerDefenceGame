System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ToolStateManeger, _dec, _class, _crd, ccclass, property, PaoState;

  function _reportPossibleCrUseOfToolStateManeger(extras) {
    _reporterNs.report("ToolStateManeger", "./ToolStateManeger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ToolStateManeger = _unresolved_2.ToolStateManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bbcd4J74JP5aZr9N31vZMF", "PaoState", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PaoState", PaoState = (_dec = ccclass('PaoState'), _dec(_class = class PaoState extends (_crd && ToolStateManeger === void 0 ? (_reportPossibleCrUseOfToolStateManeger({
        error: Error()
      }), ToolStateManeger) : ToolStateManeger) {
        constructor(level, step) {
          super(level, step);
          this.step = void 0;
          this.level = void 0;
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=755ac3a12e468c54d962189ed60f96ea76d38a28.js.map