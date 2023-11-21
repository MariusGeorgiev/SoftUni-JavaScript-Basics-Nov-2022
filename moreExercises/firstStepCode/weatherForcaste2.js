function weatherForcaste2(input) {

    let gradusi = Number(input[0])

    if (gradusi >= 26.00 && gradusi <= 35.00) {

        console.log("Hot")
    }

    else if (gradusi >= 20.1 && gradusi <= 25.9) {

        console.log("Warm")
    }

    else if (gradusi >= 15.00 && gradusi <= 20.00) {

        console.log("Mild")
    }
    else if (gradusi >= 12.00 && gradusi <= 14.9) {

        console.log("Cool")

    } 
    else if (gradusi >= 5.00 && gradusi <= 11.9) {

       console.log("Cold")
    } 
    else {
        
        console.log("unknown")
    }
}

weatherForcaste2([5])