import { useState, useEffect } from "react";
import { getAllNotes } from "../data/fetch";
import Note from "./Note/Note"
import "./note-list.css"

export default function Home () {
    const [allNotes, setAllNotes] = useState([]);

    const [searchNote, setSearchNote] = useState("");

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getAllNotes().then(res => {
            setAllNotes(res);
            setNotes(res);
        })
    },[])


    function handleTextChange(event) {
        const search = event.target.value;
        const result = search.length ? filterNotes(search, allNotes) : allNotes;
        setSearchNote(search);
        setNotes(result);
    }

    function filterNotes(search, notes) {
        return notes.filter(note => note.title.toLowerCase().match(search.toLowerCase()) || note.category.toLowerCase().match(search.toLowerCase()));
    }

    return (
        <>
            <div className="note-list-container">
                <h1 className="notes-title">Notes</h1>
                <input 
                type="text"
                value={searchNote}
                placeholder="Search Notes"
                onChange={handleTextChange}
                />
                <div className="note-list">
                    {notes.map(note => <Note key={note.id} note={note}/>)}
                </div>
            </div>
        </>
    )
}