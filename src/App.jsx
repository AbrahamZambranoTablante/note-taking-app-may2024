import { useState } from 'react'
import NoteList from "./Components/note-list"
import AboutUs from "./Components/AboutUs";
import './Components/AboutUs.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotePage from './Components/NotePage'
import NoteForm from './Components/new-note'
import Nav from './common/Nav';


function App() {
  
  return (
    <>
    <Router>
      <Nav />
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
