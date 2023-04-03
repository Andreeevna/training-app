import { useQuery } from '@tanstack/react-query'

import UserServices from '../../../services/user.services'

export const useProfile = () => {
	return useQuery(['get profile'], () => UserServices.getProfile(), {
		select: ({ data }) => data
	})
}
