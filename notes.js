const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your notes...'
}
//ADD NOTES!!!!!
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
//debug


    if (!duplicateNote) {
        notes.push({
            title : title,
            body : body
    })
//SAVE NOTES!!!
   saveNotes(notes)
   console.log(chalk.green.inverse('New Note Added!'))
}else {
    console.log(chalk.red.inverse('Note Title Taken!'))
    }
}
//REMOVE NOTES!!!!
const removeNote = (title) => {
    const notes  = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }

}
//LIST NOTES!!!!
const ListNotes = () =>{
    const notes = loadNotes()

    console.log(chalk.blue.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}
//READ NOTE
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    }else{
        console.log(chalk.red.inverse('Note not Found!'))
    }
}
//SAVE NOTES2!!!!
const saveNotes = (notes) => {
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json',dataJSON)
}
    
    
//LOAD NOTES!!!!
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return[]
    }

  
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    ListNotes: ListNotes,
    readNote: readNote
}  
