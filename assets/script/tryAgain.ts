import { _decorator, Component, Node, find } from 'cc';
import { combatConfigManeger } from './combatConfigManeger';
const { ccclass, property } = _decorator;

@ccclass('tryAgain')
export class tryAgain extends Component {
    start() {
        this.node.on(Node.EventType.TOUCH_START,this.tryAgain,this)
    }

    // update(deltaTime: number) {
        
    // }

    tryAgain(){
        find("Canvas/GlobalRoundControl").getComponent(combatConfigManeger).againRound();
    }
}


