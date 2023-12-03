
import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, IPhysics2DContact,resources, SpriteFrame, Layers, find, Prefab, instantiate, Vec2, ProgressBar, NodePool, Vec3, Label } from 'cc';
import { BulletPerManeger } from './BulletPerManeger';
import { combatConfigManeger } from './combatConfigManeger';
import { livingSystemManeger } from './livingSystemManeger';
import { targetManeger } from './targetManeger';
import { updateComponent } from './updateComponent';
import { audioBeginController } from './audioBeginController';
const { ccclass, property } = _decorator;
@ccclass('GuangziPerManeger')
export class GuangziPerManeger extends Component {
    
    public bulletArray = [];
    public hasEmeny = true;

    public bulletPool:NodePool = new NodePool();

    public targetArray:Array<Node> = new Array<Node>

    @property(livingSystemManeger)
    GuangziLivSysMag:livingSystemManeger = null;

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
        this.initialGuangzi();
        // 批量生成子弹
        let that = this;
        let flag = false;
        this.node.on(Node.EventType.MOUSE_DOWN,this.clickTool,this)
        this.schedule(function(){
            that.hasEmeny = that.node.parent.getComponent(targetManeger).hasEmeny;
            if(that.hasEmeny){
                that.targetArray = that.node.parent.getComponent(targetManeger).emenyArray;
                flag = false;
                for(let i =0;i<that.targetArray.length;i++){
                    if(that.targetArray[i].isValid){
                        if(!that.currenTarget.isValid || that.currenTarget.name=="newNode"){
                            that.currenTarget = that.targetArray[i];
                        }
                        flag = true;
                    }
                }
                if(!flag){
                    that.hasEmeny = false;
                    that.node.parent.getComponent(targetManeger).hasEmeny = false;
                }
                // console.log('createBullet')
                that.createBullet();
            }
            if(that.currenTarget.isValid && that.currenTarget.name!="newNode"){
                // console.log("目标敌机是",that.currenTarget)
                that.angle = that.getAngle(that.node.worldPosition,that.currenTarget.worldPosition)
            }
        },1)
        
        //注册单个碰撞体的回调函数
        // console.log('tool information')
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
    
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


        this.underFire(otherCollider)
    }
    // onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


    // }
    // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


    // }


    destroyThisNode(){
        this.node.destroy()
    }
    initialGuangzi(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.AttackSpeed;
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.LivingValue;
        let DefendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.DefendValue;
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.HarmValue;
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.GradeValue;
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level

        this.GuangziLivSysMag = new livingSystemManeger(LivingValue,HarmValue,DefendValue,3,AttackSpeed);
        this.currentLivingValue = LivingValue;
        // console.log("散射炮初始化成功")

        find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJianList.push(this.node);

    }
    underFire(Collider: Collider2D){
        let harmedValueEmeny=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyNormal.HarmValue;
        let defendValue = this.GuangziLivSysMag.defendValue;

        if(Collider.node.name == "Bullet_Pre"){
            // console.log("我军受到攻击")
            if(this.currentLivingValue - harmedValueEmeny*(1-defendValue) <= 0){
                this.node.parent.destroy()
            }else{
                this.currentLivingValue -=harmedValueEmeny*(1-defendValue)
                // console.log("生命值为：",this.GuangZiJianLivSysMag.livingValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.GuangziLivSysMag.livingValue)
            }
        }
        
    }

    underAttack(harmedValue:number){
        let defendValue = this.GuangziLivSysMag.defendValue;
        if(this.currentLivingValue - harmedValue*this.GuangziLivSysMag.livingValue*(1-defendValue) <= 0){
            this.node.parent.destroy()
        }else{
            this.currentLivingValue -=harmedValue*this.GuangziLivSysMag.livingValue*(1-defendValue)
            // console.log("生命值为：",this.GuangziLivSysMag.livingValue)
            this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.GuangziLivSysMag.livingValue)
        }
    }

    //生成子弹
    createBullet(){
        // let node = new Node();
        // node.addComponent(Sprite);
        this.node.getComponent(audioBeginController).play();
        let that = this;
        
        resources.load("perfabs/GuangZiBulletPer",Prefab,(err,Prefab)=>{
            if(!Prefab){
                // console.log('子弹/预制体为空')
            }else{
                for(let i=0;i<3;i++){
                    that.schedule(function(){
                        let node = instantiate(Prefab);
                        node.layer = Layers.Enum.UI_2D;
                        //速度；
                        node.getComponent(BulletPerManeger).speed = that.GuangziLivSysMag.attackSpeed;

                        //种类
                        node.getComponent(BulletPerManeger).bulletType = 3;

                        //角度
                        node.getComponent(BulletPerManeger).angle = that.angle + i * Math.PI /12;
                        node.setScale(1.2,1.2,1.2);
                        node.setPosition(0,0,0);

                        that.node.addChild(node);

                        that.bulletArray.push(node);
                    },0.5,1,0)
                }
                // let node = instantiate(Prefab);
                // if(!node){
                //     console.log('没有节点')
                // }else{
                    // console.log(node)
                    // let pos = new Vec2();
                    // node.layer = Layers.Enum.UI_2D;
                    // //速度；
                    // node.getComponent(BulletPerManeger).speed = that.GuangziLivSysMag.attackSpeed;

                    // //种类
                    // node.getComponent(BulletPerManeger).bulletType = 3;

                    // //角度

                    // node.getComponent(BulletPerManeger).angle = that.angle;

                    // node.setPosition(0,0,0);
                    // that.node.addChild(node);
                    // that.bulletArray.push(node);
                // }
                
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
    refreshData(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.AttackSpeed;
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.LivingValue;
        let DefendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.DefendValue;
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.HarmValue;
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.GradeValue;
        this.GuangziLivSysMag.defendValue = DefendValue;
        this.GuangziLivSysMag.gradeValue = level;
        this.GuangziLivSysMag.attackSpeed = AttackSpeed;
        this.GuangziLivSysMag.harmValue = HarmValue;
        //获取差值
        let subValue = LivingValue - this.GuangziLivSysMag.livingValue;
        this.GuangziLivSysMag.livingValue = LivingValue;

        //把差值加上
        this.currentLivingValue +=subValue;
        
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level
    }

    clickTool(){
        // console.log("点击了光子箭")
        find("Canvas/createComponent").active = false;
        find("Canvas/updateComponent").active = true;
        find("Canvas/createComponentR").active = false;
        find("Canvas/updateComponent").getChildByName("destory").getComponent(updateComponent).targetNode = this.node.parent
        find("Canvas/updateComponent").getChildByName("update").getComponent(updateComponent).targetNode = this.node
    }
}




