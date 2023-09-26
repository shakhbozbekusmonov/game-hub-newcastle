import axios, { AxiosError } from 'axios'

export default axios.create({
	baseURL: import.meta.env.VITE_REACT_APP_API_URL,
	params: {
		key: import.meta.env.VITE_REACT_APP_API_KEY,
	},
})

export { AxiosError as CanceledError }
