// let game = {
//     round : 0,
//     targetShip: 0,
//     userResponse: "",
// };
// RANDOM NUMBERS
// const randomHullAndFirepower = (min, max) =>{
//     return Math.floor(Math.random()*(max-min + 1) + min);
//     }
    
//     const randomAccuracy = (min, max) =>{
//         return Number(((Math.random() * (max - min) + min) / 10).toFixed(2));
//     }
    
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
    
        
    // const alienShips = {
    //     hull: randomHullAndFirepower(3, 6),
    //     firepower: randomHullAndFirepower(2, 4),
    //     accuracy: randomAccuracy(6, 8)
    // };
    
    // GAME START
let alienShips = [];
const newAlien = () => {
    const newalien = {

    }
    newalien.hull = (Math.floor(Math.random() * (6-3)) + 3),
    newalien.firepower = (Math.floor(Math.random() * (4-2)) + 2),
    newalien.accuracy = (Math.random() * (.8 - .6) +.6).toFixed(2)

    // console.log(newalien)
    alienShips.push(newalien)
}
// alien 1
console.log(alienShips);
newAlien()
// alien 2
console.log(alienShips);
newAlien()
// alien 3
console.log(alienShips);
newAlien()
// alien 4
console.log(alienShips);
newAlien()
// alien 5
console.log(alienShips);
newAlien()
// alien 6
console.log(alienShips);
newAlien()

console.log(alienShips);

let buttonAttack = document.querySelector("button")
buttonAttack.addEventListener('click', attack)

function attack(){
    if (USSHelloWorld.hull <= 0 || alienShips.hull <= 0){
        // return document.querySelector("button").disabled = true

        alienShips.shift()
        let opponent = document.querySelector(".alien1")
        opponent.remove()
    } 
    if (USSHelloWorld.accuracy > alienShips[0].accuracy){
        USSHelloWorld.hull -= alienShips[0].firepower;
        alienShips[0].hull -= USSHelloWorld.firepower;
        console.log("Great, you hit the target!", alienShips);

    } else if(USSHelloWorld.accuracy = alienShips[0].accuracy){
        USSHelloWorld.hull -= alienShips[0].firepower;
        alienShips[0].hull -= USSHelloWorld.firepower;
        console.log("Oh no! You have been hit", USSHelloWorld)

    }else{
        USSHelloWorld.hull -= alienShips[0].firepower;
        alienShips[0].hull -= USSHelloWorld.firepower;
        console.log("Lucky you! You miss the target")
    }
}
    
    console.log("Attack");
    
    
    
    // console.log(USSHelloWorld, alienShips);
    
    
    
    
    
    