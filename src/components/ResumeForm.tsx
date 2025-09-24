import React from 'react';
import { ResumeData } from '../types/resume';
import { TextField, Box } from '@mui/material';

interface Props {
    data: ResumeData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ResumeForm: React.FC<Props> = ({ data, onChange }) => {
    return (
        <Box
            component="form"
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{ maxWidth:600, marginBottom: 4 }}
        >
            <TextField
                label="Имя"
                name="firstName"
                value={data.firstName}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Фамилия"
                name="lastName"
                value={data.lastName}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                value={data.email}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Телефон"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="О себе"
                name="summary"
                value={data.summary}
                onChange={onChange}
                multiline
                rows={4}
                fullWidth
            />
        </Box>
    );
};

export default ResumeForm;