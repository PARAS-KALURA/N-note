const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const notesContainer = document.getElementById('notesContainer');



btn.addEventListener("click", addNotes);

function addNotes() {
    const text = input.value.trim();
    if(text === "") return;
   
    

    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `<p>${text}</p>`

   
    const dltBtn = document.createElement('button');
    dltBtn.classList.add("dlt-btn");

    dltBtn.addEventListener("click", () => {
      note.remove()
    })

    dltBtn.innerHTML = `<span>Delete</span>`

    note.appendChild(dltBtn);

    notesContainer.prepend(note);
    
   

    input.value = "";

}

