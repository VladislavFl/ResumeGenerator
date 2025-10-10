export interface ResumeData {
    firstName: string;
    lastName: string;
    job: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    summary: string;
    experience: ExperienceItem[];
}

export interface ExperienceItem {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}