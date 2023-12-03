
import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, IPhysics2DContact, BoxCollider2D, director, Sprite, Color, resources, SpriteFrame, Layers, find, Prefab, instantiate, Vec2, ProgressBar, NodePool, Label, Vec3, AudioClip } from 'cc';
import { BulletPerManeger } from './BulletPerManeger';
import { combatConfigManeger } from './combatConfigManeger';
import { livingSystemManeger } from './livingSystemManeger';
import { targetManeger } from './targetManeger';
import { updateComponent } from './updateComponent';
const { ccclass, property } = _decorator;
import { audioBeginController } from './audioBeginController';

@ccclass('PaoPerManeger')
export class PaoPerManeger extends Component {
    
    public bulletArray = [];
    public hasEmeny = true;

    public bulletPool:NodePool = new NodePool();

    public targetArray:Array<Node> = new Array<Node>

    public currentLivingValue:number;

    //开始改变方向的子弹数量
    public newBullet:number;


    public angle:number;

    public currenTarget:Node = new Node("newNode");

    @property(livingSystemManeger)
    SanShePaoLivSysMag:livingSystemManeger = null;

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
        this.initialSanshePao();
        // 批量生成子弹
        let that = this;
        let flag = false;
        this.node.on(Node.EventType.MOUSE_DOWN,this.clickTool,this)
        this.schedule(function(){
            that.hasEmeny = that.node.parent.getComponent(targetManeger).hasEmeny;
            if(that.hasEmeny){
                that.targetArray = that.node.parent.getComponent(targetManeger).emenyArray;
                flag = false;
                // that.currenTarget = that.targetArray[0];
                for(let i =0;i<that.targetArray.length;i++){
                    if(that.targetArray[i].isValid){
                        if(!that.currenTarget.isValid || that.currenTarget.name=="newNode"){
                            // console.log("更换目标")
                            that.currenTarget = that.targetArray[i];
                        }
                        flag = true;
                    }
                }
                if(!flag){
                    that.hasEmeny = false;
                    that.node.parent.getComponent(targetManeger).hasEmeny = false;
                }
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
    //     // 每次将要处理碰撞体接触逻辑时被调用
    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 每次处理完碰撞体接触逻辑时被调用
    //     // console.log('PAO onPostSolve');

    // }


    refreshData(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.AttackSpeed;
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.LivingValue;
        let DefendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.DefendValue;
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.HarmValue;
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.GradeValue;
        this.SanShePaoLivSysMag.defendValue = DefendValue;
        this.SanShePaoLivSysMag.gradeValue = level;
        this.SanShePaoLivSysMag.attackSpeed = AttackSpeed;
        this.SanShePaoLivSysMag.harmValue = HarmValue;
        //获取差值
        let subValue = LivingValue - this.SanShePaoLivSysMag.livingValue;
        this.SanShePaoLivSysMag.livingValue = LivingValue;

        //把差值加上
        this.currentLivingValue +=subValue;
        
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level
    }
    destroyThisNode(){
        this.node.destroy()
    }
    initialSanshePao(){

        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.AttackSpeed;
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.LivingValue;
        let DefendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.DefendValue;
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.HarmValue;
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.GradeValue;
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level
        this.SanShePaoLivSysMag = new livingSystemManeger(LivingValue,HarmValue,DefendValue,1,AttackSpeed);
        this.currentLivingValue = LivingValue;

        find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePaoList.push(this.node);
        // let that = this;
        // resources.load("sanshe/SpriteFrame",SpriteFrame,(err,SpriteFrame)=>{
        //     if (!SpriteFrame) {
        //         console.log('散射炮精灵图为空')
        //     }else{
        //         console.log('散射跑精灵图加载完成')
        //         this.node.getComponent(Sprite).spriteFrame = SpriteFrame;
        //         this.no
        //     }
        // })
    }
    underFire(Collider: Collider2D){
        //判断是被谁攻击的

        //目前为默认减少10;
        let harmedValueEmeny=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyNormal.HarmValue;
        let defendValue = this.SanShePaoLivSysMag.defendValue;
        if(Collider.node.name == "Bullet_Pre"){
            // console.log("我军受到攻击")
            if(this.currentLivingValue - harmedValueEmeny*(1-defendValue) <= 0){
                this.node.parent.destroy()
            }else{
                this.currentLivingValue -=harmedValueEmeny*(1-defendValue)
                // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.SanShePaoLivSysMag.livingValue)
            }
        } 
    }

    underAttack(harmedValue:number){
        let defendValue = this.SanShePaoLivSysMag.defendValue;
        if(this.currentLivingValue - harmedValue*this.SanShePaoLivSysMag.livingValue*(1-defendValue) <= 0){
            this.node.parent.destroy()
        }else{
            this.currentLivingValue -=harmedValue*this.SanShePaoLivSysMag.livingValue*(1-defendValue)
            this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.SanShePaoLivSysMag.livingValue)
        }
    }

    //生成子弹
    createBullet(){
        // let node = new Node();
        // node.addComponent(Sprite);
        this.node.getComponent(audioBeginController).play();
        let that = this;
        resources.load("perfabs/PaoBulletPer",Prefab,(err,Prefab)=>{
            if(!Prefab){
            }else{
                let node = instantiate(Prefab);
                if(!node){
                    
                }else{
                
                    node.layer = Layers.Enum.UI_2D;
                    let x = that.node.position.x + 400;
                    let y = that.node.position.x + 225;
                    //速度；
                    node.getComponent(BulletPerManeger).speed = that.SanShePaoLivSysMag.attackSpeed;

                    //种类
                    node.getComponent(BulletPerManeger).bulletType = 1;

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

    clickTool(){
        find("Canvas/createComponent").active = false;
        find("Canvas/createComponentR").active = false;
        find("Canvas/updateComponent").active = true;
        find("Canvas/updateComponent").getChildByName("destory").getComponent(updateComponent).targetNode = this.node.parent
        find("Canvas/updateComponent").getChildByName("update").getComponent(updateComponent).targetNode = this.node
    }
}




