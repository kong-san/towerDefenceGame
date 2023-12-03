import { _decorator, Component, Node, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('dijiTargetManeger')
export class dijiTargetManeger extends Component {
    //检测范围内是否存在攻击目标
    @property
    hasEmeny:boolean = false;

    //将攻击目标存储到数组里
    @property
    emenyArray:Array<Node> = new Array<Node>

    // public emenyArray:Array<Vec3>;
    start() {
        let collider = this.node.getComponent(Collider2D);

        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }
    }
    onLoad(){
        // director.enable = true;
        //绘制物理信息
        PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | 
            EPhysics2DDrawFlags.Pair | 
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape ;
    }
    update(deltaTime: number) {
        
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        this.hasEmeny = true;
        // th emenyArray = new Array<Vec3>
        // let targetPosition = otherCollider.node.getWorldPosition(otherCollider.node.position);
        if(otherCollider.node.name == "shenmu"){
            this.emenyArray.push(otherCollider.node);
        }


        
        // console.log("出现目标,坐标:",x.x,x.y)

    }
    // onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 只在两个碰撞体结束接触时被调用一次
    //     // console.log('Work onEndContact');

    // }
    // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 每次将要处理碰撞体接触逻辑时被调用
    //     // console.log('Work onPreSolve');
    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 每次处理完碰撞体接触逻辑时被调用
    //     // console.log('Work onPostSolve');

    // }
}


