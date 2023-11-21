function circleAreaAndPerimeter(input) {
    let r = Number(input[0]);

   let parameters = Math.PI * r * 2;
   let area = Math.PI * Math.pow(r, 2);

    ;
    console.log(area.toFixed(2))
    console.log(parameters.toFixed(2));

}

circleAreaAndPerimeter([3])