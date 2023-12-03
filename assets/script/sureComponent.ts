import { _decorator, Component, Node, find } from 'cc';
import { updateComponent } from './updateComponent';
const { ccclass, property } = _decorator;

@ccclass('sureComponent')
export class sureComponent extends Component {
    @property(Node)
    targetNode:Node = new Node()

    start() {
        this.node.on(Node.EventType.TOUCH_START,this.clickIcon,this)
    }

    update(deltaTime: number) {
        
    }

    clickIcon(){
        if(this.node.name == "cancel"){
            this.cancel();
        }
        if(this.node.name == "sure"){
            this.sure();
        }
    }

    cancel(){
        //取消选择
        find("Canvas/updateComponent").active = true;
        find("Canvas/updateComponent/update").getComponent(updateComponent).targetNode = this.targetNode;
        find("Canvas/updateComponent/destory").getComponent(updateComponent).targetNode = this.targetNode.parent;
        find("Canvas/sureComponent").active = false;
    }

    sure(){
        find("Canvas/updateComponent").active = true;
        find("Canvas/updateComponent/update").getComponent(updateComponent).targetNode = this.targetNode;
        find("Canvas/updateComponent/destory").getComponent(updateComponent).targetNode = this.targetNode.parent;
        find("Canvas/updateComponent/update").getComponent(updateComponent).updateNode();
        find("Canvas/sureComponent").active = false;
    }
}


