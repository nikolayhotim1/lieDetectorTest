'usestrict';
function lieDetectorTest() {
    let lies = 0;
    let stolenDiamond = {};
    if (stolenDiamond) {
        console.log('You stole the diamond');
        lies++; // 1
    }

    let car = {
        keysInPocket: null
    };
    if (car.keysInPocket) {
        console.log('Uh oh, guess you stole the car!');
        lies++; // 1
    }
    if (car.emptyGasTank) {
        console.log('You drove the car after you stole it!');
        lies++; // 1
    }

    let foundYouAtTheCrimeScene = [];
    if (foundYouAtTheCrimeScene) {
        console.log('A sure sign of guilt');
        lies++; // 2
    }
    if (foundYouAtTheCrimeScene[0]) {
        console.log('Caught with a stolen item!');
        lies++; // 2
    }

    let yourName = ' ';
    if (yourName) {
        console.log('Guess you lied about your name');
        lies++; // 3
    }

    return lies; // 3
}

let numberOfLies = lieDetectorTest(); // 3
console.log('You told ' + numberOfLies + ' lies!'); // You told 3 lies!
if (numberOfLies >= 3) {
    console.log('Guilty as charged'); // Guilty as charged
}
