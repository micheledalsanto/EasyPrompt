const rolesBySector = {
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
  
  function StepRole({ role, setRole, onNext }) {
    return (
      <>
        <label className="block text-sm font-medium mb-2">Seleziona il ruolo AI (in inglese)</label>
        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4"
        >
          <option value="">— Seleziona un ruolo —</option>
          {Object.entries(rolesBySector).map(([sector, roles]) => (
            <optgroup key={sector} label={sector}>
              {roles.map(r => (
                <option key={`${sector}-${r}`} value={r}>{r}</option>
              ))}
            </optgroup>
          ))}
        </select>
  
        <button
          onClick={() => role.trim() && onNext()}
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Avanti →
        </button>
      </>
    );
  }
  
  export default StepRole;
  