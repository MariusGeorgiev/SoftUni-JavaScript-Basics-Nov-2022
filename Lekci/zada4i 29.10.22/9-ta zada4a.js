function landscaping (input) {
    let m2LandScaping = input[0];  // земя за озеленяване в квадрати
    let oneM2 = 7.61;             // цена на квадрат 
    let allm2Price = m2LandScaping * oneM2;  // вземаме квадратите на входа и умножаваме по цената на квадрат
    let discount = 0.18;             // процент отстъпка 
    let afterDiscount = discount * allm2Price; // изчисляваме колко лева ни е отстъпката 
    let final = allm2Price - afterDiscount; // от цялата цена вадим отстъпката

    let printFinalPrice = `The final price is: ${final} lv.`;  // moga bez tozi red i da go vkaram v console.log direktno 
    let printPriceWithDiscount =`The discount is: ${afterDiscount} lv.`; // i tova moga bez t0zi red i direktno v konzolata

    console.log(printFinalPrice);
    console.log(printPriceWithDiscount);

}

landscaping(["550"])