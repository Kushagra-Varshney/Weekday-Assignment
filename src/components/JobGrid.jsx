import React from 'react'
import { Grid, Container } from '@mui/material';
import useJobSearch from '../hooks/useJobSearch'
import JobCard from './JobCard.jsx';
import { getEstimatedSalary, getExperienceString } from '../utils/jobUtils';
import { getJobsFromAPI } from '../fetchFunctions/fetchJobsFromAPI.js';



export default function JobGrid() {

    const { jobs } = useJobSearch(getJobsFromAPI, 10, 0);
    
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {jobs.map((job) => {
                    const expectedSalary = getEstimatedSalary(job.maxJdSalary, job.minJdSalary, job.salaryCurrencyCode);
                    const experience = getExperienceString(job.minExp, job.maxExp);
                    return <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                        <JobCard
                            jobRole={job.jobRole}
                            location={job.location}
                            expectedSalary = {expectedSalary}
                            companyName={job.companyName}
                            description={job.jobDetailsFromCompany}
                            experience={experience}
                            logoUrl={job.logoUrl}
                        />
                    </Grid>
                })}
            </Grid>
        </Container>
    );
}
