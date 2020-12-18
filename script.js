const colours = ['yellow', 'blue', 'red', 'orange'];

console.log('---while loop---');
let i = 0;
while(i < colours.length) {
    console.log(colours[i]);
    i++;
};

console.log('---for loop---');
for(i = 0; i < colours.length; i++) {
    console.log(colours[i]);
};

console.log('---for each loop---');
colours.forEach(function(colour) {
    console.log(colour);
});

/*
1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
    For Loop: 3 regels
    While Loop: 4 regels
2. Hoeveel regels neemt mijn forEach method in beslag?
    forEach method: 3 regels
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
    forEach klinkt logischer als je itereert over een array. De andere opties komen wiskundig over, deze komt data gedreven over.
    Het voordeel is dat je minder snel een tikfout zal maken in je logica.
4. Kun je een array method gebruiken op een object? Het antwoord is nee.
    Nou, nee dan.
5. Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch 
die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
    Je bent niet aan het itereren over een object. Je zet het object om in een array en gaat daarover itereren.
*/

const object = {
    name: 'Thom',
    age: 32,
    occupation: 'Bartender'
}

const objectEntries = Object.entries(object);
console.log(objectEntries);

// OF
const objectLength = Object.entries(object).length;
const objectKeys = Object.keys(object);
const objectValues = Object.values(object);

for(i = 0; i < objectLength; i++) {
    console.log('key: ' + objectKeys[i] + '. value: ' + objectValues[i]);
}