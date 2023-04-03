import { useMutation } from '@tanstack/react-query'
import React from 'react'

import ExerciseServices from '../../../services/exercise/exercise.services'

const NewExercise = () => {
	const { isSuccess, error } = useMutation(['create exercise'], body =>
		ExerciseServices.create(body)
	)
	return <div>NewExercise</div>
}

export default NewExercise
