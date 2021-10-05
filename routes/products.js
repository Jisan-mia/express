const router = require('express').Router();
const fakeData = require('../fakeData')

router.get('/products', (req, res) => {
  res.render('products', {
    title: 'Products'
  })
})


router.get('/api/products', (req, res) => {
  
  res.json(fakeData);
})

module.exports = router