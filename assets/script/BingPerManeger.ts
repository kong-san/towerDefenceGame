import { _decorator, Component, Node, Collider2D, Contact2DType, PhysicsSystem2D, EPhysics2DDrawFlags, IPhysics2DContact,Animation, find, ProgressBar } from 'cc';
import { combatConfigManeger } from './combatConfigManeger';
const { ccclass, property } = _decorator;

@ccclass('BingPerManeger')
export class BingPerManeger extends Component {

    public arrived:number = 0;
    public currentLivingValue:number;
    public AttackSpeed:number;
    public HarmValue:number;
    public livingValue:number;

    start() {
        this.initialBing()
        let collider = this.node.getComponent(Collider2D);

        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);

        }
    }

    onload(){
        PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | 
            EPhysics2DDrawFlags.Pair | 
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape ;
    }

    update(deltaTime: number) {
        if(!this.arrived){
            let node =this.node.parent;
            let y = node.position.y;
            let x = node.position.x;
            if(this.node.parent.name == "WeiPerfabsRight"){
                if(x<200){
                    x = x + 20 * deltaTime;
                }
                
            }else {
                if(x>-200){
                    x = x - 20 * deltaTime;
                }
                
            }
            
            node.setPosition(x,y,0);
        }
        
        
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null){


        if(otherCollider.node.name == "Kong_Per" ){
            //攻击态；
            this.arrived = 1;
        }

        this.underFire(otherCollider)
    }

    // onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null){

    // }

    initialBing(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).Bing.AttackSpeed;//5s
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).Bing.LivingValue;//100
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).Bing.HarmValue;//5%
        this.livingValue = LivingValue;
        this.currentLivingValue=LivingValue;
        this.HarmValue = HarmValue;
        this.AttackSpeed = AttackSpeed;

    }

    underFire(Collider: Collider2D){
        let harmedValuePao=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyNormal.HarmValue;
        if(Collider.node.name == "Bullet_Pre"){
            if(this.currentLivingValue - harmedValuePao <= 0){
                this.node.parent.destroy()
            }else{
                this.currentLivingValue -=harmedValuePao;
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.7 * (this.currentLivingValue/this.livingValue)
            }
        }
    }

}


