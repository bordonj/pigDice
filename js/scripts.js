// Business Logic

function Player(name) {
  this.playerName = name;
  this.totalScore = 0;
  this.turnScore = 0;
}

let player = new Player("hello")
console.log('player object', player);


Player.prototype.rollDie = function() {
  let rollResult = Math.floor(Math.random() * 6) + 1;
  if (rollResult === 1) {
    this.turnScore = 0;
    this.totalScore = 0;
    console.log('total score', this.totalScore);
  } else {
    this.turnScore += rollResult;
      if (this.totalScore + this.turnScore >= 100) {
      this.totalScore += this.turnScore;
      return 'wins';
    } else {
      this.totalScore += this.turnScore;
    }
    return rollResult;
  }
};

Player.prototype.holdDie = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  return this.totalScore + ' held die';
};



// UI Logic

$(document).ready(function() {
  let playerArray = [];
  $("#hold").mouseover(function() {
    let img = $('#hold-image');
    img.animate({width: '110%', opacity: '0.4'}, "100");
    img.animate({width: '120%', opacity: '1'}, "100");
  });

  $("#roll").mouseover(function() {
    let img = $('#roll-image');
    img.animate({width: '110%', opacity: '0.4'}, "100");
    img.animate({width: '120%', opacity: '1'}, "100");
  });

  $("#pig-dice-form").submit(function(event) {
    event.preventDefault();
    $('input').each(function() {
      let newPlayer = new Player($(this).val());
      playerArray.push(newPlayer);
    })
    $("#pig-dice-form").hide();
    let player1NameStr = `<h2 class="card-title">${playerArray[0].playerName}</h2>
    <p>Total Score: <span id='player1Total'>${playerArray[0].totalScore}</span></p>
    <p>Turn Score: <span id='player1Turn'>${playerArray[0].turnScore}</span></p>`
    let player2NameStr = `<h2 class="card-title">${playerArray[1].playerName}</h2>
    <p>Total Score: <span id='player2Total'>${playerArray[1].totalScore}</span></p>
    <p>Turn Score: <span id='player2Turn'>${playerArray[1].turnScore}</span></p>`
    $("#player1-score").html(player1NameStr);
    $("#player2-score").html(player2NameStr);
    $("#game-board").show();
  })
    
  let currentPlayerIdx = 0;
  

  const activePlayer = () => {
    if (currentPlayerIdx === 0) {
      $(".player1Card").addClass("active");
      $(".player2Card").removeClass("active");
      $(".player2Card").addClass("inactive");
    } else {
      $(".player2Card").addClass("active");
      $(".player1Card").removeClass("active");
      $(".player1Card").addClass("inactive");
    }
  }
  activePlayer();
  $("#roll").click(function() {
    $('.playerRolls').fadeIn();
    let rolledDie = playerArray[currentPlayerIdx].rollDie();
    if (rolledDie === "wins") {
      // will want to add UI to this later
      alert(`${playerArray[currentPlayerIdx].playerName} wins!!`);
      // maybe add a reset score button when someone wins
    } if (rolledDie) {
      let htmlRollDie = `${playerArray[currentPlayerIdx].playerName} rolled ${rolledDie}`;
      $(".playerRolls").html(htmlRollDie);
        if (currentPlayerIdx === 0) {
          $('#player1Total').text(playerArray[currentPlayerIdx].totalScore);
          $('#player1Turn').text(rolledDie);
        } else {
          $('#player2Total').text(playerArray[currentPlayerIdx].totalScore);
          $('#player2Turn').text(rolledDie);
        }
    } else {
      let htmlRollDie = `${playerArray[currentPlayerIdx].playerName} rolled 1! End turn for you!`;
      $(".playerRolls").html(htmlRollDie);
      if (currentPlayerIdx === 0) {
        $('#player1Total').text(playerArray[currentPlayerIdx].totalScore);
        $('#player1Turn').text(rolledDie);
        console.log('player object', player);
      } else {
        $('#player2Total').text(playerArray[currentPlayerIdx].totalScore);
        $('#player2Turn').text(rolledDie);
        console.log('player object', player);
      }
      if ((playerArray.length - 1) === currentPlayerIdx) {
        currentPlayerIdx = 0;
      } else {
        currentPlayerIdx++;
      }
    }
    activePlayer();
  });
  $("#hold").click(function() {
    let htmlHoldDie = `${playerArray[currentPlayerIdx].playerName} held`;
    $(".playerRolls").html(htmlHoldDie);
    if ((playerArray.length - 1) === currentPlayerIdx) {
      currentPlayerIdx = 0;
    } else {
      currentPlayerIdx++;
    }
    activePlayer();
  })
})  

