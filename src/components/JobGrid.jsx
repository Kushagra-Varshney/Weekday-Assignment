import React, { useCallback, useRef, useState } from 'react'
import { Grid, Container } from '@mui/material';
import useJobSearch from '../hooks/useJobSearch'
import JobCard from './JobCard.jsx';
import { getEstimatedSalary, getExperienceString } from '../utils/jobUtils';
import { getJobsFromAPI } from '../fetchFunctions/fetchJobsFromAPI.js';
import Loader from './Loader.jsx';



export default function JobGrid() {

    const [offset, setOffset] = useState(0);

    const { loading, error, jobs } = useJobSearch(getJobsFromAPI, 9, offset);

    const observer = useRef();

    const lastJobElementRef = useCallback((node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setOffset(prevOffset => prevOffset + 10);
            }
        });
        if (node) observer.current.observe(node);
    }, []);

    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {jobs.map((job, index) => {
                        const expectedSalary = getEstimatedSalary(job.maxJdSalary, job.minJdSalary, job.salaryCurrencyCode);
                        const experience = getExperienceString(job.minExp, job.maxExp);
                        if (jobs.length === index + 1) {
                            return <Grid ref={lastJobElementRef} item xs={12} sm={6} md={4} key={job.jdUid}>
                                <JobCard
                                    jobRole={job.jobRole}
                                    location={job.location}
                                    expectedSalary={expectedSalary}
                                    companyName={job.companyName}
                                    description={job.jobDetailsFromCompany}
                                    experience={experience}
                                    logoUrl={job.logoUrl}
                                />
                            </Grid>
                        }
                        else {
                            return <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                                <JobCard
                                    jobRole={job.jobRole}
                                    location={job.location}
                                    expectedSalary={expectedSalary}
                                    companyName={job.companyName}
                                    description={job.jobDetailsFromCompany}
                                    experience={experience}
                                    logoUrl={job.logoUrl}
                                />
                            </Grid>
                        }
                    })}
                </Grid>
            </Container>
            {loading && <Loader />}
        </>
    );
}
