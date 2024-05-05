import { useState, useEffect } from "react";
import { getAllNotes } from "../data/fetch";
import Note from "./Note/Note"
import "./note-list.css"

export default function Home () {
    const [allNotes, setAllNotes] = useState([]);


    useEffect(() => {
        getAllNotes().then(res => setAllNotes(res))
    },[])

    return (
        <>
            <h1 className="notes-title">Notes</h1>
            <div className="note-list">
                {allNotes.map(note => <Note key={note.id} note={note}/>)}
            </div>
        </>
    )
}