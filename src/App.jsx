import { useState } from 'react'
import NoteList from "./NoteList/note-list"
import './App.css'
import notesData from  "./data/data.json"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotePage from './NoteList/NotePage/NotePage'
import NoteForm from './NoteList/Note/new-note'

function App() {
  const [notes] = useState(notesData)

  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<NoteList notes={notes} />} />
        <Route path='/:noteid' element={<NotePage />}/>
        <Route path="/Notes/New" element={<NoteForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
