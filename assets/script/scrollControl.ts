import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('scrollControl')
export class scrollControl extends Component {
    private touchStartPos:Vec3;
    private leftScroll:number;
    private rightScroll:number;
    start() {
        this.leftScroll = 0;
        this.rightScroll = 0;
        // this.node.on(Node.EventType.TOUCH_START,this.touchStart,this);
        // this.node.on(Node.EventType.TOUCH_END,this.touchEnd,this);
        // this.node.on(Node.EventType.TOUCH_MOVE,this.touchMove,this);
        // this.node.on(Node.EventType.TOUCH_CANCEL,this.touchCancel,this)
    }

    update(deltaTime: number) {
        this.node.on(Node.EventType.TOUCH_START,this.touchStart,this);
        this.node.on(Node.EventType.TOUCH_END,this.touchEnd,this);
    }

    onDestroy(){
        this.node.off(Node.EventType.TOUCH_START,this.touchStart,this);
        this.node.off(Node.EventType.TOUCH_END,this.touchEnd,this)
        this.node.off(Node.EventType.TOUCH_MOVE,this.touchMove,this)
        this.node.off(Node.EventType.TOUCH_CANCEL,this.touchCancel,this)
    }

    touchStart(event){
        this.touchStartPos = event.getLocation()
    }
    touchCancel(event){ 
        this.touchStartPos = event.getLocation()
    }

    touchMove(event){
        if(this.touchStartPos == null){
            return
        }

        if(event.getLocation().x < this.touchStartPos.x){
            if(this.leftScroll < 101){
                let x = this.node.position.x
                let y = this.node.position.y
                this.node.setPosition(x-101,y,0)
                this.leftScroll +=101;
                this.rightScroll =0;
            }else{
                
            }
            
        }
        if(event.getLocation().x > this.touchStartPos.x){
            if(this.rightScroll < 101){
                let x = this.node.position.x
                let y = this.node.position.y
                this.node.setPosition(x+101,y,0)
                this.rightScroll +=101;
                this.leftScroll =0;
            }else{
                
            }
        }
    }

    touchEnd(event){
        if(this.touchStartPos == null){
            return
        }

        if(event.getLocation().x < this.touchStartPos.x){
            if(this.leftScroll < 101){
                let x = this.node.position.x
                let y = this.node.position.y
                this.node.setPosition(x-101,y,0)
                this.leftScroll +=101;
                this.rightScroll =0;
            }else{
                
            }
            
        }
        if(event.getLocation().x > this.touchStartPos.x){
            if(this.rightScroll < 101){
                let x = this.node.position.x
                let y = this.node.position.y
                this.node.setPosition(x+101,y,0)
                this.rightScroll +=101;
                this.leftScroll =0;
            }else{
                
            }
        }

    }
    
}


