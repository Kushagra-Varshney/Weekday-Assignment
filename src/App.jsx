import React, { useEffect } from 'react'
import JobGrid from './components/JobGrid.jsx';
import { Container } from '@mui/material';

export default function App() {

  return (
    <Container maxWidth="lg">
      <JobGrid />
    </Container>
  )
}
