
import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, IPhysics2DContact, resources, Layers, find, Prefab, instantiate, ProgressBar, NodePool, Label } from 'cc';
import { BulletPerManeger } from './BulletPerManeger';
import { combatConfigManeger } from './combatConfigManeger';
import { livingSystemManeger } from './livingSystemManeger';
import { targetManeger } from './targetManeger';
const { ccclass, property } = _decorator;
import { audioBeginController } from './audioBeginController';
@ccclass('FengyiPerManeger')
export class FengyiPerManeger extends Component {
    
    public bulletArray = [];
    public hasEmeny = true;

    public bulletPool:NodePool = new NodePool();

    public targetArray:Array<Node> = new Array<Node>

    @property(livingSystemManeger)
    FengyiLivSysMag:livingSystemManeger = null;

    public currentLivingValue:number;

    public where:number = 1;

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
        this.initialFengyi();
        // 批量生成子弹
        let that = this;
        let flag = false;
        this.schedule(function(){
            that.hasEmeny = that.node.parent.getComponent(targetManeger).hasEmeny;
            if(that.hasEmeny){
                that.targetArray = that.node.parent.getComponent(targetManeger).emenyArray;
                flag = false;
                for(let i =0;i<that.targetArray.length;i++){
                    if(that.targetArray[i].isValid){
                        flag = true;
                    }
                }
                if(!flag){
                    that.hasEmeny = false;
                    that.node.parent.getComponent(targetManeger).hasEmeny = false;
                }
                that.createBullet();
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

        // 注册全局碰撞回调函数
        // if (PhysicsSystem2D.instance) {
        //     PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        // }
    }
    
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


        this.underFire(otherCollider)
        
        
        //当self碰撞体是self的时候，才会触发这个操作
        // if (selfCollider.group == 4){
        //     this.underFire(otherCollider)
        // }
        

    }
    // onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {



    // }
    // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 每次将要处理碰撞体接触逻辑时被调用
    //     console.log('PAO onPreSolve');
    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
    //     // 每次处理完碰撞体接触逻辑时被调用

    // }

    update(deltaTime: number) {
        let node =this.node.parent;
        let y = node.position.y;
        let x = node.position.x;

        if(y>200){
            this.where = -1;
        }else if(y< -200){
            this.where = 1;
        }

        y = y + this.where * 100*deltaTime;

        node.setPosition(x,y,0)
        
        
        // console.log(this.bulletArray.length);
        // //获取攻击速度
        // let speed = this.FengyiLivSysMag.attackSpeed;
        // for(let i=0;i<this.bulletArray.length;i++){
        //     let bulletNode = this.bulletArray[i];
        //     let istarget = bulletNode.getComponent(BulletPerManeger).istarget;
        //     let isOverScreen = bulletNode.getComponent(BulletPerManeger).isOverScreen;
        //     // console.log("是否命中",istarget)
        //     if(istarget || isOverScreen){
        //         // bulletNode.destroy()
        //         this.bulletPool.put(bulletNode);
        //     }

            // let y = bulletNode.position.y;
            // let x = bulletNode.position.x;
            // x = x - speed * deltaTime;
            // y = y + speed * deltaTime;
            // bulletNode.setPosition(x,y,0)
            //TODO:出屏幕后销毁
        // }
    }
    destroyThisNode(){
        this.node.destroy()
    }
    initialFengyi(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.AttackSpeed;
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.LivingValue;
        let DefendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.DefendValue;
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.HarmValue;
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.GradeValue;
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level
        this.FengyiLivSysMag = new livingSystemManeger(LivingValue,HarmValue,DefendValue,level,AttackSpeed);
        this.currentLivingValue = LivingValue;

        find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJunList.push(this.node);

        this.FengyiLivSysMag = new livingSystemManeger(LivingValue,HarmValue,DefendValue,6,AttackSpeed)
    }

    refreshData(){
        let AttackSpeed = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.AttackSpeed;
        let LivingValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.LivingValue;
        let DefendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.DefendValue;
        let HarmValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.HarmValue;
        let level = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).FengYiJun.GradeValue;
        this.FengyiLivSysMag.defendValue = DefendValue;
        this.FengyiLivSysMag.gradeValue = level;
        this.FengyiLivSysMag.attackSpeed = AttackSpeed;
        this.FengyiLivSysMag.harmValue = HarmValue;
        //获取差值
        let subValue = LivingValue - this.FengyiLivSysMag.livingValue;
        this.FengyiLivSysMag.livingValue = LivingValue;

        //把差值加上
        this.currentLivingValue +=subValue;
        
        this.node.parent.getChildByName("level").getComponent(Label).string = "L"+level
    }
    underFire(Collider: Collider2D){
        //判断是被谁攻击的

        //目前为默认减少10;
        let harmedValueEmeny=find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyNormal.HarmValue;
        let defendValue = this.FengyiLivSysMag.defendValue;
        if(Collider.node.name == "Bullet_Pre"){

            if(this.currentLivingValue - harmedValueEmeny*(1-defendValue) <= 0){
                this.node.parent.destroy()
            }else{
                this.currentLivingValue -=harmedValueEmeny*(1-defendValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.FengyiLivSysMag.livingValue)
            }
        }
        
    }

    //生成子弹
    createBullet(){
        // let node = new Node();
        // node.addComponent(Sprite);
        this.node.getComponent(audioBeginController).play();
        let that = this;
        resources.load("perfabs/FengyiBulletPer",Prefab,(err,Prefab)=>{
            if(!Prefab){

            }else{

                let node = instantiate(Prefab);
                if(!node){
                }else{
                    // console.log(node)
                    // let pos = new Vec2();
                    node.layer = Layers.Enum.UI_2D;
                    //速度；
                    node.getComponent(BulletPerManeger).speed = that.FengyiLivSysMag.attackSpeed;

                    //种类
                    node.getComponent(BulletPerManeger).bulletType = 4;

                    //角度
                    node.setScale(1.2,1.2,1.2);
                    // node.getComponent(BulletPerManeger).angle = that.angle;
                    node.setPosition(0,0,0);
                    that.node.addChild(node);
                    that.bulletArray.push(node);
                }
                
            }
        })
        
    }
}




