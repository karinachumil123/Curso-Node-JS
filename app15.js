const express = require('express')
const hbs= require('hbs')
require('dotenv').config();

const app= express()
const port= process.env.PORT 

app.set('view engine','hbs')

hbs.registerPartial(__dirname+'/views/portials')

app.use(express.static('public3'))

//enviando argumentos a home 3
app.get('/', (req, res) => {
    res.render('home3',{
        nombre: "Karina Chumil",
        titulo: "Curso de NodeJS"
    })
})

/**
 * enviando objeto a generic.hbs, pagina renderizada res,render
 * esta pagina tiene aplicada portails
 */

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: "Karina Chumil",
        titulo: "Curso de NodeJS"
    })
})

/**
 * enviando objeto a elements.hbs, pagina renderizada res,render
 * esta pagina tiene aplicada portails
 */

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: "Karina Chumil",
        titulo: "Curso de NodeJS"
    })
})

app.get('/generic',(req,res)=>{
    res.sendFile(__dirname+'/public3/generic.html')
})

app.get('/elements',(req,res)=>{
    res.sendFile(__dirname+'/public3/elements.html')
})

app.get('*',(res,req)=>{
    res.sendFile(__dirname+'/public/404.html')
})

app.listen(port,()=>{
    console.log(`servidor escuchando en el puerto ${port}`)
})