import Note from "./Note/Note"
import "./note-list.css"

export default function Home ({ notes }) {
    return (
        <>
            <h1 className="notes-title">Notes</h1>
            <div className="note-list">
                {notes.map(note => <Note key={note.id} note={note}/>)}
            </div>
        </>
    )
}