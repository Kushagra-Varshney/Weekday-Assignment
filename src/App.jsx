import React, { useEffect } from 'react'
import JobGrid from './components/JobGrid.jsx';
import { Container } from '@mui/material';
import Filters from './components/Filters.jsx';
import useJobSearch from './hooks/useJobSearch';
import { getJobsFromAPI } from './fetchFunctions/fetchJobsFromAPI.js';
import { useState } from 'react';

export default function App() {
  const [offset, setOffset] = useState(0);
  const { loading, error, jobs, filters, updateJobFilters } = useJobSearch(getJobsFromAPI, 9, offset);

  return (
    <Container maxWidth="lg">
      <Filters filters = {filters} updateFilters = {updateJobFilters} />
      <JobGrid loading = {loading} error = {error} jobs = {jobs} setOffset ={setOffset} />
    </Container>
  )
}
