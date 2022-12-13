//intro song and options to mute/play it
let fantasySong = document.getElementById('fantasy')
fantasySong.play()


    document.addEventListener('keydown', function(m){
        if(m.key == 'm'){
            fantasySong.muted = true
            fantasySong.pause()
        } else {
            return
           
        }
    })

    document.addEventListener('keydown', function(e){
        if(e.key == 'p'){
            fantasySong.muted = false
            return fantasySong.play()
        }
    })

//global variables

let xpDoc = document.getElementById("xp")
let hpDoc = document.getElementById("health")
let goldDoc = document.getElementById("gold")
let storeDoc = document.getElementById("store")
let caveDoc = document.getElementById("cave")
let fightDoc = document.getElementById("fight")
let textDoc = document.getElementById("text")

let xp = 0
let health = 100
let gold = 50

let dragonHealth = 100


//function to update game on attacks and check game status

const updateGame = (player, npc, gameState) => {
    hpDoc.innerText = player.health
        if(player.health <= 0 || npc.health <= 0){
            game1.isOver = true;
            gameState = game1.isOver
        textDoc.innerText = game1.declareWinner(gameState, player1, npc)
        }
}
//classes with strike methods to initate fighting

class Dragon {
    constructor(npc, health, damage){
        this.health = health
        this.damage = damage
        this.npc = npc
    }
    npcStrike(npc, player, damage){
        let dragonAttack = Math.floor(Math.random(damage)* 10)
        player.health -= dragonAttack
        document.getElementById('fire').play()
        updateGame(player, npc, gameState)
    }
}
class Player {
    constructor(player, health, damage){
    this.health = health
    this.damage = damage
    this.player = player
    }

    strike(player, npc, damage){
        if(dragonSword == false){
        let myAttack = Math.floor(Math.random(damage)* 10)
        npc.health = npc.health -= myAttack
        document.getElementById('sword').play()
        }
        else {
            let myAttack = Math.floor(Math.random(damage)* 15)
            npc.health = npc.health -= myAttack
            
            
        }

        updateGame(player, npc, gameState)
    }

    

}
//game class that determines if player wins or loses in battle against dragon
class Game {
    constructor(){
        this.isOver = false
    }

    declareWinner(isOver, player1, npc){
        let message;
       if(isOver == true && player1.health <= 0){
        goldDoc.innerText = gold -= Math.floor(Math.random(gold)*50)
        xpDoc.innerText = xp -= 10
        document.getElementById('scream').play()
        message = "You have been slain..."
        return message
        
       } else if(isOver == true && npc.health <= 0){   
        goldDoc.innerText = gold += Math.floor(Math.random(gold)*50)
        xpDoc.innerText = xp += 10
        document.getElementById('success').play()
        message = "You have slain the dragon!"
        return message
        
       }
    }

    fightDragon(player1, npc){        

        while(this.isOver == false){
            player1.strike(player1, npc, 10)
            npc.strike(npc, player1, 10)
        }
        return this.declareWinner(game1.isOver, player1, npc)
    }
}


//cave which revitalizes player and resets game state


    caveDoc.addEventListener("click", function(){
        hpDoc.innerText = 100
        player1.health = 100
        npc.health = 100
        gameState = false
        document.getElementById('camp').play()
        textDoc.innerText = "Choose your adventure..."
        updateGame(player1, npc, gameState)
    })
    

//store which allows player to buy a buffed sword for faster kills

    storeDoc.addEventListener("click", function(){
        textDoc.innerText = 'You attempt to buy the Forged Dragon Sword...'
            if(gold >= 300 && xp >= 100){
                textDoc.innerText = 'You have purchased the Forged Dragon Sword! (+15 Att Damage)'
                goldDoc.innerText = gold -= 200
                xpDoc.innerText = xp -= 100
                document.getElementById('unsheath').play()
                return specialWeapon()
            } else if(gold < 300 && xp < 100){
                textDoc.innerText = 'Sorry, you are not experienced enough.. You need 300 gold and 100 XP'
                return
            }
    })

//player and npc and gamestate variable
let player1 = new Player('player', 100, 10)
let npc = new Dragon('npc', 100, 10)
const game1 = new Game()
let gameState = game1.isOver
let dragonSword = false

    
    //creates the special sword        
    function specialWeapon() {
        dragonSword = true
        return 
        
}


updateGame(player1, npc)

//fight button which has conditionals that checks if game is over and updates npc health

fightDoc.addEventListener("click", function(){
    if(player1.health > 0 && npc.health > 0 && gameState == false){
    player1.strike(player1, npc, player1.attackDamage)
    textDoc.innerText = `The dragon is at ${npc.health} hp..`
    npc.npcStrike(npc, player1, npc.attackDamage)
    

} else {

    return
}
})

//shortcuts for in-game buttons
document.addEventListener('keydown', function(e){
    if(e.key == 'q' && player1.health > 0 && npc.health > 0 && gameState == false){
        player1.strike(player1, npc, player1.attackDamage)
        textDoc.innerText = `The dragon is at ${npc.health} hp..`
        npc.npcStrike(npc, player1, npc.attackDamage)
    } else {
        return
    }
})

document.addEventListener('keydown', function(e){
    if(e.key == 'c'){
        hpDoc.innerText = 100
        player1.health = 100
        npc.health = 100
        gameState = false
        document.getElementById('camp').play()
        textDoc.innerText = "Choose your adventure..."
        updateGame(player1, npc, gameState)
        return
    }
})

