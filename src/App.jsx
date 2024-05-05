import React, { useEffect } from 'react'
import { getJobsFromAPI } from './fetchFunctions/fetchJobsFromAPI'

import JobGrid from './components/JobGrid.jsx';

export default function App() {




  return (
    <div>
      <JobGrid />
    </div>
  )
}
