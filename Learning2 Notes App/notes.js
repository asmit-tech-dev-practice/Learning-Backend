const fs = require('fs')

const addNote = (title, body) => {
  const notes = loadNotes()

  let duplicateNote = undefined

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      duplicateNote = notes[i]
      break
    }
  }

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New note added!')
  } else {
    console.log('Note title taken!')
  }
}

const removeNote = (title) => {
  const notes = loadNotes()

  const filteredNotes = notes.filter((note) => note.title !== title)

  if (notes.length > filteredNotes.length) {
    console.log('Note removed!')
    saveNotes(filteredNotes)
  } else {
    console.log('No note found!')
  }
}

const listNotes = () => {
  const notes = loadNotes()

  console.log('Your notes:')
  notes.forEach((note) => {
    console.log(note.title)
  })
}

const readNote = (title) => {
  const notes = loadNotes()

  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log('Title:', note.title)
    console.log('Body:', note.body)
  } else {
    console.log('Note not found!')
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const data = fs.readFileSync('notes.json', 'utf-8')
    return JSON.parse(data)
  } catch (e) {
    return []
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
