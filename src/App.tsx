import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { ResumeData } from './types/resume';
import { Container, Typography, Grid, Box } from '@mui/material';
import PagedResumePreview from './components/PagedResumePreview';

const App: React.FC = () => {
  const [formData, setFormData] = useState<ResumeData>({
    firstName: '',
    lastName: '',
    job: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    summary: '',
    experience: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Box sx={{ backgroundColor: '#f4f4f4', minHeight: '100vh', py: 2, overflowX: 'hidden' }}>
      <Container maxWidth={false} sx={{ maxWidth: '1600px', px: 2 }}>

        <Grid container spacing={4} alignItems="center" sx={{ mb: 2 }}>
          <Grid size={6}>
            <Typography variant="h5" component="h1">
              Генератор резюме
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              variant="h5"
              sx={{ textAlign: { xs: 'left', md: 'right' } }}
            >
              Предпросмотр резюме
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">

          <Grid size={5}>
            <Box
              sx={{
                backgroundColor: '#fff',
                p: 3,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <ResumeForm data={formData} onChange={handleChange} />
            </Box>
          </Grid>

          <Grid size={7}>
            <PagedResumePreview>
              <ResumePreview data={formData} />
            </PagedResumePreview>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default App;
