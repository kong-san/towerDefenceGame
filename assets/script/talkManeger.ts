import { _decorator, Component, Node, find, Label, director, Sprite, resources } from 'cc';
const { ccclass, property } = _decorator;
import { audioBeginController } from './audioBeginController';

@ccclass('talkManeger')
export class talkManeger extends Component {
    public message:Array<string> = [
        "神木使者，你终于来了……敌族火族窥伺我族<神木>已久，得不到就想销毁它。派出了火族的大军正在来的路上。",
        "还好使者来的及时，只有使者才能驱动神木之力，建筑塔防，拯救神木。",
        "我给你介绍一下塔防的建筑吧。",
        "这是<散射炮>，可以朝着敌军的方向发射子弹。",
        "这是<追踪弹>，可以锁定目标敌机执行打击。",
        "这是<光子箭>，可以发射光子束打击敌军。",
        "拖动这些建筑就可以生效啦。",
        "这是扩建功能,去建造更多的<神木卫阵>吧",
        "这是召唤<风翼军>，风翼军是很强的兵种",
        "这是召唤<神兵精灵>，就是我，保卫我们的建筑不受敌军空降兵的破坏。",
        "神木使者千万要注意，搭建塔防和升级塔防都需要消耗神力值，使者只要好好利用神力值，就能打败那些可恶的火族！",
        "对了，敌军分为三种，一种是<战焰机>、一种是<战陨机>、一种是<空降兵>",
        "<战焰机>携带子弹会攻击我方建筑，<战陨机>速度很快会直接攻击神木，<空降兵>则专门破坏我方建筑",
        "根据情报，火族的进攻有十种阵营，越到后面，难度将越大，神木的存活就靠使者了，我们都相信你！"
    ]

    public step:number = 0;
    public oldPositiony:number;

    @property(audioBeginController)
    audioBeginController:audioBeginController = null;

    start() {
        this.oldPositiony = find("Canvas/talk").getPosition().y;
        if(this.node.name == 'continue'){
            this.node.on(Node.EventType.TOUCH_START,this.talkContinue,this);
        }
    }

    update(deltaTime: number) {
        
    }

    talkContinue(){
        if(this.node.name == 'continue'){
            this.node.getComponent(audioBeginController).play();
        }
        this.step++;
        if(this.step == 7){
            find("Canvas/talk/infobg").destroy();
            let node = find("Canvas/talk")
            let y = node.getPosition().y;
            let x = node.getPosition().x;
            node.setPosition(x,0,0);
            find("Canvas/bottom").active = true;
        }
        if(this.step == 8){
            find("Canvas/bottom/b1").active = false;
            find("Canvas/bottom/b2").active = true;
        }
        if(this.step == 9){
            find("Canvas/bottom/b2").active = false;
            find("Canvas/bottom/b3").active = true;
        }
        if(this.step == 3){
            find("Canvas/talk/infobg").active = true;
        }
        if(this.step == 4){
            find("Canvas/talk/infobg/info").active = false;
            find("Canvas/talk/infobg/info1").active = true;
            find("Canvas/talk/infobg/name").getComponent(Label).string = "追踪弹"
        }
        if(this.step == 5){
            find("Canvas/talk/infobg/info1").active = false;
            find("Canvas/talk/infobg/info2").active = true;
            find("Canvas/talk/infobg/name").getComponent(Label).string = "光子箭"
        }
        if(this.step == 10){
            find("Canvas/bottom").destroy();
            let node = find("Canvas/talk")
            // let y = node.getPosition().y;
            let x = node.getPosition().x;
            node.setPosition(x,this.oldPositiony,0);
        }
        if(this.step == 11){
            find("Canvas/emeny").active = true;
        }

        if(this.step >= this.message.length){
            find("Canvas/emeny").destroy();
            director.loadScene("scene");
        }else{
            find("Canvas/talk/message").getComponent(Label).string = this.message[this.step];
        }
    }
}


