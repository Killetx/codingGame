/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    const seed = parseInt(readline()); // needed to predict the next spawns
    const score = parseInt(readline());
    leftable = false;
    rightable = false;
    upable = false;
    downable  = false;
    board = [[],[],[],[]]
    dir=''
    for (let i = 0; i < 4; i++) {
        var inputs = readline().split(' ');
        prev = ''
        openprev=''
        for (let j = 0; j < 4; j++) {
            const cell = parseInt(inputs[j]);
            board[i].push(cell)
            if(prev!='') {
                if(prev==0 && cell != 0) leftable = true;
                if(prev !=0 && cell == 0) rightable = true;
                if(i!=0) {
                    if(board[i-1][j]==0 && board[i][j] != 0) upable = true;
                    if(board[i-1][j]!=0 && board[i][j] == 0) downable = true;
                    if(board[i-1][j]!=0&&board[i-1][j]==board[i][j]&&dir=='')dir='U';
                    
                }
                if(prev!=0&&prev==cell&&dir==''){console.error(prev + " equals " + cell + " at " + i, j); dir='L';}
                console.error(dir + dir +dir + dir +dir + dir +dir + dir +dir + dir +dir + dir +dir + dir+ " ")
                

            }
            prev=cell
            if(prev !=0) openprev=prev
        }
    }


    if(dir != '') console.log(dir); else {
        if(upable) print("U"); else if(leftable) print("L"); else if(downable) print("D"); else if(rightable) print("R"); else print("U")
    }
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
}
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    const seed = parseInt(readline()); // needed to predict the next spawns
    const score = parseInt(readline());
    leftable = false;
    rightable = false;
    upable = false;
    downable  = false;
    board = [[],[],[],[]]
    dir=''
    for (let i = 0; i < 4; i++) {
        var inputs = readline().split(' ');
        prev = ''
        openprev=''
        for (let j = 0; j < 4; j++) {
            const cell = parseInt(inputs[j]);
            board[i].push(cell)
            if(prev!='') {
                if(prev==0 && cell != 0) leftable = true;
                if(prev !=0 && cell == 0) rightable = true;
                if(i!=0) {
                    if(board[i-1][j]==0 && board[i][j] != 0) upable = true;
                    if(board[i-1][j]!=0 && board[i][j] == 0) downable = true;
                    if(board[i-1][j]!=0&&board[i-1][j]==board[i][j]&&dir=='')dir='U';
                    
                }
                if(prev!=0&&prev==cell&&dir==''){console.error(prev + " equals " + cell + " at " + i, j); dir='L';}
                console.error(dir + dir +dir + dir +dir + dir +dir + dir +dir + dir +dir + dir +dir + dir+ " ")
                

            }
            prev=cell
            if(prev !=0) openprev=prev
        }
    }


    if(dir != '') console.log(dir); else {
        if(upable) print("U"); else if(leftable) print("L"); else if(downable) print("D"); else if(rightable) print("R"); else print("U")
    }
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
}
