import { _decorator, Component, Node, error, resources, Prefab, instantiate, Layers, find, Label, AudioClip, AudioSource, assert } from 'cc';
import { diji } from './diji';
import { ShenMuManeger } from './ShenMuManeger';
const { ccclass, property } = _decorator;

@ccclass('combatConfigManeger')
export class combatConfigManeger extends Component{
    public RoundEmenyConfig = new Array();

    @property
    roundTime:number;

    @property
    roundNum:number;

    @property
    nextFLag = false;

    @property
    roundTimeShow = false;

    @property
    endGameFlag = false;

    @property
    askRequest = false;

    @property(AudioSource)
    public _audioSource:AudioSource=null!;

    @property(AudioClip)
    public clip: AudioClip = null!; 


    public SanShePao:SanShePao = new SanShePao();
    public ZhuiZongDan:ZhuiZongDan = new ZhuiZongDan();
    public GuangZiJian:GuangZiJian = new GuangZiJian();
    public EmenyNormal = new EmenyNormal();
    public EmenyQuickAttack =new EmenyQuickAttack();
    public SHENMU = new SHENMU();
    public Bing = new Bing();
    public Kong = new Kong();
    public FengYiJun =new FengYiJun();

    public SanShePaoList:Array<Node> = new Array<Node>();
    public ZhuiZongDanList:Array<Node> = new Array<Node>();
    public GuangZiJianList:Array<Node> = new Array<Node>();
    public FengYiJunList:Array<Node> = new Array<Node>();
     

    start() {
        if(!this.nextFLag){}
        this.roundNum = 0;
        find("Canvas/EmenyBox").active = true;
        this.roundTime = 1;
        this.InitialRoundEmenyConfig();
        let that = this;


        this.schedule(function() {
            // 这里的 this 指向 component
            if(!that.nextFLag && !that.endGameFlag){
                //大于10关对敌机数量进行配置。
                if(that.roundTime >10){
                    let num = that.roundTime-1;
                    that.RoundEmenyConfig[that.roundTime-1] =[num,num-1,num+2];
                }
                that._audioSource.clip = that.clip;
                // that._audioSource.loop = true;
                this.schedule(function(){
                    that._audioSource.play();
                },1,2)
                that.createSingleRoundEmeny(that.roundTime);
                that.createSingleRoundEmenyRight(that.roundTime);
                that.roundNum ++;
            }else{

            }
        },10);
    }

    onLoad() {
        const audioSource = this.node.getComponent(AudioSource)!;
        assert(audioSource);
        this._audioSource = audioSource;
    }

    update(deltaTime: number) {
        this.showRoundTime(deltaTime);
    }

    playOneShot () {
        this._audioSource.playOneShot(this.clip, 1);
    }
    showRoundTime(dt){
        let node = find("Canvas/model");
        node.getChildByName("info").getComponent(Label).string = "第"+this.roundTime+"关"
        if(!this.roundTimeShow){
            node.active = true;
            this.schedule(()=>{
                node.active = false;
                this.roundTimeShow = true;
            },0,0,2);
        }
    }

    endGame(){
        let node = find("Canvas/gameOver"); 
        node.active = true;
        this.endGameFlag = true;
        let nodeList = find("Canvas/EmenyBox").children;
        // for(let i =0;i<nodeList.length;i++){
        //     if(nodeList[i].isValid){
        //         nodeList[i].getChildByName("Emeny_Pre").getComponent(diji).endGameFlag = true;
        //     }
        // }
    }
    againRound(){
        this.endGameFlag=false;
        find("Canvas/ShenMu").getChildByName("shenmu").getComponent(ShenMuManeger).refresh();
        let node = find("Canvas/gameOver"); 
        node.active = false;
        this.roundTimeShow = false;
        this.cleanCombat();
    }

    nextPage(){
        this.cleanCombat();
        this.nextFLag = true;
        this.schedule(function(){
            find("Canvas/middle").active = true;
            // find("Canvas/ShenMu").getChildByName("shenmu").getComponent(ShenMuManeger).refresh();
        },2,0,0)
    }

    nextRound(){
        this.roundTime ++;
        this.roundNum = 0;
        this.EmenyNormal.updateManeger(this.roundNum);
        this.EmenyQuickAttack.updateManeger();
        this.Kong.updateManeger();
        find("Canvas/ShenMu").getChildByName("shenmu").getComponent(ShenMuManeger).refresh()
        //清扫战场
        this.nextFLag = false;
        this.roundTimeShow = false;
        this.askRequest = false;
    }

    cleanCombat(){
        let nodeList = find("Canvas/EmenyBox").children;
        let nodeListR = find("Canvas/EmenyBoxR").children;
        let KongL = find("Canvas/KongBoxL").children;
        let KongR = find("Canvas/KongBoxR").children;
        for(let i =0;i<nodeList.length;i++){
            if(nodeList[i].isValid){
                nodeList[i].destroy();
            }
        }
        for(let i =0;i<nodeListR.length;i++){
            if(nodeListR[i].isValid){
                nodeListR[i].destroy();
            }
        }
        for(let i =0;i<KongL.length;i++){
            if(KongL[i].isValid){
                KongL[i].destroy();
            }
        }
        for(let i =0;i<KongR.length;i++){
            if(KongR[i].isValid){
                KongR[i].destroy();
            }
        }
    }

    InitialRoundEmenyConfig(){
        //配置每轮的飞机信息
        this.RoundEmenyConfig[0]=[2,0,0];
        this.RoundEmenyConfig[1]=[2,1,0];
        this.RoundEmenyConfig[2]=[2,2,3];
        this.RoundEmenyConfig[3]=[3,1,5];
        this.RoundEmenyConfig[4]=[4,2,5];
        this.RoundEmenyConfig[5]=[4,2,10];
        this.RoundEmenyConfig[6]=[5,3,7];
        this.RoundEmenyConfig[7]=[7,2,8];
        this.RoundEmenyConfig[8]=[7,4,10];
        this.RoundEmenyConfig[9]=[8,8,13];
    }

    

    createSingleRoundEmeny(currentRound:number){
        let that = this;
        resources.load("perfabs/Emeny2Perfabs",Prefab,(err,Prefab)=>{
            if(!Prefab){
                
            }else{

                if(that.RoundEmenyConfig[currentRound-1][1]>0){
                    that.schedule(function(){
                        let node = instantiate(Prefab)
                        node.layer = Layers.Enum.UI_2D;
                        node.setPosition(0,0,0);
                        node.parent = find("Canvas/EmenyBox");
                        node.active = true;
                        },1,that.RoundEmenyConfig[currentRound-1][1]-1,0)
                }
            }
        })

        resources.load("perfabs/Emeny1Perfabs",Prefab,(err,Prefab)=>{
            if(!Prefab){
                
            }else{

                if(that.RoundEmenyConfig[currentRound-1][0]>0){
                    that.schedule(function(){
                        let node = instantiate(Prefab)
                        node.layer = Layers.Enum.UI_2D;
                        node.setPosition(0,0,0);
                        node.parent = find("Canvas/EmenyBox");
                        node.active = true;
                    },1,that.RoundEmenyConfig[currentRound-1][0]-1,0)
                }

            }
        })

        resources.load("perfabs/KongPerfabs",Prefab,(err,Prefab)=>{
            if(!Prefab){
                
            }else{

                if(that.RoundEmenyConfig[currentRound-1][2]>0){
                    that.schedule(function(){
                        let node = instantiate(Prefab)
                        node.layer = Layers.Enum.UI_2D;
                        node.setPosition(0,0,0);
                        node.parent = find("Canvas/KongBoxL");
                        node.active = true;
                    },1,that.RoundEmenyConfig[currentRound-1][2]-1,0)
                }

            }
        })


    }

    createSingleRoundEmenyRight(currentRound:number){
        let that = this;
        resources.load("perfabs/Emeny2Perfabs",Prefab,(err,Prefab)=>{
            if(!Prefab){
                
            }else{


                if(that.RoundEmenyConfig[currentRound-1][1]>0){
                    that.schedule(function(){
                        let node = instantiate(Prefab)
                        // node.getChildByName("Emeny2_Pre").setScale(-1,1,1)
                        node.setScale(-1,1,1);
                        node.getChildByName("level").setScale(-1,1,1);
                        // node.getChildByName("ProgressBar").setScale(-1,1,1);
                        node.layer = Layers.Enum.UI_2D;
                        node.setPosition(0,0,0);
                        node.parent = find("Canvas/EmenyBoxR");
                        node.active = true;
                        },1,that.RoundEmenyConfig[currentRound-1][1]-1,0)
                    }
            }
        })

        resources.load("perfabs/Emeny1Perfabs",Prefab,(err,Prefab)=>{
            if(!Prefab){
                
            }else{

                if(that.RoundEmenyConfig[currentRound-1][0]>0){
                    that.schedule(function(){
                        let node = instantiate(Prefab)
                        // node.getChildByName("Emeny2_Pre").setScale(-1,1,1)
                        node.setScale(-1,1,1);
                        node.getChildByName("level").setScale(-1,1,1);
                        // node.getChildByName("ProgressBar").setScale(-1,1,1);
                        node.layer = Layers.Enum.UI_2D;
                        node.setPosition(0,0,0);
                        node.parent = find("Canvas/EmenyBoxR");
                        node.active = true;
                    },1,that.RoundEmenyConfig[currentRound-1][0]-1,0)
                }

            }
        })

        resources.load("perfabs/KongPerfabs",Prefab,(err,Prefab)=>{
            if(!Prefab){
                
            }else{
                if(that.RoundEmenyConfig[currentRound-1][2]>0){
                    that.schedule(function(){
                        let node = instantiate(Prefab)
                        // node.getChildByName("Emeny2_Pre").setScale(-1,1,1)
                        node.setScale(-1,1,1);
                        node.getChildByName("level").setScale(-1,1,1);
                        // node.getChildByName("ProgressBar").setScale(-1,1,1);
                        node.layer = Layers.Enum.UI_2D;
                        node.setPosition(0,0,0);
                        node.parent = find("Canvas/KongBoxR");
                        node.active = true;
                    },1,that.RoundEmenyConfig[currentRound-1][2]-1,0)
                }


            }
        })


    }
}
class GlobalLivingClass{
    LivingValue:number;
    DefendValue:number;
    HarmValue:number;
    AttackSpeed:number;
    CostPower:number;
    GradeValue:number;
    LivingType:number;
    UpdateCost:number;

    constructor(LivingValue:number,DefendValue:number,HarmValue:number,AttackSpeed:number,CostPower:number,GradeValue:number,LivingType:number,UpdateCost:number){
        this.LivingValue = LivingValue;
        this.DefendValue = DefendValue;
        this.HarmValue = HarmValue;
        this.AttackSpeed = AttackSpeed;
        this.CostPower = CostPower;
        this.GradeValue = GradeValue;
        this.LivingType = LivingType;
        this.UpdateCost = UpdateCost;
    }
}
class SanShePao extends GlobalLivingClass{
    constructor(){
        //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型
        super(500,0.05,60,300,0.03,1,1,60)
    }
    updateManeger(){
        if(this.GradeValue == 10){
            error("已满级，不要偏心哦")
            return
        }else{
            //提升生命值的5%
            this.LivingValue +=this.LivingValue*0.05;
            //提升防御值的5%
            this.DefendValue +=this.DefendValue*0.05;
            //提升伤害值的6%
            this.HarmValue += this.HarmValue*0.06;
            //等级+1
            this.GradeValue += 1;
        }
    }
    //获取生命属性信息：生命值、防御值、伤害值、等级、升级损耗
    getLivingProperty():any{
        let LivingPropertyObject = {
            "LivingValue":this.LivingValue,
            "DefendValue":this.DefendValue,
            "HarmValue":this.HarmValue,
            "GradeVale":this.GradeValue
        }

        return LivingPropertyObject
    }

    getUpdateFrontInfo(){
        return this.UpdateCost;
    }

    getCreateFrontInfo(){
        return this.CostPower;
    }
}

class ZhuiZongDan extends GlobalLivingClass{
    constructor(){
        //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型;升级损耗
        super(600,0.1,80,500,0.05,1,2,80)
    }
    updateManeger(){
        if(this.GradeValue == 10){
            error("已满级，不要偏心哦")
            return
        }else{
            //提升生命值的5%
            this.LivingValue +=this.LivingValue*0.03;
            //提升防御值的5%
            this.DefendValue +=this.DefendValue*0.04;
            //提升伤害值的6%
            this.HarmValue += this.HarmValue*0.05;
            //等级+1
            this.GradeValue += 1;
        }
    }
    //获取生命属性信息：生命值、防御值、伤害值、等级
    getLivingProperty():any{
        let LivingPropertyObject = {
            "LivingValue":this.LivingValue,
            "DefendValue":this.DefendValue,
            "HarmValue":this.HarmValue,
            "GradeVale":this.GradeValue
        }

        return LivingPropertyObject
    }

    getUpdateFrontInfo(){
        return this.UpdateCost;
    }

    getCreateFrontInfo(){
        return this.CostPower;
    }
}

class GuangZiJian extends GlobalLivingClass{
    constructor(){
        //生命值；防御值；攻击值；攻击速度；消耗值；生命等级；生命类型;升级损耗
        super(400,0.3,100,1200,0.08,1,3,100)
    }
    updateManeger(){
        if(this.GradeValue == 10){
            error("已满级，不要偏心哦")
            return
        }else{
            //提升生命值的5%
            this.LivingValue +=this.LivingValue*0.05;
            //提升防御值的5%
            this.DefendValue +=this.DefendValue*0.03;
            //提升伤害值的6%
            this.HarmValue += this.HarmValue*0.05;
            //等级+1
            this.GradeValue += 1;
        }
    }
    //获取生命属性信息：生命值、防御值、伤害值、等级
    getLivingProperty():any{
        let LivingPropertyObject = {
            "LivingValue":this.LivingValue,
            "DefendValue":this.DefendValue,
            "HarmValue":this.HarmValue,
            "GradeVale":this.GradeValue
        }

        return LivingPropertyObject
    }

    getUpdateFrontInfo(){
        return this.UpdateCost;
    }

    getCreateFrontInfo(){
        return this.CostPower;
    }
}

class FengYiJun extends GlobalLivingClass{
    constructor(){
        super(180,0.1,80,300,0.05,1,5,0.05);
    }
    //升级系统;
}

class EmenyNormal extends GlobalLivingClass{
    forwardSpeed:number;
    constructor(){
        super(500,0.08,80,400,0,1,11,0);
        this.forwardSpeed = 100;
    }

    updateManeger(roundTime:number){
        let LivingUpdateRange = [0.01,0.03];
        let DefendUpdateRange = [0.03,0.1];
        let HarmUpdateRange = [0.05,0.1];
        let LivingUpdateValue;
        let DefendUpdateValue;
        let HarmUpdateValue;
        let minRound = 2;
        let maxRound = 8;
        if(roundTime<minRound){
            LivingUpdateValue = LivingUpdateRange[1];
            DefendUpdateValue = DefendUpdateRange[1];
            HarmUpdateValue = HarmUpdateRange[1];
        }else if(roundTime>maxRound){
            LivingUpdateValue = LivingUpdateRange[0];
            DefendUpdateValue = DefendUpdateRange[0];
            HarmUpdateValue = HarmUpdateRange[0];
        }else{
            let livingRange = LivingUpdateRange[1]-LivingUpdateRange[0];
            let defendRange = DefendUpdateRange[1]-DefendUpdateRange[0];
            let harmRange = HarmUpdateRange[1] - HarmUpdateRange[0];

            let ratio = (roundTime - minRound)/(maxRound - minRound);

            LivingUpdateValue = ratio * livingRange + LivingUpdateRange[0];
            DefendUpdateValue = ratio * defendRange + DefendUpdateRange[0];
            HarmUpdateValue = ratio * harmRange + HarmUpdateRange[0];
        }

            this.LivingValue +=this.LivingValue*LivingUpdateValue;
            
            this.DefendValue +=this.DefendValue*DefendUpdateValue;
            
            this.HarmValue += this.HarmValue*HarmUpdateValue;
            //等级+1
            this.GradeValue += 1;
    }

}

class EmenyQuickAttack extends GlobalLivingClass{
    forwardSpeed:number;
    constructor(){
        super(500,0.05,200,0,0,1,12,0)
        this.forwardSpeed = 160;
    }
    updateManeger(){
        //每次调用就会直接增加
        this.HarmValue +=50;
        this.GradeValue += 1;
    }
}

class SHENMU extends GlobalLivingClass{
    growSpeed:number;
    constructor(){
        super(1000,0.05,0,0,0,1,0,0)
        this.growSpeed = 50;
    }

    getShenMuGrowSpeed(){
        return this.growSpeed;
    }
    getShenMuLivingValue(){
        return this.LivingValue;
    }

    updateShenMu(value){
        //将贡献者的1%生命值贡献给神木
        this.LivingValue += value * 0.01;
    }
}

class Bing extends GlobalLivingClass{
    //不能升级
    constructor(){
        //默认生命值100，攻速5s一攻击；伤害值为对方生命值的5%；生成一个需要消耗自生生命值的5%的神力值；
        super(100,0,0.05,5,0.05,1,4,0)
    }
}

class Kong extends GlobalLivingClass{
    //不能升级
    constructor(){
        //默认生命值100，攻速5s一攻击；伤害值为对方生命值的5%；生成一个需要消耗自生生命值的5%的神力值；
        super(150,0,0.03,4,0,1,4,0)
    }

    updateManeger(){
        //每次调用就会直接增加
        this.GradeValue += 1;
    }
}





