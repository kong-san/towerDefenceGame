System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, combatConfigManeger, DanPerManeger, GuangziPerManeger, PaoPerManeger, sureComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, updateComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcombatConfigManeger(extras) {
    _reporterNs.report("combatConfigManeger", "./combatConfigManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDanPerManeger(extras) {
    _reporterNs.report("DanPerManeger", "./DanperManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuangziPerManeger(extras) {
    _reporterNs.report("GuangziPerManeger", "./GuangziPerManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPaoPerManeger(extras) {
    _reporterNs.report("PaoPerManeger", "./PaoPerManeger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsureComponent(extras) {
    _reporterNs.report("sureComponent", "./sureComponent", _context.meta, extras);
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
      Node = _cc.Node;
      find = _cc.find;
    }, function (_unresolved_2) {
      combatConfigManeger = _unresolved_2.combatConfigManeger;
    }, function (_unresolved_3) {
      DanPerManeger = _unresolved_3.DanPerManeger;
    }, function (_unresolved_4) {
      GuangziPerManeger = _unresolved_4.GuangziPerManeger;
    }, function (_unresolved_5) {
      PaoPerManeger = _unresolved_5.PaoPerManeger;
    }, function (_unresolved_6) {
      sureComponent = _unresolved_6.sureComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64a3bnIhgJFv4iVVZ+LO6ij", "updateComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("updateComponent", updateComponent = (_dec = ccclass('updateComponent'), _dec2 = property(Node), _dec(_class = (_class2 = class updateComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "targetNode", _descriptor, this);
        }

        start() {
          this.node.on(Node.EventType.MOUSE_DOWN, this.clickIcon, this);
        }

        update(deltaTime) {}

        clickIcon() {
          if (this.node.name == "cancel") {
            this.cancel();
          }

          if (this.node.name == "destory") {
            this.destroyNode();
          }

          if (this.node.name == "update") {
            // this.updateSure()
            this.updateNode();
          }
        }

        updateSure() {
          find("Canvas/sureComponent").active = true;
          find("Canvas/sureComponent/cancel").getComponent(_crd && sureComponent === void 0 ? (_reportPossibleCrUseOfsureComponent({
            error: Error()
          }), sureComponent) : sureComponent).targetNode = this.targetNode;
          find("Canvas/sureComponent/sure").getComponent(_crd && sureComponent === void 0 ? (_reportPossibleCrUseOfsureComponent({
            error: Error()
          }), sureComponent) : sureComponent).targetNode = this.targetNode;
          find("Canvas/updateComponent").active = false;
        }

        updateNode() {
          let nodeAlias = this.targetNode;

          if (nodeAlias.isValid) {
            // console.log("升级的节点是：",nodeAlias.name)
            if (nodeAlias.name == "Pao_Pre") {
              find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).SanShePao.updateManeger();
              let nodelist = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).SanShePaoList;

              for (let i = 0; i < nodelist.length; i++) {
                if (nodelist[i].isValid) {
                  nodelist[i].getComponent(_crd && PaoPerManeger === void 0 ? (_reportPossibleCrUseOfPaoPerManeger({
                    error: Error()
                  }), PaoPerManeger) : PaoPerManeger).refreshData();
                }
              }
            }

            if (nodeAlias.name == "Dan_Pre") {
              find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).ZhuiZongDan.updateManeger();
              let nodelist = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).ZhuiZongDanList;

              for (let i = 0; i < nodelist.length; i++) {
                if (nodelist[i].isValid) {
                  nodelist[i].getComponent(_crd && DanPerManeger === void 0 ? (_reportPossibleCrUseOfDanPerManeger({
                    error: Error()
                  }), DanPerManeger) : DanPerManeger).refreshData();
                }
              }
            }

            if (nodeAlias.name == "GuangZi_Pre") {
              find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).GuangZiJian.updateManeger();
              let nodelist = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).GuangZiJianList;

              for (let i = 0; i < nodelist.length; i++) {
                if (nodelist[i].isValid) {
                  nodelist[i].getComponent(_crd && GuangziPerManeger === void 0 ? (_reportPossibleCrUseOfGuangziPerManeger({
                    error: Error()
                  }), GuangziPerManeger) : GuangziPerManeger).refreshData();
                }
              }
            }
          }
        }

        destroyNode() {
          this.targetNode.destroy();
          this.cancel();
        }

        cancel() {
          //取消选择
          find("Canvas/createComponent").active = true;
          find("Canvas/createComponentR").active = true;
          find("Canvas/updateComponent").active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9bc02791e3741ce6c6fa7bebafa242f7650f204f.js.map