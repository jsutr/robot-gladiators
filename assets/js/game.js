var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(playerName);

var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract value of playerAttack from enemyHealth
    enemyHealth = enemyHealth - playerAttack

    //Log resulting message to console to confirm proper execution
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + "health left.");
    }

    //Subtract enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack

    //Log resulting message to console to confirm proper execution
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();
