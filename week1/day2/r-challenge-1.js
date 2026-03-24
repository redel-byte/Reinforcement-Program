const musique = [
  { titre: "La Vie En Rose", artiste: "Mistinguett", duree: 199, genre: "Jazz" },
  { titre: "La Vie En Rose", artiste: "Grace Jones", duree: 270, genre: "Pop" },
  { titre: "La Vie En Rose", artiste: "Françoise Hardy", duree: 200, genre: "Pop" },
  { titre: "Non, je ne regrette rien", artiste: "Debbie Gibson", duree: 277, genre: "Pop" },
  { titre: "I Will Survive", artiste: "Gloria Gaynor", duree: 250, genre: "Pop" },
  { titre: "Respect", artiste: "Aretha Franklin", duree: 220, genre: "Soul" },
  { titre: "Dancing Queen", artiste: "ABBA", duree: 310, genre: "Pop" },
  { titre: "Bohemian Rhapsody", artiste: "Queen", duree: 540, genre: "Rock" },
  { titre: "Imagine", artiste: "John Lennon", duree: 252, genre: "Rock" },
  { titre: "Hallelujah", artiste: "Leonard Cohen", duree: 250, genre: "Soul" }
];
// 1. Affiche uniquement les titres de toutes les chansons
const titres = musique.reduce((acc, mus) => (acc.push(mus.titre), acc), [])

// 2. Cree un nouveau tableau contenant uniquement les chansons de genre "Rock"
const rock = musique.filter(mus => mus.genre === "Rock");

// 3. Crée un nouveau tableau où chaque durée est convertie en format "3:45" (minutes:secondes)
const format = musique.map((mus) => {

  const m = Math.floor(mus.duree / 60)
  const s = Math.floor(mus.duree % 60)

  return mus.duree = `${m}:${s}`
})

// 4. Calcule la durée totale de la playlist en minutes et secondes
const DureeTotal = musique.reduce((acc, mus) => {
  const total = mus.duree
  const h = Math.floor(total / 3600)
  const m = Math.floor(total % 3600 / 60)
  const s = Math.floor(total % 60)
  acc["total"] = `${h}:${m}:${s}`
  return acc
}, {})

// 5. Trouve la chanson la plus longue
const Longue = musique.reduce((acc, mus) => acc.duree > mus.duree ? acc : mus)

// 6. Verifie si toutes les chansons durent moins de 6 minutes
const moins6 = musique.every(mus => mus.duree > 6 * 60)

// 7. Verifie si au moins une chanson est du genre "Jazz"
const SomeJazz = musique.some(mus => mus.genre === "Jazz")

// 8. Trie les chansons par duree, de la plus courte a la plus longue
const TrieParLongue = musique.sort((a, b) => a.duree - b.duree)


