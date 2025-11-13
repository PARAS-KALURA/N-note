const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const notesContainer = document.getElementById('notesContainer');



btn.addEventListener("click", addNotes);

function addNotes() {
    const text = input.value.trim();
    if (text === "") return;



    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `<p>${text}</p>`


    const dltBtn = document.createElement('button');
    dltBtn.classList.add("dlt-btn");

    dltBtn.addEventListener("click", () => {
        note.remove()
    })

    dltBtn.textContent = 'Delete'

    const editBtn = document.createElement('button');
    editBtn.classList.add("edit-btn");
    editBtn.textContent = 'Edit'

   editBtn.addEventListener("click", () => {
    const newText = prompt("Enter:", note.querySelector('p').innerText);

    if(newText !== null && newText.trim() !== "") {
       note.querySelector('p').innerText = newText.trim();
    }

   })




    note.appendChild(editBtn);
    note.appendChild(dltBtn);

    notesContainer.prepend(note);



    input.value = "";

}

