import React, { useEffect } from 'react'
import {getJobsFromAPI} from './fetchFunctions/fetchJobsFromAPI'
import useJobSearch from './hooks/useJobSearch'

export default function App() {

  const {jobs} = useJobSearch(getJobsFromAPI, 10, 0);

  return (
    <div>{jobs.map(job => <li key = {job.jdUid}>{job.companyName}</li>)}</div>
  )
}
