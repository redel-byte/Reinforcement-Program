// R-Challenge 2 — L'analyse des ventes
// Tu es data analyst dans un magasin. Tu as un tableau de 12 objets représentant les ventes mensuelles (mois, chiffre_affaires, nb_clients, ville).

const ventesMensuelles = [
    { mois: "Janvier", chiffre_affaires: 45000, nb_clients: 320, ville: "Paris" },
    { mois: "Février", chiffre_affaires: 52000, nb_clients: 380, ville: "Lyon" },
    { mois: "Mars", chiffre_affaires: 48000, nb_clients: 350, ville: "Paris" },
    { mois: "Avril", chiffre_affaires: 61000, nb_clients: 420, ville: "Marseille" },
    { mois: "Mai", chiffre_affaires: 55000, nb_clients: 390, ville: "Lyon" },
    { mois: "Juin", chiffre_affaires: 72000, nb_clients: 480, ville: "Paris" },
    { mois: "Juillet", chiffre_affaires: 68000, nb_clients: 460, ville: "Marseille" },
    { mois: "Août", chiffre_affaires: 58000, nb_clients: 400, ville: "Lyon" },
    { mois: "Septembre", chiffre_affaires: 63000, nb_clients: 440, ville: "Paris" },
    { mois: "Octobre", chiffre_affaires: 59000, nb_clients: 410, ville: "Marseille" },
    { mois: "Novembre", chiffre_affaires: 75000, nb_clients: 500, ville: "Paris" },
    { mois: "Décembre", chiffre_affaires: 82000, nb_clients: 550, ville: "Lyon" }
];

// 1. Calcule le chiffre d'affaires total de l'annee
const caTotal = ventesMensuelles.reduce((total, vente) => total + vente.chiffre_affaires, 0);
console.log(`CA total : ${caTotal} $`);

// 2. Calcule le chiffre d'affaires moyen par mois
const caMoyen = caTotal / ventesMensuelles.length;
console.log(`CA moyen : ${caMoyen}`);

// 3. Trouve le mois avec le meilleur chiffre d'affaires
const meilleurMoisCA = ventesMensuelles.reduce((max, vente) => 
    (vente.chiffre_affaires > max.chiffre_affaires) ? vente : max
);
console.log(`${meilleurMoisCA.mois} : ${meilleurMoisCA.chiffre_affaires} $ (${meilleurMoisCA.ville})`);

// 4. Trouve le mois avec le moins de clients
const moisMoinsClients = ventesMensuelles.reduce((min, vente) => 
    (vente.nb_clients < min.nb_clients) ? vente : min
);
console.log(`${moisMoinsClients.mois} : ${moisMoinsClients.nb_clients} clients (${moisMoinsClients.ville})`);

// 5. Cree un nouveau tableau avec uniquement les mois ou le CA dépasse 50 000
const moisCAeleve = ventesMensuelles.filter(vente => vente.chiffre_affaires > 50000);
moisCAeleve.forEach((vente, index) => {
    console.log(`${index + 1}. ${vente.mois} : ${vente.chiffre_affaires}`);
});

// 6. Cree un resume par ville : pour chaque ville, le CA total et le nombre total de clients
const resumeParVille = ventesMensuelles.reduce((acc, vente) => {
    if (!acc[vente.ville]) {
        acc[vente.ville] = { caTotal: 0, clientsTotal: 0, nbMois: 0 };
    }
    acc[vente.ville].caTotal += vente.chiffre_affaires;
    acc[vente.ville].clientsTotal += vente.nb_clients;
    acc[vente.ville].nbMois++;
    return acc;
}, {});

Object.entries(resumeParVille).forEach(([ville, donnees]) => {
    const caMoyenVille = donnees.caTotal / donnees.nbMois;
    const clientsMoyensVille = donnees.clientsTotal / donnees.nbMois;
    console.log(`${ville} :`);
    console.log(`  CA total : ${donnees.caTotal}`);
    console.log(`  CA moyen : ${caMoyenVille}`);
    console.log(`  Clients total : ${donnees.clientsTotal}`);
    console.log(`  Clients moyens : ${Math.round(clientsMoyensVille)}`);
    console.log(`  Nombre de mois : ${donnees.nbMois}`);
});
