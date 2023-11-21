function clockPartTwo() {

    for (let hour = 0; hour < 24; hour++) {
        for (let minutes = 0; minutes < 60; minutes++) { 
            for (let seconds = 0; seconds < 60; seconds++) {
                console.log(`${hour} : ${minutes} : ${seconds}`);
            }
        }
    }
}
clockPartTwo()