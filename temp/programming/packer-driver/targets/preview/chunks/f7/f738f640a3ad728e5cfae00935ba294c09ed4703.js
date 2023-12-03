System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, Collider2D, Contact2DType, Sprite, resources, SpriteFrame, Layers, find, _dec, _class, _crd, ccclass, property, PaoPerManeger;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Sprite = _cc.Sprite;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Layers = _cc.Layers;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2f85cXxDFJNIIFh82uZGHIs", "PaoPerManeger", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'BoxCollider2D', 'director', 'Sprite', 'Color', 'resources', 'SpriteFrame', 'Layers', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PaoPerManeger", PaoPerManeger = (_dec = ccclass('PaoPerManeger'), _dec(_class = class PaoPerManeger extends Component {
        constructor() {
          super(...arguments);
          this.bulletArray = [];
          this.hasEmeny = false;
        }

        onLoad() {
          // director.enable = true;
          //绘制物理信息
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        }

        start() {
          // 批量生成子弹
          // let that = this;
          // this.schedule(function(){
          //     if(this.hasEmeny){
          //         console.log('createBullet')
          //         that.createBullet(that);
          //     }
          // },1)
          //注册单个碰撞体的回调函数
          console.log('tool information');
          var collider = this.node.getComponent(Collider2D);
          console.log(collider); // console.log(collider);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          } // 注册全局碰撞回调函数
          // if (PhysicsSystem2D.instance) {
          //     PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          //     PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          //     PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
          //     PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          // }

        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          this.hasEmeny = true;
          console.log('Emeny in my are onBeginContact');
        }

        onEndContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体结束接触时被调用一次
          console.log('Work onEndContact');
          this.hasEmeny = false;
        }

        onPreSolve(selfCollider, otherCollider, contact) {
          // 每次将要处理碰撞体接触逻辑时被调用
          console.log('Work onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {
          // 每次处理完碰撞体接触逻辑时被调用
          console.log('Work onPostSolve');
        }

        update(deltaTime) {// console.log(this.bulletArray.length);
          // for(let i=0;i<this.bulletArray.length;i++){
          //     let node = this.bulletArray[i];
          //     let y = node.position.y;
          //     let x = node.position.x;
          //     x = x - 500 * deltaTime;
          //     y = y + 500 * deltaTime;
          //     node.setPosition(x,y,0)
          //     //TODO:出屏幕后销毁
          // }
        }

        createBullet(that) {
          var node = new Node();
          node.addComponent(Sprite);
          resources.load('zidan1/spriteFrame', SpriteFrame, (_err, sproteFarme) => {
            node.getComponent(Sprite).spriteFrame = sproteFarme;
            node.layer = Layers.Enum.UI_2D;
            console.log(find("left"));
            console.log(this.node);
            node.parent = this.node;
            console.log(node); // node.parent = find("left").getChildByName("rightUp").getChildByName("pao")
          });
          that.bulletArray.push(node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f738f640a3ad728e5cfae00935ba294c09ed4703.js.map