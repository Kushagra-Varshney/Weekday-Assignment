import React, { useState, useEffect } from 'react'
// //Company name
// Location
// Remote/on-site
// Tech stack
// Role
// Min base pay

export default function useJobSearch(fetchFn, limit, offset) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState({
        companyName: '',
        minBasePay: 0,
        remote: 'all',
        role: [],
        experience: 0,
    });

    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true);
                const data = await fetchFn(limit, offset);
                console.log(data.jdList);
                setJobs(prevJobs => {
                    const jobMap = new Map();
                    prevJobs.forEach(job => jobMap.set(job.jdUid, job));
                    data.jdList.forEach(job => jobMap.set(job.jdUid, job));
                    const currJobs = Array.from(jobMap.values());
                    return updateJobsBasedOnFilters(currJobs, filters);
                });
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();

    }, [limit, offset, filters]);

    return {
        loading,
        error,
        jobs,
        filters,
        updateJobFilters: (filter) => { setFilters((prevFilters) => ({ ...prevFilters, ...filter })) }
    };
}

function updateJobsBasedOnFilters(jobs, filters) {
    let filteredJobs = jobs;

    if(filters.experience !== 0){
        filteredJobs = filteredJobs.filter(job => job.minExp >= filters.experience);
    }
    if(filters.role.length > 0){
        filteredJobs = filteredJobs.filter(job => filters.role.some(role => job.jobRole.includes(role)));
    }
    if(filters.remote === 'remote'){
        filteredJobs = filteredJobs.filter(job =>  job.location === 'remote');
    } else if(filters.remote === 'onsite'){
        filteredJobs = filteredJobs.filter(job =>  job.location !== 'remote');
    }

    if(filters.minBasePay !== 0){
        filteredJobs = filteredJobs.filter(job => job.minJdSalary >= filters.minBasePay);
    }

    if(filters.companyName !== ''){
        filteredJobs = filteredJobs.filter(job => job.companyName.toLowerCase().includes(filters.companyName));
    }

    return filteredJobs;
}
