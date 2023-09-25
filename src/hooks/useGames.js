import { useEffect, useState } from 'react'
import apiClient, { AxiosError } from '../service/api-client'

const useGames = () => {
	const [games, setGames] = useState([])
	const [error, setError] = useState('')
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		const controller = new AbortController()

		setLoading(true)

		apiClient
			.get('/games', { signal: controller.signal })
			.then(res => {
				setGames(res.data.results)
				setLoading(false)
			})
			.catch(err => {
				if (err instanceof AxiosError) return
				setError(err.message)
				setLoading(false)
			})

		return () => controller.abort()
	}, [])

	return { games, error, isLoading }
}

export default useGames
