
import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, IPhysics2DContact, resources, Layers, find, Prefab, instantiate, Vec2, ProgressBar, NodePool, Vec3, Label } from 'cc';
import { BulletPerManeger } from './BulletPerManeger';
import { combatConfigManeger } from './combatConfigManeger';
import { livingSystemManeger } from './livingSystemManeger';
import { targetManeger } from './targetManeger';
import { updateComponent } from './updateComponent';
const { ccclass, property } = _decorator;
import { audioBeginController } from './audioBeginController';
@ccclass('DanPerManeger')
export class DanPerManeger extends Component {
    
    public bulletArray = [];
    public hasEmeny = true;

    public bulletPool:NodePool = new NodePool();

    public targetArray:Array<Node> = new Array<Node>

    @property(livingSystemManeger)
    DanLivSysMag:livingSystemManeger = null;

    public currentLivingValue:number;

    public angle:number;

    public currenTarget:Node = new Node("newNode");

    @property(audioBeginController)
    audioBeginController:audioBeginController = null;

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

    start(){
        this.initialDan();
        // 批量生成子弹
        let that = this;
        let flag = false;
        this.node.on(Node.EventType.MOUSE_DOWN,this.clickToolDan,this)
        this.schedule(function(){
            //获取hasEmeny的值
            that.hasEmeny = that.node.parent.getComponent(targetManeger).hasEmeny;
            if(that.hasEmeny){
                //获取敌机的节点
                that.targetArray = that.node.parent.getComponent(targetManeger).emenyArray;
                flag = false;
                for(let i =0;i<that.targetArray.length;i++){
                    //判断敌机节点是否有效，currentTarget表示当前要攻击的节点
                    if(that.targetArray[i].isValid){
                        //当前要攻击的节点已经失效，或者是第一次识别到敌机要攻击的节点还为空时
                        if(!that.currenTarget.isValid || that.currenTarget.name=="newNode"){
                            //更新currentTarget
                            that.currenTarget = that.targetArray[i];
                        }
                        flag = true;
                    }
                }
                //总是对targetArray数组进行询问，查看是否有还存在的敌机节点
                //有则设flag=true，否则为false
                if(!flag){
                    that.hasEmeny = false;
                    //改变攻击标志hasEmeny为false。
                    that.node.parent.getComponent(targetManeger).hasEmeny = false;
                }else{
                    //创造子弹
                    that.createBullet();
                }
                
            }

            if(that.currenTarget.isValid && that.currenTarget.name!="newNode"){
                // that.angle = that.getAngle(that.node.worldPosition,that.currenTarget.worldPosition)
            }
        },1)
        
        //注册单个碰撞体的回调函数
        let collider = this.node.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }
    }
    
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


        this.underFire(otherCollider)
    }
    // onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


    // }
    // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


    // }

    refreshData(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.AttackSpeed;
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.LivingValue;
        let DefendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.DefendValue;
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.HarmValue;
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.GradeValue;
        this.DanLivSysMag.defendValue = DefendValue;
        this.DanLivSysMag.gradeValue = level;
        this.DanLivSysMag.attackSpeed = AttackSpeed;
        this.DanLivSysMag.harmValue = HarmValue;
        //获取差值
        let subValue = LivingValue - this.DanLivSysMag.livingValue;
        this.DanLivSysMag.livingValue = LivingValue;

        //把差值加上
        this.currentLivingValue +=subValue;
        
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level
    }
    destroyThisNode(){
        this.node.destroy()
    }
    initialDan(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.AttackSpeed;
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.LivingValue;
        let DefendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.DefendValue;
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.HarmValue;
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.GradeValue;
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level

        this.DanLivSysMag = new livingSystemManeger(LivingValue,HarmValue,DefendValue,2,AttackSpeed);
        this.currentLivingValue = LivingValue;

        find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDanList.push(this.node);
    }
    underFire(Collider: Collider2D){
        
        let harmedValueEmeny=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyNormal.HarmValue;
        let defendValue = this.DanLivSysMag.defendValue;

        if(Collider.node.name == "Bullet_Pre"){
            if(this.currentLivingValue - harmedValueEmeny*(1-defendValue) <= 0){
                this.node.parent.destroy()
            }else{
                this.currentLivingValue -=harmedValueEmeny*(1-defendValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.DanLivSysMag.livingValue)
            }
        }
        
    }
    underAttack(harmedValue:number){
        let defendValue = this.DanLivSysMag.defendValue;
        if(this.currentLivingValue - harmedValue*this.DanLivSysMag.livingValue*(1-defendValue) <= 0){
            this.node.parent.destroy()
        }else{
            this.currentLivingValue -=harmedValue*this.DanLivSysMag.livingValue*(1-defendValue)
            this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.DanLivSysMag.livingValue)
        }
    }

    //生成子弹
    createBullet(){
        //音频
        this.node.getComponent(audioBeginController).play();
        //create 关键逻辑
        let that = this;
        resources.load("perfabs/PaoBulletPer",Prefab,(err,Prefab)=>{
            if(!Prefab){
            }else{
                let node = instantiate(Prefab);
                if(!node){
                }else{
                    //node指上面instantiate实例化出的子弹本身，而不是塔防建筑
                    node.layer = Layers.Enum.UI_2D;
                    //速度；
                    node.getComponent(BulletPerManeger).speed = that.DanLivSysMag.attackSpeed;

                    //种类
                    node.getComponent(BulletPerManeger).bulletType = 2;

                    //角度
                    node.getComponent(BulletPerManeger).angle = that.angle;
                    node.setScale(1.2,1.2,1.2);
                    node.setPosition(0,0,0);
                    that.node.addChild(node);
                    that.bulletArray.push(node);
                }
                
            }
        })
        
    }

    getAngle(start:Vec3,end:Vec3):number{
        let dx = start.x - (end.x );
        let dy = start.y - (end.y );
        let dir = new Vec2(dx,dy);

        let angle = dir.signAngle(new Vec2(1,0));

        // let degreen = angle / Math.PI * 180 ;
        

        return angle
    }

    clickToolDan(){
        find("Canvas/createComponent").active = false;
        find("Canvas/updateComponent").active = true;
        find("Canvas/createComponentR").active = false;
        find("Canvas/updateComponent").getChildByName("destory").getComponent(updateComponent).targetNode = this.node.parent
        find("Canvas/updateComponent").getChildByName("update").getComponent(updateComponent).targetNode = this.node
    }
}




