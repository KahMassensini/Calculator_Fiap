import { formatDate } from "./utils.js";

const sectionListNote = document.querySelector("#list-notes");
const KEY_STORAGE = "@NotesAvanade";

let listNotes = [];

export const saveNotesToStorage = () =>
  localStorage.setItem(KEY_STORAGE, JSON.stringify(listNotes));

export const loadNotesFromStorage = () => {
  const listStorage = JSON.parse(localStorage.getItem(KEY_STORAGE)) || [];

  listStorage.forEach(note => {
    note.date = new Date(note.date); //convertendo a data string para Date()

    addNoteToList(note);
  });
}

const createNewNoteElement = ({ id, date, text }) => {
    const newNoteElement = document.createElement("article");
  
    const pDateElement = document.createElement("p");
    pDateElement.textContent = formatDate(date);
    newNoteElement.appendChild(pDateElement);
  
    const pElement = document.createElement("P");
    pElement.textContent = text;
    newNoteElement.appendChild(pElement);
  
    const trashElement = document.createElement("span");
    trashElement.className = "material-icons";
    trashElement.textContent = "delete_forever";
  
    trashElement.addEventListener("click", (event) => removeNote(event, id));
  
    newNoteElement.appendChild(trashElement);
  
    return newNoteElement;
  };

  export const addNoteToList = (newNote) => {
    const newNoteElement = createNewNoteElement(newNote);

    sectionListNote.appendChild(newNoteElement);

    listNotes.push(newNote);
  };

  const removeNote = (event, idNoteToRemove) => {
    const noteToRemove = event.target.parentNode;

    sectionListNote.removeChild(noteToRemove);
  
    listNotes = listNotes.filter((note) => note.id !== idNoteToRemove);
  };