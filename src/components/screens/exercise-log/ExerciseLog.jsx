import React from 'react'

import { useExerciseLog } from './hooks/useExerciseLog'

const ExerciseLog = () => {
	const { exerciseLog, isLoading, isSuccess } = useExerciseLog()

	return <div>Exercise-log</div>
}

export default ExerciseLog
