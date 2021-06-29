const fs = require('fs');
const chalk = require('chalk')
const getNote = function() {
    return 'Your note'
}

const addNote = function(title, body) {
    const notes = loadNote()
    const duplicateNotes = notes.filter((note) => {
        // console.log('title ' + title)
        // console.log('note title '+ note.title)
        return note.title === title;
    })
    // console.log('duplicate: ' + JSON.stringify( duplicateNotes))

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes);
        console.log(chalk.green.inverse("New note added!"))
    }else {
        console.log(chalk.red.inverse("Note title taken"))
    }
    
    
}

const removeNote = function(title){
    const notes = loadNote()
    const noteToKeep = notes.filter(function(note) {
        return note.title !== title
    })

    if(notes.length > noteToKeep.length){
        console.log(chalk.green.inverse("Note removed!"))
    }else{
        console.log(chalk.red.inverse("Not note found"))
    }

    saveNote(noteToKeep);
}

const saveNote = function(notes) {
    const dataString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataString);
}

const loadNote = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    } catch (error) {
        return []
    }
    
}

module.exports = {
    getNote,
    addNote,
    removeNote
};