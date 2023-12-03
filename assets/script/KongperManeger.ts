import { _decorator, Component, Node, Collider2D, Contact2DType, PhysicsSystem2D, Label,EPhysics2DDrawFlags, IPhysics2DContact,Animation, find, ProgressBar } from 'cc';
import { combatConfigManeger } from './combatConfigManeger';
// import { PaoPerManeger } from './PaoPerManeger';
// import { DanPerManeger } from './DanperManeger';
// import { GuangziPerManeger } from './GuangziPerManeger';
const { ccclass, property } = _decorator;

@ccclass('KongperManeger')
export class KongperManeger extends Component {

    public arrived:number = 0;
    public currentLivingValue:number;
    public AttackSpeed:number = 0;
    public HarmValue:number = 0;
    public livingValue:number =0;

    //当前的攻击对象
    public currentTarget:Array<Node> = new Array<Node>();

    public attackByBing:boolean = false;
    public attackTool:boolean = false;
    public currentTargetNode:Node = new Node("default");

    start() {
        this.initialKong();
        let collider = this.node.getComponent(Collider2D);
        // console.log(collider);
        // console.log(collider);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }

        this.attack()
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
        let node =this.node.parent;
        let y = node.position.y;
        let x = node.position.x;
        if(!this.arrived){
            y = y - 100 * deltaTime;
            node.setPosition(x,y,0);
        }else if (this.arrived != 2){
            //等于1的时候
            y = node.position.y;
            x = node.position.x;
            if(this.node.parent.parent.name == "KongBoxL"){
                x = x + 20 * deltaTime;
            }else{
                x = x - 20 * deltaTime;
            }
            
            // this.arrived = 2;
            node.setPosition(x,y,0);
            
        }else{
            if(!this.attackTool && !this.attackByBing){
                this.arrived = 1;
            }
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null){
        if(otherCollider.node.parent.name == "left" || otherCollider.node.parent.name == "right"){
            if(!this.arrived){
                this.arrived = 1;
                let node =this.node.parent;
                let y = node.position.y;
                let x = node.position.x;
                node.setPosition(x,y-70,0);

                const anim = this.node.getComponent(Animation)

                anim.play("di");
            }
        }

        if(otherCollider.node.name == "Pao_Pre" || otherCollider.node.name== "Dan_Pre" || otherCollider.node.name =="GuangZi_Pre" ){
            //攻击态；
            this.arrived = 2;
            this.attackTool = true;
            this.currentTarget.push(otherCollider.node);
        }

        if(otherCollider.node.name =="Wei_Per"){
            this.attackByBing = true;
            this.arrived = 2;
            this.underFire(otherCollider)
        }
    }

    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null){

    }
    initialKong(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).Kong.AttackSpeed;//5s
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).Kong.LivingValue;//100
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).Kong.HarmValue;//5%
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).Kong.GradeValue;
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level

        this.livingValue = LivingValue;
        this.currentLivingValue=LivingValue;
        this.HarmValue = HarmValue;
        this.AttackSpeed = AttackSpeed;
        // console.log("空降兵初始化成功")
    }

    underFire(Collider: Collider2D){
        let harmedValue=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).Bing.HarmValue;
        let that = this;
        this.attackByBing = true;
        if(Collider.node.name == "Wei_Per"){
            this.schedule(function(){
                if(Collider.node){
                    // console.log("受到神兵攻击")
                if(that.currentLivingValue - harmedValue*that.livingValue <= 0){
                    that.node.parent.destroy()
                }else{
                    that.currentLivingValue -=harmedValue*that.livingValue;
                    // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)
                    that.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.6 * (that.currentLivingValue/that.livingValue)
                }
                }else{
                    that.attackByBing = false;
                }
            },5)
            
        }
    }

    attack(){
        // let currentTargetNode;
        let that = this;
        this.schedule(()=>{
            //目标攻击列表非空
            if(that.currentTarget.length){
                // console.log(that.currentTarget.length,"目标长度")
                for(let i=0;i<that.currentTarget.length;i++){
                    //用链表来可能合适;
                    if(!that.currentTargetNode || that.currentTargetNode.name == "default" || !that.currentTargetNode.isValid ){
                        if(that.currentTarget[i].isValid){
                            that.currentTargetNode = that.currentTarget[i];
                            that.attackTool = true;
                            break;
                        }else{
                            that.attackTool = false;
                            that.currentTargetNode = null;
                        }
                    }
                }
                if(that.currentTargetNode && that.currentTargetNode.isValid && that.currentTargetNode.name != "default" ){
                    let componentName = that.whichComponent(that.currentTargetNode.name)
                    that.currentTargetNode.getComponent(componentName).underAttack(that.HarmValue);
                    // that.currentTargetNode.getComponent(componentName).underAttack(that.HarmValue);
                }
            }
        },5)
    }

    whichComponent(nodeName:string){
        if(nodeName == "Pao_Pre"){
            return "PaoPerManeger";
        }else if(nodeName == "Dan_Pre"){
            return "DanPerManeger";
        }else if(nodeName == "GuangZi_Pre"){
            return "GuangziPerManeger"
        }
    }
}


