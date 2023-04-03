import { useMutation } from '@tanstack/react-query'
import React from 'react'

import ExerciseServices from '../../../services/exercise/exercise.services'

const NewExercise = () => {
	const {} = useMutation(['create exercise'], () => ExerciseServices)
	return <div>NewExercise</div>
}

export default NewExercise
