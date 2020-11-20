class Game{
    constructor(){
     
    }
    gameState(){
        var state = database.ref("gameState");
        state.on("value",function(data){gameState=data.val()})
    }

    play(){
        console.log(gameState)
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
            
        }

        
    }
    update(state){
     database.ref('/').update({
         gameState:state
     }) 
    }
     
}

