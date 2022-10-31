const { response } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const notes = [{
    id: 1,
    title: 'Dummy',
    content: 'Nota dummy'
}];

app.get('/', (req, res) => {
    res.status(200).send('Hola mundo')
});

app.get('/read-file', (req, res) => {
    fs.readFile(path.join(__dirname + '/R1.html'), { encoding: 'utf-8' }, (err, data) => {
        if(err) res.status(400).json({message: 'Ocurrió un error'});

        res.setHeader('content-type', 'text/plain');
        res.send(data);
    });
});

app.get('/notes', (req, res) => {
    res.send(notes)  
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});


//R4

app.use(express.json());

app.post('/notes', (req, res) => {
    const note = req.body;
    notes.push(note);

    res.send(notes)  
});

app.put('/notes', (req, res) => {
    const {id, title, content} = req.body;
    let noteIndex = notes.findIndex(item => item.id === id);

    if(noteIndex >= 0) {
        notes[noteIndex]['title'] = title;
        notes[noteIndex]['content'] = content;

        res.send(notes)
    } else {
        res.send('No se encontró la nota')
    }
});

app.patch('/notes', (req, res) => {
    const {id} = req.body;
    let noteIndex = notes.findIndex(item => item.id === id);

    if(noteIndex >= 0) {
        notes.splice(noteIndex, 1);

        res.send(notes)
    } else {
        res.send('No se encontró la nota')
    }
});