import { useState } from 'react'
import NoteList from "./NoteList/note-list"
import './App.css'
import notesData from  "./data/data.json"

function App() {
  const [notes] = useState(notesData)

  return (
    <>
      <NoteList notes={notes} />
    </>
  )
}

export default App
