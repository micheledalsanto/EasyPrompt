// utils/rolesList.js

export const rolesBySector = {
    "Marketing & Comunicazione": [
      "Copywriter",
      "Content Strategist",
      "Social Media Manager",
      "SEO Specialist",
      "Brand Manager",
      "Digital PR",
      "Media Planner",
      "Email Marketing Specialist",
    ],
    "Design & Creatività": [
      "UX Designer",
      "UI Designer",
      "Graphic Designer",
      "Motion Designer",
      "Art Director",
      "Product Designer",
    ],
    "Educazione & Formazione": [
      "Teacher",
      "Instructional Designer",
      "Academic Researcher",
      "Educational Technologist",
      "Tutor",
    ],
    "Analisi & Dati": [
      "Data Analyst",
      "Data Scientist",
      "Business Intelligence Analyst",
      "Research Analyst",
      "Statistician",
    ],
    "Sviluppo & Tecnologia": [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "DevOps Engineer",
      "AI Engineer",
      "QA Tester",
    ],
    "Business & Strategia": [
      "Project Manager",
      "Product Manager",
      "Business Analyst",
      "Strategic Consultant",
      "Operations Manager",
    ],
    "Vendite & Customer": [
      "Sales Representative",
      "Customer Support Agent",
      "Account Manager",
      "CRM Specialist",
      "Inside Sales Manager",
    ],
    "HR & Risorse Umane": [
      "HR Generalist",
      "Recruiter",
      "Talent Acquisition Specialist",
      "Learning & Development Manager",
    ]
  };
  
  // Ruolo flat unico per autocompletamento
  export const allRoles = Object.values(rolesBySector).flat().sort();
  