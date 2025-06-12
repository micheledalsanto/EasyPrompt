import { useState, useEffect, useRef } from "react";
import { allRoles } from "../utils/rolesList";

function StepRole({ role, setRole, onNext }) {
  const [inputValue, setInputValue] = useState(role || "");
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const matches = inputValue.length > 1
      ? allRoles.filter((r) =>
          r.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];
    setFilteredRoles(matches);
  }, [inputValue]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (selectedRole) => {
    setInputValue(selectedRole);
    setRole(selectedRole);
    setShowSuggestions(false);
  };

  return (
    <>
      <label className="block text-sm font-medium mb-2">Ruolo AI (scrivilo o selezionalo)</label>

      <div className="relative" ref={containerRef}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setRole(e.target.value);
            setShowSuggestions(true);
          }}
          placeholder="Es. Copywriter"
          className="w-full border rounded-lg p-2 mb-1"
          onFocus={() => setShowSuggestions(true)}
        />

        {showSuggestions && filteredRoles.length > 0 && (
          <ul className="absolute z-10 bg-white border w-full mt-1 max-h-48 overflow-y-auto rounded-lg shadow-lg">
            {filteredRoles.map((roleOption) => (
              <li
                key={roleOption}
                onClick={() => handleSelect(roleOption)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
              >
                {roleOption}
              </li>
            ))}
          </ul>
        )}
      </div>

      {inputValue && !allRoles.includes(inputValue) && (
        <p className="text-sm text-yellow-600 italic mt-1">
          ⚠️ Questo ruolo non è nella lista. Non verranno forniti suggerimenti automatici.
        </p>
      )}

      <button
        onClick={() => inputValue.trim() && onNext()}
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Avanti →
      </button>
    </>
  );
}

export default StepRole;
