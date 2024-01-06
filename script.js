const barreInput = document.getElementById("barreInput");
const btnAdd = document.getElementById("btnAdd");

const liste = document.getElementById("liste");
const taches = document.querySelectorAll("taches");

let clone
let modele;
let taskName;

document.addEventListener("click", (event) => {
    if(event.target === btnAdd) {
        taskName = barreInput.value;
        modele = `<div id="tache${taches.length}" class="tache">
        <div>
            <input type="checkbox" name="" id="tache${taches.length}">
            <label for="tache${taches.length}">${taskName}</label>
        </div>
        <img src="close_FILL0_wght400_GRAD0_opsz24.png" alt="marche pas">
    </div>`

    clone = document.createElement("div")

        barreInput.value = "";
    }
})




