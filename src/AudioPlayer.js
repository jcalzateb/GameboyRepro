class AudioPlayer{

    constructor(src,domElement,controls) {
        this.src = src;
        this.audio = new Audio(this.src);
        this.controls = controls;
        this.domElement=domElement;
        this.progress = this.domElement.querySelector("#reproductor .cover .progress");
        this.initControls();
        this.audio.ontimeupdate = () => { this.updateUI(); }
    }

    initControls() {
        if (this.controls.play) {
            this.initPlay(this.controls.play);
        }
        if(this.controls.pause){
            this.initPause(this.controls.pause)
        }
        if(this.controls.mas){
            this.initMas(this.controls.mas)
        }
        if(this.controls.menos){
            this.initMenos(this.controls.menos)
        }
        if(this.controls.sgte){
            this.initProx(this.controls.sgte)
        }
        if(this.controls.atras){
            this.initAtras(this.controls.atras)
        }

    }

    initPlay(domElement) {
        domElement.onclick = () => {
            const accion = domElement.querySelector(".r");
            if (accion) {
                this.play();
            }
        }
    }

    initPause(domElement) {
        domElement.onclick = () => {
            const accion1 = domElement.querySelector(".p");
            if (accion1) {
                this.pause();
            }
        }
    }

    initMas(domElement) {
        domElement.onclick = () => {
            const accion2 = domElement.querySelector(".derecha1");
            if (accion2) {
                const x = this.audio.currentTime+10;
                const totalX =this.audio.duration;
                const progress = x / totalX;
                this.setCurrentTime(progress);
                
            }
        }
    }

    initMenos(domElement) {
        domElement.onclick = () => {
            const accion3 = domElement.querySelector(".izquierda1");
            if (accion3) {
                const x = this.audio.currentTime-10;
                const totalX =this.audio.duration;
                const progress = x / totalX;
                this.setCurrentTime(progress);
            }
        }
    }

    initProx(domElement) {
        domElement.onclick = () => {
            const accion3 = domElement.querySelector(".arriba1");
            if (accion3) {
                console.log(accion3);
            }
        }
    }
    initAtras(domElement) {
        domElement.onclick = () => {
            const accion3 = domElement.querySelector(".abajo1");
            if (accion3) {
                console.log(accion3);
            }
        }
    }

    

    setCurrentTime(progress) {
        this.audio.currentTime = this.audio.duration * progress;
    }

    updateUI() {
        console.log("Updating UI");
        const total = this.audio.duration;
        const current = this.audio.currentTime;
        const progress = (current / total) * 100;
        console.log(progress);
        this.progress.style.width = `${progress}%`;
    }

    play() {
        this.audio.play().then().catch(err => console.log(`Error al reproducir el archivo: ${err}`));
    }

    pause() {
        this.audio.pause();
    }
    
}
