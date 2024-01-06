const barreInput = document.getElementById("barreInput");
const btnAdd = document.getElementById("btnAdd");

const liste = document.querySelector("ul");

function addTask() {
    let clone = document.createElement("li")
    clone.innerText = barreInput.value;
    liste.appendChild(clone)
    barreInput.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    clone.appendChild(span);

    document.addEventListener("click", (event) => {
        if (event.target === clone) {
            clone.classList.toggle("checked");
        } else if (event.target === span) {
            clone.remove()
        }
    })


}

