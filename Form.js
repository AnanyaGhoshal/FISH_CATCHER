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
        rodB = createButton('Net');
    rodB.class("Button");
    rodB.position(1125,70);
    
    rodB.mouseClicked(changeToRod);

    gunB = createButton('Gun');
    gunB.position(1125,120);
    gunB.class("Button");
    
    gunB.mouseClicked(changeToGun);


    }

    display(){
        
        
        this.button.position(580,350);
        this.button.style('background','pink');
        this.title1.html("CATCH THE FISH!!");
        this.title1.position(500,20);
        this.title1.style('color','red')
        this.title2.html("** In the game,suppose you're a fisherman. Catch fishes with moving net to score. Press 'Net' button to display net");
        this.title2.position(15,80);
        this.title2.style('color','white');
        this.title3.html("** & 'Gun' to display gun. Use UP & DOWN arrow keys to move the net or gun. Press Space key to shoot sharks. ");
        this.title3.position(15,150);
        this.title3.style('color','white');
        this.title4.html('**Save yourself from sharks.  Do not shoot fishes.');
        this.title4.position(15,210);
        this.title4.style('color','white');
        this.title5.html("Now,  press the START button to play the game.");
        this.title5.position(370,280);
        this.title5.style('color','white');

        this.button.mousePressed(()=>{
            form.hide();
            gameState = "play";
        })


    }

}
//Press Rod button to display rod and gun to display gun. Use UP and DOWN arrow keys to move the rod or gunPress Space key to shoot