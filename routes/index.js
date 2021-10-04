
const router = require('express').Router()

const apiKeyMiddleware = require('../middlewares/apiKey')

// apply this middleware to all the route of this file
// router.use(apiKeyMiddleware)


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

// apply middleware to particular route
router.get('/api/products', apiKeyMiddleware, (req, res) => {
  res.json([
    {
      id: '123',
      name: 'Samsung s6'
    },
    {
      id: '124',
      name: 'iPhone 11'
    },
  ])
})


module.exports = router