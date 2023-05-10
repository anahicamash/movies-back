const asyncHandler = require('express-async-handler')
const Movie =require('../models/movieModel')

const getMovies = asyncHandler(async (req,res) => {

    const movies = await Movie.find()
    res.status(200).json(movies) 
})


const setMovies = asyncHandler(async  (req,res) => {
    if (!req.body.title){

        res.status(400)
        throw new Error ('Please add info')
    }
    // console.log(req.body)
    // res.status(201).json({message: 'Create movie'})

    const movie = Movie.create({
        title: req.body.title
    })
    res.status(201).json(movie)
})

const updateMovies = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Edit movie ${req.params.id}`})
})

const deleteMovies = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete movie ${req.params.id}`})
})

module.exports = {
    getMovies,
    setMovies,
    updateMovies,
    deleteMovies
}