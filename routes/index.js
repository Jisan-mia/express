const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page'
  })
})
 

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page'
  })
})

router.get('/download', (req, res) => {
  res.download(path.resolve(__dirname) + '/about.html')
})


module.exports = router