/**
 * Save humans, destroy zombies!
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const humanCount = parseInt(readline());
    hoomans = []
    for (let i = 0; i < humanCount; i++) {
        var inputs = readline().split(' ');
        const humanId = parseInt(inputs[0]);
        const humanX = parseInt(inputs[1]);
        const humanY = parseInt(inputs[2]);
        hoomans.push([humanId, humanX, humanY])
    }
    hp = hoomans
    const zombieCount = parseInt(readline());
    zombies = []
    dtr = []
    saveableHumans = {};
    closestSaveableHuman = [0, 1000000]
    for (let i = 0; i < zombieCount; i++) {
        var inputs = readline().split(' ');
        const zombieId = parseInt(inputs[0]);
        const zombieX = parseInt(inputs[1]);
        const zombieY = parseInt(inputs[2]);
        const zombieXNext = parseInt(inputs[3]);
        const zombieYNext = parseInt(inputs[4]);
        zombies.push([zombieId, zombieXNext, zombieYNext])
    }

    //for the first attempt and bit of code, we'll determine who's saveable
    //then determine who's the closest to dying that's saveable
    //saveable is going to be determined (at least initially) by who can reach the hooman first. Ash or zombie

    function distCalc(x1,y1,x2,y2) {
        xDist = Math.abs(+x1-x2)
        yDist = Math.abs(+y1-y2)
        return +xDist+yDist
    }

    zombies.forEach(zombie => {
        zX=zombie[1]
        zY=zombie[2]
        hoomans.forEach(hooman => {
            if(dtr.indexOf(hooman[0]) == -1) {
                hX=hooman[1]
                hY=hooman[2]
                zDist = distCalc(+zX,+zY,+hX,+hY)
                aDist = distCalc(+x,+y,+hX,+hY)-4450
                zDist/=400
                aDist/=1000
                console.error(zDist)
                hoomanInfo = [hX, hY, aDist, zDist]
                if((aDist) < zDist) {if(!saveableHumans[hooman[0]]){saveableHumans[hooman[0]]=hoomanInfo} else {
                    console.error("Init is " + saveableHumans[hooman[0]][3])
                    if(saveableHumans[hooman[0]][3] < zDist) zDist = saveableHumans[hooman[0]][3] 
                    console.error("OVERRIDE WITH " + zDist)
                    saveableHumans[hooman[0]][3] =  zDist
                }}else{
                    console.error("NOT SAVEABLE")
                    dtr.push(hooman[0])
                    hoomans.splice(hooman[0], 1)
                    if(saveableHumans[hooman[0]]) delete saveableHumans[hooman[0]]
                }
            }
        })
        saveableHumansSorted = []
        for(humans in saveableHumans) {
            saveableHumansSorted.push([humans, saveableHumans[humans][0],saveableHumans[humans][1],saveableHumans[humans][2],saveableHumans[humans][3]])
        }
        saveableHumansSorted.sort((a,b) => b[4]-a[4])
        

    })
    console.error(saveableHumansSorted.join('\n'))
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    console.error(hp)
    if(saveableHumansSorted[0]){
        destX = saveableHumansSorted[saveableHumansSorted.length-1][1]
        destY = saveableHumansSorted[saveableHumansSorted.length-1][2]
        howFar = distCalc(x,y,destX,destY)
        console.error(howFar)
        if(howFar < 2000) { destX = x-(2000-howFar); destY = y}
        print(Math.abs(destX), Math.abs(destY))
    }else print(x,y)

}
