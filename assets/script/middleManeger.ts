import { _decorator, Component, Node, find } from 'cc';
import { combatConfigManeger } from './combatConfigManeger';
const { ccclass, property } = _decorator;

@ccclass('middleManeger')
export class middleManeger extends Component {

    start() {
        if(this.node.name = "next"){
            this.node.on(Node.EventType.TOUCH_START,this.next,this)
        }
    }

    next(){
        find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).nextFLag = true;
        find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).nextRound();
        this.node.parent.active = false;
    }
}


