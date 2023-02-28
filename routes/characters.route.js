const router = require('express').Router()
const { findByIdAndDelete } = require('../models/Character.model')
const Character = require('../models/Character.model')
/**
 * !All the routes here are prefixed with /api/characters
 */

/**
 * ? This route should respond with all the characters
 */
router.get('/', async(req, res, next) => {
	/**Your code goes here */
	try {
		const allCharacters = await Character.find()
		res.json(allCharacters)
	} catch (error) {
		next(error)
	}
})

/**
 * ? This route should create one character and respond with
 * ? the created character
 */
router.post('/', async(req, res, next) => {
	/**Your code goes here */
	// const { name, occupation, cartoon, weapon } = req.body
	try {
		const newCharacter = await Character.create({...req.body})
		res.json(newCharacter)
	} catch (error) {
		next({errorMessage: 'Invalid or missing field'})
	}

})

/**
 * ? This route should respond with one character
 */
router.get('/:id', async(req, res, next) => {
	/**Your code goes here */
	try {
		const oneCharacter = await Character.findById(req.params.id)
		if (req.params.id){
			res.json(oneCharacter)
		} else {
			res.status(404).send('Character not found')
		}
	} catch (error) {
		next(error)
	}
	
})

/**
 * ? This route should update a character and respond with
 * ? the updated character
 */
router.patch('/:id', async(req, res, next) => {
	/**Your code goes here */
	const { id } = req.params
	const characterToUpdate = { ...req.body }

	try {
		const updatedCharacter = await Character.findByIdAndUpdate(id, characterToUpdate, {new: true})
		res.json(updatedCharacter)
	} catch (error) {
		next(error)
	}
})

/**
 * ? Should delete a character and respond with a success or
 * ? error message
 */
router.delete('/:id', async(req, res, next) => {
	/**Your code goes here */
	try {
		await findByIdAndDelete(req.params.id)
		if(req.params.id){
			res.sendStatus(204)
		} else {
			res.status(404).send('Character not found')
		}
	} catch (error) {
		next(error)
	}
})

module.exports = router
