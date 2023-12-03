// import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, IPhysics2DContact, BoxCollider2D, director, Sprite, Color } from 'cc';
// const { ccclass, property } = _decorator;
// @ccclass('workPyManeger')
// export class workPyManeger extends Component {
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
//         //注册单个碰撞体的回调函数
//         console.log('my information')
//         let collider = this.node.getComponent(Collider2D);
//         // console.log(collider);
//         // console.log(collider);
//         if (collider) {
//             collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
//             collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
//             collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
//             collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
//         }
//         // 注册全局碰撞回调函数
//         // if (PhysicsSystem2D.instance) {
//         //     PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
//         //     PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
//         //     PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
//         //     PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
//         // }
//     }
//     onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
//         // 只在两个碰撞体开始接触时被调用一次
//         // console.log('Work onBeginContact');
//     }
//     onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
//         // 只在两个碰撞体结束接触时被调用一次
//         // console.log('Work onEndContact');
//     }
//     onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
//         // 每次将要处理碰撞体接触逻辑时被调用
//         // console.log('Work onPreSolve');
//     }
//     onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
//         // 每次处理完碰撞体接触逻辑时被调用
//         // console.log('Work onPostSolve');
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

      _cclegacy._RF.push({}, "c3961rTKrpJt5Xe3lTa0FIb", "workPyManeger", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c1f7a5af6a4bea0b26793b3607ae3ba7509df19.js.map