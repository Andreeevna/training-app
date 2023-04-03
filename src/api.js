import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`
const headers = {
	'Content-Type': 'application/json',
	Authorization: Cookies.get('red') ? `Bearer ${Cookies.get('red')}` : ''
}

export const $axios = axios.create({
	baseURL: API_URL,
	headers
})
