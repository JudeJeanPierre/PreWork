// let game = {
//     round : 0,
//     targetShip: 0,
//     userResponse: "",
// };
// RANDOM NUMBERS
const randomHullAndFirepower = (min, max) =>{
return Math.floor(Math.random()*(max-min + 1) + min);
}

const randomAccuracy = (min, max) =>{
    return Number(((Math.random() * (max - min) + min) / 10).toFixed(2));
}

// THE SHIPS
const USSHelloWorld = {
    hull: 20,
    firepower:5,
    accuracy:0.7,
};
//     attack: function(){
//         let attackAction = Math.random();
//         if (attackAction <=this.accuracy){
//             return true;
//         } else{
//             return false;
//         }
//     }
// };


// class alienShips{
//     constructor(name, hull, firepower, accuracy){
//         this.name = name;
//         this.hull = hull;
//         this.firepower = firepower;
//         this.accuracy = accuracy;
//     }
//     attack (){
//         let attackAction = Math.random();
//         if (attackAction <= this.accuracy){
//             return true;
//         } else{
//             return false;
//         }
//     }

// };

    
const alienShips = {
    hull: randomHullAndFirepower(3, 6),
    firepower: randomHullAndFirepower(2, 4),
    accuracy: randomAccuracy(6, 8)
};

// GAME START
let flag = true;
while(flag){
    const action = prompt("Your turn to act. Attack(A), Retreat (R)? (Enter s to stop/quit the game).") 
if(action.toLowerCase()==="a"){
    // hull for both
    if(USSHelloWorld.hull > 0 && alienShips.hull>0){
        if(USSHelloWorld.accuracy > Math.random()){
            alienShips.hull = alienShips - USSHelloWorld.firepower;
            console.log("Great job! Target is hit", alienShips);
        } else {
            if(alienShips.accuracy > Math.random()){
                USSHelloWorld.hull = USSHelloWorld.hull - alienShips.firepower;
                console.log("You have been hit", USSHelloWorld);
            }
        }
    // Check fighting state of the players
    if(USSHelloWorld.hull <= 0 || alienShips.hull <= 0){
        console.log("Not in health state of fighting");
        break;
        flag = false;
        }  else {
            console.log(USSHelloWorld);
            console.log(alienShips);
            continue;
        }
    }

   
} else if (action.toLocaleLowerCase() === "r"){
    console.log("Retreat");
    flag = false
} else if (action.toLocaleLowerCase() === "s"){
    console.log("Stop/quit");
    flag = false;
    }
}


//console.log("Attack");



// console.log(USSHelloWorld, alienShips);





