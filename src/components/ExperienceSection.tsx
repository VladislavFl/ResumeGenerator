import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Typography,
  IconButton,
  Box,
  Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { ExperienceItem } from '../types/resume';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


interface Props {
  experience: ExperienceItem[];
  onChange: (updated: ExperienceItem[]) => void;
}

const ExperienceSection: React.FC<Props> = ({ experience, onChange }) => {
  const handleAdd = () => {
    const newItem: ExperienceItem = {
      id: Date.now(),
      jobTitle: '',
      company: '',
      location: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    onChange([...experience, newItem]);
  };

  const handleDelete = (id: number) => {
    onChange(experience.filter((item) => item.id !== id));
  };

  const handleChange = (id: number, field: keyof ExperienceItem, value: string) => {
    const updated = experience.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onChange(updated);
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Опыт работы</Typography>
        <IconButton color="primary" onClick={handleAdd}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Stack>

      {experience.map((exp, index) => (
        <Accordion key={exp.id} defaultExpanded sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{exp.jobTitle || `Опыт работы ${index + 1}`}</Typography>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(exp.id);
              }}
              size="small"
              color="error"
              sx={{ ml: 2 }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </AccordionSummary>

          <AccordionDetails>
            <Stack spacing={2}>
              <TextField
                label="Проект"
                value={exp.jobTitle}
                onChange={(e) => handleChange(exp.id, 'jobTitle', e.target.value)}
                fullWidth
              />
              <TextField
                label="Название компании"
                value={exp.company}
                onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                fullWidth
              />
              <TextField
                label="Местоположение"
                value={exp.location}
                onChange={(e) => handleChange(exp.id, 'location', e.target.value)}
                fullWidth
              />
              <TextField
                label="Должность"
                value={exp.position}
                onChange={(e) => handleChange(exp.id, 'position', e.target.value)}
                fullWidth
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack direction="row" spacing={2}>
                  <DatePicker
                    label="Дата начала"
                    value={exp.startDate ? dayjs(exp.startDate) : null}
                    onChange={(newValue) => handleChange(exp.id, 'startDate', newValue?.toString() || '')}
                  />
                  <DatePicker
                    label="Дата окончания"
                    value={exp.endDate ? dayjs(exp.endDate) : null}
                    onChange={(newValue) => handleChange(exp.id, 'endDate', newValue?.toString() || '')}
                  />
                </Stack>
              </LocalizationProvider>
              <TextField
                label="Описание"
                value={exp.description}
                onChange={(e) => handleChange(exp.id, 'description', e.target.value)}
                multiline
                rows={3}
                fullWidth
              />
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default ExperienceSection;
