import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Contact2DType, Collider2D, IPhysics2DContact, Sprite, Color } from 'cc';
import { ToolStateManeger } from './ToolStateManeger';
const { ccclass, property } = _decorator;

@ccclass('toolPyManeger')
export class toolPyManeger extends Component {
    @property(ToolStateManeger)
    ToolStateManeger:ToolStateManeger = null;

    onLoad(){
        PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | 
            EPhysics2DDrawFlags.Pair | 
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape ;
    }

    start(){
        this.ToolStateManeger = new ToolStateManeger(0,"null");
        let collider = this.node.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }
    }
    
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        
        if(!otherCollider.node.children.length){
            this.ToolStateManeger.step = 1;
            this.ToolStateManeger.master = otherCollider.node.name
        }else{
        }
        
    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        
        this.ToolStateManeger.step = 0;
        this.ToolStateManeger.master = "null";
    }
    // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        
    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        
    // }

    // update(deltaTime: number) {
        
    // }

}


