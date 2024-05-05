import React, { useEffect } from 'react'
import {getJobsFromAPI} from './fetchFunctions/fetchJobs'

export default function App() {

  useEffect(() => {
    async function fetchData() {
      const data = await getJobsFromAPI()
      console.log(data)
    }
    fetchData()
  }, [])

  return (
    <div>App</div>
  )
}
