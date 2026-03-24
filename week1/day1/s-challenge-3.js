// S-Challenge 3 — La fiche d'identité
// Crée un objet représentant une personne avec ses informations : nom, prénom, âge, ville et email.
// Affiche une phrase de présentation complète. Modifie la ville de la personne (elle a déménagé).
// Ajoute un numéro de téléphone à sa fiche. Affiche la liste de toutes les informations disponibles sur cette personne (les clés) et leurs valeurs.

// Création de l'objet personne
const personne = {
    nom: 'Martin',
    prenom: 'Sophie',
    age: 28,
    ville: 'Paris',
    email: 'sophie.martin@email.com'
};

// Affichage de la phrase de présentation complète
console.log(`Bonjour, je m'appelle ${personne.prenom} ${personne.nom}, j'ai ${personne.age} ans et j'habite a ${personne.ville}. Vous pouvez me contacter a ${personne.email}.`);

// Modification de la ville 
console.log(`${personne.prenom} a demenagé à ${personne.ville}.`);

// Ajout du numéro de téléphone
personne.telephone = '06 12 34 56 78';
console.log(`Numero de telephone ajoute : ${personne.telephone}`);

// Affichage de toutes les informations disponibles 

// Affichage des clés
const cles = Object.keys(personne);
cles.forEach((cle, index) => {
    console.log(`  ${index + 1}. ${cle}`);
});

// Affichage des valeurs
console.log('\n Informations detaillees :');
cles.forEach(cle => {
    const valeur = personne[cle];
    const icone = cle === 'nom' || cle === 'prenom' ? ' ' :
                  cle === 'age' ? ' ' :
                  cle === 'ville' ? ' ️' :
                  cle === 'email' ? ' ' :
                  cle === 'telephone' ? ' ' : ' ';
    console.log(`${icone} ${cle.charAt(0).toUpperCase() + cle.slice(1)} : ${valeur}`);
});

// Affichage formaté en JSON
console.log(JSON.stringify(personne));
