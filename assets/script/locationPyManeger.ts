import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, IPhysics2DContact, BoxCollider2D, director, Sprite, Color, find, Prefab, resources, instantiate, Layers, color } from 'cc';
import { toolPyManeger } from './toolPyManeger';
const { ccclass, property } = _decorator;

@ccclass('locationPyManeger')
export class locationPyManeger extends Component {
    @property
    targetTool:string = "null";
    onLoad(){
        // director.enable = true;
        PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | 
            EPhysics2DDrawFlags.Pair | 
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape ;
    }

    start(){
        //绘制物理信息
        //注册单个碰撞体的回调函数
        let collider = this.node.getComponent(Collider2D);
        // console.log(collider);
        // console.log(collider);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

        // 注册全局碰撞回调函数
        // if (PhysicsSystem2D.instance) {
        //     PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        // }
    }
    
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        if(otherCollider.node.name != "Kong_Per" && otherCollider.node.name != "Wei_Per"){
            if(!this.node.children.length){
                selfCollider.node.getComponent(Sprite).color = Color.GRAY;
                this.targetTool = otherCollider.node.name;
            }
        }
    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        //
        // if(step==2){
        //     //确认放置
        //     this.createNode(otherCollider.node.name);
        // }
        this.node.getComponent(Sprite).color = new Color(232,208,170,255);
        this.targetTool = "null";
    }
    // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        
    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        
    // }

    update(deltaTime: number) {
        if(this.targetTool != "null"){
            let targetToolNode = find("Canvas/selectToolBox").getChildByName(this.targetTool);
            let step = targetToolNode.getComponent(toolPyManeger).ToolStateManeger.step;
            if(step == 2){
                this.createNode(this.targetTool);
                targetToolNode.getComponent(toolPyManeger).ToolStateManeger.step == 0;
                targetToolNode.destroy();
                this.targetTool = "null";
            }
        } 
    }

    createNode(toolname){
        let that = this;
        if (toolname == "pao"){
            resources.load("perfabs/PaoPerfabs",Prefab,(err,Prefab)=>{
                if(!Prefab){
                }else{
                    let node = instantiate(Prefab);
                    if(that.node.parent.name == "right"){
                        node.setScale(-1,1,1);
                        node.getChildByName("level").setScale(-1,1,1);
                    }
                    node.layer = Layers.Enum.UI_2D;
                    node.setPosition(0,0,0);
                    node.parent = that.node;
                }
            })
        } else if (toolname == "dan"){
            resources.load("perfabs/DanPerfabs",Prefab,(err,Prefab)=>{
                if(!Prefab){
                    // console.log('子弹预制体为空')
                }else{
                    let node = instantiate(Prefab);
                    if(that.node.parent.name == "right"){
                        node.setScale(-1,1,1);
                        node.getChildByName("level").setScale(-1,1,1);
                        // node.getChildByName("ProgressBar").setScale(-1,1,1);
                    }
                    node.layer = Layers.Enum.UI_2D;
                    node.setPosition(0,0,0);
                    node.parent = that.node;
                }
            })
        } else if (toolname == "guangzi" || "jian"){
            resources.load("perfabs/GuangZiPerfabs",Prefab,(err,Prefab)=>{
                if(!Prefab){
                    // console.log('子弹预制体为空')
                }else{
                    let node = instantiate(Prefab);
                    if(that.node.parent.name == "right"){
                        node.setScale(-1,1,1);
                        node.getChildByName("level").setScale(-1,1,1);
                        // node.getChildByName("ProgressBar").setScale(-1,1,1);
                    }
                    node.layer = Layers.Enum.UI_2D;
                    node.setPosition(0,0,0);
                    node.parent = that.node;
                }
            })
        } else {
            
        }


    }

}
