// import { _decorator, Component, Node, Sprite, SpriteFrame, resources, director, Layers, Scene, UITransform, Vec3, Vec2, BoxCollider2D, Collider, Collider2D, Contact2DType, find} from 'cc';
// import { PaoState } from './PaoState';
// import { test } from './test';
// import { toolPyManeger } from './toolPyManeger';
// import { ToolStateManeger } from './ToolStateManeger';
// import { workPyManeger } from './workPyManeger';
// const { ccclass, property } = _decorator;
// @ccclass('pao')
// export class pao extends Component {
//     @property(ToolStateManeger)
//     ToolStateManeger:ToolStateManeger = null;
//     start() {
//         //TODO：需要将该点击监听独立为一个函数，被多个道具节点所调用。
//         this.node.on(Node.EventType.MOUSE_UP, (event) => {
//             //判断是否已经存在文字框，避免重复创建文字框组件;
//             if (this.node.parent.parent.getChildByName('infoBox')){
//                 //TODO：当当前显示的内容为其他道具时，需要动态渲染文字框内的内容。
//                 //TODO: 当前显示的内容为本道具时，销毁文字框。
//                 console.log('文字框节点已存在，正在销毁')
//                 this.node.parent.parent.getChildByName('infoBox').destroy();
//             }else{
//                 console.log('Mouse down');
//                 let node = new Node('infoBox');
//                 node.addComponent(Sprite);
//                 // node.getComponent(Sprite).spriteFrame = new SpriteFrame(url.raw("resources/game/wenzikuang"))
//                 node.setPosition(-500,10,0);
//                 resources.load('wenzikuang/spriteFrame',SpriteFrame,(_err,spriteFrame)=>{
//                     node.getComponent(Sprite).spriteFrame = spriteFrame;
//                     //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
//                     //2d摄像头可见的是UI_2D和UI_3D
//                     node.layer = Layers.Enum.UI_2D;
//                     console.log(node);
//                     console.log('文字框创建成功');
//                 })
//                 // director.getScene().addChild(node);
//                 node.parent=this.node.parent.parent;
//                 // this.node.addChild(node);
//             }
//           }, this);
//     }
//     update(deltaTime: number) {
//         this.node.on(Node.EventType.TOUCH_MOVE,(event)=>{
//             if (this.node.parent.parent.parent.getChildByName('pao1')){
//                 console.log('炮节点已存在，正在移动')
//                 let currentNode = this.node.parent.parent.parent.getChildByName('pao1');
//                 // console.log(event.getLocationX(),event.getLocationY());
//                 //触摸点的世界坐标
//                 let pos = new Vec2();
//                 let shit = pos.set(event.getUILocation())
//                 // let pos = new Vec3(event.touch._point['x'],event.touch._point['y'],0);
//                 let x = shit.x - 800;
//                 let y = shit.y - 450;
//                 //转换为UI坐标
//                 // pos=currentNode.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
//                 // console.log(pos);
//                 currentNode.setPosition(x,y,0);
//                 // this.node.parent.parent.getChildByName('pao1').destroy();
//             }else{
//             //TODO:同时使用多个炮的时候可能会造成冲突
//                 let node = new Node('pao1');
//                 node.addComponent(Sprite);
//                 resources.load('pao/spriteFrame',SpriteFrame,(_err,spriteFrame)=>{
//                     node.getComponent(Sprite).spriteFrame = spriteFrame;
//                     //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
//                     //2d摄像头可见的是UI_2D和UI_3D
//                     node.layer = Layers.Enum.UI_2D;
//                     node.setScale(0.3,0.3,1);
//                     //添加碰撞组件
//                     node.addComponent(BoxCollider2D);
//                     node.getComponent(BoxCollider2D).group = 4;
//                     console.log(node.getComponent(BoxCollider2D))
//                     node.addComponent(toolPyManeger);
//                     node.addComponent(PaoState)
//                     // node.setPosition(event.touch.point.x)
//                     // console.log(node);
//                     // console.log(event.touch._point.x);
//                     // node.active = false;
//                     console.log('炮创建成功');
//                 })
//                 //放在战斗组，目前还没定义战斗组，所有放在顶层；
//                 node.parent = this.node.parent.parent.parent;
//                 // let x = event.touch._point['x'];
//                 // let y = event.touch._point['y'];
//                 // node.setPosition(x,y,0);
//             }
//           },this)
//         this.node.on(Node.EventType.TOUCH_END,this.nodeTouchEnd,this);
//         this.node.on(Node.EventType.TOUCH_CANCEL,this.nodeTouchCancel,this);
//     }
//     nodeTouchEnd(event) {
//         console.log('已松开鼠标')
//     }
//     nodeTouchCancel(event){
//         console.log('已取消触摸事件')
//         let nodePao = this.node.parent.parent.parent.getChildByName('pao1');
//         console.log(nodePao.getComponent(Collider2D))
//         let step = nodePao.getComponent(PaoState).ToolStateManeger.step;
//         console.log("step:",step);
//         if(!step){
//             console.log('离开碰撞且取消触摸事件')
//             nodePao.destroy();
//         }else{
//             // nodePao.parent = find()
//             let parentName = nodePao.getComponent(PaoState).ToolStateManeger.master
//             console.log('这个node从属于',nodePao.getComponent(PaoState).ToolStateManeger.master)
//             console.log(nodePao.parent.getChildByName("left").getChildByName(parentName))
//             //TODO:增加逻辑；若该组件下面挂在了一个tool了，就不允许再创建新的tool；
//             let NewNode = this.NewPao();
//             NewNode.parent = this.node.parent.parent.parent.getChildByName("left").getChildByName(parentName);
//             NewNode.active = true;
//             nodePao.destroy();
//             // nodePao.setPosition(100,100,0)
//             // console.log(nodePao.parent);
//         }
//     }
//     NewPao(){
//         let node = new Node('pao');
//         node.addComponent(Sprite);
//         resources.load('pao/spriteFrame',SpriteFrame,(_err,spriteFrame)=>{
//             node.getComponent(Sprite).spriteFrame = spriteFrame;
//             //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
//             //2d摄像头可见的是UI_2D和UI_3D
//             node.layer = Layers.Enum.UI_2D;
//             node.setScale(0.3,0.3,1);
//             //添加碰撞组件
//             // node.addComponent(BoxCollider2D);
//             // node.getComponent(BoxCollider2D).group = 4;
//             // console.log(node.getComponent(BoxCollider2D))
//             // node.addComponent(workPyManeger);
//             // node.addComponent(PaoState)
//             // node.setPosition(event.touch.point.x)
//             // console.log(node);
//             // console.log(event.touch._point.x);
//             // node.active = false;
//             //测试子弹发射的脚本
//             node.addComponent(test)
//             console.log('炮开始工作');
//         })
//         return node;
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

      _cclegacy._RF.push({}, "d8f66oyEjZOnLxBtCNLLol1", "pao", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=375bf305fb9a91dfd608dcd484a31e8ef8edaf93.js.map