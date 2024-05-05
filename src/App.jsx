import { useState } from 'react'
import NoteList from "./NoteList/note-list"
import AboutUs from "./Components/AboutUs";
import './Components/AboutUs.css';
import './App.css'
import notesData from  "./data/data.json"

function App() {
  
  return (
    <>
      <div>
        <Router>
            <Routes>
              <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </Router> 
      </div>
    </>

    
  )
}

export default App
