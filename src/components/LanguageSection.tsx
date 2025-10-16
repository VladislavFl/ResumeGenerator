import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    Typography,
    IconButton,
    Box,
    Stack,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { LanguageItem } from '../types/resume';


interface Props {
    language: LanguageItem[];
    onChange: (updated: LanguageItem[]) => void;
}

const LanguageSection: React.FC<Props> = ({ language, onChange }) => {
    const handleAdd = () => {
        const newItem: LanguageItem = {
            id: Date.now(),
            language: '',
            level: ''
        };
        onChange([...language, newItem]);
    };

    const handleDelete = (id: number) => {
        onChange(language.filter((item) => item.id !== id));
    };

    const handleChange = (id: number, field: keyof LanguageItem, value: string) => {
        const updated = language.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
        );
        onChange(updated);
    };

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Языки</Typography>
                <IconButton color="primary" onClick={handleAdd}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </Stack>

            {language.map((exp, index) => (
                <Accordion key={exp.id} defaultExpanded sx={{ mb: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{exp.language || `Язык ${index + 1}`}</Typography>
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
                        <Stack direction="row" spacing={2}>
                            <TextField
                                label="Язык"
                                value={exp.language}
                                onChange={(e) => handleChange(exp.id, 'language', e.target.value)}
                                fullWidth
                            />
                            <FormControl fullWidth>
                                <InputLabel id={`level-label-${exp.id}`}>Уровень</InputLabel>
                                <Select
                                    labelId={`level-label-${exp.id}`}
                                    value={exp.level}
                                    label="Уровень"
                                    onChange={(e) => handleChange(exp.id, 'level', e.target.value)}
                                >
                                    <MenuItem value={'A1'}>A1</MenuItem>
                                    <MenuItem value={'A2'}>A2</MenuItem>
                                    <MenuItem value={'B1'}>B1</MenuItem>
                                    <MenuItem value={'B2'}>B2</MenuItem>
                                    <MenuItem value={'C1'}>C1</MenuItem>
                                    <MenuItem value={'C2'}>C2</MenuItem>
                                    <MenuItem value={'Носитель'}>Носитель</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default LanguageSection;
