// import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Contact2DType, Collider2D, IPhysics2DContact, Sprite, Color } from 'cc';
// import { ToolStateManeger } from './ToolStateManeger';
// const { ccclass, property } = _decorator;
// @ccclass('toolPyManeger')
// export class toolPyManeger extends Component {
//     @property(ToolStateManeger)
//     ToolStateManeger:ToolStateManeger = null;
//     onLoad(){
//         // director.enable = true;
//         PhysicsSystem2D.instance.enable = true;
//         PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | 
//             EPhysics2DDrawFlags.Pair | 
//             EPhysics2DDrawFlags.CenterOfMass |
//             EPhysics2DDrawFlags.Joint |
//             EPhysics2DDrawFlags.Shape ;
//     }
//     start(){
//         //绘制物理信息
//         this.ToolStateManeger = new ToolStateManeger(0,"null");
//         // this.ToolStateManeger = find
//         //注册单个碰撞体的回调函数
//         console.log('my information')
//         let collider = this.node.getComponent(Collider2D);
//         if (collider) {
//             collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
//             collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
//             collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
//             collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
//         }
//     }
//     onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
//         if(!otherCollider.node.children.length){
//             this.ToolStateManeger.step = 1;
//             this.ToolStateManeger.master = otherCollider.node.name
//         }else{
//             console.log("this block has tool")
//         }
//     }
//     onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
//         this.ToolStateManeger.step = 0;
//         this.ToolStateManeger.master = "null";
//     }
//     onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
//     }
//     onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
//     }
//     update(deltaTime: number) {
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

      _cclegacy._RF.push({}, "80fa5/SezVFSI+m8aPccn77", "toolPyManeger", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9155d3f08e2c0f551485909aeb309f7bea5c1025.js.map