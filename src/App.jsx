import { useState } from 'react'
import NoteList from "./NoteList/note-list"
import './App.css'
import notesData from  "./data/data.json"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotePage from './NoteList/NotePage/NotePage'

function App() {
  const [notes] = useState(notesData)

  return (
    <>

    <Router>
      <Routes>
        <Route path='/' element={<NoteList  />} />
        <Route path='/notes/:noteid' element={<NotePage />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
