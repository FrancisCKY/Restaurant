const express = require('express')
const app = express()
const port = 3000
const { engine } = require('express-handlebars')
const db = require('./models')
const methodOverride = require('method-override')
const Restaurant = db.Restaurant

app.use(express.static('public'))
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/restaurants', (req, res) => {
  return Restaurant.findAll({
    attributes: ['id', 'name', 'name_en', 'category', 'image', 'location', 'phone', 'google_map', 'rating', 'description'],
    raw: true
  })
    .then((restaurant) => res.render('restaurants', { restaurant }))
    .catch((error) => res.status(422).json(err))
})

app.get('/restaurants/add', (req, res) => {
  res.render('add')
})

app.post('/restaurants', (req, res) => {
  const name = req.body.name;
  const name_en = req.body.name_en;
  const category = req.body.category;
  const image = req.body.image;
  const location = req.body.location;
  const phone = req.body.phone;
  const google_map = req.body.google_map;
  const rating = req.body.rating;
  const description = req.body.description;
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => res.redirect('/restaurants'))
})

app.get('/restaurants/detail/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findByPk(id, {
    attributes: ['id', 'name', 'name_en', 'category', 'image', 'location', 'phone', 'google_map', 'rating', 'description'],
    raw: true
  })
    .then((restaurant) => res.render('detail', { restaurant }))
})

app.get('/restaruants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findByPk(id, {
    attributes: ['id', 'name', 'name_en', 'category', 'image', 'location', 'phone', 'google_map', 'rating', 'description'],
    raw: true
  })
    .then((restaurant) => res.render('edit', { restaurant }))
})

app.put('/restaurants/detail/:id', (req, res) => {
  const body = req.body
  const id = req.params.id

  return Restaurant.update({
    name: body.name,
    name_en: body.name_en,
    category: body.category,
    image: body.image,
    location: body.location,
    phone: body.phone,
    google_map: body.google_map,
    rating: body.rating,
    description: body.description
  },
    {
      where: { id }
    })
    .then(() => res.redirect(`/restaurants/detail/${id}`))
})

app.delete('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.destroy({ where: { id } })
    .then(() => res.redirect('/restaurants'))
})

app.listen(port, (req, res) => {
  console.log(`The server is running on ${port}`)
}) 