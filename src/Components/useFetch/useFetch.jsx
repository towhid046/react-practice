import { useEffect, useState } from "react"
import Error from '../Error/Error';

const useFetch = (url) => {

 const [data, setData] = useState([])
 const [loading, setLoading] = useState(true)
 const [isError, setIsError ] = useState(false)
  useEffect(()=> {
    const loadData = async(url) => {
      try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      } catch (error) {
        <Error error={error}/>
      }
    }
    loadData(url)
  }, [url])
  return {data}
}

export default useFetch;