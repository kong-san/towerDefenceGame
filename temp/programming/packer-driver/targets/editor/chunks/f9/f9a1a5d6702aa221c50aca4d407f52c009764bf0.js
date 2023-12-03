System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, director, audioBeginController, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, loadManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfaudioBeginController(extras) {
    _reporterNs.report("audioBeginController", "./audioBeginController", _context.meta, extras);
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
      director = _cc.director;
    }, function (_unresolved_2) {
      audioBeginController = _unresolved_2.audioBeginController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca229P/B21K+be/7YZlTBWu", "loadManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Scene', 'director', 'AudioSource', 'find', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("loadManeger", loadManeger = (_dec = ccclass('loadManeger'), _dec2 = property(_crd && audioBeginController === void 0 ? (_reportPossibleCrUseOfaudioBeginController({
        error: Error()
      }), audioBeginController) : audioBeginController), _dec(_class = (_class2 = class loadManeger extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "audioBeginController", _descriptor, this);
        }

        start() {
          if (this.node.name == "begin") {
            director.preloadScene("preIntroduce", function () {
              console.log('Next scene preloaded');
            });
            this.node.on(Node.EventType.MOUSE_DOWN, this.begin, this);
          }

          if (this.node.name == 'beginbox') {
            console.log('begin...............');
            let y = this.node.position.y;
            this.node.setPosition(-400, y, 0);
          }
        }

        update(deltaTime) {
          if (this.node.name == 'beginbox') {
            let that = this;
            this.schedule(function () {
              let x = that.node.position.x;
              let y = that.node.position.y;

              if (x > 400) {
                that.node.setPosition(400, y, 0);
                that.node.parent.getChildByName("begin").active = true;
              } else if (x < 400) {
                x = x + 50 * deltaTime;
                that.node.setPosition(x, y, 0);
              } else {
                // that.cloudArrived = true;
                that.node.parent.getChildByName("begin").active = true;
              }
            }, 0.8);
          } // if(this.node.parent.name == "left"){
          //     let that = this;
          //     this.schedule(function(){
          //         let x = that.node.position.x;
          //         let y = that.node.position.y;
          //         if(x<0 && x+50>0){
          //             that.node.setPosition(0,y,0)
          //         }else if(x<0){
          //             x = x + 50*deltaTime;
          //             that.node.setPosition(x,y,0)
          //         }else{
          //             // that.cloudArrived = true;
          //             that.node.parent.parent.getChildByName("begin").active = true;
          //         }
          //     },1)
          // }
          // if(this.node.parent.name == "right"){
          //     let that = this;
          //     this.schedule(function(){
          //         let x = that.node.position.x;
          //         let y = that.node.position.y;
          //         // if(x>0 && x-50>0){
          //         //     that.node.setPosition(0,y,0)
          //         // }else 
          //         if(x>0){
          //             x = x - 50*deltaTime;
          //             that.node.setPosition(x,y,0)
          //         }else{
          //             // that.cloudArrived = true;
          //         }
          //     },1)
          // }

        }

        begin() {
          this.node.getComponent(_crd && audioBeginController === void 0 ? (_reportPossibleCrUseOfaudioBeginController({
            error: Error()
          }), audioBeginController) : audioBeginController).play();
          this.schedule(function () {
            // this.node.getComponent(AudioSource).play;
            director.loadScene("preIntroduce");
          }, 1, 0, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioBeginController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9a1a5d6702aa221c50aca4d407f52c009764bf0.js.map