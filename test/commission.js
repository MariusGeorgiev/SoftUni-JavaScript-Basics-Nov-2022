function tradeCommission (input) {
    let city = input[0];
    let sales = Number(input[1]);
  
    let commission = 0;
  
    switch (city) {
     case "Sofia":
         if (sales >= 0 && sales <= 500) {
             commission = sales * 0.05;
         } else if (sales > 500 && sales <= 1000) {
             commission = sales * 0.07;
         } else if (sales > 100 && sales <= 10000) {
             commission = sales * 0.08;
         } else if (sales > 10000) {
             commission = sales * 0.12;
         } else if (sales < 0) {
             console.log("error");
         }
         break;
  
         case "Varna":
             if (sales >= 0 && sales <= 500) {
                 commission = sales * 0.045;
             } else if (sales > 500 && sales <= 1000) {
                 commission = sales * 0.075;
             } else if (sales > 100 && sales <= 10000) {
                 commission = sales * 0.10;
             } else if (sales > 10000) {
                 commission = sales * 0.13;
             } else if (sales < 0) {
                 console.log("error");
             }
             break;
             
  
         case "Plovdiv":
             if (sales >= 0 && sales <= 500) {
                 commission = sales * 0.055;
             } else if (sales > 500 && sales <= 1000) {
                 commission = sales * 0.08;
             } else if (sales > 100 && sales <= 10000) {
                 commission = sales * 0.12;
             } else if (sales > 10000) {
                 commission = sales * 0.145;
             } else if (sales < 0) {
                 console.log("error");
             }
             break;
         default:
             console.log("error");
             break;
             
             
    }
    console.log(commission.toFixed(2))
  
 }

tradeCommission(["Sofia", "100"])