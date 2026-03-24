// Tu crées un CRM simplifié. Chaque contact est un objet avec : nom, entreprise, email, telephone, ville, 
// et un objet imbriqué `adresse` (rue, code_postal, ville, pays).

const contacts = [
    {
        nom: "Alice Martin",
        entreprise: "TechCorp",
        email: "alice.martin@techcorp.com",
        telephone: "06 12 34 56 01",
        ville: "Paris",
        adresse: {
            rue: "15 Avenue des Champs-Élysées",
            code_postal: "75008",
            ville: "Paris",
            pays: "France"
        }
    },
    {
        nom: "Bob Dupont",
        entreprise: "InnovateLab",
        email: "bob.dupont@innovatelab.com",
        telephone: "06 23 45 67 02",
        ville: "Lyon",
        adresse: {
            rue: "123 Rue de la République",
            code_postal: "69002",
            ville: "Lyon",
            pays: "France"
        }
    },
    {
        nom: "Carla Petit",
        entreprise: "TechCorp",
        email: "carla.petit@techcorp.com",
        telephone: "06 34 56 78 03",
        ville: "Marseille",
        adresse: {
            rue: "45 Boulevard du Prado",
            code_postal: "13008",
            ville: "Marseille",
            pays: "France"
        }
    },
    {
        nom: "David Bernard",
        entreprise: "StartupXYZ",
        email: "david.bernard@startupxyz.com",
        telephone: "06 45 67 89 04",
        ville: "Paris",
        adresse: {
            rue: "7 Rue de la Paix",
            code_postal: "75002",
            ville: "Paris",
            pays: "France"
        }
    },
    {
        nom: "Eva Rousseau",
        entreprise: "InnovateLab",
        email: "eva.rousseau@innovatelab.com",
        telephone: "06 56 78 90 05",
        ville: "Lyon",
        adresse: {
            rue: "89 Place Bellecour",
            code_postal: "69002",
            ville: "Lyon",
            pays: "France"
        }
    },
    {
        nom: "François Leroy",
        entreprise: "GlobalTech",
        email: "francois.leroy@globaltech.com",
        telephone: "06 67 89 01 06",
        ville: "Bordeaux",
        adresse: {
            rue: "23 Cours de l'Intendance",
            code_postal: "33000",
            ville: "Bordeaux",
            pays: "France"
        }
    }
];

// 1. Cree 6 contacts avec des adresses completes 
console.log(`${contacts.length} contacts`);

// 2. Affiche le nom et la ville de chaque contact
contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact.nom} - ${contact.ville}`);
});

// 3. Regroupe les contacts par ville : pour chaque ville, la liste des noms
const contactsParVille = contacts.reduce((acc, contact) => {
    if (!acc[contact.ville]) {
        acc[contact.ville] = [];
    }
    acc[contact.ville].push(contact.nom);
    return acc;
}, {});

Object.entries(contactsParVille).forEach(([ville, noms]) => {
    console.log(`${ville} : ${noms.join(', ')}`);
});

// 4. Cherche tous les contacts d'une entreprise donnee
function chercherContactsParEntreprise(nomEntreprise) {
    console.log(`\n 4. Contacts de l'entreprise "${nomEntreprise}" :`);
    const contactsEntreprise = contacts.filter(contact => 
        contact.entreprise.toLowerCase() === nomEntreprise.toLowerCase()
    );
    
    if (contactsEntreprise.length > 0) {
        contactsEntreprise.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.nom} - ${contact.email} - ${contact.telephone}`);
        });
    } else {
        console.log(`Aucun contact trouve pour l'entreprise "${nomEntreprise}"`);
    }
    return contactsEntreprise;
}

chercherContactsParEntreprise("TechCorp");
chercherContactsParEntreprise("InnovateLab");
chercherContactsParEntreprise("EntrepriseInexistante");

// 5. Modifie l'adresse d'un contact 
const contactADemoder = contacts.find(contact => contact.nom === "David Bernard");
if (contactADemoder) {
    contactADemoder.adresse = {
        rue: "15 Rue de la Tour",
        code_postal: "75116",
        ville: "Paris",
        pays: "France"
    };
    contactADemoder.ville = "Paris";
    console.log(`${contactADemoder.adresse.rue}, ${contactADemoder.adresse.code_postal} ${contactADemoder.adresse.ville}`);
}
