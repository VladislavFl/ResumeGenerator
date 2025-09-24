import React from 'react';
import { ResumeData } from '../types/resume';
import {
    Paper,
    Typography,
    Box,
    Stack
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

interface Props {
    data: ResumeData;
}

const ResumePreview: React.FC<Props> = ({ data }) => {
    return (
        <Paper 
            elevation={3} 
            sx={{ 
                width: '794px',
                height: '1123px',
                padding: 4,
                backgroundColor: '#fff',
                boxShadow: '0 0 10px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                margin: '0 auto'
             }}>
            <Typography variant="h5" gutterBottom>
                Предпросмотр резюме
            </Typography>

            <Typography variant="h6">
                {data.firstName} {data.lastName}
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 1 }}>
                <EmailIcon fontSize="small" color="action" />
                <Typography variant="body1">{data.email}</Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 1 }}>
                <PhoneIcon fontSize="small" color="action" />
                <Typography variant="body1">{data.phone}</Typography>
            </Stack>

            <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                    О себе:
                </Typography>
                <Typography variant="body2">
                    {data.summary || '—'}
                </Typography>
            </Box>
        </Paper>
    );
};

export default ResumePreview;