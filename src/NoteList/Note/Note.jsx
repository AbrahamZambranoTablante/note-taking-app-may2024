import "./Note.css"

export default function Note ( { note } ) {
    return (
        <>
        <div className="note-container">
            <h1>{note.title}</h1>
            <h3>{note.body}</h3>
            <h5>#{note.category}</h5>
        </div>
        </>
    )
}