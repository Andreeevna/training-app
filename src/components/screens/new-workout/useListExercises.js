import { useQuery } from '@tanstack/react-query'

import ExerciseServices from '../../../services/exercise/exercise.services'

export const useListExercises = () =>
	useQuery(['list exercises'], () => ExerciseServices.getAll(), {
		select: data => data.data
	})
