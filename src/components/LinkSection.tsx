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
import { LinkItem } from '../types/resume';


interface Props {
    link: LinkItem[];
    onChange: (updated: LinkItem[]) => void;
}

const LinkSection: React.FC<Props> = ({ link, onChange }) => {
    const handleAdd = () => {
        const newItem: LinkItem = {
            id: Date.now(),
            label: '',
            link: ''
        };
        onChange([...link, newItem]);
    };

    const handleDelete = (id: number) => {
        onChange(link.filter((item) => item.id !== id));
    };

    const handleChange = (id: number, field: keyof LinkItem, value: string) => {
        const updated = link.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
        );
        onChange(updated);
    };

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Ссылки</Typography>
                <IconButton color="primary" onClick={handleAdd}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </Stack>

            {link.map((exp, index) => (
                <Accordion key={exp.id} defaultExpanded sx={{ mb: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{exp.label || `Ссылка ${index + 1}`}</Typography>
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
                                label="Название"
                                value={exp.label}
                                onChange={(e) => handleChange(exp.id, 'label', e.target.value)}
                                fullWidth
                            />
                            
                            <TextField
                                label="Ссылка"
                                value={exp.link}
                                onChange={(e) => handleChange(exp.id, 'link', e.target.value)}
                                fullWidth
                            />
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default LinkSection;
