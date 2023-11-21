function planningProect(input) {
    let name = input[0];
    let proects = input[1];
    let PlaningHours = 3;
    let hoursToFinishAll = proects * PlaningHours;

    let print = `The architect ${name} will need ${hoursToFinishAll} hours to complete ${proects} project/s.`;

    console.log(print);
}

planningProect(["Georgi" , "4"])