import React from 'react'
import { Card, CardContent, CardHeader, CardActions, Typography, Button, Box } from '@mui/material';

export default function JobCard({ companyName, jobRole, location, logoUrl, expectedSalary, description, experience }) {
    return (
        <Card sx={{ maxWidth: 345, padding: 2 }}>
            <Box display="flex" alignItems="center" gap={2}>
                <img src={logoUrl} alt={companyName} width="50" height="50" style={{ borderRadius: 10 }} />
                <Box>
                    <Typography variant="h6" sx={{ fontFamily: "Roboto" }}>
                        {companyName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily={""}>
                        {jobRole.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {location.toUpperCase()}
                    </Typography>
                </Box>
            </Box>
            <CardContent>
                <Typography variant="body1" sx={{ fontSize: 15 }} >
                    Estimated Salary : {expectedSalary} ✅
                </Typography>
                <Typography variant="h6" marginTop={2}>
                    About Company
                </Typography>
                <Typography variant="body2" >
                    {description}
                </Typography>
                <Box marginTop={2}>
                    <Typography variant="h6" color="text.primary">
                        {experience !== ''? `Experience: ${experience}` : "Experience: Not Specified"}
                    </Typography>
                </Box>
            </CardContent>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', gap: 1, padding: 2 }}>
                <Button variant="contained" sx={{ width: "100%", paddingBlock: 1 }}>
                    Easy Apply
                </Button>
                <Button variant="contained" sx={{ width: "100%", paddingBlock: 1 }}>
                    Unlock Referral Asks
                </Button>
            </Box>
        </Card>
    );
}
