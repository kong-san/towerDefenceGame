System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, resources, Prefab, instantiate, Layers, find, _dec, _class, _class2, _descriptor, _crd, ccclass, property, blockControlRightManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      resources = _cc.resources;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Layers = _cc.Layers;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf4c6gtcu1P86CmaKnTJZ5W", "blockControlRightManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Prefab', 'instantiate', 'Layers', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("blockControlRightManeger", blockControlRightManeger = (_dec = ccclass('blockControlRightManeger'), _dec(_class = (_class2 = class blockControlRightManeger extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "currentBlockNum", _descriptor, this);
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.addBlockControl, this);
        } // update(deltaTime: number) {
        // }


        addBlockControl() {
          if (this.currentBlockNum <= 2) {
            this.createBlock();
          } else {
            Error("已到最大数量值");
          }
        }

        createBlock() {
          let that = this;
          resources.load("perfabs/right", Prefab, (err, Prefab) => {
            if (!Prefab) {} else {
              let node = instantiate(Prefab);
              node.layer = Layers.Enum.UI_2D;
              let x = that.currentBlockNum * 124;
              node.setPosition(x, 0, 0);
              node.parent = find("Canvas/blockRight");
              that.currentBlockNum += 1;
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "currentBlockNum", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af8c7e91dac7038189551e1ee6e8669b4bee4b86.js.map