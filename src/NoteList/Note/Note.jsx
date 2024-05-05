import "./Note.css"
import { Link } from "react-router-dom"

export default function Note ( { note } ) {
    return (
        <>
        <div className="note-container">
            <h1><Link to={`/${note.id}`}>{note.title}</Link></h1>
            <h3>{note.body}</h3>
            <h5>#{note.category}</h5>
        </div>
        </>
    )
}