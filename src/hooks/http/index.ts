import {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../redux/useActions'
import { useTypedSelector } from '../redux/useSelectedTypes'

 
export const useHttp = () => {
	const {server} = useTypedSelector(s => s.app)
	const {setLoading, setError, setToken} = useActions()
	const navigate = useNavigate()

	const request = useCallback(async (url: any, method = 'GET', body: any = null, headers: any = {}) => {
		try {

			if(body) {
				body = JSON.stringify(body)
				headers['Content-Type'] = 'application/json'
			}

			setLoading(true)

            headers['authorization'] = `Bearer ${localStorage.getItem('token')}`

            let response = await fetch(`${server}${url}`, {method,body,headers})
            
			setLoading(false)

			if(url === '/check') {
				if(response.status === 401) {
					setToken(null)
					navigate('/')
					return false
				}
				return true
			}

			const data = await response!.json()

			if(!response!.ok) {
				throw new Error(data.message || 'Что то пошло не так')
			}

            
			return data
		} catch(e: any) {
			console.log(e.message)
            setLoading(false)
			setError(e.message || "Что то пошло не так")
			// statements
		}
	}, [navigate, server, setError, setLoading, setToken])

	return request
}