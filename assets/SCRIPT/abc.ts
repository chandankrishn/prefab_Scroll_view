
import { _decorator, Component, Node, ScrollView } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Abc
 * DateTime = Tue Sep 07 2021 16:15:14 GMT+0530 (India Standard Time)
 * Author = chandan_krishnani
 * FileBasename = abc.ts
 * FileBasenameNoExtension = abc
 * URL = db://assets/SCRIPT/abc.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Abc')
export class Abc extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
     
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
    public toggle:boolean=true;
    fun()
    {
        console.log("hello chandan");
    }
    public abc:boolean=true;
    update(deltaTime: any)
    {
        if(this.abc)
        {

            this.node.getComponent(ScrollView).scrollToBottom(0.0002*deltaTime);
            this.abc=false;
        }
        else
        {
            this.node.getComponent(ScrollView).scrollToTop(0.0002*deltaTime);
            this.abc=true;
        }
    
          
        
       

    }
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
