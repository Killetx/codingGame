/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);
cY = Y0
cX = X0
highest=0
rightest=W
lowest=H
leftest=0
// game loop
while (true) {
    const bombDir = readline().split(''); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    output = []
    console.error(bombDir, cX, cY)
    console.error("lowest"+lowest+" highest"+highest)
    bombDir.forEach(dir => {


        switch(dir) {
            case 'U':
                lowest=cY
                cY=Math.floor((cY+highest)/2)
                break;

            case 'D':
                highest=cY
                cY=cY+(Math.ceil((lowest-cY)/2))
                break;

            case 'L':
                rightest=cX
                cX=Math.floor((cX+leftest)/2)
                break;

            case 'R':
                leftest=cX
                cX=cX+(Math.ceil((rightest-cX)/2))
                break;
        }


    })

    console.error(bombDir, cX, cY)
    console.error("lowest"+lowest+" highest"+highest)
    console.log(cX, cY)
}
