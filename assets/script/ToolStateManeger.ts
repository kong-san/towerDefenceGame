import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ToolStateManeger')
export class ToolStateManeger {

    step:number;//0为被选择；1为产生碰撞;2为确定放置
    master:string;//从属于哪个node;


    constructor(step:number,master:string){
        this.step = step;
        this.master = master;
    }
    // start() {

    // }

    // update(deltaTime: number) {
        
    // }
}


