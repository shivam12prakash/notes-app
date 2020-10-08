const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => notes.title === title)

    debugger

       if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('New notes Added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))

    }
    saveNotes(notes)

}

const removeNote = (title) =>  {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    saveNotes(notesToKeep)
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed'))
    } else {
        console.log(chalk.red.inverse('No Note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title) 

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Notes Not Found'))

    }
}

const saveNotes = (notes) => {
    dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e) {
        return []
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}