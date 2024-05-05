import React from 'react'
import { Card, CardContent, CardHeader, CardActions, Typography, Button, Box } from '@mui/material';

export default function JobCard({ companyName, jobRole, location, logoUrl, expectedSalary, description, experience }) {
    return (
        <Card sx={{ maxWidth: 345 , padding: 2}}>
            <Box display="flex" alignItems="center" gap={2}>
                <img src={logoUrl} alt={companyName} width="50" height="50" style={{borderRadius: 10}} />
                <Box>
                    <Typography variant="h6">
                        {companyName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {jobRole.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {location.toUpperCase()}
                    </Typography>
                </Box>
            </Box>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {expectedSalary}
                </Typography>
                <Typography variant="body2">
                    **About Company:**
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    FamPay is building India's first neo-bank exclusively teens. FamPay helps teens make their own online and offline payments through UPI, FamPay App and FamCard. Our aim is to make banking cool for teens and to help them learn the value of money, savings and spending wisely. We are on a mission to raise a new, financially aware generation, and drive 250 Million+ Indian teenagers to kickstart their financial joumey super
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" color="primary">
                    View job
                </Button>
                <Button variant="text" size="small">
                    Easy Apply
                </Button>
                <Button variant="text" size="small">
                    Unlock referral asks
                </Button>
            </CardActions>
        </Card>
    );
}
