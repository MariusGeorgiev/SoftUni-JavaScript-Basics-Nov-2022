function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let num = Number(input[2]);

    switch (city) {

        case "Varna":
            switch (product) {

                case "coffee": 
                console.log(num * 0.45);
                break;

                case "water":
                console.log(num * 0.70);
                break;

                case "beer":
                console.log(num * 1.10);
                break;

                case "sweets":
                console.log(num * 1.35);
                break;
                
                case "peanuts":
                console.log(num * 1.55);
                break;
            }
        break;

        case "Sofia":
            switch (product) {

                case "coffee": 
                console.log(num * 0.50);
                break;

                case "water":
                console.log(num * 0.80);
                break;

                case "beer":
                console.log(num * 1.20);
                break;

                case "sweets":
                console.log(num * 1.45);
                break;
                
                case "peanuts":
                console.log(num * 1.60);
                break;
            }
        break;

        case "Plovdiv":
            switch (product) {

                case "coffee": 
                console.log(num * 0.40);
                break;

                case "water":
                console.log(num * 0.70);
                break;

                case "beer":
                console.log(num * 1.15);
                break;

                case "sweets":
                console.log(num * 1.30);
                break;
                
                case "peanuts":
                console.log(num * 1.50);
                break;
            }
        break;

    }


}

smallShop(["coffee", "Varna", "2"])