import { _decorator, Component, Node, Collider2D, Contact2DType, PhysicsSystem2D, Label,EPhysics2DDrawFlags, IPhysics2DContact, instantiate, resources, Prefab, Layers, Vec3, NodePool, Vec2, ProgressBar, find } from 'cc';
// import { BulletPerManeger } from './BulletPerManeger';
import { combatConfigManeger } from './combatConfigManeger';
// import { dijiTargetManeger } from './dijiTargetManeger';
import { livingSystemManeger } from './livingSystemManeger';
const { ccclass, property } = _decorator;

@ccclass('dijiDeathPerManeger')
export class dijiDeathPerManeger extends Component {
    public bulletArray = [];
    public hasEmeny:boolean = true;
    private targetArray:Array<Vec3> = null
    public bulletPool:NodePool;
    @property(livingSystemManeger)
    DijiDeathLivSysMag:livingSystemManeger = null;
    
    public forwardSpeed:number;
    public currentLivingValue:number;
    start() {
        this.initialDijiDeath();
        let that = this;
        this.bulletPool = new NodePool();
        // this.schedule(function(){
        //     this.hasEmeny = this.node.parent.getComponent(dijiTargetManeger).hasEmeny;
        //     if(this.hasEmeny){
        //         this.targetArray = this.node.parent.getComponent(dijiTargetManeger).emenyArray;
        //         // console.log('target number is ',this.targetArray.length)
        //         console.log('createBullet')
        //         that.createBullet();
        //         // if(that.bulletPool.size()>5){
        //         //     that.bulletPool.clear()
        //         // }
        //     }
        // },1)

        console.log('emeny information')
        let collider = this.node.getComponent(Collider2D);
        // console.log(collider);
        // console.log(collider);
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
        let node =this.node.parent;
        let y = node.position.y;
        let x = node.position.x;


        if(this.node.parent.parent.name == "EmenyBox"){
            x = x + this.forwardSpeed * deltaTime;
        }

        if(this.node.parent.parent.name == "EmenyBoxR"){
            x = x - this.forwardSpeed * deltaTime;
        }

        node.setPosition(x,y,0);
        // }
    }

    initialDijiDeath(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyQuickAttack.AttackSpeed;
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyQuickAttack.LivingValue;
        let DefendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyQuickAttack.DefendValue;
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyQuickAttack.HarmValue;
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyQuickAttack.GradeValue;
        
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level
        this.DijiDeathLivSysMag = new livingSystemManeger(LivingValue,HarmValue,DefendValue,12,AttackSpeed);
        this.forwardSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyQuickAttack.forwardSpeed;
        this.currentLivingValue=LivingValue;
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

        this.underFire(otherCollider);

    }
    // onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


    // }
    // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


    // }
    getAngle(start:Vec3,end:Vec3):number{
        let dx = start.x - (end.x );
        let dy = start.y - (end.y );
        let dir = new Vec2(dx,dy);

        let angle = dir.signAngle(new Vec2(1,0));

        let degreen = angle / Math.PI * 180;

        return -degreen
    }
    underFire(Collider: Collider2D){
        let harmedValuePao=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.HarmValue;
        let harmedValueDan=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.HarmValue;
        let harmedValueJian=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.HarmValue;
        let harmedValueFeng=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.HarmValue;

        let defendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyQuickAttack.DefendValue;
        if(Collider.node.name == "PaoBulletPer"){
            if(this.currentLivingValue - harmedValuePao*(1-defendValue) <= 0){
                this.node.parent.destroy()
            }else{
                this.currentLivingValue -=harmedValuePao*(1-defendValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.DijiDeathLivSysMag.livingValue)
            }
        }

        if(Collider.node.name == "GuangZiBulletPer"){
            if(this.currentLivingValue - harmedValueJian*(1-defendValue) <= 0){
                this.node.parent.destroy()
            }else{
                this.currentLivingValue -=harmedValueJian*(1-defendValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.DijiDeathLivSysMag.livingValue)
            }
        }

        if(Collider.node.name == "DanPerfabs"){
            if(this.currentLivingValue - harmedValueDan*(1-defendValue) <= 0){
                this.node.parent.destroy()
            }else{
                this.currentLivingValue -=harmedValueDan*(1-defendValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.DijiDeathLivSysMag.livingValue)
            }
        }

        if(Collider.node.name == "FengyiBulletPer"){
            if(this.currentLivingValue - harmedValueFeng*(1-defendValue) <= 0){
                this.node.parent.destroy()
            }else{
                this.currentLivingValue -=harmedValueFeng*(1-defendValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.DijiDeathLivSysMag.livingValue)
            }
        }

        if(Collider.node.name == "shenmu"){
            this.node.parent.destroy();
        }

        
    }
    createBullet(){
        // let node = new Node();
        // node.addComponent(Sprite);
        let that = this;
        resources.load("perfabs/Bullet_Pre",Prefab,(err,Prefab)=>{
            if(!Prefab){
                // console.log('子弹预制体为空')
            }else{
                // console.log('预制体制作完成')
                let node = instantiate(Prefab);
                if(!node){
                    // console.log('没有节点')
                }else{
                    // console.log(node)
                    // let pos = new Vec2();
                    node.layer = Layers.Enum.UI_2D;
                    let x = that.node.position.x + 400;
                    let y = that.node.position.x + 225;
                    node.setScale(1.2,1.2,1.2);
                    // let shit = pos.set(x,y)
                    // x = shit.x - 800;                   
                    // y = shit.y - 450;
                    // console.log(x,y)
                    node.setPosition(0,0,0);
                    that.node.addChild(node);
                    that.bulletArray.push(node);
                }
                
            }
        })
    }
}


