function password(input) {
    let index = 0;
    let name = input[index];
    index++;
    let realPassword = input[index];
    index++;
    let enteredPassword = input[index];
    index++;
    while (realPassword !== enteredPassword) {
        enteredPassword = input[index];
        index++;
    }
    console.log(`Welcome ${name}!`);


}

password (["Nakov",

"1234",

"Pass",

"1324",

"1234"])