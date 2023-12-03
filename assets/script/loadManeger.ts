import { _decorator, Component, Node, resources, Scene, director, AudioSource, find, Canvas, ProgressBar} from 'cc';
const { ccclass, property } = _decorator;
import { audioBeginController } from './audioBeginController';

@ccclass('loadManeger')
export class loadManeger extends Component {
    @property(audioBeginController)
    audioBeginController:audioBeginController = null;

    start() {
        
        if(this.node.name == "begin"){
            director.preloadScene("preIntroduce", function () {
            });
            this.node.on(Node.EventType.MOUSE_DOWN,this.begin,this)
        }
        if(this.node.name == 'beginbox'){
            let y = this.node.position.y;
            this.node.setPosition(-400,y,0);

        }
    }

    update(deltaTime: number) {
        if(this.node.name == 'beginbox'){
            let that = this;
            this.schedule(function(){
                let x = that.node.position.x;
                let y = that.node.position.y;

                if(x>400){
                    that.node.setPosition(400,y,0)
                    that.node.parent.getChildByName("begin").active = true;
                }else if(x<400){
                    x = x + 80*deltaTime;
                    that.node.setPosition(x,y,0)
                    // that.node.parent.getChildByName("ProgressBar").getComponent(ProgressBar).progress += 0.1
                }else{
                    // that.cloudArrived = true;
                    that.node.parent.getChildByName("begin").active = true;
                }

            },0.8)
        }

        if(this.node.name == 'ProgressBar'){
            let that = this;
            this.schedule(function(){
                that.node.getComponent(ProgressBar).progress += 0.1*deltaTime
            },0.8)
        }
    }

    begin(){

        this.node.getComponent(audioBeginController).play();
        this.schedule(function(){
            // this.node.getComponent(AudioSource).play;
            director.loadScene("preIntroduce")
        },1,0,0)
        
    }
}


