const express = require('express')
const router = express.Router()
const {getMovies, setMovies, updateMovies,deleteMovies} = require ('../controllers/movieController')

router.get('/',getMovies)

router.post('/', setMovies)

router.put('/:id', updateMovies)

router.delete('/:id', deleteMovies)

module.exports = router