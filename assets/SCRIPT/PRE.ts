
import { _decorator, Component, Node, Prefab, instantiate, UITransform, Size } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PRE
 * DateTime = Tue Sep 07 2021 14:52:14 GMT+0530 (India Standard Time)
 * Author = chandan_krishnani
 * FileBasename = PRE.ts
 * FileBasenameNoExtension = PRE
 * URL = db://assets/SCRIPT/PRE.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('PRE')
export class PRE extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property(Prefab)
    abc=null;
    @property n:number=0;

   public jkl:Node[]=null;

    start () 
    {
    
        let size : number = 70 * this.n;
        this.node.setContentSize(new Size(220,size));
        let j:number=0;
        console.log(typeof this.n ,this.n);
        for(let i=0;i<this.n;i++)
        {
            let nd:any=instantiate(this.abc);
            this.node.addChild(nd);
            nd.setPosition(nd.position.x,nd.position.y+j,1);
            j=j+20;
         
        }
 
     
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
