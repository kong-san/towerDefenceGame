// import { _decorator, Component, Node, Sprite, resources, SpriteFrame, Layers, find } from 'cc';
// const { ccclass, property } = _decorator;
// @ccclass('test')
// export class test extends Component {
//     public bulletArray = [];
//     start() {
//         // let bulletArray = [] ;
//         let that = this;
//         this.schedule(function(){
//             console.log('createBullet')
//             that.createBullet(that);
//         },3)
//     }
//     update(deltaTime: number) {
//         console.log(this.bulletArray.length);
//         for(let i=0;i<this.bulletArray.length;i++){
//             let node = this.bulletArray[i];
//             let y = node.position.y;
//             let x = node.position.x;
//             x = x - 500 * deltaTime;
//             y = y + 500 * deltaTime;
//             node.setPosition(x,y,0)
//             //TODO:出屏幕后销毁
//         }
//     }
//     createBullet(that){
//         let node = new Node();
//         node.addComponent(Sprite);
//         resources.load('zidan1/spriteFrame',SpriteFrame,(_err,sproteFarme)=>{
//             node.getComponent(Sprite).spriteFrame = sproteFarme;
//             node.layer = Layers.Enum.UI_2D;
//             console.log(find("left"))
//             console.log(this.node)
//             node.parent = this.node;
//             console.log(node);
//             // node.parent = find("left").getChildByName("rightUp").getChildByName("pao")
//         })
//         that.bulletArray.push(node);
//     }
// }
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbdc8wjkERIW55+VtaOtKy2", "test", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b3cfc1e3926fcbfb82040b68f67441a7b5a300e.js.map