export const $axios = axios.create({
	baseUrl: '/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}
})
