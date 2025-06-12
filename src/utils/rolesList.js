import en from "../i18n/en";
import it from "../i18n/it";

const labels = { en, it };

export function getRolesBySector(lang = "en") {
  const t = labels[lang] || en; // fallback su inglese se lang non è supportata
  return {
    [t.sectorMarketing]: [
      "Copywriter",
      "Content Strategist",
      "Social Media Manager",
      "SEO Specialist",
      "Brand Manager",
      "Digital PR",
      "Media Planner",
      "Email Marketing Specialist",
    ],
    [t.sectorDesign]: [
      "UX Designer",
      "UI Designer",
      "Graphic Designer",
      "Motion Designer",
      "Art Director",
      "Product Designer",
    ],
    [t.sectorEducation]: [
      "Teacher",
      "Instructional Designer",
      "Academic Researcher",
      "Educational Technologist",
      "Tutor",
    ],
    [t.sectorData]: [
      "Data Analyst",
      "Data Scientist",
      "Business Intelligence Analyst",
      "Research Analyst",
      "Statistician",
    ],
    [t.sectorTech]: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "DevOps Engineer",
      "AI Engineer",
      "QA Tester",
    ],
    [t.sectorBusiness]: [
      "Project Manager",
      "Product Manager",
      "Business Analyst",
      "Strategic Consultant",
      "Operations Manager",
    ],
    [t.sectorSales]: [
      "Sales Representative",
      "Customer Support Agent",
      "Account Manager",
      "CRM Specialist",
      "Inside Sales Manager",
    ],
    [t.sectorHR]: [
      "HR Generalist",
      "Recruiter",
      "Talent Acquisition Specialist",
      "Learning & Development Manager",
    ],
  };
}

// Ruoli usati globalmente (in inglese per consistenza interna)
export const allRoles = Object.values(getRolesBySector("en")).flat().sort();
