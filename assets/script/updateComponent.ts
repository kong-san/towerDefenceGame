import { _decorator, Component, Node, find, Label } from 'cc';
import { combatConfigManeger } from './combatConfigManeger';
import { DanPerManeger } from './DanperManeger';
import { GuangziPerManeger } from './GuangziPerManeger';
import { PaoPerManeger } from './PaoPerManeger';
import { sureComponent } from './sureComponent';
const { ccclass, property } = _decorator;

@ccclass('updateComponent')
export class updateComponent extends Component {

    @property(Node)
    targetNode:Node = new Node()

    start() {
        this.node.on(Node.EventType.MOUSE_DOWN,this.clickIcon,this)

    }

    update(deltaTime: number) {
        
    }

    clickIcon(){
        if(this.node.name == "cancel"){
            this.cancel();
        }
        if(this.node.name == "destory"){
            this.destroyNode()
        }
        if(this.node.name == "update"){
            // this.updateSure()
            this.updateNode()
        }
    }

    updateSure(){
        find("Canvas/sureComponent").active = true;
        find("Canvas/sureComponent/cancel").getComponent(sureComponent).targetNode = this.targetNode;
        find("Canvas/sureComponent/sure").getComponent(sureComponent).targetNode = this.targetNode;
        find("Canvas/updateComponent").active = false;
    }

    updateNode(){
        let nodeAlias = this.targetNode;
        if(nodeAlias.isValid){
            // console.log("升级的节点是：",nodeAlias.name)
            if(nodeAlias.name == "Pao_Pre"){
                find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePao.updateManeger();
                let nodelist = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).SanShePaoList;
                for(let i =0;i<nodelist.length;i++){
                    if(nodelist[i].isValid){
                        nodelist[i].getComponent(PaoPerManeger).refreshData();
                    }
                }
            }

            if(nodeAlias.name == "Dan_Pre"){
                find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDan.updateManeger();
                let nodelist = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).ZhuiZongDanList;
                for(let i =0;i<nodelist.length;i++){
                    if(nodelist[i].isValid){
                        nodelist[i].getComponent(DanPerManeger).refreshData();
                    }
                }
            }

            if(nodeAlias.name == "GuangZi_Pre"){
                find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJian.updateManeger();
                let nodelist = find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).GuangZiJianList;
                for(let i =0;i<nodelist.length;i++){
                    if(nodelist[i].isValid){
                        nodelist[i].getComponent(GuangziPerManeger).refreshData();
                    }
                }
            }
            
            
            
        }
    }

    destroyNode(){
        this.targetNode.destroy();
        this.cancel();
    }
    cancel(){
        //取消选择
        find("Canvas/createComponent").active = true;
        find("Canvas/createComponentR").active = true;
        find("Canvas/updateComponent").active = false;
    }
}


