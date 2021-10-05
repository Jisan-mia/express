const express = require('express') // returns a funciton
const path = require('path')
const apiKeyMiddleware = require('./middlewares/apiKey')

const app = express() 

const mainRouter = require('./routes/index')
const productRouter = require('./routes/products')


const PORT = process.env.PORT || 3000

// ejs template engine
app.set('view engine', 'ejs')
// console.log(app.get('View engine'))


// console.log(app.get('views'))



// static middleware (built-in for express)
app.use(express.static('public'))


// global middleware which apply to all
// app.use(apiKeyMiddleware)


app.use(mainRouter)
app.use(productRouter)
// every router prefix
// app.use('/en', mainRouter)

// create server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})





/*
// create home route 
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page'
  })
})

// create about route
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page'
  })
})


// create download route which will download some file
app.get('/download', (req, res) => {
  res.download(path.resolve(__dirname) + '/about.html')
}) 

*/