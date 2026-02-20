const notes = [12, 8, 15, 10, 7];

let somme = 0;
let meilleurNote = notes[0];
let compteur = 0;

for (let i = 0; i < notes.length; i++){
    somme += notes[i];

    if (notes[i] > meilleurNote){
        meilleurNote = notes[i];
    }

    if (notes[i] >= 10){
        compteur++;
    }
}

const moyenne = somme / notes.length;

console.log("Moyenne de la classe : " +moyenne);
console.log("Meilleure note : " +meilleurNote);
console.log("Nombre de notes >= 10 : " +compteur);
