import React, { useEffect } from 'react'
import { getJobsFromAPI } from './fetchFunctions/fetchJobsFromAPI'
import useJobSearch from './hooks/useJobSearch'
import JobCard from './components/JobCard.jsx';
import JobGrid from './components/JobGrid.jsx';

export default function App() {

  const { jobs } = useJobSearch(getJobsFromAPI, 10, 0);


  return (
    <div>
      <JobGrid jobs={jobs} />
    </div>
  )
}
