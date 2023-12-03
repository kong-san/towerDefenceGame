import { _decorator, } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('livingSystemManeger')
export class livingSystemManeger {

    livingValue:number;  //生命值
    gradeValue:number;  //等级值
    harmValue:number;   //伤害值
    defendValue:number; //承伤能力
    livingType:number;  //生命类型
    attackSpeed:number; //攻击速度
    currentState:boolean;//状态；0为休息；1为攻击
    targetArray:Array<any>;//目标数组

    checkTarget():boolean{
        let isTargetNull:boolean = true;
        if(!this.targetArray.length){
            isTargetNull = false
        }
        return isTargetNull
    }
    updateManeger(liveUpd:number,harmUpd:number,defendUpd:number,atcSpdUpd:number):boolean{
        let isSuccess:boolean = false;
        if(this.gradeValue <= 10){
            this.livingValue += liveUpd;
            this.gradeValue += harmUpd;
            this.defendValue += defendUpd;
            this.attackSpeed += atcSpdUpd;
            this.gradeValue++;
            isSuccess = true;
            // console.log('升级成功，当前等级为',this.gradeValue)
        }else{
            // console.log('等级已到10级，请给其他的设备一点注意力')
        }
        return isSuccess
    }

    constructor(livingValue:number,harmValue:number,defendValue:number,livingType:number,attackSpeed:number){
        this.livingType = livingType;
        this.livingValue = livingValue;
        this.harmValue = harmValue;
        this.defendValue = defendValue;
        this.attackSpeed = attackSpeed;
        this.gradeValue = 1;  //默认为1
        this.currentState = false;  //默认为休息态
        this.targetArray = null;    //默认为空
    }
    // start() {

    // }

    // update(deltaTime: number) {
        
    // }
}


