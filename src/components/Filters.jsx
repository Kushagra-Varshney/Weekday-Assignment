import React from 'react'
import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'

const experience = [
    {value: 0, label: '0'},
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
    { value: 'backend', label: 'Backend Developer' },
];

const remote = [
    {value: 'all', label: 'All'},
    { value: 'remote', label: 'Remote' },
    { value: 'onsite', label: 'On-Site' }
];

const minBasePay = [
    { value: 0, label: '0' },
    { value: 10, label: '10k+' },
    { value: 20, label: '20k+' },
    { value: 30, label: '30k+' },
    { value: 40, label: '40k+' },
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
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                    labelId="role-label"
                    id="role-select"
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
                <InputLabel id="remote-label">Remote</InputLabel>
                <Select
                    labelId="remote-label"
                    id="remote-select"
                    value={filters.remote}
                    onChange={(e) => { updateFilters({ remote: e.target.value }) }}
                    input={<OutlinedInput label="Name" />}
                    label="Remote"
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
            <FormControl fullWidth>
                <InputLabel id="pay-label">Min Base Pay</InputLabel>
                <Select
                    labelId="pay-label"
                    id="pay-select"
                    label="Min Base Pay"
                    value={filters.minBasePay}
                    onChange={(e) => updateFilters({ minBasePay: e.target.value})}
                >
                    {minBasePay.map(({ label, value }) => (
                        <MenuItem
                            key={value}
                            value={value}
                        >
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField fullWidth id="company-input" label="Company Name" variant="outlined" onChange={(e) => updateFilters({companyName: e.target.value.toLowerCase()})} />
        </Box>
    )
}
