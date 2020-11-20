class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game"); 
        title.position(500, 200);

        var input = createInput("player name");
        var button = createButton("submit");
        input.position(400,300);
        button.position(400,400);

       button.mousePressed(function(){ 
           input.hide();
          button.hide();
          var name = input.value();
          playerCount++

          player.updateName(name);
          player.updateCount(playerCount);

          var greeting = createElement('h3');
           greeting.html("Welcome to the game" + name );
           greeting.position(400,300);
    })
           
    
    }
}