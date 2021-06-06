import { AxiosInstance, AxiosRequestConfig, Method } from 'axios'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { FETCHED, FETCHING, IDLE } from '../constant'
import { FetchStatus } from '../constant/types'

interface Props {
  method: Method
  url: string
  params?: Pick<AxiosRequestConfig, 'params'>
}

export const useFetchAPI = ({ method, url, params }: Props) => {
  const [status, setStatus] = useState<FetchStatus>(IDLE)
  const [data, setData] = useState<any>()
  const { current: axiosInstance } = useRef<AxiosInstance>(axios.create())

  useEffect(() => {
    const fetchData = async () => {
      setStatus(FETCHING)

      const { data: fetchData } = await axiosInstance({ method, url, params })
      setData(fetchData)
      setStatus(FETCHED)
    }

    try {
      fetchData()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return { status, data }
}
