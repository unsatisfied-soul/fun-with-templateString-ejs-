const express = require("express");
const morgan = require("morgan")
const app= express()
const port = process.env.PORT || 8080
app.set('view engine','ejs')
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/about', (req,res)=> {
    res.render('pages/about',{bodyTitle: 'about'})
})
app.get('/help', (req,res)=> {
    res.render('pages/help',{bodyTitle: 'help'})
})

app.get('/',(req,res)=> {
    const post = {
        title: 'Its a test heading',
        body: 'Its a test body',
        published: true
    }

    const data = [
        {
            name: 'Antonio',
            roll: '24'
        },
        {
            name: 'Antonio',
            roll: '24'
        },
        {
            name: 'Aadasatonio',
            roll: '24'
        },
        {
            name: 'Antonio',
            roll: '24'
        },
        {
            name: 'Antonio',
            roll: '24'
        },
    ]
    res.render('pages/index',{title: "Hello its template engine", post,data, bodyTitle: 'Home'})
})

app.listen(port, (req,res)=> {
    console.log('localhost', port)
})