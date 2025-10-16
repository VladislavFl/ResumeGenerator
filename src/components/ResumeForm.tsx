import React from 'react';
import { ResumeData } from '../types/resume';
import { TextField, Box } from '@mui/material';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import LanguageSection from './LanguageSection';

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
            gap={1}
            sx={{ maxWidth: 600, marginBottom: 2 }}
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
                label="Должность"
                name="job"
                value={data.job}
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
                label="Страна"
                name="country"
                value={data.country}
                onChange={onChange}
                fullWidth
            />
            <TextField
                label="Город"
                name="city"
                value={data.city}
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

            <ExperienceSection
                experience={data.experience}
                onChange={(updated) =>
                    onChange({
                        target: {
                            name: 'experience',
                            value: updated
                        }
                    } as any)
                }
            />

            <EducationSection
                education={data.education}
                onChange={(updated) =>
                    onChange({
                        target: {
                            name: 'education',
                            value: updated
                        }
                    } as any)
                }
            />

            <LanguageSection
                language={data.language}
                onChange={(updated) =>
                    onChange({
                        target: {
                            name: 'language',
                            value: updated
                        }
                    } as any)
                }
            />

        </Box>
    );
};

export default ResumeForm;