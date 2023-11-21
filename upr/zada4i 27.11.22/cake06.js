function cake(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);

    let cakeDimensions = width * length;

    let index = 2
    let cakePieces = input[index]
    index++;

    let allEatPieces = 0;


    while (cakePieces !== "STOP") {
        cakePieces = Number(cakePieces)
    
        allEatPieces += cakePieces

        if (cakeDimensions <= allEatPieces) {

            console.log(`No more cake left! You need ${allEatPieces - cakeDimensions} pieces more.`);
            

            return;
        
        }

        cakePieces = input[index]
        index++;

    }

    if (cakeDimensions > allEatPieces) {
        console.log(`${cakeDimensions - allEatPieces} pieces are left.`);
    }

}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

