function catLife(input) {

    let typeCat = input[0];
    let gender = input[1];

    let yearsToLife = 0;

    switch (typeCat) {

        case "British Shorthair":
            switch (gender) {
                case "m":
                    yearsToLife = 13
                break;
                case "f":
                    yearsToLife = 14
                break;
            }
        break;
        case "Siamese":
            switch (gender) {
                case "m":
                    yearsToLife = 15
                break;
                case "f":
                    yearsToLife = 16
                break;
            }
        break;
        case "Persian":
            switch (gender) {
                case "m":
                    yearsToLife = 14
                break;
                case "f":
                    yearsToLife = 15
                break;
            }
        break;
        case "Ragdoll":
            switch (gender) {
                case "m":
                    yearsToLife = 16
                break;
                case "f":
                    yearsToLife = 17
                break;
            }
        break;
        case "American Shorthair":
            switch (gender) {
                case "m":
                    yearsToLife = 12
                break;
                case "f":
                    yearsToLife = 13
                break;
            }
        break;
        case "Siberian":
            switch (gender) {
                case "m":
                    yearsToLife = 11
                break;
                case "f":
                    yearsToLife = 12
                break;
            }
        break;
    }

    let lifeInMounts = (yearsToLife * 12 ) / 6

    if (typeCat === "British Shorthair" || typeCat === "Siamese" || typeCat === "Persian" || typeCat === "Ragdoll" || typeCat === "American Shorthair" || typeCat === "Siberian") {
        console.log(`${lifeInMounts} cat months`);
    } else {
        console.log(`${typeCat} is invalid cat!`);
    }

}
catLife(["Persian", "m"])
