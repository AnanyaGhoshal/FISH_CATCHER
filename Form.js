class Form{
    constructor(){

        this.button = createButton('START');
        this.title1 = createElement('h2');
        this.title2 = createElement('h2');
        this.title3 = createElement('h2');
        this.title4 = createElement('h2');
        this.title5 = createElement('h2');

    }
    hide(){

        this.button.hide();
        this.title1.hide();
        this.title2.hide();
        this.title3.hide();
        this.title4.hide();
        this.title5.hide();


    }

    display(){

        this.button.position(580,350);
        this.button.style('background','pink');
        this.title1.html("CATCH THE FISH!!");
        this.title1.position(500,20);
        this.title1.style('color','maroon')
        this.title2.html("Press Rod button to display rod and gun to display gun. Press UP and DOWN arrow keys to move the rod or gun.");
        this.title2.position(15,80);
        this.title3.html("Press LEFT arrow key to shoot.");
        this.title3.position(15,110);
        this.title4.html("GAME: In the game you have to help a fisherman by catching and saving his fishes to score.")
        this.title4.position(30,250);
        this.title5.html("Save the fisherman from sharks. Press start to play the game.");
        this.title5.position(115,280);

        this.button.mousePressed(()=>{
            form.hide();
            gameState = "play";
        })


    }

}