import { useState } from "react";
import { createNote } from "../data/fetch";
import { useNavigate } from "react-router-dom";
import "./new-note.css";

export default function NoteForm() {
    let navigate = useNavigate();
    const [note, setNote] = useState({
        title: "",
        body: "",
        category: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        createNote(note)
        .then((response) => {
            navigate(`/note/${response.id}`);
        })
        .catch((error) => {
            console.error(error);
        });
    }

        function handleTextChange(event) {
            setNote({
                ...note,
                [event.target.id]: event.target.value,
            });
        }

    return (
        <>
        <form id="new-note" onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input 
            type="text" 
            id="title" 
            value={note.title}
            onChange={handleTextChange} 
            />

            <label htmlFor="body">Body:</label>
            <input 
            type="text"
            id="body"
            value={note.body}
            onChange={handleTextChange} />

            <label htmlFor="category">Category:</label>
            <select name="category" id="category">
                <option value="school">School</option>
                <option value="house">House</option>
                <option value="ideas">Ideas</option>
            </select>
        </form>
        <button type="submit" form="new-note">Submit</button>
        </>


    )
}