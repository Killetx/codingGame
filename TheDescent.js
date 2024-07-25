/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/


// game loop
while (true) {
    mountains = []
    mountainsSort = []
    for (let i = 0; i < 8; i++) {
        mountains.push(parseInt(readline())); // represents the height of one mountain.
        mountainsSort.push(mountains[mountains.length-1])
        mountainsSort.sort((a, b) => b-a);
    }
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.error(mountainsSort)
    console.log(mountains.indexOf(mountainsSort[0]));     // The index of the mountain to fire on.



}
