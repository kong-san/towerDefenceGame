import { _decorator, Component, Node, Sprite, resources, SpriteFrame, Layers, find, Vec2, BoxCollider2D, Collider2D } from 'cc';
import { infoManeger } from './infoManeger';
// import { PaoState } from './PaoState';
import { toolPyManeger } from './toolPyManeger';
const { ccclass, property } = _decorator;

@ccclass('selectToolManeger')
export class selectToolManeger extends Component {
    @property
    tooltype:number = 0;
    @property
    toolname = "null";

    start() {
        this.node.on(Node.EventType.TOUCH_START, (event) => {
            find("Canvas/infobox").getComponent(infoManeger).setInfoBox(this.tooltype)
          }, this);
    }

    update(deltaTime: number) {
        this.node.on(Node.EventType.TOUCH_MOVE,this.SelectToolAndMove,this);
        this.node.on(Node.EventType.TOUCH_CANCEL,this.SelectToolAndCancel,this);
    }

    SelectToolAndMove(event){
        if (find("Canvas/selectToolBox").getChildByName(this.toolname)){
            let currentNode = find("Canvas/selectToolBox").getChildByName(this.toolname);
            let pos = new Vec2();
            let shit = pos.set(event.getUILocation())
            let x = shit.x - 800;
            let y = shit.y - 450;
            currentNode.setPosition(x,y,0);
        }else{
            let node = new Node(this.toolname);
            node.addComponent(Sprite);
            let spriteFramePath = 'pao/spriteFrame';
            if (this.toolname == "pao"){
                spriteFramePath = "sanshepao/spriteFrame"
            } else if (this.toolname == "dan"){
                spriteFramePath = "zhuizongdan/spriteFrame"
            } else if (this.toolname == "guangzi" || "jian"){
                spriteFramePath = "guangzijian/spriteFrame"
            } else {
                spriteFramePath = 'pao/spriteFrame';
            }
            resources.load(spriteFramePath,SpriteFrame,(_err,spriteFrame)=>{
                node.getComponent(Sprite).spriteFrame = spriteFrame;
                node.layer = Layers.Enum.UI_2D;
                node.setScale(0.3,0.3,1);
                node.addComponent(BoxCollider2D);
                node.getComponent(Collider2D).group = 1024;
                node.addComponent(toolPyManeger);

            })
            node.parent = find("Canvas/selectToolBox");
            
        }
    }

    SelectToolAndCancel(event){
        let selectNode = find("Canvas/selectToolBox").getChildByName(this.toolname);
        let step = selectNode.getComponent(toolPyManeger).ToolStateManeger.step;
        if(!(step==1)){
            selectNode.destroy();
        }else{
            //如果松开鼠标且当时未离开碰撞体，此时将该selectNode调整为确认放置状态。
            selectNode.getComponent(toolPyManeger).ToolStateManeger.step = 2;
            // selectNode.destroy();
        }
    }
}


