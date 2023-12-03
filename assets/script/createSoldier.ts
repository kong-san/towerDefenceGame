import { _decorator, Component, Node, resources, Prefab, instantiate, Layers, find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('createSoldier')
export class createSoldier extends Component {
    start() {
        this.node.on(Node.EventType.TOUCH_START,this.addSoldier,this)
    }

    // update(deltaTime: number) {
        
    // }

    addSoldier(){
        this.createSoldier()
    }

    createSoldier(){
        let that = this;
        if(this.node.parent.name == "createComponent"){
            resources.load("perfabs/WeiPerfabs",Prefab,(err,Prefab)=>{
                if(!Prefab){
                    
                }else{
                    let node = instantiate(Prefab);
                    node.layer = Layers.Enum.UI_2D;
                    let num = this.randomNum(-50,50);
                    node.setPosition(-num,0,0);
                    node.active = true;
                    node.parent = find("Canvas/WeiBox");
                }
            })
        }

        if(this.node.parent.name == "createComponentR"){
            resources.load("perfabs/WeiPerfabs",Prefab,(err,Prefab)=>{
                if(!Prefab){
                    
                }else{
                    let node = instantiate(Prefab);
                    node.layer = Layers.Enum.UI_2D;
                    node.setScale(-1,1,1);
                    node.name = "WeiPerfabsRight"
                    node.getChildByName("level").setScale(-1,1,1)
                    // node.getChildByName("ProgressBar").setScale(-1,1,1)
                    let num = this.randomNum(-50,50)
                    node.setPosition(-num,0,0);
                    node.active = true;
                    node.parent = find("Canvas/WeiBox");
                }
            })
        }


        
    }

    randomNum(lower, upper) {

        return Math.floor(Math.random() * (upper - lower)) + lower;
        
        }
}


