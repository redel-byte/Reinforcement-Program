// S-Challenge 2 — Le relevé de notes
// Un professeur te donne les notes de 7 élèves dans un tableau : [12, 8, 15, 6, 18, 9, 14].
// Parcours ce tableau et calcule : la somme de toutes les notes, la moyenne de la classe,
// la note la plus haute, la note la plus basse, le nombre d'élèves qui ont la moyenne (≥ 10).
// Affiche un bulletin de résultats formaté.

const notes = [12, 8, 15, 6, 18, 9, 14];

// Calcul de la somme des notes
const somme = notes.reduce((total, note) => total + note, 0);

// Calcul de la moyenne
const moyenne = somme / notes.length;

// Note la plus haute
const noteMax = Math.max(...notes);

// Note la plus basse
const noteMin = Math.min(...notes);

// Nombre d'eleve qui ont la moyenne (≥ 10)
const elevesMoyenne = notes.filter(note => note >= 10).length;

// Affichage du bulletin de resultats formate
console.log(` Notes des eleves : ${notes.join(', ')}`);
console.log(` Somme des notes : ${somme}`);
console.log(` Moyenne de la classe : ${moyenne.toFixed(2)}`);
console.log(` Note la plus haute : ${noteMax}`);
console.log(` Note la plus basse : ${noteMin}`);
console.log(` Élèves ayant la moyenne (≥10) : ${elevesMoyenne}/${notes.length}`);
console.log(` Pourcentage de réussite : ${((elevesMoyenne / notes.length) * 100).toFixed(1)}%`);

// Analyse détaillée
notes.forEach((note, index) => {
    const appreciation = note >= 15 ? 'Excellent ' :
        note >= 12 ? 'Bien ' :note >= 10 ? 'Assez bien ' :'a ameliorer ';
    console.log(`  eleve ${index + 1} : ${note}/20 - ${appreciation}`);
});
