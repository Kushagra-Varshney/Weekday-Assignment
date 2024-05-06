import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { useState } from 'react'

const experience = [
    {value: 1, label: '1'},
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
];

const roles = [
    { value: 'frontend', label: 'Frontend Developer' },
    { value: 'android', label: 'Andorid Developer' },
    { value: 'ios', label: 'IOS Developer' },
    { value: 'backend', label: 'Backend' },
];

const remote = [
    {value: 'all', label: 'All'},
    { value: 'remote', label: 'Remote' },
    { value: 'onsite', label: 'On-Site' }
];

export default function Filters({ filters, updateFilters }) {

    return (
        <Box sx={{ minWidth: 120 }} display={'flex'} gap={2} my={3} padding={3}>
            <FormControl fullWidth>
                <InputLabel id="experience-label">Experience</InputLabel>
                <Select
                    labelId="experience-label"
                    id="experience-select"
                    label="Experience"
                    value={filters.experience}
                    onChange={(e) => updateFilters({ experience: e.target.value })}
                >
                    {experience.map(({ label, value }) => (
                        <MenuItem
                            key={value}
                            value={value}
                        >
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-name-label">Role</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={filters.role}
                    onChange={(e) => { updateFilters({ role: e.target.value }) }}
                    input={<OutlinedInput label="Name" />}
                >
                    {roles.map(({ label, value }) => (
                        <MenuItem
                            key={value}
                            value={value}
                        >
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-name-label">Remote</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={filters.remote}
                    onChange={(e) => { updateFilters({ remote: e.target.value }) }}
                    input={<OutlinedInput label="Name" />}
                >
                    {remote.map(({ label, value }) => (
                        <MenuItem
                            key={value}
                            value={value}
                        >
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}
