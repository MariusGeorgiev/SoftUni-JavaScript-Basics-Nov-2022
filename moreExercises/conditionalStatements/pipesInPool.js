function pipesInPool(input) {

    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let pipe1 = p1 * h;
    let pipe2 = p2 * h;
    let sumPipe = pipe1 + pipe2;

    if (volume >= sumPipe) {
        
        let allPipes = 100 / volume * sumPipe
        let pipe1Percent = 100 / sumPipe * pipe1
        let pipe2Percent = 100 / sumPipe * pipe2



        console.log(`The pool is ${allPipes.toFixed(2)}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%. }`)

    }
        else if (sumPipe > volume) {

            let overflow = sumPipe - volume


            console.log(`For ${h} hours the pool overflow with ${overflow.toFixed(2)} liters.`)
        }

 }


pipesInPool([1000,200,220,3])