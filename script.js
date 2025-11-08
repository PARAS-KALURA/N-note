const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const notesContainer = document.getElementById('notesContainer');

btn.addEventListener("click", addNotes);

function addNotes() {
    const text = input.value.trim();
    if (text === "") return;

    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `<p>${text}</p>`;

   
    notesContainer.prepend(note);
    input.value = "";
}


