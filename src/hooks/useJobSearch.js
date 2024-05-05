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
                setJobs(data.jdList);
                console.log(data.jdList);
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
