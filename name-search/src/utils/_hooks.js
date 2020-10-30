import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGet = (url, body) => {
  return useRequest(url, body, 'get')
}

export const usePost = (url, body) => {
  return useRequest(url, body, 'post')
}

export const usePut = (url, body) => {
  return useRequest(url, body, 'put')
}

export const useDelete = (url, body) => {
  return useRequest(url, body, 'delete')
}

const useRequest = (url, body, method) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      setLoading(true)

      try {
        let res
        
        switch(method){
          case 'get':
            res = await axios.get(url, body)
            break
          case 'put':
            res = await axios.put(url, body)
            break
          case 'post':
            res = await axios.post(url, body)
            break
          case 'delete':
            res = await axios.delete(url, body)
            break
          default:
            res = {data: null}
        }
        
        if (!cancelled) {
          setData(res.data)
          setLoading(false)
          setError(null)
        }
      } catch (_error) {
        console.error(_error)
        if (!cancelled) {
          setError(_error)
          setData(null)
          setLoading(false)
        }
      }
    })();

    return () => {
      cancelled = true
    }
  }, [url, body, method])

  const refetch = async () => {
    try {
      await axios.get(url, body);
      const res = await axios.get(url, body);
      setData(res.data)
      setError(null)
    } catch (_error) {
      console.error(_error)
      setError(_error)
    }
  }

  if (method === 'get'){
    return {
      data,
      error,
      loading,
      refetch,
    }
  }
  
  return {
    data,
    error,
    loading,
  }
}
