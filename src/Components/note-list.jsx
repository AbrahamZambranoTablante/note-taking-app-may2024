import { useState, useEffect } from "react";
import { getAllNotes } from "../data/fetch";
import Note from "./Note"
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
                <div className="search-bar">
                    <label htmlFor="searchTitle"> Search Notes
                        <input  
                        type="text"
                        value={searchNote}
                        id="searchTitle"
                        onChange={handleTextChange}
                        />
                    </label>
                </div>
                <h1 className="notes-title">Notes</h1>
                <div className="note-list">
                    {notes.map(note => <Note key={note.id} note={note}/>)}
                </div>
            </div>
        </>
    )
}