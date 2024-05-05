import { useState } from 'react'
import NoteList from "./NoteList/note-list"
import AboutUs from "./Components/AboutUs";
import './Components/AboutUs.css';
import './App.css'
import notesData from  "./data/data.json"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotePage from './NoteList/NotePage/NotePage'
import NoteForm from './NoteList/Note/new-note'


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<NoteList />} />
        <Route path='/:noteid' element={<NotePage />}/>
        <Route path="/Notes/New" element={<NoteForm />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
