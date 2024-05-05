import React from 'react'
import { Grid, Container } from '@mui/material';
import JobCard from './JobCard';
import { getEstimatedSalary } from '../utils/jobUtils';

export default function JobGrid({ jobs }) {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {jobs.map((job) => {
                    const expectedSalary = getEstimatedSalary(job.maxJdSalary, job.minJdSalary, job.salaryCurrencyCode);
                    return <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                        <JobCard
                            jobRole={job.jobRole}
                            location={job.location}
                            expectedSalary = {expectedSalary}
                            companyName={job.companyName}
                            description={job.jobDetailsFromCompany}
                            experience={job.experience}
                            logoUrl={job.logoUrl}
                        />
                    </Grid>
                })}
            </Grid>
        </Container>
    );
}
