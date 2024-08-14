class Controls{
    constructor(type){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        switch(type){
            case "KEYS":
                this.#addKeyboardListeners();
                break;
            case "DUMMY":
                this.forward=true;
                break;
        }

    
    }
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{    // => se usa para hacer referencia a los this the la clase y no de la funcion  otra forma de escribirlo es document.onkeydown= function(event){  pero esto haria que los this sean solo de la funcion, no los globales 
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;    
                case "ArrowDown":
                    this.reverse=true;
                    break; 
                             
                
            }
            

        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;    
                case "ArrowDown":
                    this.reverse=false;
                    break;                
                
            }
            

        }
    }
}