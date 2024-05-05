import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getOneNote } from '../data/fetch';
import './NotePage.css';

function NotePage() {
    const { id } = useParams();
    const [note, setNote] = useState({ title: '', content: '' });

    useEffect(() => {
        getOneNote(id)
            .then(data => setNote(data))
            .catch(error => console.error('Error fetching note:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting form...', note);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Note</h1>
            <label>
                Title:
                <input type="text" name="title" value={note.title} onChange={handleChange} />
            </label>
            <label>
                Content:
                <textarea name="content" value={note.content} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default NotePage;
