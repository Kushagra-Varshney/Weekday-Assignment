import React, { useState, useEffect } from 'react'

export default function useJobSearch(fetchFn, limit, offset) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true);
                const data = await fetchFn(limit, offset);
                console.log(data.jdList);
                setJobs(prevJobs => {
                    const jobMap = new Map();
                    console.log("PrevJobs->",prevJobs);
                    prevJobs.forEach(job => jobMap.set(job.jdUid, job));
                    data.jdList.forEach(job => jobMap.set(job.jdUid, job));
                    console.log(jobMap.values());
                    return Array.from(jobMap.values());
                });
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
        
    }, [limit, offset]);

    return {
        loading,
        error,
        jobs
    };
}
