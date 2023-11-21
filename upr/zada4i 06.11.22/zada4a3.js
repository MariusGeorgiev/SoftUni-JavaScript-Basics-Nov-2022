function add15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let hourToMin = hours * 60 + minutes + 15;
    let totalHours = (Math.floor(hourToMin / 60));
    let leftMins = hourToMin % 60;

     if (totalHours > 23 && leftMins < 10) {
      
         console.log(`${(totalHours - 24)}:0${leftMins}`);

    }
     else if (totalHours > 23 && leftMins >= 10 && leftMins <= 59) {

        console.log(`${(totalHours - 24)}:${leftMins}`);
    }

    else if (totalHours <= 23 && leftMins < 10) {
        
        console.log(`${totalHours}:0${leftMins}`);
    }

    else if  (totalHours <= 23 && leftMins >= 10 && leftMins <= 59) {

        console.log(`${totalHours}:${leftMins}`);
    } 

}

add15Minutes([23 , 56]);