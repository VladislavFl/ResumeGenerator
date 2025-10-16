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
    education: EducationItem[];
    language: LanguageItem[];
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

export interface EducationItem {
  id: number;
  school: string;
  degree: string;
  faculty: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface LanguageItem {
  id: number;
  language: string;
  level: string;
}