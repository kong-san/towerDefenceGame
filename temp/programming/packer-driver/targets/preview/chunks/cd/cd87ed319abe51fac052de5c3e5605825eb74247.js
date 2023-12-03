System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, Label, director, audioBeginController, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, talkManeger;

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
      find = _cc.find;
      Label = _cc.Label;
      director = _cc.director;
    }, function (_unresolved_2) {
      audioBeginController = _unresolved_2.audioBeginController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90636ZT31NJN4CT1SAwLR/p", "talkManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'Label', 'director', 'Sprite', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("talkManeger", talkManeger = (_dec = ccclass('talkManeger'), _dec2 = property(_crd && audioBeginController === void 0 ? (_reportPossibleCrUseOfaudioBeginController({
        error: Error()
      }), audioBeginController) : audioBeginController), _dec(_class = (_class2 = class talkManeger extends Component {
        constructor() {
          super(...arguments);
          this.message = ["神木使者，你终于来了……敌族火族窥伺我族<神木>已久，得不到就想销毁它。派出了火族的大军正在来的路上。", "还好使者来的及时，只有使者才能驱动神木之力，建筑塔防，拯救神木。", "我给你介绍一下塔防的建筑吧。", "这是<散射炮>，可以朝着敌军的方向发射子弹。", "这是<追踪弹>，可以锁定目标敌机执行打击。", "这是<光子箭>，可以发射光子束打击敌军。", "拖动这些建筑就可以生效啦。", "这是扩建功能,去建造更多的<神木卫阵>吧", "这是召唤<风翼军>，风翼军是很强的兵种", "这是召唤<神兵精灵>，就是我，保卫我们的建筑不受敌军空降兵的破坏。", "神木使者千万要注意，搭建塔防和升级塔防都需要消耗神力值，使者只要好好利用神力值，就能打败那些可恶的火族！", "对了，敌军分为三种，一种是<战焰机>、一种是<战陨机>、一种是<空降兵>", "<战焰机>携带子弹会攻击我方建筑，<战陨机>速度很快会直接攻击神木，<空降兵>则专门破坏我方建筑", "根据情报，火族的进攻有十种阵营，越到后面，难度将越大，神木的存活就靠使者了，我们都相信你！"];
          this.step = 0;
          this.oldPositiony = void 0;

          _initializerDefineProperty(this, "audioBeginController", _descriptor, this);
        }

        start() {
          this.oldPositiony = find("Canvas/talk").getPosition().y;

          if (this.node.name == 'continue') {
            this.node.on(Node.EventType.TOUCH_START, this.talkContinue, this);
          }
        }

        update(deltaTime) {}

        talkContinue() {
          if (this.node.name == 'continue') {
            this.node.getComponent(_crd && audioBeginController === void 0 ? (_reportPossibleCrUseOfaudioBeginController({
              error: Error()
            }), audioBeginController) : audioBeginController).play();
          }

          this.step++;

          if (this.step == 7) {
            find("Canvas/talk/infobg").destroy();
            var node = find("Canvas/talk");
            var y = node.getPosition().y;
            var x = node.getPosition().x;
            node.setPosition(x, 0, 0);
            find("Canvas/bottom").active = true;
          }

          if (this.step == 8) {
            find("Canvas/bottom/b1").active = false;
            find("Canvas/bottom/b2").active = true;
          }

          if (this.step == 9) {
            find("Canvas/bottom/b2").active = false;
            find("Canvas/bottom/b3").active = true;
          }

          if (this.step == 3) {
            find("Canvas/talk/infobg").active = true;
          }

          if (this.step == 4) {
            find("Canvas/talk/infobg/info").active = false;
            find("Canvas/talk/infobg/info1").active = true;
            find("Canvas/talk/infobg/name").getComponent(Label).string = "追踪弹";
          }

          if (this.step == 5) {
            find("Canvas/talk/infobg/info1").active = false;
            find("Canvas/talk/infobg/info2").active = true;
            find("Canvas/talk/infobg/name").getComponent(Label).string = "光子箭";
          }

          if (this.step == 10) {
            find("Canvas/bottom").destroy();

            var _node = find("Canvas/talk"); // let y = node.getPosition().y;


            var _x = _node.getPosition().x;

            _node.setPosition(_x, this.oldPositiony, 0);
          }

          if (this.step == 11) {
            find("Canvas/emeny").active = true;
          }

          if (this.step >= this.message.length) {
            find("Canvas/emeny").destroy();
            director.loadScene("scene");
          } else {
            find("Canvas/talk/message").getComponent(Label).string = this.message[this.step];
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioBeginController", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd87ed319abe51fac052de5c3e5605825eb74247.js.map