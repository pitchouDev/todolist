const barreInput = document.getElementById("barreInput");
const btnAdd = document.getElementById("btnAdd");

const liste = document.querySelector("ul");
loadData()

function addTask() {
    if (!barreInput.value) {
        alert("Vous devez écrire quelque chose");
    } else {
        let clone = document.createElement("li")
        clone.innerText = barreInput.value;
        liste.appendChild(clone)
        barreInput.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        clone.appendChild(span);
        saveData()
    }
}

liste.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", liste.innerHTML)
}

function loadData() {
    liste.innerHTML = localStorage.getItem("data")
}