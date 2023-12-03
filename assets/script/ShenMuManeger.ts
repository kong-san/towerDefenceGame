
import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, IPhysics2DContact, BoxCollider2D, director, Sprite, Color, resources, SpriteFrame, Layers, find, Prefab, instantiate, Vec2, ProgressBar } from 'cc';
import { combatConfigManeger } from './combatConfigManeger';
import { livingSystemManeger } from './livingSystemManeger';
const { ccclass, property } = _decorator;

@ccclass('ShenMuManeger')
export class ShenMuManeger extends Component {
    
    @property(livingSystemManeger)
    ShenMuLivSysMag:livingSystemManeger = null;

    @property
    currentLivingValue:number;

    public ShenMuConfig;
    public growSpeed;

    public refreshFlag = false;


    onLoad(){
        // director.enable = true;
        //绘制物理信息
        PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | 
            EPhysics2DDrawFlags.Pair | 
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape ;
        // let that = this;
        // 升级的速度;
    }

    start(){
        
        this.ShenMuConfig = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SHENMU;
        this.initialShenMu();
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
        // console.log("我是神木")
        // console.log(otherCollider.node.name)
        this.underFire(otherCollider)
    }
    // onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    // }
    // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
       
    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    // }

    update(deltaTime: number) {
        let that = this;
        let nextFLag = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).nextFLag;
        let endGameFlag = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).endGameFlag;
        let askRequest = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).askRequest;
        let callback = function(){
            if(!nextFLag && !endGameFlag){
                if(that.currentLivingValue <that.ShenMuLivSysMag.livingValue){
                    that.currentLivingValue +=that.growSpeed*deltaTime;
                    that.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5*(that.currentLivingValue/that.ShenMuLivSysMag.livingValue);
                }
            }
            // 这里的 this 指向 component
            if(that.currentLivingValue >= that.ShenMuLivSysMag.livingValue){
                if(!that.refreshFlag){
                    that.refreshFlag =true;
                    // that.refresh()
                }
                //只有在nextFlag刷新为1或者endGameFlage数值为1的时候才进行神木数值的刷新；
                if(nextFLag || endGameFlag){
                    that.refresh();
                }
                if(!askRequest){
                    find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).nextPage();
                    find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).askRequest = true;
                }
                that.unscheduleAllCallbacks()
            }
        }

        if(!nextFLag && !endGameFlag){
            this.schedule(callback, 5);
        }else{
            this.unscheduleAllCallbacks();
        }
        


    }
    destroyThisNode(){
        find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).endGame();
        // this.node.parent.destroy()
    }
    initialShenMu(){
        this.ShenMuLivSysMag = new livingSystemManeger(this.ShenMuConfig.LivingValue,0,this.ShenMuConfig.DefendValue,0,0);
        
        //初始状态都有百分之五的进度。
        this.currentLivingValue = this.ShenMuLivSysMag.livingValue * 0.05;

        //生长速度
        this.growSpeed = this.ShenMuConfig.getShenMuGrowSpeed();

        this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5*(this.currentLivingValue/this.ShenMuLivSysMag.livingValue);
        // console.log("神木初始化成功")
    }
    underFire(Collider: Collider2D){
        //判断是被谁攻击的
        let harmedValue1 = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyNormal.HarmValue;
        let harmedValue2 = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).EmenyQuickAttack.HarmValue;
        let defendValue = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SHENMU.DefendValue;
        //目前为默认减少10;
        if(Collider.node.name == "Bullet_Pre"){
            // console.log("神木受到攻击")
            if(this.currentLivingValue - harmedValue1*(1-defendValue) <= 0){
                this.destroyThisNode();
            }else{
                this.currentLivingValue -=harmedValue1
                // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.ShenMuLivSysMag.livingValue);
            }
        }

        if(Collider.node.name == "Emeny2_Pre"){
            // console.log("神木受到对方战机的攻击")
            if(this.currentLivingValue - harmedValue2*(1-defendValue) <= 0){
                this.destroyThisNode();
            }else{
                this.currentLivingValue -=harmedValue2
                // console.log("生命值为：",this.SanShePaoLivSysMag.livingValue)
                this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5 * (this.currentLivingValue/this.ShenMuLivSysMag.livingValue);
            }
        }
        
    }

    refresh(){
        this.currentLivingValue = this.ShenMuLivSysMag.livingValue * 0.05;
        this.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress = 0.5*(this.currentLivingValue/this.ShenMuLivSysMag.livingValue);
    }

}




