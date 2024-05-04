import Note from "./Note/Note"

export default function Home ({notes}) {
    return (
        <>
            <h1>Notes</h1>
            <div>
                {notes.map(note => <Note key={note.id} note={note}/>)}
            </div>
        </>
    )
}