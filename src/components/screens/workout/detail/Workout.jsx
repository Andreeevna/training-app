import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service.js'

import WorkoutHeader from './WorkoutHeader.jsx'

const Workout = () => {
	const { id } = useParams()

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(['get workout log', id], () => WorkoutLogService.getById(id), {
		select: ({ data }) => data
	})

	return (
		<>
			<WorkoutHeader workoutLog={workoutLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
			</div>
		</>
	)
}

export default Workout
