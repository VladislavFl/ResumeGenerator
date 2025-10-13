import React from 'react';
import { ResumeData } from '../types/resume';
import { Typography, Box, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import dayjs from 'dayjs';

interface Props {
    data: ResumeData;
}

const ResumePreview: React.FC<Props> = ({ data }) => {

    const formatDate = (dateString?: string) => {
        if (!dateString) return '';
        const d = dayjs(dateString);
        return d.isValid() ? d.format('DD.MM.YYYY') : '';
    };

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
                backgroundColor: '#fff',
                boxSizing: 'border-box',
                overflow: 'hidden',
            }}
        >

            {(data.city || data.country) && (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 24
                    }}
                >
                    {data.city}{data.city && data.country ? ', ' : ''}{data.country}
                </Typography>
            )}

            <Typography variant="h6">
                {data.firstName} {data.lastName}
            </Typography>

            <Typography variant="subtitle2">
                {data.job}
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                <EmailIcon fontSize="small" color="action" />
                <Typography variant="body1">{data.email}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                <PhoneIcon fontSize="small" color="action" />
                <Typography variant="body1">{data.phone}</Typography>
            </Stack>

            <Box sx={{ mt: 1 }}>
                <Typography variant="subtitle1" gutterBottom>
                    О себе:
                </Typography>
                <Typography 
                    variant="body2"
                    sx={{ 
                        whiteSpace: 'pre-line',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        wordBreak: 'break-word'
                    }}
                >
                    {data.summary || '—'}
                </Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
                <Typography variant="subtitle1" gutterBottom>
                    Опыт работы:
                </Typography>

                {data.experience.length === 0 ? (
                    <Typography variant="body2">—</Typography>
                ) : (
                    data.experience.map((exp) => (
                        <Box key={exp.id} sx={{ mb: 2 }}>
                            <Typography variant="body1" fontWeight="bold">
                                {exp.jobTitle} — {exp.company}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {exp.location} | {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                            </Typography>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    whiteSpace: 'pre-line',
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}
                            >
                                {exp.description}
                            </Typography>
                        </Box>
                    ))
                )}
            </Box>

        </Box>
    );
};

export default ResumePreview;