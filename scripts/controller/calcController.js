class Calculator {

    construct(){

        this.initialize();
        this.initButtonEvents();
        this.initKeyboard();

    }

    initialize(){
        
    }

    addEventListenerAll(element, events, fn){

        events.split().forEach(event => {
            element.addEventListener(event, fn, false);
        })

    }

    initButtonEvents(){

        let buttons = document.querySelectorAll('#botao');

        buttons.forEach((btn, index) => {
            
            this.addEventListenerAll(btn, 'click')

        })

    }
}