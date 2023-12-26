import axios from 'axios'
import auth from '@/store/auth'

export default () => {
  const token = auth.state.token
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return axiosInstance
}
