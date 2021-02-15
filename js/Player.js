class Player {
  constructor(){
    //name, index, distance covered
    this.index = null;
    this.name = null;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + playerCount;
    database.ref(playerIndex).set({
      name:this.name,
      distance: this.distance
    });
  }

  //static function is used by class only and not objects. Player.functionname
//normal functIOn player.display()
//=> arrow function = this.refers to the object which is calling the function. binds the function to the objects.
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
/*

*/

/*
gamestate
playercount
players
  player1
  player2
*/
