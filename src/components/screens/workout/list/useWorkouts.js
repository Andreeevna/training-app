import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import WorkoutServices from '../../../../services/workout/workout.services'

export const useWorkouts = () => {
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => WorkoutServices.getAll(),
		{
			select: ({ data }) => {
				return data
			}
		}
	)

	const navigate = useNavigate()

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['Create new workout log'],
		workoutId => WorkoutLogService.create(workoutId),

		{
			onSuccess({ data }) {
				navigate(`/workout/${data.id}`)
				console.log(data)
			}
		}
	)

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}
