const BASE_URL = "https://my-json-server.typicode.com/RazEfron/demo/notes";

export function getOneNote (id) {
    return fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
}

export function createNote(note) {

}