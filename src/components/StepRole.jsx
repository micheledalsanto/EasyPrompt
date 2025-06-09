const roles = ["Copywriter", "Social Media Strategist", "Data Analyst", "UX Designer", "Teacher"];

function StepRole({ role, setRole, onNext }) {
  return (
    <>
      <label className="block text-sm font-medium mb-2">Ruolo AI</label>
      <input
        list="role-suggestions"
        value={role}
        onChange={e => setRole(e.target.value)}
        className="w-full border rounded-lg p-2 mb-4"
        placeholder="Es. Copywriter"
      />
      <datalist id="role-suggestions">
        {roles.map(r => <option key={r} value={r} />)}
      </datalist>
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
