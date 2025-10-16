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
import { EducationItem } from '../types/resume';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


interface Props {
  education: EducationItem[];
  onChange: (updated: EducationItem[]) => void;
}

const EducationSection: React.FC<Props> = ({ education, onChange }) => {
  const handleAdd = () => {
    const newItem: EducationItem = {
      id: Date.now(),
      school: '',
      degree: '',
      faculty: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    onChange([...education, newItem]);
  };

  const handleDelete = (id: number) => {
    onChange(education.filter((item) => item.id !== id));
  };

  const handleChange = (id: number, field: keyof EducationItem, value: string) => {
    const updated = education.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onChange(updated);
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Образование</Typography>
        <IconButton color="primary" onClick={handleAdd}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Stack>

      {education.map((exp, index) => (
        <Accordion key={exp.id} defaultExpanded sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{exp.school || `Образование ${index + 1}`}</Typography>
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
                label="Учебное учреждение"
                value={exp.school}
                onChange={(e) => handleChange(exp.id, 'school', e.target.value)}
                fullWidth
              />
              <TextField
                label="Научная степень"
                value={exp.degree}
                onChange={(e) => handleChange(exp.id, 'degree', e.target.value)}
                fullWidth
              />
              <TextField
                label="Факультет"
                value={exp.faculty}
                onChange={(e) => handleChange(exp.id, 'faculty', e.target.value)}
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

export default EducationSection;
