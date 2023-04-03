import { useQuery } from '@tanstack/react-query'

import UserServices from '../../../services/user.services'

export const useProfiles = () => {
	return useQuery(['get profile'], () => {
		UserServices.getProfile()
	})
}
