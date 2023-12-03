import { _decorator, Component, Node, resources, Sprite, SpriteFrame, Layers, find, Label, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('infoManeger')
export class infoManeger extends Component {
    @property
    currentType:number = 0;//默认为0，表示没有当前的值。

    public SanShePaoInfo = {
        "name":"散射炮",
        "describe":"使用该建筑可以发射出不同角度的炮弹，攻击敌人；"
    }
    public ZhuiJiDanInfo = {
        "name":"追踪弹",
        "describe":"该建筑可以锁定目标并实施打击直到该目标陨灭"
    }
    public GuangZiJianInfo = {
        "name":"光子箭",
        "describe":"该建筑具有快速和攻击力强的特点，将会释放出光子流攻击敌机"
    }
    // start() {

    // }

    // update(deltaTime: number) {
        
    // }

    setInfoBox(toolType:number){
        if(toolType == this.currentType){
            this.currentType = 0;
            this.node.getChildByName("infoBoxsub").destroy();
        }else{
            if(this.currentType == 0){
                let node = new Node('infoBoxsub');
                node.addComponent(Sprite);
                node.setPosition(0,0,0);
                resources.load('wenzikuang/spriteFrame',SpriteFrame,(_err,spriteFrame)=>{
                    node.getComponent(Sprite).spriteFrame = spriteFrame;
                    //在cocos3x版本中，layer默认为default，node.layer = Layers.Enum.UI_2D；
                    //2d摄像头可见的是UI_2D和UI_3D
                    node.layer = Layers.Enum.UI_2D;
                    node.setScale(0.6,0.6,1);
                    node.setPosition(0,-50,0);
                    resources.load("perfabs/infoLabel",Prefab,(err,Prefab)=>{
                        if(!Prefab){
                        }else{
                            let nodeLabel = instantiate(Prefab);
                            if(!node){
                            }else{
                                nodeLabel.name = "nodeLabel"
                                node.layer = Layers.Enum.UI_2D;
                                node.addChild(nodeLabel);
                                this.refreshInfo(toolType,node)
                            }
                            
                        }
                    })
                })
               
                node.parent = this.node;
                this.currentType = toolType;
                // this.refreshInfo(toolType,this.node.getChildByName("infoBoxsub"));
            }else{
                this.currentType = toolType;
                this.refreshInfo(toolType,this.node.getChildByName("infoBoxsub"));
            }
            
        }
    }
    refreshInfo(toolType,node:Node){
        if(toolType == 1){
            node.getChildByPath("nodeLabel").getChildByName("name").getComponent(Label).string = this.SanShePaoInfo.name;
            node.getChildByPath("nodeLabel").getChildByName("describe").getComponent(Label).string = this.SanShePaoInfo.describe;

        }

        if(toolType == 2){
            node.getChildByPath("nodeLabel").getChildByName("name").getComponent(Label).string = this.ZhuiJiDanInfo.name;
            node.getChildByPath("nodeLabel").getChildByName("describe").getComponent(Label).string = this.ZhuiJiDanInfo.describe;
        }

        if(toolType == 3){
            node.getChildByPath("nodeLabel").getChildByName("name").getComponent(Label).string = this.GuangZiJianInfo.name;
            node.getChildByPath("nodeLabel").getChildByName("describe").getComponent(Label).string = this.GuangZiJianInfo.describe;
        }
    }
}


