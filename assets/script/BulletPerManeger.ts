import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, IPhysics2DContact, BoxCollider2D, director, Sprite, Color, resources, SpriteFrame, Layers, find, Vec3, Vec2 } from 'cc';
import { DanPerManeger } from './DanperManeger';
import { diji } from './diji';
const { ccclass, property } = _decorator;

@ccclass('BulletPerManeger')
export class BulletPerManeger extends Component {
    @property 
    isOverScreen:boolean = false;

    @property
    istarget:boolean = false;

    @property
    speed:number;

    @property
    bulletType:number;

    @property
    shenmuTarget:boolean = false;
    //1:散射 2：追击 3：光子 4：凤翼 11：为敌机

    @property
    angle:number;
    onLoad() {
        //绘制物理信息
        PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | 
            EPhysics2DDrawFlags.Pair | 
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape ;
    }

    start(){

        let collider = this.node.getComponent(Collider2D);

        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }
    }

    update(deltaTime: number) {
        let x = this.node.position.x
        let y = this.node.position.y

        //子弹的飞行和角度模式选择
        this.bulletAttack(deltaTime);

        //飞出屏幕外销毁子弹
        if(x>800 || x<-800 || y>450 || y<-450){
            this.isOverScreen = true;
            this.node.destroy();
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

        this.istarget = true;
        this.node.destroy();
        // this.node.destroy()
    }
    // onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {


    // }
    // onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    // }
    // onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {

    // }

    ifTarget():boolean{
        return this.istarget;
    }

    bulletAttack(deltaTime){
        if(this.bulletType == 1){
            this.PaoBullet(deltaTime);
        }
        if(this.bulletType == 2){
            this.DanBullet(deltaTime);
        }
        if(this.bulletType == 3){
            this.GuangZiBullet(deltaTime);
        }
        if(this.bulletType == 4){
            this.FengYiBullet(deltaTime);
        }

        if(this.bulletType == 11){
            this.EmenyBullet(deltaTime);
        }
    }

    PaoBullet(deltaTime){
        let x = this.node.position.x
        let y = this.node.position.y
        if(this.node.parent.parent.parent.parent.name == "right"){
            x = x + this.speed * Math.cos(this.angle) * deltaTime;
            y = y + this.speed * Math.sin(this.angle) * deltaTime;
        }else{
            x = x - this.speed * Math.cos(this.angle) * deltaTime;
            y = y + this.speed * Math.sin(this.angle) * deltaTime;
        }
        this.node.setPosition(x,y,0)
    }
    FengYiBullet(deltaTime){
        let x = this.node.position.x
        let y = this.node.position.y

        x = x - this.speed * deltaTime;

        this.node.setPosition(x,y,0);
        // y = y + this.speed * deltaTime;
    }

    EmenyBullet(deltaTime){
        let x = this.node.position.x
        let y = this.node.position.y

        if(this.node.parent.getComponent(diji).targetArray.length >0){
            x = x + this.speed * deltaTime;
        }else{
            x = x + this.speed * deltaTime;
            y = y - this.speed * deltaTime;
        }
        this.node.setPosition(x,y,0)
    }

    DanBullet(deltaTime){
        //获取当前子弹的位置
        let x1 = this.node.position.x;
        let y1 = this.node.position.y;

        //关键是：currenTarget.isValid，获取塔防目前锁定的currentTarget是否有效，有效则进行攻击
        if(this.node.parent.getComponent(DanPerManeger).currenTarget.isValid){
            this.angle = this.getAngle(this.node.worldPosition,this.node.parent.getComponent(DanPerManeger).currenTarget.worldPosition);
        }else{//无效的话，就停止攻击，自我销毁
            this.node.destroy();
        }
        //更新节点位置
        if(this.node.parent.parent.parent.parent.name == "right"){
            x1 = x1 + this.speed * Math.cos(this.angle) * deltaTime;
            y1 = y1 + this.speed * Math.sin(this.angle) * deltaTime;
        }else{
            x1 = x1 - this.speed * Math.cos(this.angle) * deltaTime;
            y1 = y1 + this.speed * Math.sin(this.angle) * deltaTime;
        }
        this.node.setPosition(x1,y1,0)
    }
    GuangZiBullet(deltaTime){
        let x = this.node.position.x
        let y = this.node.position.y
        if(this.node.parent.parent.parent.parent.name == "right"){
            x = x + this.speed * Math.cos(this.angle) * deltaTime;
            y = y + this.speed * Math.sin(this.angle) * deltaTime;
        }else{
            x = x - this.speed * Math.cos(this.angle) * deltaTime;
            y = y + this.speed * Math.sin(this.angle) * deltaTime;
        }
        this.node.setPosition(x,y,0)
    }

    //remember to use world position
    getAngle(start:Vec3,end:Vec3):number{
        let dx = start.x - (end.x );
        let dy = start.y - (end.y );
        let dir = new Vec2(dx,dy);

        let angle = dir.signAngle(new Vec2(1,0));

        // let degreen = angle / Math.PI * 180 ;
        

        return angle
    }


}


