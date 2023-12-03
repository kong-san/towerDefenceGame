System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, combatConfigManeger, PaoPerManeger, sureComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, updateComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcombatConfigManeger(extras) {
    _reporterNs.report("combatConfigManeger", "./combatConfigManeger", _context.meta, extras);
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
      PaoPerManeger = _unresolved_3.PaoPerManeger;
    }, function (_unresolved_4) {
      sureComponent = _unresolved_4.sureComponent;
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
        constructor() {
          super(...arguments);

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
            this.updateSure();
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
          var nodeAlias = this.targetNode;

          if (nodeAlias.isValid) {
            if (nodeAlias.name = "Pao_Pre") {
              find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).SanShePao.updateManeger();
              var nodelist = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).SanShePaoList;

              for (var i = 0; i < nodelist.length; i++) {
                if (nodelist[i].isValid) {
                  nodelist[i].getComponent(_crd && PaoPerManeger === void 0 ? (_reportPossibleCrUseOfPaoPerManeger({
                    error: Error()
                  }), PaoPerManeger) : PaoPerManeger).refreshData();
                }
              }
            }

            if (nodeAlias.name = "Dan_Pre") {
              find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).SanShePao.updateManeger();
              var _nodelist = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).SanShePaoList;

              for (var _i = 0; _i < _nodelist.length; _i++) {
                if (_nodelist[_i].isValid) {
                  _nodelist[_i].getComponent(_crd && PaoPerManeger === void 0 ? (_reportPossibleCrUseOfPaoPerManeger({
                    error: Error()
                  }), PaoPerManeger) : PaoPerManeger).refreshData();
                }
              }
            }

            if (nodeAlias.name = "") {
              find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).SanShePao.updateManeger();
              var _nodelist2 = find("Canvas/GlobalRoundControl").getComponent(_crd && combatConfigManeger === void 0 ? (_reportPossibleCrUseOfcombatConfigManeger({
                error: Error()
              }), combatConfigManeger) : combatConfigManeger).SanShePaoList;

              for (var _i2 = 0; _i2 < _nodelist2.length; _i2++) {
                if (_nodelist2[_i2].isValid) {
                  _nodelist2[_i2].getComponent(_crd && PaoPerManeger === void 0 ? (_reportPossibleCrUseOfPaoPerManeger({
                    error: Error()
                  }), PaoPerManeger) : PaoPerManeger).refreshData();
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
          find("Canvas/updateComponent").active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Node();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=65c7b010c840b8f85d5227957f82ea6de837685c.js.map