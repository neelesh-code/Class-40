class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.playerRank=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank: this.playerRank
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getFinishedPlayers(){
    var getFinishedPlayersRef = database.ref("finishedPlayers");
    getFinishedPlayersRef.on("value", (data)=>{
      finishedPlayers = data.val();
    });
  }

  //Player.updateFinishedPlayers();
  
  static updateFinishedPlayers(){
    database.ref("/").update({
      finishedPlayers: finishedPlayers+1
    });
    this.rank=this.rank+1;
  }

}

