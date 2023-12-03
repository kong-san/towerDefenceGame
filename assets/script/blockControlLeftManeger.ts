import { _decorator, Component, Node, resources, Prefab, instantiate, Layers, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('blockControlLeftManeger')
export class blockControlLeftManeger extends Component {
    @property
    currentBlockNum:number = 0;

    start() {
        this.node.on(Node.EventType.TOUCH_START,this.addBlockControl,this)
    }

    // update(deltaTime: number) {
        
    // }
    addBlockControl(){
        if(this.currentBlockNum <= 2){
            this.createBlock();
        }else{
            Error("已到最大数量值")
        }
        
        
    }
    createBlock(){
        let that = this;
        resources.load("perfabs/left",Prefab,(err,Prefab)=>{
            if(!Prefab){
            }else{
                let node = instantiate(Prefab);
                node.layer = Layers.Enum.UI_2D;
                let x = that.currentBlockNum * 110;
                node.setPosition(-x,0,0);
                node.parent = find("Canvas/blockLeft");
                that.currentBlockNum +=1;
            }
        })
    }
}


