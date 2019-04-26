class calcController {

    constructor(){

        this.initialize();
        this.initButtonEvents();
        this.initKeyboard();

    }

    initialize(){
    
    }

    initKeyboard(){

    }

    addOperation(){
        console.log('jaja calcula');
    }

    execBtn(value){
        
        //console.log(value);

        switch(value){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':   
            case '8':
            case '9':
               this.addOperation(value);
        }
    }



    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });

    }

    initButtonEvents(){

        let buttons = document.querySelectorAll('[type=button]');

        console.log(buttons);

        buttons.forEach((btn, index) => {
            
            this.addEventListenerAll(btn, 'click', e => {
                
                let textBtn = btn.innerHTML;
                
                this.execBtn(textBtn);
                
            })



        })

    }
}