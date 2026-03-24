// S-Challenge 1 — La liste des participants
// Tu gères les inscriptions à un événement. Crée un tableau contenant 6 noms de participants.
// Affiche la liste complète, le premier inscrit, le dernier inscrit et le nombre total de participants.
// Ensuite, ajoute 2 nouveaux participants à la fin de la liste, retire le dernier de la liste et affiche l'élément retiré,
// puis retire le premier de la liste. Affiche l'état final.

// Création du tableau avec 6 participants
let participants = ['Alice Martin', 'Bob Dupont', 'Carla Petit', 'David Bernard', 'Eva Rousseau', 'François Leroy'];

console.log('Liste complète des participants:', participants);
console.log('Premier inscrit:', participants[0]);
console.log('Dernier inscrit:', participants[participants.length - 1]);
console.log('Nombre total de participants:', participants.length);

// Ajout de 2 nouveaux participants à la fin
participants.push('Georges Michel', 'Hélène Durand');
console.log('Liste complète:', participants);

// Retrait du dernier participant et affichage de l'élément retiré
const dernierRetire = participants.pop();
console.log('Élément retiré:', dernierRetire);
console.log('Liste complète:', participants);

// Retrait du premier participant
const premierRetire = participants.shift();
console.log('Élément retiré:', premierRetire);
console.log('État final de la liste:', participants);
console.log('Nombre final de participants:', participants.length);
