import { _decorator, assert, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('audioBeginController')
export class audioBeginController extends Component {

    @property(AudioSource)
    public _audioSource:AudioSource=null!;

    @property(AudioClip)
    public clip: AudioClip = null!;   

    onLoad() {
        const audioSource = this.node.getComponent(AudioSource)!;
        assert(audioSource);
        this._audioSource = audioSource;
    }
    
    playOneShot () {
        this._audioSource.playOneShot(this.clip, 1);
    }

    play(){
        this._audioSource.play();
    }

    pause(){
        this._audioSource.pause();
    }
}


