class Player{
    constructor(){
        
    }

    getCount(){
     var getCount = database.ref('playerCount');
     getCount.on("value",function(data){playerCount = data.val()})
    }

    updateName(playerName){
        var playerindex = "player"+playerCount;
        database.ref(playerindex).set({
          name: playerName
        })
    
    }
    updateCount(count){
     database.ref('/').update({
         playerCount: count
     })
    }
}