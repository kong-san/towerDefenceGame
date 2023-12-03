import { _decorator, Component, Node, resources, Prefab, instantiate, Layers, find, random } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('createFengManeger')
export class createFengManeger extends Component {
    
    start() {
        this.node.on(Node.EventType.TOUCH_START,this.addFeng,this)
    }

    // update(deltaTime: number) {
        
    // }

    addFeng(){
        this.createFeng()
    }

    createFeng(){
        let that = this;
        if(this.node.parent.name == "createComponent"){
            resources.load("perfabs/FengYiPerfabs",Prefab,(err,Prefab)=>{
                if(!Prefab){
                }else{
                    let node = instantiate(Prefab);
                    node.layer = Layers.Enum.UI_2D;
                    let num = this.randomNum(-50,50)
                    node.setPosition(0,-num,0);
                    node.parent = find("Canvas/FengBox");
                }
            })
        }

        if(this.node.parent.name == "createComponentR"){
            resources.load("perfabs/FengYiPerfabs",Prefab,(err,Prefab)=>{
                if(!Prefab){
                }else{
                    let node = instantiate(Prefab);
                    node.layer = Layers.Enum.UI_2D;
                    node.setScale(-1,1,1);
                    node.getChildByName("level").setScale(-1,1,1);
                    // node.getChildByName("ProgressBar").setScale(-1,1,1);
                    let num = this.randomNum(-50,50)
                    node.setPosition(200,-num,0);
                    node.parent = find("Canvas/FengBox");
                }
            })
        }
        
    }

    randomNum(lower, upper) {

        return Math.floor(Math.random() * (upper - lower)) + lower;
        
        }
}


