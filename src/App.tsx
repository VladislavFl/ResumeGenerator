import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { ResumeData } from './types/resume';
import { Container, Typography, Box  } from '@mui/material';

const App: React.FC = () => {
  const [formData, setFormData] = useState<ResumeData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    summary: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="lg" disableGutters sx={{ paddingTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Генератор резюме
        </Typography>

        <Box 
          display="flex" 
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={4}
          alignItems="flex-start" 
          sx={{ overflowX: 'auto' }}
        >
          <Box sx={{ flexShrink: 0, minWidth: '300px', maxWidth: '400px', width: '100%' }}>
            <ResumeForm data={formData} onChange={handleChange} />
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <ResumePreview data={formData} />
          </Box>
        </Box>
    </Container>
  );
};

export default App;
