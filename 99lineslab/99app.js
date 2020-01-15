let friends = [
    "Maggie",
    "Lucie",
    "Anna",
    "Salem",
    "Junie"
];
console.log(friends.length)

var linesofCode= function() {
    for (let i = 99; i > 0; i--) {
        if (i !== 1) {
            console.log(i + " lines of code in the file, " + i + " lines of code, " + friends + " strikes 1 out, clears it all out, " + i - 1 + " lines of code the file");
        }
        else {
            console.log("1 line of code in the file, 1 line of code," + friends + "John strikes it out, clears it out, no more code in the file");
        }
    }
}
linesofCode();
linesOfCode(friends[0]);
linesOfCode(friends[1]);
linesOfCode(friends[2]);
linesOfCode(friends[3]);
linesOfCode(friends[4]);


