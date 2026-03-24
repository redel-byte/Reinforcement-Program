// R-Challenge 7 — Le système de réservation d'un restaurant
// Tu développes le système de réservation d'un restaurant (30 places max).

class SystemeReservationRestaurant {
    constructor() {
        this.capaciteMax = 30;
        this.reservations = [];
        this.prochainId = 1;
    }

    // 1. Cree une structure pour gerer les reservations
    creerReservation(nomClient, nombrePersonnes, date, heure, telephone) {
        const reservation = {
            id: this.prochainId++,
            nom_client: nomClient,
            nombre_personnes: nombrePersonnes,
            date: date,
            heure: heure,
            statut: "confirmée",
            telephone: telephone
        };
        return reservation;
    }

    // 2. Logique d'ajout de reservation
    // 3. Logique d'annulation
    // 4. Afficher les reservations d'une date donnee, triees par heure
    afficherReservationsDate(date) {

        const reservationsDuJour = this.reservations
            .filter(r => r.date === date)
            .sort((a, b) => a.heure.localeCompare(b.heure));

        const creneaux = {};
        reservationsDuJour.forEach(reservation => {
            if (!creneaux[reservation.heure]) {
                creneaux[reservation.heure] = [];
            }
            creneaux[reservation.heure].push(reservation);
        });
    }
}
// 5. Calculer le taux d'occupation d'une journee