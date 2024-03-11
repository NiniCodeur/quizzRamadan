 // Tableau contenant les réponses correctes pour chaque question
const reponsesCorrectes = ["B", "A", "C", "B", "D", "A", "C", "B", "A", "D", "C", "B", "a", "a", "b"];

// Sélection des éléments HTML
const form = document.getElementById("quiz-form");
const resultat = document.getElementById("resultat");

// Fonction pour gérer la soumission du formulaire
function soumettreQuiz() {
    event.preventDefault();

    let tabcheck = [];
    let score = 0;

    // Vérification des réponses sélectionnées
    for (let i = 1; i <= 15; i++) {
        const reponse = document.querySelector(`input[name="q${i}"]:checked`);
        
        if (reponse) {
            if (reponse.value === reponsesCorrectes[i - 1]) {
                score++;
                tabcheck.push(true);
            } else {
                tabcheck.push(false);
            }
        } else {
            tabcheck.push(false);
        }
    }

    // Affichage du résultat
    resultat.style.display = "block";
    resultat.innerText = `Votre score : ${score}/15`;
    
    // Appel de la fonction endgaming pour gérer la fin du jeu
    endgaming(tabcheck);
}

// Fonction pour gérer la fin du jeu
function endgaming(tabcheck) {
    const nbrfaute = tabcheck.filter((el) => el !== true).length;
    console.log(nbrfaute);
    switch (nbrfaute) {
        case 0:
            titreResult.innerText = "✔️  Bravo c'est sans faute ✔️";
            note.innerText = "5/5";
            break;

        case 1:
            titreResult.innerText = "🎉 Vous y êtes presque 👀";
            aide.innerText = "Retentez une autre réponse dans les cases rouges";
            note.innerText = "4/5";
            break;

        case 2:
            titreResult.innerText = "👀 Encore un effort... ";
            aide.innerText = "Retentez une autre réponse dans les cases rouges";
            note.innerText = "3/5";
            break;

        case 3:
            titreResult.innerText = "👀 Il reste quelques erreurs 😭";
            aide.innerText = "Retentez une autre réponse dans les cases rouges";
            note.innerText = "2/5";
            break;

        case 4:
            titreResult.innerText = "😭 Peux mieux faire !  😭";
            aide.innerText = "Retentez une autre réponse dans les cases rouges";
            note.innerText = "1/5";
            break;

        case 5:
            titreResult.innerText = "👎 Trop nul, peux mieux faire 👎";
            aide.innerText = "Retentez une autre réponse dans les cases rouges";
            note.innerText = "0/5";
            break;

        default:
            titreResult.innerText = "Woops, réponse inattendue";
    }
}

// Événement de soumission du formulaire
form.addEventListener("submit", soumettreQuiz);