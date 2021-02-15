class Form {
  constructor() {
    //input, button, greeting
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
  
    this.input.position(130, 160);
    this.button.position(250, 200);

    /*
    3rd player - daksh
  player.name - daksh
  playerCount; 2 + 1 = 3
  player.index = 3;
  greeting Hello daksh
  
    */

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}

//function something() - which has name
//function() - no name
//()=>
