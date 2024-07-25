/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTx = parseInt(inputs[2]); // Thor's starting X position
var initialTy = parseInt(inputs[3]); // Thor's starting Y position
var thorX = initialTx;
var thorY = initialTy;
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    output=''
    console.error(lightX,thorX,lightY,thorY)
    if(lightY!=thorY){
        if(lightY>thorY){output+="S"; thorY++}else{output+="N"; thorY--}
    }

    if(lightX!=thorX){
        if(lightX> thorX){output+="E"; thorX++}else {output+="W"; thorX--}
    }

    
    console.log(output);
}
